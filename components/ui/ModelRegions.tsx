'use client'

import { usePathname } from 'next/navigation'
import { regions, regionsForModel } from '@/content/regions'

/**
 * TNSA regions serving a model, with flags. Pass `slug`, or leave it out on a
 * /models/<slug> page and it is read from the URL.
 */
export function ModelRegions({ slug, className = '' }: { slug?: string; className?: string }) {
  const pathname = usePathname()
  const modelSlug = slug ?? pathname?.split('/models/')[1]?.split('/')[0] ?? ''
  const available = new Set(regionsForModel(modelSlug))
  const isGlobal = available.size === regions.length

  return (
    <div className={className}>
      <p className="text-sm leading-6 text-gray-500">
        {isGlobal ? 'Served from every TNSA region.' : 'Served from TNSA’s Indian regions.'}
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {regions.map((region) => {
          const isAvailable = available.has(region.id)
          return (
            <li
              key={region.id}
              className={`flex items-center gap-3 rounded-[20px] border p-4 ${isAvailable ? 'border-gray-200' : 'border-dashed border-gray-200 opacity-55'}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- tiny local flag SVG */}
              <img src={region.flag} alt={`${region.country} flag`} width={28} height={21} className={`h-[21px] w-7 shrink-0 rounded-[3px] object-cover ring-1 ring-black/10 ${isAvailable ? '' : 'grayscale'}`} />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-5 text-black">{region.name}</p>
                <p className="text-xs text-gray-500">{isAvailable ? <span className="font-mono">{region.id}</span> : 'Not available'}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
