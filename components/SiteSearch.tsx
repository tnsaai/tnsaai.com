'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Building2,
  ChevronLeft,
  ChevronRight,
  CornerDownLeft,
  FlaskConical,
  Monitor,
  Moon,
  Newspaper,
  Search,
  Sparkles,
  Sun,
  SunMoon,
  TerminalSquare,
} from 'lucide-react'
import { setThemePreference } from '@/components/ThemeToggle'

export type SearchItem = {
  name: string
  href: string
  category: string
  date?: string
  description?: string
  image?: string
}

type Entry =
  | { kind: 'page'; item: SearchItem }
  | { kind: 'action'; title: string; icon: LucideIcon; run?: () => void; submenu?: 'theme' }

type Group = { label: string; entries: Entry[] }

// Result groups, in display order, keyed off each item's category.
const groupOrder: { label: string; match: RegExp; icon: LucideIcon }[] = [
  { label: 'Models', match: /^models?$/i, icon: Boxes },
  { label: 'Research', match: /research/i, icon: FlaskConical },
  { label: 'Products', match: /product/i, icon: Sparkles },
  { label: 'Developers', match: /developer/i, icon: TerminalSquare },
  { label: 'News', match: /news/i, icon: Newspaper },
  { label: 'Company', match: /company/i, icon: Building2 },
]

function groupFor(category: string) {
  return groupOrder.find(({ match }) => match.test(category)) ?? { label: 'More', match: /.*/, icon: Sparkles }
}

function matches(item: SearchItem, terms: string[]) {
  const haystack = `${item.name} ${item.category} ${item.description ?? ''}`.toLowerCase()
  return terms.every((term) => haystack.includes(term))
}

function Thumbnail({ item }: { item: SearchItem }) {
  if (item.image) {
    return (
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image src={item.image} alt="" fill unoptimized={item.image.endsWith('.svg')} className="object-cover" sizes="36px" />
      </span>
    )
  }
  const Icon = groupFor(item.category).icon
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-500">
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </span>
  )
}

