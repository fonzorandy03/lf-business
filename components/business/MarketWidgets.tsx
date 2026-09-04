'use client'

import { useEffect, useRef } from 'react'
import { Reveal } from '@/components/Reveal'

const oilTicker = {
  symbols: [
    { proName: 'TVC:UKOIL', title: 'Brent' },
    { proName: 'TVC:USOIL', title: 'WTI' },
  ],
  showSymbolLogo: true, colorTheme: 'dark', isTransparent: true, displayMode: 'adaptive', locale: 'it',
}

const oilChart = {
  symbols: [['Petrolio Brent', 'TVC:UKOIL|1D'], ['Petrolio WTI', 'TVC:USOIL|1D']],
  chartOnly: false, width: '100%', height: '100%', autosize: true, locale: 'it',
  colorTheme: 'dark', showVolume: true, showMA: false, hideDateRanges: false,
  hideMarketStatus: false, hideSymbolLogo: false, scalePosition: 'right', scaleMode: 'Normal',
  fontFamily: 'inherit', fontSize: '11', noTimeScale: false, valuesTracking: '1',
  changeMode: 'price-and-percent', chartType: 'area', lineWidth: 2, lineType: 0,
  dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
}

function TradingViewWidget({ script, config }: { script: string; config: Record<string, unknown> }) {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current || container.current.querySelector('script')) return
    container.current.innerHTML = '<div class="tradingview-widget-container__widget h-full"></div>'
    const embed = document.createElement('script')
    embed.src = script
    embed.type = 'text/javascript'
    embed.async = true
    embed.innerHTML = JSON.stringify(config)
    container.current.appendChild(embed)
  }, [script, config])
  return <div ref={container} className="tradingview-widget-container h-full w-full" />
}

export function MarketWidgets() {
  return (
    <section className="market-dashboard relative overflow-hidden bg-[#0d1014] text-ivory">
      <div className="market-oil-glow pointer-events-none absolute -right-48 top-36 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
      <div className="relative border-y border-ivory/10 bg-[#11151a]/90 py-2 backdrop-blur">
        <div className="mx-auto min-h-[74px] max-w-[1600px]">
          <TradingViewWidget script="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" config={oilTicker} />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" /> Oil market monitor
            </span>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[0.98] text-ivory sm:text-5xl lg:text-7xl">Il mercato del petrolio, in movimento.</h2>
          </div>
          <div className="border-l border-gold/40 pl-6 lg:col-span-4">
            <p className="font-serif text-xl leading-snug text-ivory/85">Brent e WTI in un unico osservatorio interattivo.</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/50">Confronta andamento, variazioni e intervalli temporali direttamente dal grafico.</p>
          </div>
        </Reveal>

        <Reveal className="market-widget-frame mt-12 overflow-hidden border border-ivory/15 bg-[#11151a] p-2" delay={100}>
          <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="market-live-dot h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-ivory/65">Osservatorio petrolio</span>
            </div>
            <span className="text-[0.62rem] uppercase tracking-[0.2em] text-ivory/35">Brent · WTI</span>
          </div>
          <div className="h-[540px] sm:h-[620px]">
            <TradingViewWidget script="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" config={oilChart} />
          </div>
        </Reveal>

        <div className="mt-5 flex flex-col gap-2 border-t border-ivory/10 pt-5 text-xs leading-relaxed text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Dati forniti da TradingView. Le quotazioni possono essere in tempo reale o differite secondo il mercato di riferimento.</p>
          <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-gold/80 transition-colors hover:text-gold">Powered by TradingView ↗</a>
        </div>
      </div>
    </section>
  )
}
