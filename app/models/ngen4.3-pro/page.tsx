import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen43ModelEvaluations } from '@/components/ui/NGen43ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen43ProPlatformProfile } from '@/content/modelPlatformProfiles'

export const metadata: Metadata = {
  title: 'NGen-4.3 Pro | TNSA',
  description: 'Meet NGen-4.3 Pro: frontier agentic intelligence with a 1,048,576-token context window and 248,320-token maximum output.',
  openGraph: {
    title: 'Introducing NGen-4.3 Pro',
    description: '1,048,576-token context. 248,320-token maximum output. Built for long-horizon reasoning and agentic work.',
    images: ['/ngen4.3-pro-launch.png'],
  },
}

const models = [
  'NGen-4.3 Pro', 'Qwen3.8-27B', 'Kimi K3', 'GPT-5.6 Sol', 'GPT-5.6 Terra',
  'Claude Fable 5', 'Claude Opus 4.8', 'Claude Opus 5', 'GLM-5.2', 'Gemini 3.7 Flash',
]

const visibleModels = models.filter((_, index) => index !== 1)

const groups = [
  {
    name: 'Coding',
    rows: [
      ['Terminal Bench 2.1', 80.2, 73.0, 88.3, 88.8, 87.4, 83.1, 78.9, 89.1, 81.0, 78.4],
      ['SWE-bench Pro', 65.3, 61.7, 58.5, 64.6, 63.4, 80.0, 69.2, 74.8, 62.1, 52.6],
      ['NL2Repo-Bench', 48.1, 42.3, 49.2, 54.8, 52.6, 68.2, 69.7, 71.5, 48.9, 44.0],
      ['DeepSWE 1.1', 50.0, 42.2, 67.5, 72.7, 69.6, 69.7, 59.0, 68.8, 46.2, 45.1],
      ['QwenSWEBench', 84.3, 79.0, 73.5, 84.0, 81.2, 80.7, 63.8, 86.3, 68.4, 63.4],
      ['AgentCoWorkBench', 75.1, 70.7, 71.5, 72.3, 69.8, 74.8, 68.2, 75.9, 67.1, 64.6],
      ['JobBench', 35.7, 33.4, 52.9, 48.4, 44.1, 53.4, 45.4, 57.4, 38.6, 31.3],
      ["Agents' Last Exam — Pass@1", 21.8, 20.4, 15.2, 24.6, 21.8, 23.1, 18.7, 27.8, 14.5, 10.6],
      ["Agents' Last Exam — Score", 47.3, 42.9, 38.4, 52.7, 50.4, 40.5, 45.2, 56.8, 37.0, 32.1],
    ],
  },
  {
    name: 'General',
    rows: [
      ['IFBench', 84.9, 79.5, 81.4, 85.6, 82.9, 84.0, 80.2, 88.4, 78.3, 77.0],
      ['GPQA Diamond', 93.1, 89.2, 93.5, 94.6, 92.9, 92.6, 92.0, 95.2, 91.2, 88.4],
      ['HLE — No tools', 32.8, 30.8, 43.5, 51.2, 47.6, 56.5, 49.8, 56.3, 40.5, 34.7],
      ['HLE — With tools', 48.2, 45.2, 56.0, 62.4, 59.1, 63.9, 57.9, 64.7, 54.7, 48.9],
      ['LiveCodeBench v6', 95.8, 90.3, 86.4, 92.1, 89.5, 91.8, 88.8, 93.5, 85.2, 83.9],
    ],
  },
  {
    name: 'Computer Use',
    rows: [
      ['OSWorld-Verified', 85.2, 84.3, 84.8, 73.3, 70.2, 78.5, 72.7, 82.1, 63.9, 65.9],
      ['OSWorld 2.0', 56.0, 52.4, 58.3, 62.6, 57.9, 66.1, 55.7, 70.6, 51.0, 48.6],
      ['WebArena-Verified', 69.1, 64.8, 66.2, 68.4, 65.1, 71.0, 65.4, 74.6, 58.7, 57.3],
      ['AndroidWorld', 87.0, 81.9, 70.7, 79.5, 76.2, 81.0, 62.0, 83.5, 66.4, 67.2],
      ['RecreationBench', 50.3, 47.1, 45.8, 56.2, 52.9, 58.0, 49.3, 61.4, 41.0, 39.5],
    ],
  },
  {
    name: 'Multimodal',
    rows: [
      ['ClawEval-MM — Pass@3', 61.3, 57.4, 61.2, 64.5, 61.8, 66.0, 58.3, 69.4, 53.2, 49.1],
      ['ClawEval-MM — Average', 60.7, 56.9, 59.8, 63.1, 60.4, 64.7, 57.1, 67.9, 51.8, 45.7],
      ['SWE-MM', 40.2, 38.6, 31.4, 48.5, 45.2, 52.0, 27.1, 54.6, 32.8, 36.5],
      ['Vision2Web', 67.2, 62.9, 65.7, 71.3, 68.0, 74.2, 66.8, 77.5, 59.4, 58.1],
    ],
  },
  {
    name: 'Vision & Math',
    rows: [
      ['MathVision — Without CI', 93.1, 90.0, 94.3, 74.2, 71.5, 76.0, 65.5, 78.5, 68.4, 71.2],
      ['MathVision — With CI', 96.2, 94.6, 97.8, 95.1, 93.8, 94.8, 88.4, 96.5, 89.0, 91.3],
      ['BabyVision — Without CI', 68.5, 65.7, 58.2, 54.0, 51.3, 51.8, 12.6, 56.2, 43.3, 48.1],
      ['BabyVision — With CI', 86.2, 85.6, 85.7, 84.5, 82.1, 83.9, 70.4, 87.0, 79.5, 81.0],
      ['CharXiv — Without CI', 89.3, 83.7, 84.8, 79.2, 76.5, 81.5, 66.0, 83.0, 74.1, 78.4],
      ['CharXiv — With CI', 95.6, 90.2, 91.3, 89.6, 87.4, 88.9, 85.9, 92.4, 85.0, 85.8],
      ['OmniDocBench 1.5', 96.8, 91.1, 91.1, 91.4, 89.7, 89.4, 86.6, 92.8, 87.2, 75.8],
      ['RealWorldQA', 91.2, 85.9, 84.1, 86.9, 85.3, 87.2, 73.9, 88.5, 81.6, 78.0],
      ['ERQA', 70.0, 65.5, 62.5, 69.8, 67.1, 68.4, 40.8, 71.2, 58.9, 56.3],
    ],
  },
  {
    name: 'Domain Reasoning',
    rows: [
      ['BioMysteryBench — hard', 40.8, 38.2, 41.0, 45.8, 43.1, 46.5, 42.4, 49.4, 39.5, 36.8],
      ['BioMysteryBench — human solved', 90.3, 84.6, 87.2, 89.4, 88.1, 89.0, 88.5, 90.1, 85.7, 83.4],
    ],
  },
] as const

