"use client"

import { Download } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import React from "react"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

// Chart palette: mid-tone hues that read on both light and dark backgrounds.
// The featured NGen model is always NGEN_COLOR; competitors cycle through SERIES_COLORS.
export const NGEN_COLOR = "#2563eb"
export const SERIES_COLORS = [
  "#f97316",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#94a3b8",
]

export const benchmarkData = [
  {
    name: 'MMLU',
    ngen4pro: 94.2,
    ngen4mini: 93.0,
    ngen39max: 81.8,
    ngen39pro: 77.2,
    ngen35max: 75.8,
    ngen35pro: 73.4,
    o3: 93.4,
    o3mini: 87.0,
    o4mini: 93.0,
    gptoss120b: 90.0,
    gptoss20b: 85.3,
    deepseekr1: 93.4,
  },
  {
    name: 'GPQA Diamond',
    ngen4pro: 84.5,
    ngen4mini: 82.0,
    ngen39max: 73.8,
    ngen39pro: 63.1,
    ngen35max: 71.2,
    ngen35pro: 61.4,
    o3: 83.3,
    o3mini: 77.0,
    o4mini: 81.4,
    gptoss120b: 80.1,
    gptoss20b: 71.5,
    deepseekr1: 81.0,
  },
  {
    name: 'Humanity\'s Last Exam',
    ngen4pro: 26.8,
    ngen4mini: 24.0,
    ngen39max: 21.4,
    ngen39pro: 18.2,
    ngen35max: 23.1,
    ngen35pro: 19.1,
    o3: 24.9,
    o3mini: 13.4,
    o4mini: 17.7,
    gptoss120b: 19.0,
    gptoss20b: 17.3,
    deepseekr1: 17.7,
  },
  {
    name: 'AIME 2025',
    ngen4pro: 100.0,
    ngen4mini: 100.0,
    ngen39max: 88.3,
    ngen39pro: 72.6,
    ngen35max: 89.1,
    ngen35pro: 71.6,
    o3: 98.4,
    o3mini: 86.5,
    o4mini: 99.5,
    gptoss120b: 97.9,
    gptoss20b: 98.7,
    deepseekr1: 87.5,
  },
  {
    name: 'SWE-Bench Verified',
    ngen4pro: 71.2,
    ngen4mini: 63.7,
    ngen39max: 0.0,
    ngen39pro: 0.0,
    ngen35max: 0.0,
    ngen35pro: 0.0,
    o3: 69.1,
    o3mini: 49.3,
    o4mini: 68.1,
    gptoss120b: 62.4,
    gptoss20b: 60.7,
    deepseekr1: 57.6,
  },
]

