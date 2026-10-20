import localFont from 'next/font/local'

// Same typeface as platform.tnsaai.com.
export const openAISans = localFont({
  variable: '--font-openai-sans',
  display: 'swap',
  src: [
    { path: '../fonts/OpenAISans-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/OpenAISans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/OpenAISans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/OpenAISans-Semibold.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/OpenAISans-Bold.ttf', weight: '700', style: 'normal' },
  ],
})