export default function NGen43ProPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pb-10 pt-[116px] md:pt-[140px]">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <h1 className="max-w-[980px] text-[52px] font-normal leading-[0.98] tracking-[-0.045em] md:text-[88px]">Introducing NGen-4.3 Pro</h1>
          <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-gray-600 md:text-[22px] md:leading-9">
            Long-horizon intelligence for coding, computer use, multimodal work, and rigorous reasoning — with room to think at extraordinary scale.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="https://platform.tnsaai.com" className="rounded-full bg-black px-5 py-3 text-[12px] text-white transition-colors hover:bg-gray-800">Try in API Platform</Link>
            <a href="#benchmarks" className="rounded-full border border-gray-200 px-5 py-3 text-[12px] transition-colors hover:bg-gray-50">Explore benchmarks</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black">
          <Image src="/model-images/ngen4.3-pro-preview.svg" alt="NGen-4.3 Pro launch artwork" fill priority unoptimized className="object-cover" sizes="(min-width: 1280px) 1180px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Built for scale</p>
          <h2 className="mt-4 text-[34px] font-normal leading-tight tracking-[-0.03em] md:text-[48px]">One million tokens of working context.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Context window</p>
            <p className="mt-4 text-[31px] font-normal tracking-[-0.04em] md:text-[38px]">1,048,576</p>
            <p className="mt-1 text-[12px] text-gray-500">tokens · 1M</p>
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Maximum output</p>
            <p className="mt-4 text-[31px] font-normal tracking-[-0.04em] md:text-[38px]">248,320</p>
            <p className="mt-1 text-[12px] text-gray-500">tokens</p>
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Input</p>
            <p className="mt-4 text-[18px] leading-7">Text, image, audio, video</p>
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Model ID</p>
            <p className="mt-4 font-mono text-[16px]">ngen-4.3-pro</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-24">
        <ModelPlatformDetails profile={ngen43ProPlatformProfile} />
      </section>

      <section id="benchmarks" className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Model evaluations</p>
            <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">Frontier performance, measured broadly.</h2>
            <p className="mt-5 text-[14px] leading-7 text-gray-600">Scores are percentages; higher is better. NGen-4.3 Pro is highlighted for quick comparison.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1320px] border-collapse text-left text-sm">
              <thead>
                <tr className="text-[11px] text-gray-400">
                  <th className="sticky left-0 z-20 w-[230px] bg-white pb-3 pr-5 font-medium uppercase tracking-wide">Benchmark</th>
                  {visibleModels.map((model, index) => (
                    <th
                      key={model}
                      className={`w-[108px] px-3 text-center text-[11px] font-medium leading-4 ${index === 0 ? 'rounded-t-lg border-l border-r border-t border-gray-300 bg-white py-3 font-bold text-black' : 'pb-3 text-gray-400'}`}
                    >
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <FragmentGroup key={group.name} group={group} isLastGroup={index === groups.length - 1} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11px] leading-5 text-gray-500">CI denotes code interpreter. Benchmark names and scores are presented as supplied.</p>
        </div>
      </section>

      <NGen43ModelEvaluations groups={groups} />

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">The team</p>
          <h2 className="mt-4 text-[36px] font-normal tracking-[-0.035em] md:text-[48px]">Built at TNSA.</h2>
        </div>
        <NGen4TeamSection />
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Available now</p>
        <h2 className="mx-auto mt-4 max-w-[760px] text-[40px] font-normal leading-tight tracking-[-0.035em] md:text-[62px]">Put a million-token context to work.</h2>
        <Link href="https://platform.tnsaai.com" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-[12px] text-white hover:bg-gray-800">Start building</Link>
      </section>
    </main>
  )
}

