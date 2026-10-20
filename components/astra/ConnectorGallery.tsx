'use client'

import { useState } from 'react'
import { connectorCategories, connectors } from '@/content/astra'

export function ConnectorGallery() {
  const [category, setCategory] = useState<(typeof connectorCategories)[number]>('All')
  const visible = category === 'All' ? connectors : connectors.filter((c) => c.category === category)

  return (
    <div>
      <div role="tablist" aria-label="Connector category" className="inline-flex max-w-full flex-wrap gap-0.5 rounded-lg bg-gray-100 p-0.5 text-sm">
        {connectorCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={c === category}
            onClick={() => setCategory(c)}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${c === category ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((connector) => (
          <li key={connector.name} className="flex gap-3 rounded-xl border border-gray-200 p-4 transition-colors hover:bg-gray-50">
            {/* Fixed white tile so dark brand marks (GitHub, Notion, X) stay visible in dark mode */}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-fixed-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- small local SVG logos */}
              <img src={`/astra/connectors/${connector.logo}.svg`} alt={`${connector.name} logo`} width={24} height={24} loading="lazy" className="h-6 w-6 object-contain" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{connector.name}</p>
              <p className="mt-0.5 text-[11px] text-gray-400">{connector.category}</p>
              <p className="mt-2 text-xs leading-5 text-gray-500">{connector.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
