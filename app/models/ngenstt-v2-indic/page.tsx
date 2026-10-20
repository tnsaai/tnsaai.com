import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  NGenSTTIndicAverageRanking,
  NGenSTTIndicEvaluations,
} from '@/components/ui/NGenSTTIndicEvaluations'
import { asrAverage, asrRows, asrSystems, bestIndex } from '@/content/ngensttIndicBenchmarks'
import { ModelRegions } from '@/components/ui/ModelRegions'

export const metadata: Metadata = {
  title: 'NGenSTT V2 Indic | TNSA',
  description:
    'NGenSTT V2 Indic is our most capable Speech-to-Text model, built for India across 27 languages, for 16 kHz and 8 kHz telephony.',
  openGraph: {
    title: 'Introducing NGenSTT V2 Indic',
    description:
      'Our flagship Speech-to-Text model for India: 27 languages, code-mixed transcription, three output modes, and built-in language identification.',
    images: ['/model-images/ngenstt-v2-indic.svg'],
  },
}

const trainingStats = [
  { label: 'GRACE reinforcement learning', value: '72', unit: 'hours in TNSA’s GRACE environment' },
  { label: 'Languages covered', value: '27', unit: '22 scheduled languages, English, dialects' },
  { label: 'Model ID', value: 'ngenstt-v2-indic', unit: 'available in the API Platform', mono: true, wide: true },
]

const transcriptionModes = [
  {
    name: 'Native script',
    summary: 'Everything in the language’s own script, numerals included.',
    example: 'कल दोपहर तीन बजे मीटिंग है, मैंने सारी रिपोर्ट्स भेज दी हैं',
    useFor: 'Government records, publishing, subtitles',
  },
  {
    name: 'Mixed script',
    summary: 'Native words in native script; English words and numerals in Latin.',
    example: 'कल दोपहर 3 बजे meeting है, मैंने सारी reports भेज दी हैं',
    useFor: 'Chat logs, support tickets, product analytics',
  },
  {
    name: 'Romanized',
    summary: 'The full utterance in Latin script, exactly as spoken.',
    example: 'kal dopahar 3 baje meeting hai, maine saari reports bhej di hain',
    useFor: 'Search indexes, keyword spotting, ASCII pipelines',
  },
]

const capabilities = [
  {
    index: '01',
    title: 'Code-mixed speech',
    body: 'Speakers in India rarely use one language at a time. The model transcribes Hinglish and other mixed utterances as they are spoken, rather than mapping them onto a single language.',
  },
  {
    index: '02',
    title: 'Three transcription modes',
    body: 'Native script for fully native output, mixed script for native words with English and numerals in Latin, and romanized for output entirely in Latin script.',
  },
  {
    index: '03',
    title: 'Domain vocabulary',
    body: 'Extended coverage of education, agriculture, and healthcare terminology — the domains in which Indian voice products are most often deployed.',
  },
  {
    index: '04',
    title: 'Language identification',
    body: 'Language identification is built in. The model can be used as a standalone language-ID system, or detect the spoken language and transcribe in a single pass.',
  },
]

const acousticStats = [
  { label: 'Sampling rates', value: '16 kHz studio and 8 kHz telephony' },
  { label: 'Conditions', value: 'Crowded markets, call-centre floors, open-air recordings' },
  { label: 'Accents', value: 'Indian-accented English benchmarked across 19 states' },
  { label: 'Domains', value: 'Education, agriculture, healthcare' },
]

const languageGroups = [
  {
    title: 'Indian-accented English',
    note: 'Benchmarked across speakers from 19 states.',
    languages: [['English', 'en']],
  },
  {
    title: '22 constitutionally recognised languages',
    note: 'Full coverage of the Eighth Schedule.',
    languages: [
      ['Assamese', 'as'], ['Bengali', 'bn'], ['Bodo', 'brx'], ['Dogri', 'doi'],
      ['Gujarati', 'gu'], ['Hindi', 'hi'], ['Kannada', 'kn'], ['Kashmiri', 'ks'],
      ['Konkani', 'kok'], ['Maithili', 'mai'], ['Malayalam', 'ml'], ['Manipuri', 'mni'],
      ['Marathi', 'mr'], ['Nepali', 'ne'], ['Odia', 'or'], ['Punjabi', 'pa'],
      ['Sanskrit', 'sa'], ['Santali', 'sat'], ['Sindhi', 'sd'], ['Tamil', 'ta'],
      ['Telugu', 'te'], ['Urdu', 'ur'],
    ],
  },
  {
    title: 'Hindi dialects',
    note: 'Supported as distinct languages rather than Hindi variants.',
    languages: [['Chhattisgarhi', 'hne'], ['Haryanvi', 'bgc']],
  },
  {
    title: 'Extremely low-resource',
    note: 'Limited public training data available.',
    languages: [['Bhili', 'bhb'], ['Bhojpuri', 'bho']],
  },
]