/** Search in the platform.tnsaai.com style: a button that opens a command palette, with image results. */
export function SiteSearch({ items }: { items: SearchItem[] }) {
  const router = useRouter()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState<'root' | 'theme'>('root')
  const [selected, setSelected] = useState(0)

  const groups = useMemo<Group[]>(() => {
    if (page === 'theme') {
      return [
        {
          label: 'Theme',
          entries: [
            { kind: 'action', title: 'System', icon: Monitor, run: () => setThemePreference('system') },
            { kind: 'action', title: 'Light', icon: Sun, run: () => setThemePreference('light') },
            { kind: 'action', title: 'Dark', icon: Moon, run: () => setThemePreference('dark') },
          ],
        },
      ]
    }

    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    const themeAction: Entry = { kind: 'action', title: 'Theme', icon: SunMoon, submenu: 'theme' }

    if (!terms.length) {
      return [
        { label: 'Suggested', entries: items.slice(0, 6).map((item) => ({ kind: 'page', item }) as Entry) },
        { label: 'Settings', entries: [themeAction] },
      ]
    }

    const found = items.filter((item) => matches(item, terms))
    const grouped = groupOrder
      .map(({ label }) => ({
        label,
        entries: found.filter((item) => groupFor(item.category).label === label).map((item) => ({ kind: 'page', item }) as Entry),
      }))
      .filter((group) => group.entries.length > 0)
    if (['theme', 'dark', 'light'].some((word) => word.startsWith(terms[0]) && terms[0].length >= 2)) {
      grouped.push({ label: 'Settings', entries: [themeAction] })
    }
    return grouped
  }, [items, query, page])

  const flat = groups.flatMap((group) => group.entries)

  // Ctrl/Cmd+K toggles the palette. Two header copies exist (desktop and phone),
  // so only the one whose trigger is visible responds.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        if (!triggerRef.current?.offsetParent) return
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setPage('root')
      return
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => setSelected(0), [query, page])

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${selected}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  const run = (entry?: Entry) => {
    if (!entry) return
    if (entry.kind === 'action' && entry.submenu) {
      setPage(entry.submenu)
      setQuery('')
      return
    }
    setOpen(false)
    if (entry.kind === 'page') router.push(entry.item.href)
    else entry.run?.()
  }

  let index = -1

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex h-8 items-center gap-2 rounded-full text-[12px] text-gray-500 transition-colors hover:text-black max-md:w-8 max-md:justify-center max-md:hover:bg-gray-100 md:bg-gray-100 md:pl-3 md:pr-1.5 md:hover:bg-gray-200"
      >
        <Search className="h-4 w-4 text-black md:text-gray-500" />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden rounded-md bg-white px-1.5 py-0.5 font-sans text-[10px] font-medium text-gray-500 md:inline">Ctrl K</kbd>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100]" role="presentation">
          <div className="absolute inset-0 bg-fixed-black/40 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="absolute inset-x-3 top-3 mx-auto flex max-h-[calc(100dvh-24px)] max-w-[720px] flex-col overflow-hidden rounded-2xl bg-white text-black shadow-2xl md:top-[60px] md:max-h-[min(640px,calc(100dvh-120px))]"
          >
            <div className="flex items-center gap-2 px-5">
              {page !== 'root' ? (
                <button type="button" onClick={() => setPage('root')} aria-label="Back" className="-ml-1.5 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-black">
                  <ChevronLeft className="h-4 w-4" />
                </button>
              ) : (
                <Search className="h-4 w-4 shrink-0 text-gray-500" />
              )}
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault()
                    setSelected((i) => Math.min(i + 1, flat.length - 1))
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault()
                    setSelected((i) => Math.max(i - 1, 0))
                  } else if (event.key === 'Enter') {
                    event.preventDefault()
                    run(flat[selected])
                  } else if (event.key === 'Escape') {
                    setOpen(false)
                  } else if (event.key === 'Backspace' && !query && page !== 'root') {
                    setPage('root')
                  }
                }}
                placeholder={page === 'theme' ? 'Choose a theme…' : 'Search models, research, products…'}
                aria-label="Search TNSA"
                className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-gray-500"
              />
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-2 pb-2">
              {flat.length === 0 ? (
                <p className="px-3 py-10 text-center text-sm text-gray-500">No results for “{query}”</p>
              ) : (
                groups.map((group) => (
                  <div key={group.label} className="pt-1">
                    <p className="px-3 pb-1.5 pt-3 text-[12px] text-gray-500">{group.label}</p>
                    {group.entries.map((entry) => {
                      index += 1
                      const i = index
                      const isSelected = i === selected
                      return (
                        <button
                          key={`${group.label}-${entry.kind === 'page' ? entry.item.href : entry.title}`}
                          type="button"
                          data-index={i}
                          onMouseMove={() => setSelected(i)}
                          onClick={() => run(entry)}
                          className={`flex w-full items-center gap-3 rounded-lg px-2 text-left ${entry.kind === 'page' ? 'py-1.5' : 'h-9 px-3'} ${isSelected ? 'bg-gray-100' : ''}`}
                        >
                          {entry.kind === 'page' ? (
                            <>
                              <Thumbnail item={entry.item} />
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-[14px] font-medium">{entry.item.name}</span>
                                <span className="block truncate text-xs text-gray-500">{entry.item.category}</span>
                              </span>
                            </>
                          ) : (
                            <>
                              <entry.icon className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={1.75} />
                              <span className="flex-1 truncate text-[14px]">{entry.title}</span>
                              {entry.submenu ? <ChevronRight className="h-4 w-4 text-gray-500" /> : null}
                            </>
                          )}
                          {isSelected && !(entry.kind === 'action' && entry.submenu) ? <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-gray-400" /> : null}
                        </button>
                      )
                    })}
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      ) : null}
    </>
  )
}
