"use client"

import { TrendingUp, Download } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const benchmarkData = [
  {
    name: 'MMLU',
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
  ngen4mini: {
    label: "NGen 4 Mini",
    color: "#3b82f6",
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
  gpt5_nano: {
    label: "GPT-5 Nano High",
    color: "#34d399",
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
  deepseekr1: {
    label: "DeepSeek R1 0528",
    color: "#06b6d4",
  },
} satisfies ChartConfig

export function BenchmarkBase({
  data,
  title,
  description,
  yAxisLabel = "Accuracy (%)",
  isElo = false,
  children
}: {
  data: any[],
  title: string,
  description: string,
  yAxisLabel?: string,
  isElo?: boolean,
  children: React.ReactNode
}) {
  const chartId = `benchmark-chart-${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`

  const downloadChart = () => {
    const container = document.getElementById(chartId)
    const svgElement = container?.querySelector('svg')
    if (!svgElement || !container) return

    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement

    // Get all bars and resolve their colors
    const allBars = clonedSvg.querySelectorAll('rect, path')
    allBars.forEach((el) => {
      const fill = el.getAttribute("fill")
      if (fill && fill.includes("var(")) {
        const varName = fill.match(/var\((--[^)]+)\)/)?.[1]
        if (varName) {
          const configKey = varName.replace('--color-', '')
          const colorValue = (chartConfig as any)[configKey]?.color
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

    // Create legend items from chartConfig
    const legendItems = Object.entries(chartConfig).map(([key, val]) => ({
      key,
      label: val.label,
      color: val.color
    }))

    // Only show legend items that have data in this chart
    const dataKeys = data.length > 0 ? Object.keys(data[0]).filter(k => k !== 'name') : []
    const relevantLegend = legendItems.filter(item => dataKeys.includes(item.key))

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
    <Card className="w-full bg-white border-none shadow-none relative group">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl font-normal text-black">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0 relative">
        <div id={chartId}>
          <ChartContainer id="benchmark-performance-chart-container" config={chartConfig} className="min-h-[400px] w-full">
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#666', fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
                domain={isElo ? [0, 3000] : [0, 100]}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              {children}
            </BarChart>
          </ChartContainer>
        </div>

        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center">
          <div className="opacity-20 group-hover:opacity-0 transition-opacity duration-300">
            <img src="/favicon.svg" alt="TNSA Logo" className="w-8 h-8" />
          </div>
          <button
            onClick={downloadChart}
            className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
            title="Download Chart (SVG)"
          >
            <Download className="w-5 h-5 text-black" />
          </button>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm px-0 pt-6">
        <div className="flex gap-2 leading-none font-medium text-black">
          New massive-scale benchmarks released <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-gray-500 leading-none">
          Comparative analysis against industry-leading models
        </div>
      </CardFooter>
    </Card>
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