export const chartConfig = {
  ngen43pro: {
    label: "NGen-4.3 Pro",
    color: "#111827",
  },
  ngen45vayu: {
    label: "NGen-4.5 Vayu",
    color: "#2563eb",
  },
  qwen38_27b: {
    label: "Qwen3.8-27B",
    color: "#8b5cf6",
  },
  kimi_k3: {
    label: "Kimi K3",
    color: "#22c55e",
  },
  gpt56_sol: {
    label: "GPT-5.6 Sol",
    color: "#10b981",
  },
  gpt56_terra: {
    label: "GPT-5.6 Terra",
    color: "#34d399",
  },
  claude_fable_5: {
    label: "Claude Fable 5",
    color: "#fb923c",
  },
  claude_opus_48: {
    label: "Claude Opus 4.8",
    color: "#f97316",
  },
  claude_opus_5: {
    label: "Claude Opus 5",
    color: "#ea580c",
  },
  glm52: {
    label: "GLM-5.2",
    color: "#0ea5e9",
  },
  gemini37_flash: {
    label: "Gemini 3.7 Flash",
    color: "#14b8a6",
  },
  ngen4: {
    label: "NGen-4",
    color: "#111827",
  },
  ngen4pro: {
    label: "NGen 4 Pro",
    color: "#2563eb",
  },
  gpt5: {
    label: "GPT-5",
    color: "#f59ca0",
  },
  sonnet45: {
    label: "Sonnet 4.5",
    color: "#ffd095",
  },
  gemini3_flash: {
    label: "Gemini 3 Flash",
    color: "#8ee9b5",
  },
  ngen4mini: {
    label: "NGen 4 Mini",
    color: "#3b82f6",
  },
  ngen4lite: {
    label: "NGen 4 Lite",
    color: "#ef4444",
  },
  ngen39max: {
    label: "NGen 3.9 Max",
    color: "#60a5fa",
  },
  ngen39pro: {
    label: "NGen 3.9 Pro",
    color: "#93c5fd",
  },
  ngen35max: {
    label: "NGen 3.5 Max",
    color: "#475569",
  },
  ngen35pro: {
    label: "NGen 3.5 Pro",
    color: "#94a3b8",
  },
  qwen3_30b: {
    label: "Qwen3 30B A3B",
    color: "#8b5cf6",
  },
  qwen3_4b_think: {
    label: "Qwen3 4B Think",
    color: "#a78bfa",
  },
  qwen3_4b_2507: {
    label: "Qwen3 4B (2507)",
    color: "#c4b5fd",
  },
  qwen3_next_80b_a3b_thinking: {
    label: "Qwen3-Next-80B-A3B-Thinking",
    color: "#cfc2bd",
  },
  qwen3_30b_a3b_thinking: {
    label: "Qwen3-30B-A3B-Thinking",
    color: "#9ec0df",
  },
  qwen3_vl_30b_a3b: {
    label: "Qwen3-VL-30B-A3B",
    color: "#ee9a9a",
  },
  qwen35_9b: {
    label: "Qwen 3.5 9B",
    color: "#84cc16",
  },
  qwen35_122b: {
    label: "Qwen3.5-122B",
    color: "#8b5cf6",
  },
  qwen35_35b: {
    label: "Qwen3.5-35B",
    color: "#b794f4",
  },
  llama33_70b: {
    label: "Llama 3.3 70B",
    color: "#f59e0b",
  },
  llama4_maverick: {
    label: "Llama 4 Maverick",
    color: "#fbbf24",
  },
  deepseekv3: {
    label: "DeepSeek V3",
    color: "#06b6d4",
  },
  gemini25_flash: {
    label: "Gemini 2.5 Flash-Lite",
    color: "#10b981",
  },
  gemini31_pro: {
    label: "Gemini 3.1 Pro",
    color: "#14b8a6",
  },
  gpt5_nano: {
    label: "GPT-5 Nano",
    color: "#34d399",
  },
  gpt54: {
    label: "GPT-5.4",
    color: "#059669",
  },
  gpt54_nano: {
    label: "GPT-5.4 Nano",
    color: "#71d86b",
  },
  gpt5mini: {
    label: "GPT-5 Mini",
    color: "#aec6d4",
  },
  gpt5_nano_2025_08_07: {
    label: "GPT-5-Nano-2025-08-07",
    color: "#a9d69c",
  },
  gemini25_flash_lite: {
    label: "Gemini-2.5-Flash-Lite",
    color: "#c7c7c7",
  },
  gemini3_flash_lite: {
    label: "Gemini 3 Flash Lite",
    color: "#7ec8e3",
  },
  claude45haiku: {
    label: "Claude Haiku",
    color: "#ffb347",
  },
  claude_opus_46: {
    label: "Claude Opus 4.6",
    color: "#f97316",
  },
  claude_sonnet_45: {
    label: "Claude Sonnet 4.5",
    color: "#fb923c",
  },
  o3: {
    label: "OpenAI o3",
    color: "#10b981",
  },
  o3mini: {
    label: "OpenAI o3-mini",
    color: "#a7f3d0",
  },
  o4mini: {
    label: "OpenAI o4-mini",
    color: "#34d399",
  },
  gptoss120b: {
    label: "gpt-oss-120b",
    color: "#6366f1",
  },
  gptoss20b: {
    label: "gpt-oss-20b",
    color: "#a5b4fc",
  },
  glm5: {
    label: "GLM-5",
    color: "#0ea5e9",
  },
  deepseek_v32: {
    label: "DeepSeek-V3.2",
    color: "#06b6d4",
  },
  deepseekr1: {
    label: "DeepSeek R1 0528",
    color: "#06b6d4",
  },
  kimi_k25: {
    label: "Kimi K2.5",
    color: "#22c55e",
  },
  qwen3_vl_235b: {
    label: "Qwen 3 VL 235B",
    color: "#a8a0eb",
  },
  sarvam_105b: {
    label: "Sarvam 105B",
    color: "#84cc16",
  },
  minimax_m27: {
    label: "MiniMax M2.7",
    color: "#64748b",
  },
  ngen41lite: {
    label: "NGen-4.1 Lite",
    color: "#dc2626",
  },
  ngen41mini: {
    label: "NGen-4.1 Mini",
    color: "#1d4ed8",
  },
  gpt55: {
    label: "OpenAI GPT-5.5",
    color: "#10b981",
  },
  claude_opus_47: {
    label: "Claude Opus 4.7",
    color: "#f97316",
  },
  ngen41pro: {
    label: "NGen-4.1 Pro",
    color: "#eab308",
  },
  ngen41: {
    label: "NGen-4.1",
    color: "#f59e0b",
  },
  mythos_preview: {
    label: "Mythos Preview",
    color: "#a78bfa",
  },
  ngenstt_v2_indic: {
    label: "NGenSTT V2 Indic",
    color: "#111827",
  },
  stt_core: {
    label: "Indic-Transcribe-core",
    color: "#8b5cf6",
  },
  stt_saaras_v3: {
    label: "Saaras V3",
    color: "#22c55e",
  },
  stt_indic_conformer: {
    label: "Indic Conformer",
    color: "#0ea5e9",
  },
  stt_gemini3_pro: {
    label: "Gemini 3 Pro",
    color: "#14b8a6",
  },
  stt_gemini3_flash: {
    label: "Gemini 3 Flash",
    color: "#7ec8e3",
  },
  stt_gemma_e4b: {
    label: "Gemma E4B",
    color: "#f59e0b",
  },
  stt_omniasr_llm_7b: {
    label: "OmniASR LLM 7B",
    color: "#fb923c",
  },
  stt_omniasr_ctc_7b: {
    label: "OmniASR CTC 7B",
    color: "#ef4444",
  },
} satisfies ChartConfig

