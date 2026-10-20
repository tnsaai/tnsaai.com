'use client'

import { useState } from 'react'
import { Bar } from 'recharts'
import { BenchmarkBase } from '@/components/ui/BenchmarkChart'
import { ngen43BenchmarkGroups, ngen43BenchmarkModels } from '@/content/ngen43Benchmarks'

// Benchmark table and grouped chart for the selected category, in the platform.tnsaai.com UI language.

const HIDDEN_MODEL_INDEX = 1
// chartConfig keys for ngen43BenchmarkModels after the hidden model is removed; the first is the featured model.
const COMPETITOR_KEYS = ['kimi_k3', 'gpt56_sol', 'gpt56_terra', 'claude_fable_5', 'claude_opus_48', 'claude_opus_5', 'glm52', 'gemini37_flash']

export function PlatformBenchmarks({ primaryModel, primaryKey }: { primaryModel: string; primaryKey: string }) {
  const [groupName, setGroupName] = useState<string>(ngen43BenchmarkGroups[0].name)
  const group = ngen43BenchmarkGroups.find((g) => g.name === groupName) ?? ngen43BenchmarkGroups[0]
  const models = [primaryModel, ...ngen43BenchmarkModels.slice(1)].filter((_, index) => index !== HIDDEN_MODEL_INDEX)
  const rows = group.rows.map((row) => ({
    name: row[0],
    scores: (row.slice(1) as number[]).filter((_, index) => index !== HIDDEN_MODEL_INDEX),
  }))
  const seriesKeys = [primaryKey, ...COMPETITOR_KEYS]
  const chartData = rows.map((row) => Object.fromEntries([['name', row.name], ...seriesKeys.map((key, index) => [key, row.scores[index]])]))

  return (
    <div className="space-y-6">
      <div role="tablist" aria-label="Benchmark category" className="inline-flex max-w-full flex-wrap gap-0.5 rounded-lg bg-p-muted p-0.5 text-sm">
        {ngen43BenchmarkGroups.map((g) => (
          <button
            key={g.name}
            type="button"
            role="tab"
            aria-selected={g.name === group.name}
            onClick={() => setGroupName(g.name)}
            className={`rounded-md px-3 py-1 font-medium transition-colors ${g.name === group.name ? 'bg-p-bg text-p-fg shadow-sm' : 'text-p-muted-fg hover:text-p-fg'}`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-p-border">
        <table className="w-full min-w-[960px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-p-border">
              <th className="sticky left-0 z-10 bg-p-bg px-4 py-3 text-xs font-medium text-p-muted-fg">Benchmark</th>
              {models.map((model, index) => (
                <th key={model} className={`px-3 py-3 text-center text-xs font-medium ${index === 0 ? 'bg-p-muted text-p-fg' : 'text-p-muted-fg'}`}>
                  {model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const best = Math.max(...row.scores)
              return (
                <tr key={row.name} className="border-b border-p-border last:border-b-0">
                  <th className="sticky left-0 z-10 bg-p-bg px-4 py-3 font-medium text-p-fg">{row.name}</th>
                  {row.scores.map((score, index) => (
                    <td
                      key={`${row.name}-${models[index]}`}
                      className={`px-3 py-3 text-center tabular-nums ${index === 0 ? 'bg-p-muted font-medium text-p-fg' : score === best ? 'text-p-fg' : 'text-p-muted-fg'}`}
                    >
                      {score.toFixed(1)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <BenchmarkBase
        data={chartData}
        title={`${group.name} benchmarks`}
        description={`${primaryModel} against leading models. Scores are percentages; higher is better.`}
        yAxisLabel="Score (%)"
      >
        {seriesKeys.map((key) => (
          <Bar key={key} dataKey={key} fill={`var(--color-${key})`} />
        ))}
      </BenchmarkBase>
    </div>
  )
}
