'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

type Language = 'it' | 'en'
type Dictionary = Record<string, string>

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
}>({ language: 'it', setLanguage: () => undefined })

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim()

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, updateLanguage] = useState<Language>('it')
  const dictionary = useRef<Dictionary>({})
  const originals = useRef(new WeakMap<Text, string>())
  const attributeOriginals = useRef(new WeakMap<Element, Map<string, string>>())

  const translateTree = useCallback((root: ParentNode, target: Language) => {
    const blocked = 'script, style, noscript, code, pre, [data-no-translate]'
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    let node = walker.nextNode() as Text | null

    while (node) {
      const parent = node.parentElement
      if (parent && !parent.closest(blocked)) {
        if (!originals.current.has(node)) originals.current.set(node, node.nodeValue ?? '')
        const original = originals.current.get(node) ?? ''
        const key = normalize(original)
        const translated = dictionary.current[key]
        if (target === 'en' && translated) {
          const leading = original.match(/^\s*/)?.[0] ?? ''
          const trailing = original.match(/\s*$/)?.[0] ?? ''
          node.nodeValue = `${leading}${translated}${trailing}`
        } else if (target === 'it') {
          node.nodeValue = original
        }
      }
      node = walker.nextNode() as Text | null
    }

    root.querySelectorAll?.('[placeholder], [title], [aria-label]').forEach((element) => {
      if (element.closest('[data-no-translate]')) return
      let saved = attributeOriginals.current.get(element)
      if (!saved) {
        saved = new Map()
        attributeOriginals.current.set(element, saved)
      }
      for (const attribute of ['placeholder', 'title', 'aria-label']) {
        const current = element.getAttribute(attribute)
        if (current !== null && !saved.has(attribute)) saved.set(attribute, current)
        const original = saved.get(attribute)
        if (!original) continue
        const translated = dictionary.current[normalize(original)]
        element.setAttribute(attribute, target === 'en' && translated ? translated : original)
      }
    })
  }, [])

  const setLanguage = useCallback((next: Language) => {
    localStorage.setItem('lf-language', next)
    const url = new URL(window.location.href)
    next === 'en' ? url.searchParams.set('lang', 'en') : url.searchParams.delete('lang')
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    updateLanguage(next)
  }, [])

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang')
    updateLanguage(requested === 'en' || localStorage.getItem('lf-language') === 'en' ? 'en' : 'it')
  }, [])

  useEffect(() => {
    let cancelled = false
    let observer: MutationObserver | undefined

    const apply = async () => {
      if (language === 'en' && Object.keys(dictionary.current).length === 0) {
        const response = await fetch('/translations/en.json')
        dictionary.current = await response.json()
      }
      if (cancelled) return
      document.documentElement.lang = language
      translateTree(document.body, language)
      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          mutation.addedNodes.forEach((added) => {
            if (added.nodeType === Node.ELEMENT_NODE) translateTree(added as Element, language)
            if (added.nodeType === Node.TEXT_NODE && added.parentNode) translateTree(added.parentNode, language)
          })
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
    }

    void apply()
    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [language, translateTree])

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
