'use client'

import { Bar } from 'recharts'
import { BenchmarkBase, chartConfig } from './BenchmarkChart'
import {
  asrAverage,
  asrGroupDescriptions,
  asrGroupOrder,
  asrRows,
  asrSystems,
} from '@/content/ngensttIndicBenchmarks'

/**
 * The three weakest baselines reach 90% WER, which flattens every other bar on a
 * shared axis. The charts therefore plot the leading systems; the complete
 * nine-system comparison remains in the per-language table.
 */
const chartedSystemKeys = [
  'ngenstt_v2_indic',
  'stt_core',
  'stt_saaras_v3',
  'stt_indic_conformer',
  'stt_gemini3_pro',
  'stt_gemini3_flash',
]

const chartedSystems = asrSystems
  .map((system, index) => ({ ...system, index }))
  .filter((system) => chartedSystemKeys.includes(system.key))

function colorOf(key: string) {
  return (chartConfig as Record<string, { color: string }>)[key].color
}

function roundedCeiling(value: number) {
  return Math.ceil(value / 5) * 5
}

export function NGenSTTIndicAverageRanking() {
  const ranked = asrSystems
    .map((system, index) => ({ ...system, wer: asrAverage[index] }))
    .sort((a, b) => a.wer - b.wer)
  const worst = ranked[ranked.length - 1].wer

  return (
    <div className="space-y-3">
      {ranked.map((system) => (
        <div
          key={system.key}
          className="grid grid-cols-[132px_1fr_52px] items-center gap-4 md:grid-cols-[210px_1fr_64px]"
        >
          <p className={`truncate text-[12px] md:text-[13px] ${system.ours ? 'text-black' : 'text-gray-500'}`}>
            {system.name}
          </p>
          <div className="h-5 overflow-hidden rounded-[3px] bg-gray-100">
            <div
              className={`h-full rounded-[3px] ${system.ours ? 'bg-black' : 'bg-gray-300'}`}
              style={{ width: `${(system.wer / worst) * 100}%` }}
            />
          </div>
          <p
            className={`text-right text-[12px] tabular-nums md:text-[13px] ${
              system.ours ? 'text-black' : 'text-gray-500'
            }`}
          >
            {system.wer.toFixed(1)}
          </p>
        </div>
      ))}
    </div>
  )
}

function ChartLegend() {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-100 pt-6">
      {chartedSystems.map((system) => (
        <div key={system.key} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[1px]" style={{ backgroundColor: colorOf(system.key) }} />
          <span className={`text-[12px] ${system.ours ? 'text-black' : 'text-gray-500'}`}>{system.name}</span>
        </div>
      ))}
    </div>
  )
}

export function NGenSTTIndicEvaluations() {
  return (
    <div className="space-y-16">
      <ChartLegend />
      {asrGroupOrder.map((group) => {
        const rows = asrRows.filter((row) => row.group === group)
        const data = rows.map((row) => {
          const point: Record<string, string | number> = { name: row.language }
          chartedSystems.forEach((system) => {
            point[system.key] = row.scores[system.index]
          })
          return point
        })
        const groupMax = Math.max(...rows.flatMap((row) => chartedSystems.map((s) => row.scores[s.index])))

        return (
          <BenchmarkBase
            key={group}
            data={data}
            title={`${group} languages`}
            description={asrGroupDescriptions[group]}
            yAxisLabel="Word Error Rate (%)"
            yDomain={[0, roundedCeiling(groupMax)]}
            footerHeadline="Word Error Rate, lower is better"
            footerNote="Voice of India benchmark. Leading systems shown; the full nine-system comparison is in the table above."
          >
            {chartedSystems.map((system) => (
              <Bar key={system.key} dataKey={system.key} fill={`var(--color-${system.key})`} radius={2} />
            ))}
          </BenchmarkBase>
        )
      })}
    </div>
  )
}
