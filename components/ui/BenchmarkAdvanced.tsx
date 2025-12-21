"use client"

import { Bar } from "recharts"
import { BenchmarkBase } from "./BenchmarkChart"

// Table 1 Data
export const textReasoningData = [
    {
        name: 'MMLU-Pro',
        ngen39max: 81.8,
        ngen39pro: 77.2,
        qwen3_30b: 78.5,
        qwen3_4b_think: 70.4,
        qwen3_4b_2507: 74.0,
        ngen35max: 75.8,
        ngen35pro: 73.4,
        deepseekr1: 85.0,
        llama33_70b: 68.9,
        llama4_maverick: 59.6,
    },
    {
        name: 'MMLU-Redux',
        ngen39max: 93.1,
        ngen39pro: 90.4,
        qwen3_30b: 89.5,
        qwen3_4b_think: 83.7,
        qwen3_4b_2507: 86.1,
        ngen35max: 90.2,
        ngen35pro: 87.5,
    },
    {
        name: 'GPQA',
        ngen39max: 73.8,
        ngen39pro: 63.1,
        qwen3_30b: 65.8,
        qwen3_4b_think: 55.9,
        qwen3_4b_2507: 65.8,
        ngen35max: 71.2,
        ngen35pro: 61.4,
        deepseekr1: 81.0,
    },
    {
        name: 'SuperGPQA',
        ngen39max: 55.8,
        ngen39pro: 49.7,
        qwen3_30b: 51.8,
        qwen3_4b_think: 42.7,
        qwen3_4b_2507: 47.8,
        ngen35max: 57.8,
        ngen35pro: 51.2,
    }
]

export const logicMathData = [
    {
        name: 'AIME 25',
        ngen39max: 88.3,
        ngen39pro: 72.6,
        qwen3_30b: 70.9,
        qwen3_4b_think: 65.6,
        qwen3_4b_2507: 81.3,
        ngen35max: 89.1,
        ngen35pro: 71.6,
    },
    {
        name: 'HMMT 25',
        ngen39max: 61.5,
        ngen39pro: 48.1,
        qwen3_30b: 49.8,
        qwen3_4b_think: 42.1,
        qwen3_4b_2507: 55.5,
        ngen35max: 63.1,
        ngen35pro: 49.2,
    },
    {
        name: 'LiveBench',
        ngen39max: 77.8,
        ngen39pro: 69.6,
        qwen3_30b: 74.3,
        qwen3_4b_think: 63.6,
        qwen3_4b_2507: 71.8,
        ngen35max: 76.1,
        ngen35pro: 68.4,
        llama33_70b: 50.7,
    }
]

export const codingDataAdvanced = [
    {
        name: 'LiveCodeBench',
        ngen39max: 61.2,
        ngen39pro: 54.4,
        qwen3_30b: 57.4,
        qwen3_4b_think: 48.4,
        qwen3_4b_2507: 55.2,
        ngen35max: 62.5,
        ngen35pro: 55.6,
        deepseekr1: 73.3,
        llama4_maverick: 68.5,
    },
    {
        name: 'CFEval',
        ngen39max: 1952.0,
        ngen39pro: 1771.0,
        qwen3_30b: 1940.0,
        qwen3_4b_think: 1671.0,
        qwen3_4b_2507: 1852.0,
        ngen35max: 1912.0,
        ngen35pro: 1730.0,
    },
    {
        name: 'OJBench',
        ngen39max: 23.9,
        ngen39pro: 22.1,
        qwen3_30b: 20.7,
        qwen3_4b_think: 16.1,
        qwen3_4b_2507: 17.9,
        ngen35max: 22.9,
        ngen35pro: 21.2,
    }
]

// Table 2 Data (Vision)
export const visionData = [
    {
        name: 'MMMU (Val)',
        ngen35max: 75.6,
        ngen35pro: 73.4,
        gemini25_flash: 73.4,
        gpt5_nano: 75.8,
    },
    {
        name: 'MathVista',
        ngen35max: 83.2,
        ngen35pro: 79.7,
        gemini25_flash: 72.8,
        gpt5_nano: 71.5,
    },
    {
        name: 'AI2D',
        ngen35max: 95.5,
        ngen35pro: 90.1,
        gemini25_flash: 85.7,
        gpt5_nano: 81.9,
    },
    {
        name: 'DocVQA',
        ngen35max: 95.6,
        ngen35pro: 90.3,
        gemini25_flash: 92.5,
        gpt5_nano: 88.2,
    }
]

export function BenchmarkAdvancedText() {
    return (
        <BenchmarkBase
            data={textReasoningData}
            title="Advanced Text & Reasoning"
            description="Comparing NGen 3.9/3.5 Max and Pro against Qwen3, DeepSeek, and Llama 4."
        >
            <Bar dataKey="ngen39max" fill="var(--color-ngen39max)" radius={4} />
            <Bar dataKey="ngen39pro" fill="var(--color-ngen39pro)" radius={4} />
            <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
            <Bar dataKey="qwen3_30b" fill="var(--color-qwen3_30b)" radius={4} />
            <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
            <Bar dataKey="llama4_maverick" fill="var(--color-llama4_maverick)" radius={4} />
        </BenchmarkBase>
    )
}

export function BenchmarkAdvancedLogic() {
    return (
        <BenchmarkBase
            data={logicMathData}
            title="Logic & Mathematical Reasoning"
            description="Frontier performance on AIME 25 and HMMT 25 benchmarks."
        >
            <Bar dataKey="ngen39max" fill="var(--color-ngen39max)" radius={4} />
            <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
            <Bar dataKey="qwen3_4b_2507" fill="var(--color-qwen3_4b_2507)" radius={4} />
            <Bar dataKey="qwen3_4b_think" fill="var(--color-qwen3_4b_think)" radius={4} />
        </BenchmarkBase>
    )
}

export function BenchmarkAdvancedCoding() {
    return (
        <BenchmarkBase
            data={codingDataAdvanced}
            title="Advanced Engineering & Coding"
            description="Comparative analysis on LiveCodeBench and CFEval."
        >
            <Bar dataKey="ngen39max" fill="var(--color-ngen39max)" radius={4} />
            <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
            <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
            <Bar dataKey="llama4_maverick" fill="var(--color-llama4_maverick)" radius={4} />
        </BenchmarkBase>
    )
}

export function BenchmarkVisionMultimodal() {
    return (
        <BenchmarkBase
            data={visionData}
            title="Vision & Multimodal Intelligence"
            description="NGen 3.5 series compared with Gemini 2.5 Flash and GPT-5 Nano."
        >
            <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
            <Bar dataKey="ngen35pro" fill="var(--color-ngen35pro)" radius={4} />
            <Bar dataKey="gemini25_flash" fill="var(--color-gemini25_flash)" radius={4} />
            <Bar dataKey="gpt5_nano" fill="var(--color-gpt5_nano)" radius={4} />
        </BenchmarkBase>
    )
}