export default function NGenSTTV2IndicPage() {
  const averageBest = bestIndex(asrAverage)

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pb-10 pt-[116px] md:pt-[140px]">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Speech-to-Text</p>
          <h1 className="mt-5 max-w-[980px] text-[52px] font-normal leading-[0.98] tracking-[-0.045em] md:text-[88px]">
            Introducing NGenSTT V2 Indic
          </h1>
          <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-gray-600 md:text-[22px] md:leading-9">
            Our most capable Speech-to-Text model, built specifically for India. Refined in TNSA’s GRACE reinforcement
            learning environment, it supports 27 languages, sustains accuracy in real-world noise, and transcribes
            code-mixed speech as it is spoken.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="https://platform.tnsaai.com"
              className="rounded-full bg-black px-5 py-3 text-[12px] text-white transition-colors hover:bg-gray-800"
            >
              Try in API Platform
            </Link>
            <a href="#benchmarks" className="rounded-full border border-gray-200 px-5 py-3 text-[12px] transition-colors hover:bg-gray-50">
              View benchmarks
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
          <Image
            src="/model-images/ngenstt-v2-indic.svg"
            alt="NGenSTT V2 Indic launch artwork"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="(min-width: 1280px) 1180px, calc(100vw - 40px)"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">The model</p>
          <p className="mt-5 max-w-[440px] text-[20px] leading-8 text-gray-600 md:text-[24px] md:leading-9">
            NGenSTT V2 Indic is our flagship speech model. It is trained to be robust and general purpose, covering the
            full diversity of Indian accents and maintaining accuracy in noisy conditions, from crowded markets to
            call-centre floors.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
          {trainingStats.map((stat) => (
            <div key={stat.label} className={`bg-white p-7 md:p-9 ${stat.wide ? 'sm:col-span-2' : ''}`}>
              <p className="text-[12px] text-gray-500">{stat.label}</p>
              <p
                className={
                  stat.mono
                    ? 'mt-4 font-mono text-[18px] tracking-[-0.01em] md:text-[20px]'
                    : 'mt-4 text-[31px] font-normal tracking-[-0.04em] md:text-[38px]'
                }
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[12px] leading-5 text-gray-500">{stat.unit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Output that fits your product</p>
            <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">Three transcription modes.</h2>
            <p className="mt-5 text-[14px] leading-7 text-gray-600">
              Conventional ASR systems return only a native-script transcript. NGenSTT V2 Indic returns native script,
              romanized text, or true code-mixed output, allowing the transcript to match the format your application
              expects. The same utterance, in three renderings:
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-3">
            {transcriptionModes.map((mode) => (
              <div key={mode.name} className="flex flex-col bg-white p-7 md:p-9">
                <h3 className="text-[18px] font-normal">{mode.name}</h3>
                <p className="mt-3 text-[13px] leading-6 text-gray-600">{mode.summary}</p>
                <p className="mt-6 rounded-lg bg-gray-50 p-4 text-[16px] leading-8 text-black">{mode.example}</p>
                <p className="mt-auto pt-6 text-[12px] leading-5 text-gray-500">{mode.useFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 border-t border-gray-100 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Availability</p>
          <h2 className="mt-4 text-[34px] font-normal leading-tight tracking-[-0.03em] md:text-[44px]">Served from TNSA regions.</h2>
        </div>
        <ModelRegions slug="ngenstt-v2-indic" />
      </section>

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-[760px]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Capabilities</p>
          <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">
            Designed for multilingual Indian speech.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border-t border-gray-200 pt-6">
              <p className="font-mono text-[11px] tracking-[0.12em] text-gray-400">{capability.index}</p>
              <h3 className="mt-4 text-[19px] font-normal leading-tight">{capability.title}</h3>
              <p className="mt-3 max-w-[460px] text-[14px] leading-7 text-gray-600">{capability.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acousticStats.map((stat) => (
            <div key={stat.label} className="border-t border-gray-100 pt-4">
              <p className="text-[12px] text-gray-500">{stat.label}</p>
              <p className="mt-1 text-[15px] leading-6 text-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Supported languages</p>
            <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">27 languages, four groups.</h2>
            <p className="mt-5 text-[14px] leading-7 text-gray-600">
              Pass the language code at inference time, or omit it and allow the model to identify the language before
              transcription.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {languageGroups.map((group) => (
              <div key={group.title} className="border-t border-gray-100 pt-8 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10">
                <div>
                  <h3 className="text-[18px] font-normal leading-tight">{group.title}</h3>
                  <p className="mt-2 max-w-[300px] text-[12px] leading-5 text-gray-500">{group.note}</p>
                </div>
                <div className="mt-6 flex flex-wrap content-start items-start gap-2 md:mt-0">
                  {group.languages.map(([name, code]) => (
                    <span
                      key={code}
                      className="inline-flex items-baseline gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-black"
                    >
                      {name}
                      <span className="font-mono text-[11px] text-gray-400">{code}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benchmarks" className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Benchmarks</p>
            <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">
              Measured on the Voice of India benchmark.
            </h2>
            <p className="mt-5 text-[14px] leading-7 text-gray-600">
              Performance is measured using Word Error Rate (WER) across 15 languages. Lower is better.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-gray-200 p-6 md:p-10">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[18px] font-normal">Average WER across 15 languages</h3>
              <p className="text-[12px] text-gray-500">WER (%), lower is better</p>
            </div>
            <NGenSTTIndicAverageRanking />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="mb-10 max-w-[760px]">
            <h3 className="text-[24px] font-normal tracking-[-0.02em]">Per-language results</h3>
            <p className="mt-3 text-[14px] leading-7 text-gray-600">
              Word Error Rate per language. The best score in each row is shown in bold; NGenSTT V2 Indic is highlighted
              for quick comparison.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
              <thead>
                <tr className="text-[11px] text-gray-400">
                  <th className="sticky left-0 z-20 w-[180px] bg-white pb-3 pr-5 font-medium uppercase tracking-wide">
                    Language
                  </th>
                  {asrSystems.map((system) => (
                    <th
                      key={system.key}
                      className={`w-[112px] px-3 text-center text-[11px] font-medium leading-4 ${
                        system.ours
                          ? 'rounded-t-lg border-l border-r border-t border-gray-300 bg-white py-3 font-bold text-black'
                          : 'pb-3 text-gray-400'
                      }`}
                    >
                      {system.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <th className="sticky left-0 z-10 border-b border-gray-200 bg-white py-3 pr-5 text-[12px] font-medium text-black">
                    Average
                  </th>
                  {asrAverage.map((score, index) => (
                    <td
                      key={`average-${asrSystems[index].key}`}
                      className={`px-3 py-3 text-center text-[12px] tabular-nums ${
                        asrSystems[index].ours
                          ? 'border-l border-r border-gray-300 bg-white font-bold text-black'
                          : `border-b border-gray-200 ${index === averageBest ? 'font-bold text-black' : 'text-gray-600'}`
                      }`}
                    >
                      {score.toFixed(1)}%
                    </td>
                  ))}
                </tr>
                {asrRows.map((row, rowIndex) => {
                  const best = bestIndex(row.scores)
                  const isLast = rowIndex === asrRows.length - 1
                  return (
                    <tr key={row.language} className="bg-white">
                      <th
                        className={`sticky left-0 z-10 bg-white py-2.5 pr-5 text-[12px] font-medium text-gray-700 ${
                          isLast ? '' : 'border-b border-gray-100'
                        }`}
                      >
                        {row.language}
                      </th>
                      {row.scores.map((score, index) => (
                        <td
                          key={`${row.language}-${asrSystems[index].key}`}
                          className={`px-3 py-3 text-center text-[12px] tabular-nums ${
                            asrSystems[index].ours
                              ? `border-l border-r border-gray-300 bg-white font-bold text-black ${
                                  isLast ? 'rounded-b-lg border-b' : ''
                                }`
                              : `${index === best ? 'font-bold text-black' : 'text-gray-600'} ${
                                  isLast ? '' : 'border-b border-gray-100'
                                }`
                          }`}
                        >
                          {score.toFixed(1)}%
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] leading-5 text-gray-500">
            WER denotes Word Error Rate; lower is better. Benchmark names and scores are presented as supplied.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 max-w-[760px]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Evaluation charts</p>
          <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">
            Results by language group.
          </h2>
          <p className="mt-5 text-[14px] leading-7 text-gray-600">
            Grouped charts provide a closer view of the benchmark suite. Scroll horizontally to inspect each language;
            shorter bars indicate fewer errors.
          </p>
        </div>
        <NGenSTTIndicEvaluations />
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Get started</p>
        <h2 className="mx-auto mt-4 max-w-[760px] text-[40px] font-normal leading-tight tracking-[-0.035em] md:text-[62px]">
          Available now in the TNSA API Platform.
        </h2>
        <Link
          href="https://platform.tnsaai.com"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-[12px] text-white hover:bg-gray-800"
        >
          Start building
        </Link>
      </section>
    </main>
  )
}
