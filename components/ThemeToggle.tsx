'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { THEME_STORAGE_KEY } from '@/lib/theme'

// Choosing the theme the system already uses clears the override, so the site
// goes back to following the system.
type Theme = 'light' | 'dark'

const systemQuery = '(prefers-color-scheme: dark)'

function systemTheme(): Theme {
  return window.matchMedia(systemQuery).matches ? 'dark' : 'light'
}

function readOverride(): Theme | null {
  const value = document.documentElement.getAttribute('data-theme')
  return value === 'light' || value === 'dark' ? value : null
}

function applyOverride(theme: Theme | null) {
  const root = document.documentElement
  try {
    if (theme) {
      root.setAttribute('data-theme', theme)
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } else {
      root.removeAttribute('data-theme')
      localStorage.removeItem(THEME_STORAGE_KEY)
    }
  } catch {
    // Storage can be unavailable (private mode); the attribute still applies for this visit.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
}

const THEME_CHANGE_EVENT = 'tnsa-theme-change'

/** Set the theme from elsewhere (e.g. the search palette). 'system' clears the override. */
export function setThemePreference(preference: Theme | 'system') {
  applyOverride(preference === 'system' || preference === systemTheme() ? null : preference)
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const media = window.matchMedia(systemQuery)
    const sync = () => setTheme(readOverride() ?? systemTheme())
    sync()
    media.addEventListener('change', sync)
    window.addEventListener(THEME_CHANGE_EVENT, sync)
    return () => {
      media.removeEventListener('change', sync)
      window.removeEventListener(THEME_CHANGE_EVENT, sync)
    }
  }, [])

  const toggle = () => {
    const next: Theme = (readOverride() ?? systemTheme()) === 'dark' ? 'light' : 'dark'
    applyOverride(next === systemTheme() ? null : next)
    setTheme(next)
  }

  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-gray-100 ${className}`}
    >
      {/* Render nothing until mounted so the server and client markup agree */}
      {theme === null ? null : isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
