import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const outDir = path.join(root, 'out')
const destination = path.join(root, 'public', 'translations', 'en.json')
const checkpoint = path.join(root, '.translation-cache-en.json')

const decode = (text) => text
  .replace(/&nbsp;|&#xA0;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))

const normalize = (text) => decode(text).replace(/\s+/g, ' ').trim()

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await filesIn(target))
    else if (entry.name.endsWith('.html')) files.push(target)
  }
  return files
}

function visibleStrings(html) {
  const body = html.match(/<body[\s\S]*?<\/body>/i)?.[0] ?? html
  const clean = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
  return clean.split(/<[^>]+>/g).map(normalize).filter((value) =>
    value.length > 1 && value.length < 12000 && /[A-Za-zÀ-ÿ]/.test(value),
  )
}

function makeBatches(strings) {
  const batches = []
  let batch = []
  let size = 0
  for (const value of strings) {
    if (batch.length && (batch.length >= 28 || size + value.length > 4800)) {
      batches.push(batch)
      batch = []
      size = 0
    }
    batch.push(value)
    size += value.length
  }
  if (batch.length) batches.push(batch)
  return batches
}

async function translateBatch(batch, attempt = 0) {
  const input = batch.map((value, index) => `<<<LF${index}>>>${value}`).join('\n')
  const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=it&tl=en&q=${encodeURIComponent(input)}`
  const response = await fetch(url)
  if (!response.ok) {
    if ((response.status === 429 || response.status >= 500) && attempt < 6) {
      await new Promise((resolve) => setTimeout(resolve, 1500 * 2 ** attempt))
      return translateBatch(batch, attempt + 1)
    }
    throw new Error(`Translation request failed: ${response.status}`)
  }
  const payload = await response.json()
  const output = Array.isArray(payload) ? payload.join('') : String(payload)
  const translated = new Array(batch.length)
  const marker = /<<<LF(\d+)>>>/g
  const matches = [...output.matchAll(marker)]
  for (let i = 0; i < matches.length; i++) {
    const index = Number(matches[i][1])
    const start = (matches[i].index ?? 0) + matches[i][0].length
    const end = matches[i + 1]?.index ?? output.length
    translated[index] = output.slice(start, end).replace(/^\s+|\s+$/g, '')
  }
  if (translated.some((value) => !value)) throw new Error('Translation markers were not preserved')
  return translated
}

const files = await filesIn(outDir)
const strings = [...new Set((await Promise.all(files.map((file) => readFile(file, 'utf8')))).flatMap(visibleStrings))]
  .sort((a, b) => a.length - b.length || a.localeCompare(b, 'it'))

let dictionary = {}
try { dictionary = JSON.parse(await readFile(checkpoint, 'utf8')) } catch {}
const pending = strings.filter((value) => !dictionary[value])
const batches = makeBatches(pending)

console.log(`${strings.length} strings; ${pending.length} to translate; ${batches.length} batches`)
for (let i = 0; i < batches.length; i++) {
  const translated = await translateBatch(batches[i])
  batches[i].forEach((source, index) => { dictionary[source] = translated[index] })
  if (i % 5 === 0 || i === batches.length - 1) {
    await writeFile(checkpoint, JSON.stringify(dictionary, null, 2), 'utf8')
    console.log(`Translated ${Math.min(i + 1, batches.length)}/${batches.length} batches`)
  }
  await new Promise((resolve) => setTimeout(resolve, 180))
}

await mkdir(path.dirname(destination), { recursive: true })
await writeFile(destination, JSON.stringify(dictionary, null, 2), 'utf8')
console.log(`Saved ${Object.keys(dictionary).length} translations to ${destination}`)
