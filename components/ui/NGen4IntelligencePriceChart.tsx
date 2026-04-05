'use client'

import React from 'react'
import {
    CartesianGrid,
    ReferenceArea,
    Scatter,
    ScatterChart,
    XAxis,
    YAxis,
    LabelList,
} from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, type ChartConfig } from '@/components/ui/chart'

type ScatterPoint = {
    name: string
    cost: number
    intelligence: number
    series: keyof typeof scatterChartConfig
    size: number
    labelDx: number
    labelDy: number
    labelAnchor?: 'start' | 'middle' | 'end'
}

const scatterChartConfig = {
    ngen4: {
        label: 'NGen-4',
        color: '#111827',
    },
    gemini31_pro: {
        label: 'Gemini 3.1 Pro',
        color: '#7bc47f',
    },
    claude_opus_46: {
        label: 'Claude Opus 4.6',
        color: '#f97316',
    },
    gpt54: {
        label: 'GPT-5.4',
        color: '#fb7185',
    },
    claude_sonnet_45: {
        label: 'Claude Sonnet 4.5',
        color: '#fdba74',
    },
    qwen35_122b: {
        label: 'Qwen3.5-122B',
        color: '#8b5cf6',
    },
    qwen35_35b: {
        label: 'Qwen3.5-35B',
        color: '#a78bfa',
    },
    glm5: {
        label: 'GLM-5',
        color: '#3b82f6',
    },
    deepseek_v32: {
        label: 'DeepSeek-V3.2',
        color: '#06b6d4',
    },
    kimi_k25: {
        label: 'Kimi K2.5',
        color: '#22c55e',
    },
    gptoss120b: {
        label: 'gpt-oss-120b',
        color: '#8b5cf6',
    },
} satisfies ChartConfig

const scatterData: ScatterPoint[] = [
    { name: 'gpt-oss-120b', cost: 8, intelligence: 80.8, series: 'gptoss120b', size: 10, labelDx: 12, labelDy: 22, labelAnchor: 'start' },
    { name: 'DeepSeek-V3.2', cost: 14, intelligence: 87.0, series: 'deepseek_v32', size: 11, labelDx: -14, labelDy: 20, labelAnchor: 'end' },
    { name: 'Kimi K2.5', cost: 24, intelligence: 86.0, series: 'kimi_k25', size: 10, labelDx: -8, labelDy: -18, labelAnchor: 'end' },
    { name: 'Qwen3.5-35B', cost: 28, intelligence: 85.3, series: 'qwen35_35b', size: 10, labelDx: 14, labelDy: 18, labelAnchor: 'start' },
    { name: 'GLM-5', cost: 40, intelligence: 87.5, series: 'glm5', size: 11, labelDx: -16, labelDy: -18, labelAnchor: 'end' },
    { name: 'Qwen3.5-122B', cost: 55, intelligence: 86.7, series: 'qwen35_122b', size: 11, labelDx: 14, labelDy: -16, labelAnchor: 'start' },
    { name: 'NGen-4', cost: 65, intelligence: 89.6, series: 'ngen4', size: 14, labelDx: 16, labelDy: -16, labelAnchor: 'start' },
    { name: 'Claude Sonnet 4.5', cost: 130, intelligence: 80.8, series: 'claude_sonnet_45', size: 11, labelDx: 16, labelDy: 18, labelAnchor: 'start' },
    { name: 'Gemini 3.1 Pro', cost: 560, intelligence: 89.8, series: 'gemini31_pro', size: 11, labelDx: -16, labelDy: 26, labelAnchor: 'end' },
    { name: 'GPT-5.4', cost: 760, intelligence: 87.4, series: 'gpt54', size: 11, labelDx: 14, labelDy: -2, labelAnchor: 'start' },
    { name: 'Claude Opus 4.6', cost: 1280, intelligence: 89.5, series: 'claude_opus_46', size: 11, labelDx: 0, labelDy: -18, labelAnchor: 'start' },
]

function ScatterTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ScatterPoint }> }) {
    if (!active || !payload?.length) {
        return null
    }

    const point = payload[0]?.payload

    if (!point) {
        return null
    }

    return (
        <div className="min-w-[14rem] rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 shadow-lg">
            <div className="mb-2 text-sm font-medium text-black">{point.name}</div>
            <div className="grid gap-1 text-zinc-600">
                <div className="flex items-center justify-between gap-4">
                    <span>MMLU-Pro</span>
                    <span className="font-mono text-black">{point.intelligence.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <span>Avg. cost / 1M tokens</span>
                    <span className="font-mono text-black">INR {point.cost}</span>
                </div>
            </div>
        </div>
    )
}

function ScatterPointShape(props: {
    cx?: number
    cy?: number
    payload?: ScatterPoint
}) {
    const { cx = 0, cy = 0, payload } = props

    if (!payload) {
        return null
    }

    return (
        <circle
            cx={cx}
            cy={cy}
            r={payload.size}
            fill={`var(--color-${payload.series})`}
            fillOpacity={0.92}
            stroke="#ffffff"
            strokeWidth={2}
        />
    )
}

function ScatterPointLabel(props: {
    x?: number
    y?: number
    payload?: ScatterPoint
}) {
    const { x = 0, y = 0, payload } = props

    if (!payload) {
        return null
    }

    const labelX = x + payload.labelDx
    const labelY = y + payload.labelDy
    const textAnchor = payload.labelAnchor ?? 'start'

    return (
        <g pointerEvents="none">
            <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                className="fill-zinc-700 text-[13px] font-medium"
            >
                {payload.name}
            </text>
            <text
                x={labelX}
                y={labelY + 19}
                textAnchor={textAnchor}
                className="fill-zinc-500 text-[12px]"
            >
                {payload.intelligence.toFixed(1)}
            </text>
        </g>
    )
}

export function NGen4IntelligencePriceChart() {
    const chartWidth = 1280

    return (
        <Card className="w-full border-none bg-white shadow-none">
            <CardHeader className="px-0 text-center">
                <CardTitle className="text-4xl font-semibold text-zinc-800">Intelligence vs Price Analysis</CardTitle>
                <CardDescription className="text-lg text-zinc-500">
                    Top-tier models breaking into the Frontier Zone.
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
                <div className="overflow-x-auto pb-2">
                    <div style={{ width: `${chartWidth}px` }}>
                        <ChartContainer
                            id="ngen4-intelligence-price-analysis"
                            config={scatterChartConfig}
                            className="h-[620px] w-full aspect-auto"
                        >
                            <ScatterChart
                                accessibilityLayer
                                margin={{ top: 24, right: 120, bottom: 42, left: 24 }}
                            >
                                <CartesianGrid vertical={false} stroke="#eef2f7" />
                                <ReferenceArea
                                    x1={5}
                                    x2={2000}
                                    y1={88}
                                    y2={92}
                                    fill="#f5f7fb"
                                    fillOpacity={1}
                                    strokeOpacity={0}
                                    label={{
                                        value: 'Frontier Zone',
                                        position: 'insideTopLeft',
                                        fill: '#cfd6df',
                                        fontSize: 18,
                                        fontWeight: 600,
                                    }}
                                />
                                <XAxis
                                    type="number"
                                    dataKey="cost"
                                    scale="log"
                                    domain={[5, 2000]}
                                    ticks={[10, 100, 1000]}
                                    tickFormatter={(value) => {
                                        if (value === 10) return '10^1'
                                        if (value === 100) return '10^2'
                                        if (value === 1000) return '10^3'
                                        return value
                                    }}
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 13 }}
                                    label={{
                                        value: 'Average Cost per 1M Tokens (INR, Log Scale)',
                                        position: 'insideBottom',
                                        offset: -10,
                                        fill: '#8b8f97',
                                        fontSize: 13,
                                    }}
                                />
                                <YAxis
                                    type="number"
                                    dataKey="intelligence"
                                    domain={[74, 92.5]}
                                    ticks={[75, 77.5, 80, 82.5, 85, 87.5, 90, 92.5]}
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 13 }}
                                    label={{
                                        value: 'MMLU-Pro Intelligence',
                                        angle: -90,
                                        position: 'insideLeft',
                                        offset: -6,
                                        fill: '#8b8f97',
                                        fontSize: 13,
                                    }}
                                />
                                <ChartTooltip cursor={false} content={<ScatterTooltip />} />
                                <Scatter data={scatterData} shape={<ScatterPointShape />}>
                                    <LabelList dataKey="name" content={<ScatterPointLabel />} />
                                </Scatter>
                            </ScatterChart>
                        </ChartContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
