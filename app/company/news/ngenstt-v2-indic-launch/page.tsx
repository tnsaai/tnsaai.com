import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export const metadata: Metadata = {
  title: 'Introducing NGenSTT V2 Indic | TNSA',
  description:
    'Our most capable Speech-to-Text model, built specifically for India: 27 languages, code-mixed transcription, three output modes, and support for 16 kHz and 8 kHz telephony audio.',
  openGraph: {
    title: 'Introducing NGenSTT V2 Indic',
    description:
      '72 hours in TNSA’s GRACE environment and 27 languages — our flagship Speech-to-Text model for India.',
    images: ['/model-images/ngenstt-v2-indic.svg'],
  },
}

export default function NGenSTTV2IndicLaunchNewsPost() {
  return (
    <NewsArticlePage
      date="September 8, 2026"
      category="Models"
      title="Introducing NGenSTT V2 Indic"
      deck="Our most capable Speech-to-Text model, built specifically for India. It supports 27 languages, sustains accuracy in real-world noise, and transcribes code-mixed speech as it is spoken."
      image="/model-images/ngenstt-v2-indic.svg"
      imageAlt="NGenSTT V2 Indic"
      readTime="5 min read"
      author="TNSA Speech Team"
      sections={[
        {
          title: 'Built for India',
          content: [
            'NGenSTT V2 Indic is our flagship Speech-to-Text model. It spent 72 hours in TNSA’s GRACE reinforcement learning environment.',
            'It is built to be robust and general purpose, covering the full diversity of Indian accents and maintaining accuracy in noisy real-world conditions, from crowded markets to call-centre floors, with extended coverage of the domains in which Indian voice products are most often deployed: education, agriculture, and healthcare.',
            'The model is adapted for both 16 kHz recordings and 8 kHz telephonic samples, so a single system serves mobile applications and IVR lines without a separate pipeline for each.',
          ],
        },
        {
          title: 'Code-mixed speech',
          content: [
            'Speakers in India rarely use one language at a time. Most ASR systems map mixed speech onto a single language, and the meaning of the utterance is degraded in the process.',
            'NGenSTT V2 Indic transcribes Hinglish and other mixed speech as it is spoken. Language identification is built in: the model can be used as a standalone language-ID system, or it can identify the spoken language and transcribe in a single pass.',
          ],
        },
        {
          title: 'Three transcription modes',
          content: [
            'Unlike conventional ASR systems, which return only a native-script transcript, NGenSTT V2 Indic offers three transcription modes, allowing the output to match the format your application expects.',
            'The same utterance, in three renderings. Native script returns “कल दोपहर तीन बजे मीटिंग है, मैंने सारी रिपोर्ट्स भेज दी हैं”; mixed script keeps native words in native script with English and numerals in Latin, “कल दोपहर 3 बजे meeting है, मैंने सारी reports भेज दी हैं”; and romanized returns the full utterance in Latin script, “kal dopahar 3 baje meeting hai, maine saari reports bhej di hain”.',
          ],
          bullets: [
            'Native script — for government records, publishing, and subtitles.',
            'Mixed script — for chat logs, support tickets, and product analytics.',
            'Romanized — for search indexes, keyword spotting, and ASCII pipelines.',
          ],
        },
        {
          title: 'Supported languages',
          content:
            'The model covers 27 languages across four groups: Indian-accented English, benchmarked across speakers from 19 states; all 22 constitutionally recognised languages; the Hindi dialects Chhattisgarhi and Haryanvi; and the extremely low-resource languages Bhili and Bhojpuri.',
          bullets: [
            'Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.',
            'English, benchmarked on Indian-accented speech from 19 states.',
            'Chhattisgarhi and Haryanvi, supported as distinct languages rather than Hindi variants.',
            'Bhili and Bhojpuri, where limited public training data is available.',
          ],
        },
        {
          title: 'Benchmark results',
          content: [
            'On the Voice of India benchmark, NGenSTT V2 Indic averages 9.6% Word Error Rate across 15 languages, where lower is better. It leads on Hindi at 3.4% and Chhattisgarhi at 12.8%, and stays under 10% on Bengali, Urdu, Marathi, Punjabi, Assamese, Odia, Kannada, and Tamil.',
            <>
              The full per-language table and comparison charts are on the{' '}
              <Link href="/models/ngenstt-v2-indic" className="text-black underline underline-offset-4">
                NGenSTT V2 Indic model page
              </Link>
              .
            </>,
          ],
        },
        {
          title: 'Availability',
          content:
            'NGenSTT V2 Indic is available now through the TNSA API Platform as ngenstt-v2-indic. Pass the language code at inference time, or omit it and allow the model to identify the language before transcription.',
        },
      ]}
      keepReading={[
        {
          title: 'NGen-4.3 Pro',
          href: '/models/ngen4.3-pro',
          category: 'Models',
          date: 'August 2026',
        },
        {
          title: 'TNSA is Open-Sourcing NGen-4-K2-1T-Thinking',
          href: '/company/news/ngen-4-k2-1t-thinking-open-source',
          category: 'Models',
          date: 'February 23, 2026',
        },
        {
          title: 'Transforming Government Services with Large Language Models',
          href: '/company/news/transforming-government-services-with-large-language-models',
          category: 'Company',
          date: '2025',
        },
      ]}
      cta={{ label: 'Explore the Model', href: '/models/ngenstt-v2-indic' }}
    />
  )
}
