'use client'

import { Bar } from 'recharts'
import { BenchmarkBase } from './BenchmarkChart'

type BenchmarkGroup = {
  name: string
  rows: ReadonlyArray<readonly [string, ...number[]]>
}

const modelSeries = [
  { key: 'ngen43pro', scoreIndex: 1 },
  { key: 'kimi_k3', scoreIndex: 3 },
  { key: 'gpt56_sol', scoreIndex: 4 },
  { key: 'gpt56_terra', scoreIndex: 5 },
  { key: 'claude_fable_5', scoreIndex: 6 },
  { key: 'claude_opus_48', scoreIndex: 7 },
  { key: 'claude_opus_5', scoreIndex: 8 },
  { key: 'glm52', scoreIndex: 9 },
  { key: 'gemini37_flash', scoreIndex: 10 },
] as const

const descriptions: Record<string, string> = {
  Coding: 'Software engineering, terminal operation, repository understanding, and collaborative agent benchmarks.',
  General: 'Instruction following, scientific reasoning, tool-assisted knowledge, and live coding performance.',
  'Computer Use': 'Desktop, web, Android, and interface recreation evaluations for autonomous computer use.',
  Multimodal: 'Agentic multimodal understanding, visual software engineering, and vision-to-web performance.',
  'Vision & Math': 'Visual mathematics, document understanding, chart reasoning, OCR, and real-world visual QA.',
  'Domain Reasoning': 'Specialized biological reasoning across hard and human-solvable mystery tasks.',
}

export function NGen43ModelEvaluations({ groups }: { groups: ReadonlyArray<BenchmarkGroup> }) {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 max-w-[760px]">
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Evaluation charts</p>
        <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">Performance across every category.</h2>
        <p className="mt-5 text-[14px] leading-7 text-gray-600">Interactive grouped charts provide a closer view of the complete benchmark suite. Scroll horizontally to inspect every model and task.</p>
      </div>

      <div className="space-y-16">
        {groups.map((group) => {
          const data = group.rows.map((row) => {
            const point: Record<string, string | number> = { name: row[0] }
            modelSeries.forEach(({ key, scoreIndex }) => {
              point[key] = row[scoreIndex]
            })
            return point
          })

          return (
            <BenchmarkBase
              key={group.name}
              data={data}
              title={`${group.name} benchmarks`}
              description={descriptions[group.name] ?? 'Comparative model evaluation scores.'}
              yAxisLabel="Score (%)"
            >
              {modelSeries.map(({ key }) => (
                <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
              ))}
            </BenchmarkBase>
          )
        })}
      </div>
    </section>
  )
}
