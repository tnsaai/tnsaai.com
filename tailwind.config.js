/** @type {import('tailwindcss').Config} */

// Colors resolve to CSS variables (see app/globals.css) so every page follows the
// platform.tnsaai.com palette in both light and dark themes.
const channel = (name) => `rgb(var(--${name}) / <alpha-value>)`
const neutralScale = Object.fromEntries(
  ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((step) => [step, channel(`g-${step}`)])
)

module.exports = {
  // dark: follows the system, unless html[data-theme] overrides it (see components/ThemeToggle.tsx)
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { :root:not([data-theme=light]) & }',
      ':root[data-theme=dark] &',
    ],
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-openai-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        white: channel('c-white'),
        black: channel('c-black'),
        gray: neutralScale,
        zinc: neutralScale,
        neutral: neutralScale,
        slate: neutralScale,
        // Theme-independent colors for text and scrims laid over photography.
        fixed: { white: '#ffffff', black: '#000000' },
        // Platform design tokens
        p: {
          bg: channel('c-white'),
          fg: channel('c-black'),
          card: channel('g-50'),
          muted: channel('g-100'),
          'muted-fg': channel('g-500'),
          border: channel('g-200'),
          primary: channel('c-black'),
          'primary-fg': channel('c-white'),
        },
      },
      // Platform radius scale (--radius: 1rem)
      borderRadius: {
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '20px',
      },
      // Platform surfaces are flat; elevation stays soft.
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 12px -2px rgb(0 0 0 / 0.08)',
        lg: '0 8px 24px -6px rgb(0 0 0 / 0.10)',
        xl: '0 12px 32px -8px rgb(0 0 0 / 0.12)',
        '2xl': '0 20px 48px -12px rgb(0 0 0 / 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