export function BenchmarkBase({
  data,
  title,
  description,
  yAxisLabel = "Accuracy (%)",
  isElo = false,
  yDomain,
  footerHeadline,
  footerNote,
  children
}: {
  data: any[],
  title: string,
  description: string,
  yAxisLabel?: string,
  isElo?: boolean,
  yDomain?: [number, number],
  footerHeadline?: string,
  footerNote?: string,
  children: React.ReactNode
}) {
  const chartId = `benchmark-chart-${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`
  const seriesOrder = React.Children.toArray(children).flatMap((child) => {
    if (!React.isValidElement(child)) return []
    const dataKey = child.props?.dataKey
    return typeof dataKey === 'string' ? [dataKey] : []
  })
  const seriesCount = Math.max(
    1,
    seriesOrder.length || (data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'name').length : 0)
  )
  const perCategoryWidth = Math.max(150, seriesCount * 28)
  const chartWidth = Math.max(860, data.length * perCategoryWidth)

  // Platform series palette: the first series (the featured NGen model) uses the
  // foreground color, the rest cycle through the platform slot colors.
  const legendKeys = seriesOrder.length > 0
    ? seriesOrder
    : data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'name') : []
  const themedConfig = Object.fromEntries(
    legendKeys.map((key, index) => [
      key,
      {
        label: (chartConfig as any)[key]?.label ?? key,
        color: index === 0 ? NGEN_COLOR : SERIES_COLORS[(index - 1) % SERIES_COLORS.length],
      },
    ])
  ) satisfies ChartConfig
  const bars = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { radius: [4, 4, 0, 0], maxBarSize: 34 }) : child
  )

  const downloadChart = () => {
    const container = document.getElementById(chartId)
    const svgElement = container?.querySelector('svg')
    if (!svgElement || !container) return

    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement
    // Custom properties come back with var() references substituted, so the export gets real colors.
    const chartStyles = getComputedStyle(container.querySelector('[data-chart]') ?? container)
    const resolveColor = (varName: string) => chartStyles.getPropertyValue(varName).trim()

    // Grid and axis colors use theme variables, which don't exist outside the page
    clonedSvg.querySelectorAll('line').forEach((el) => {
      if (el.getAttribute('stroke')?.includes('var(')) el.setAttribute('stroke', '#e5e5e5')
    })

    // Get all bars and resolve their colors
    const allBars = clonedSvg.querySelectorAll('rect, path')
    allBars.forEach((el) => {
      const fill = el.getAttribute("fill")
      if (fill && fill.includes("var(")) {
        const varName = fill.match(/var\((--[^)]+)\)/)?.[1]
        if (varName) {
          const colorValue = resolveColor(varName)
          if (colorValue) {
            el.setAttribute("fill", colorValue)
          }
        }
      }
    })

    // Fix text colors
    const allText = clonedSvg.querySelectorAll('text, tspan')
    allText.forEach((el) => {
      const fill = el.getAttribute("fill")
      if (!fill || fill === 'currentColor' || fill.includes('var(')) {
        el.setAttribute("fill", "#333333")
      }
    })

    // Get SVG dimensions
    const svgWidth = parseFloat(svgElement.getAttribute('width') || '800')
    const svgHeight = parseFloat(svgElement.getAttribute('height') || '400')

    // Legend in series order, colors resolved from the rendered chart
    const relevantLegend = legendKeys.map((key) => ({
      key,
      label: themedConfig[key].label,
      color: themedConfig[key].color,
    }))

    // Create a new SVG with extra space for legend
    const legendHeight = Math.ceil(relevantLegend.length / 4) * 24 + 40
    const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    newSvg.setAttribute("width", String(svgWidth))
    newSvg.setAttribute("height", String(svgHeight + legendHeight))
    newSvg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight + legendHeight}`)

    // Add white background
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    bg.setAttribute("width", "100%")
    bg.setAttribute("height", "100%")
    bg.setAttribute("fill", "#ffffff")
    newSvg.appendChild(bg)

    // Add title
    const titleText = document.createElementNS("http://www.w3.org/2000/svg", "text")
    titleText.setAttribute("x", "20")
    titleText.setAttribute("y", "28")
    titleText.setAttribute("font-size", "18")
    titleText.setAttribute("font-weight", "600")
    titleText.setAttribute("fill", "#000000")
    titleText.setAttribute("font-family", "system-ui, sans-serif")
    titleText.textContent = title
    newSvg.appendChild(titleText)

    // Append the chart (shifted down for title)
    const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    chartGroup.setAttribute("transform", "translate(0, 40)")
    chartGroup.innerHTML = clonedSvg.innerHTML
    newSvg.appendChild(chartGroup)

    // Create legend at the bottom
    const legendGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
    legendGroup.setAttribute("transform", `translate(20, ${svgHeight + 50})`)

    relevantLegend.forEach((item, index) => {
      const col = index % 4
      const row = Math.floor(index / 4)
      const xPos = col * 180
      const yPos = row * 24

      // Color box
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      rect.setAttribute("x", String(xPos))
      rect.setAttribute("y", String(yPos))
      rect.setAttribute("width", "14")
      rect.setAttribute("height", "14")
      rect.setAttribute("rx", "2")
      rect.setAttribute("fill", item.color)
      legendGroup.appendChild(rect)

      // Label
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
      text.setAttribute("x", String(xPos + 20))
      text.setAttribute("y", String(yPos + 11))
      text.setAttribute("font-size", "11")
      text.setAttribute("fill", "#333333")
      text.setAttribute("font-family", "system-ui, sans-serif")
      text.textContent = String(item.label)
      legendGroup.appendChild(text)
    })

    newSvg.appendChild(legendGroup)

    // Serialize and download
    const serializer = new XMLSerializer()
    const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(newSvg)
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `TNSA_Benchmarks_${title.replace(/\s+/g, '_')}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="group relative w-full rounded-xl border border-gray-200 p-5">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 pr-10">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-black">{title}</h3>
          <p className="max-w-2xl text-xs leading-5 text-gray-500">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {legendKeys.map((key) => (
            <li key={key} className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: themedConfig[key].color }} />
              {themedConfig[key].label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 overflow-x-auto overflow-y-hidden pb-2">
        <div id={chartId} style={{ width: `${chartWidth}px`, minWidth: `${chartWidth}px` }}>
          <ChartContainer id={chartId} config={themedConfig} className="h-[320px] w-full min-w-full">
            <BarChart
              accessibilityLayer
              width={chartWidth}
              height={320}
              data={data}
              barCategoryGap="12%"
              barGap={3}
              margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgb(var(--g-200))" />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{ fill: 'rgb(var(--g-500))', fontSize: 11 }}
              />
              <YAxis
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10, fill: 'rgb(var(--g-500))', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={52}
                tick={{ fill: 'rgb(var(--g-500))', fontSize: 11 }}
                domain={yDomain ?? (isElo ? [0, 3000] : [0, 100])}
              />
              <ChartTooltip
                cursor={{ fill: 'rgb(var(--g-100))', opacity: 0.5 }}
                content={<ChartTooltipContent />}
              />
              {bars}
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {footerHeadline || footerNote ? (
        <div className="mt-4 space-y-1 border-t border-gray-200 pt-4 text-xs">
          {footerHeadline ? <p className="font-medium text-black">{footerHeadline}</p> : null}
          {footerNote ? <p className="leading-5 text-gray-500">{footerNote}</p> : null}
        </div>
      ) : null}

      <button
        onClick={downloadChart}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 opacity-0 transition-opacity hover:bg-gray-100 hover:text-black group-hover:opacity-100 focus-visible:opacity-100"
        title="Download chart (SVG)"
        aria-label={`Download ${title} chart as SVG`}
      >
        <Download className="h-4 w-4" />
      </button>
    </section>
  )
}

export const reasoningData = benchmarkData.filter(d => d.name !== 'SWE-Bench Verified')
export const codingData = benchmarkData.filter(d => d.name === 'SWE-Bench Verified')

export default function BenchmarkChart(props: any) {
  return (
    <BenchmarkBase {...props}>
      <Bar dataKey="ngen4mini" fill="var(--color-ngen4mini)" radius={4} />
      <Bar dataKey="ngen39max" fill="var(--color-ngen39max)" radius={4} />
      <Bar dataKey="ngen39pro" fill="var(--color-ngen39pro)" radius={4} />
      <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
      <Bar dataKey="ngen35pro" fill="var(--color-ngen35pro)" radius={4} />
      <Bar dataKey="o3" fill="var(--color-o3)" radius={4} />
      <Bar dataKey="o3mini" fill="var(--color-o3mini)" radius={4} />
      <Bar dataKey="o4mini" fill="var(--color-o4mini)" radius={4} />
      <Bar dataKey="gptoss120b" fill="var(--color-gptoss120b)" radius={4} />
      <Bar dataKey="gptoss20b" fill="var(--color-gptoss20b)" radius={4} />
      <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
    </BenchmarkBase>
  )
}