function FragmentGroup({ group, isLastGroup }: { group: (typeof groups)[number]; isLastGroup: boolean }) {
  return (
    <>
      <tr className="border-b border-gray-100">
        <th className="sticky left-0 z-10 bg-white pb-2 pr-5 pt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-400">{group.name}</th>
        {visibleModels.map((model, index) => (
          <td key={`${group.name}-${model}`} className={index === 0 ? 'border-l border-r border-gray-300 bg-white' : ''} />
        ))}
      </tr>
      {group.rows.map((row, rowIndex) => {
        const isLast = isLastGroup && rowIndex === group.rows.length - 1
        return (
        <tr key={row[0]} className="group bg-white">
          <th className={`sticky left-0 z-10 bg-white py-2.5 pr-5 text-[12px] font-medium text-gray-700 ${rowIndex !== group.rows.length - 1 ? 'border-b border-gray-100' : ''}`}>{row[0]}</th>
          {row.slice(1).filter((_, index) => index !== 1).map((score, index) => {
            return (
              <td
                key={`${row[0]}-${visibleModels[index]}`}
                className={`px-3 py-3 text-center text-[12px] tabular-nums ${index === 0 ? `border-l border-r border-gray-300 bg-white font-bold text-black ${isLast ? 'rounded-b-lg border-b' : ''}` : `text-gray-600 ${rowIndex !== group.rows.length - 1 ? 'border-b border-gray-100' : ''}`}`}
              >
                {Number(score).toFixed(1)}%
              </td>
            )
          })}
        </tr>
      )})}
    </>
  )
}
