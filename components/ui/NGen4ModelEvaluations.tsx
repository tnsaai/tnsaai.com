'use client'

import { Bar } from 'recharts'
import { BenchmarkBase } from './BenchmarkChart'

type SupportedModel = 'pro' | 'mini' | 'lite' | 'ngen4' | 'ngen41lite' | 'ngen41mini' | 'ngen41pro' | 'ngen41'

type BenchmarkPoint = {
    name: string
    [key: string]: string | number | undefined
}

type ChartSpec = {
    title: string
    description: string
    data: BenchmarkPoint[]
    bars: string[]
    yAxisLabel?: string
}

type ModelSpec = {
    title: string
    description: string
    charts: ChartSpec[]
}

const proGeneralBenchmarksData: BenchmarkPoint[] = [
    { name: 'IFBench / IFEval', ngen4pro: 95.3, gpt5: 94.1, sonnet45: 96.0, gemini3_flash: 94.5, kimi_k25: 79.2, qwen3_vl_235b: 81.6 },
    { name: 'GPQA Diamond', ngen4pro: 91.1, gpt5: 87.2, sonnet45: 92.5, gemini3_flash: 91.0, kimi_k25: 87.6, qwen3_vl_235b: 83.2 },
    { name: 'HMMT Feb 2025', ngen4pro: 92.5, gpt5: 95.0, sonnet45: 94.8, gemini3_flash: 94.0, kimi_k25: 92.8, qwen3_vl_235b: 81.5 },
    { name: 'MMMLU', ngen4pro: 93.2, gpt5: 91.3, sonnet45: 94.5, gemini3_flash: 95.2, kimi_k25: 87.1, qwen3_vl_235b: 89.7 },
    { name: 'BFCL V4', ngen4pro: 69.9, gpt5: 80.8, sonnet45: 75.0, gemini3_flash: 74.8, kimi_k25: 78.0, qwen3_vl_235b: 28.8 },
    { name: 'BrowseComp', ngen4pro: 64.8, gpt5: 72.0, sonnet45: 68.6, gemini3_flash: 66.0, kimi_k25: 72.8, qwen3_vl_235b: 62.0 },
    { name: 'SWE-bench Verified', ngen4pro: 77.3, gpt5: 74.0, sonnet45: 78.5, gemini3_flash: 74.0, kimi_k25: 76.6, qwen3_vl_235b: 36.1 },
    { name: 'Terminal-Bench 2', ngen4pro: 42.3, gpt5: 60.0, sonnet45: 53.0, gemini3_flash: 46.0, kimi_k25: 55.8, qwen3_vl_235b: 18.7 },
    { name: 'MMMU-Pro', ngen4pro: 79.3, gpt5: 84.0, sonnet45: 68.4, gemini3_flash: 82.3, kimi_k25: 74.0, qwen3_vl_235b: 69.3 },
    { name: 'ERQA', ngen4pro: 68.5, gpt5: 74.0, sonnet45: 45.0, gemini3_flash: 52.0, kimi_k25: 58.0, qwen3_vl_235b: 52.5 },
    { name: 'OmniDocBench v1.5', ngen4pro: 93.9, gpt5: 94.0, sonnet45: 85.8, gemini3_flash: 88.0, kimi_k25: 89.0, qwen3_vl_235b: 84.5 },
    { name: 'Video-MME', ngen4pro: 91.0, gpt5: 92.0, sonnet45: 81.1, gemini3_flash: 90.5, kimi_k25: 88.8, qwen3_vl_235b: 83.9 },
    { name: 'AIME 2025', ngen4pro: 100.0, gpt5: 94.5, sonnet45: 95.0, gemini3_flash: 98.0, kimi_k25: 96.1, qwen3_vl_235b: 85.8 },
    { name: 'LiveBench', ngen4pro: 88.5, gpt5: 89.0, sonnet45: 91.0, gemini3_flash: 88.5, kimi_k25: 86.9, qwen3_vl_235b: 75.0 },
    { name: 'GAIA', ngen4pro: 60.5, gpt5: 55.0, sonnet45: 52.4, gemini3_flash: 48.0, kimi_k25: 45.2, qwen3_vl_235b: 42.0 },
    { name: 'Big-Bench Hard (BBH)', ngen4pro: 94.2, gpt5: 93.0, sonnet45: 92.0, gemini3_flash: 91.5, kimi_k25: 90.8, qwen3_vl_235b: 88.0 },
    { name: 'HumanEval+', ngen4pro: 95.1, gpt5: 92.1, sonnet45: 91.0, gemini3_flash: 89.0, kimi_k25: 89.5, qwen3_vl_235b: 85.8 },
    { name: 'GSM8K', ngen4pro: 99.2, gpt5: 98.0, sonnet45: 97.0, gemini3_flash: 98.5, kimi_k25: 96.0, qwen3_vl_235b: 95.5 },
    { name: 'LongBench', ngen4pro: 88.0, gpt5: 85.0, sonnet45: 82.0, gemini3_flash: 84.0, kimi_k25: 83.3, qwen3_vl_235b: 81.0 },
    { name: 'DocVQA', ngen4pro: 96.5, gpt5: 96.0, sonnet45: 92.8, gemini3_flash: 93.0, kimi_k25: 92.8, qwen3_vl_235b: 89.2 },
]

const proAgentToolsData: BenchmarkPoint[] = [
    { name: 'ScreenSpot Pro', ngen4pro: 72.9, gpt5: 68.0, sonnet45: 36.2, gemini3_flash: 52.0, kimi_k25: 60.0, qwen3_vl_235b: 62.0 },
    { name: 'OSWorld-Verified', ngen4pro: 57.0, gpt5: 54.0, sonnet45: 61.4, gemini3_flash: 45.0, kimi_k25: 42.0, qwen3_vl_235b: 38.1 },
    { name: 'AndroidWorld', ngen4pro: 75.0, gpt5: 72.0, sonnet45: 40.0, gemini3_flash: 55.0, kimi_k25: 62.0, qwen3_vl_235b: 63.7 },
    { name: 'TIR-Bench', ngen4pro: 59.8, gpt5: 55.0, sonnet45: 27.6, gemini3_flash: 42.0, kimi_k25: 38.0, qwen3_vl_235b: 29.8 },
    { name: 'V*', ngen4pro: 95.0, gpt5: 92.0, sonnet45: 58.6, gemini3_flash: 75.0, kimi_k25: 84.0, qwen3_vl_235b: 85.9 },
    { name: 'SLAKE', ngen4pro: 83.2, gpt5: 80.0, sonnet45: 73.6, gemini3_flash: 81.6, kimi_k25: 65.0, qwen3_vl_235b: 54.7 },
    { name: 'PMC-VQA', ngen4pro: 65.5, gpt5: 62.0, sonnet45: 55.9, gemini3_flash: 58.0, kimi_k25: 50.0, qwen3_vl_235b: 41.2 },
    { name: 'MedXpertQA-MM', ngen4pro: 64.2, gpt5: 61.0, sonnet45: 54.0, gemini3_flash: 56.0, kimi_k25: 52.0, qwen3_vl_235b: 47.6 },
]

const proGeneralVqaData: BenchmarkPoint[] = [
    { name: 'RealWorldQA', ngen4pro: 88.7, gpt5: 85.0, sonnet45: 70.3, gemini3_flash: 78.0, kimi_k25: 82.0, qwen3_vl_235b: 81.3 },
    { name: 'MMStar', ngen4pro: 86.5, gpt5: 82.0, sonnet45: 73.8, gemini3_flash: 76.0, kimi_k25: 79.0, qwen3_vl_235b: 78.7 },
    { name: 'MMBench EN', ngen4pro: 96.1, gpt5: 93.0, sonnet45: 88.3, gemini3_flash: 90.0, kimi_k25: 91.0, qwen3_vl_235b: 89.7 },
    { name: 'SimpleVQA', ngen4pro: 61.0, gpt5: 60.0, sonnet45: 57.6, gemini3_flash: 58.0, kimi_k25: 59.0, qwen3_vl_235b: 61.3 },
    { name: 'HallusionBench', ngen4pro: 71.8, gpt5: 68.0, sonnet45: 59.9, gemini3_flash: 64.0, kimi_k25: 66.0, qwen3_vl_235b: 66.7 },
]

const proOcrDocumentData: BenchmarkPoint[] = [
    { name: 'OmniDocBench 1.5', ngen4pro: 93.9, gpt5: 90.0, sonnet45: 85.8, gemini3_flash: 88.0, kimi_k25: 89.0, qwen3_vl_235b: 84.5 },
    { name: 'CharXiv (RQ)', ngen4pro: 81.4, gpt5: 78.0, sonnet45: 67.2, gemini3_flash: 72.0, kimi_k25: 75.0, qwen3_vl_235b: 66.1 },
    { name: 'MMLongBench-Doc', ngen4pro: 63.2, gpt5: 60.0, sonnet45: 50.0, gemini3_flash: 55.0, kimi_k25: 58.0, qwen3_vl_235b: 56.2 },
    { name: 'CC-OCR', ngen4pro: 84.6, gpt5: 80.0, sonnet45: 68.1, gemini3_flash: 75.0, kimi_k25: 78.0, qwen3_vl_235b: 81.5 },
    { name: 'AI2D_TEST', ngen4pro: 97.2, gpt5: 94.0, sonnet45: 87.0, gemini3_flash: 91.0, kimi_k25: 92.5, qwen3_vl_235b: 89.2 },
    { name: 'OCRBench', ngen4pro: 95.4, gpt5: 90.0, sonnet45: 76.6, gemini3_flash: 82.0, kimi_k25: 88.0, qwen3_vl_235b: 87.5 },
]

const proSpatialIntelligenceData: BenchmarkPoint[] = [
    { name: 'ERQA', ngen4pro: 68.5, gpt5: 62.0, sonnet45: 45.0, gemini3_flash: 52.0, kimi_k25: 58.0, qwen3_vl_235b: 52.5 },
    { name: 'CountBench', ngen4pro: 99.0, gpt5: 96.0, sonnet45: 90.0, gemini3_flash: 94.0, kimi_k25: 95.0, qwen3_vl_235b: 93.7 },
    { name: 'RefCOCO (avg)', ngen4pro: 93.4, gpt5: 90.0, sonnet45: 85.0, gemini3_flash: 88.0, kimi_k25: 89.0, qwen3_vl_235b: 91.1 },
    { name: 'ODInW13', ngen4pro: 45.1, gpt5: 42.0, sonnet45: 35.0, gemini3_flash: 38.0, kimi_k25: 40.0, qwen3_vl_235b: 43.2 },
    { name: 'EmbSpatialBench', ngen4pro: 87.2, gpt5: 83.0, sonnet45: 71.8, gemini3_flash: 78.0, kimi_k25: 82.0, qwen3_vl_235b: 84.3 },
    { name: 'RefSpatialBench', ngen4pro: 67.0, gpt5: 65.0, sonnet45: 2.2, gemini3_flash: 30.0, kimi_k25: 55.0, qwen3_vl_235b: 69.9 },
    { name: 'LingoQA', ngen4pro: 83.5, gpt5: 78.0, sonnet45: 12.8, gemini3_flash: 45.0, kimi_k25: 72.0, qwen3_vl_235b: 66.8 },
    { name: 'Hypersim', ngen4pro: 12.9, gpt5: 12.0, sonnet45: 5.0, gemini3_flash: 8.0, kimi_k25: 10.0, qwen3_vl_235b: 11.0 },
    { name: 'SUNRGBD', ngen4pro: 35.6, gpt5: 33.0, sonnet45: 20.0, gemini3_flash: 28.0, kimi_k25: 32.0, qwen3_vl_235b: 34.9 },
    { name: 'Nuscene', ngen4pro: 15.3, gpt5: 14.5, sonnet45: 8.0, gemini3_flash: 11.0, kimi_k25: 13.0, qwen3_vl_235b: 13.9 },
]

const proStemPuzzleData: BenchmarkPoint[] = [
    { name: 'MMMU', ngen4pro: 86.2, gpt5: 85.0, sonnet45: 79.6, gemini3_flash: 82.0, kimi_k25: 83.5, qwen3_vl_235b: 80.6 },
    { name: 'MMMU-Pro', ngen4pro: 79.3, gpt5: 75.0, sonnet45: 68.4, gemini3_flash: 72.0, kimi_k25: 74.0, qwen3_vl_235b: 69.3 },
    { name: 'MathVision', ngen4pro: 88.1, gpt5: 86.0, sonnet45: 71.1, gemini3_flash: 78.0, kimi_k25: 84.0, qwen3_vl_235b: 74.6 },
    { name: 'MathVista (mini)', ngen4pro: 91.0, gpt5: 89.0, sonnet45: 79.8, gemini3_flash: 85.0, kimi_k25: 88.0, qwen3_vl_235b: 85.8 },
    { name: 'DynaMath', ngen4pro: 89.6, gpt5: 86.0, sonnet45: 77.8, gemini3_flash: 82.0, kimi_k25: 85.0, qwen3_vl_235b: 82.8 },
    { name: 'ZEROBench', ngen4pro: 7.0, gpt5: 8.0, sonnet45: 4.0, gemini3_flash: 6.0, kimi_k25: 7.0, qwen3_vl_235b: 4.0 },
    { name: 'ZEROBench_sub', ngen4pro: 39.5, gpt5: 35.0, sonnet45: 26.3, gemini3_flash: 30.0, kimi_k25: 34.0, qwen3_vl_235b: 28.4 },
    { name: 'VlmsAreBlind', ngen4pro: 98.0, gpt5: 95.0, sonnet45: 85.5, gemini3_flash: 92.0, kimi_k25: 94.0, qwen3_vl_235b: 79.5 },
    { name: 'BabyVision', ngen4pro: 42.1, gpt5: 35.0, sonnet45: 18.6, gemini3_flash: 25.0, kimi_k25: 30.0, qwen3_vl_235b: 22.2 },
]

const proVideoUnderstandingData: BenchmarkPoint[] = [
    { name: 'VideoMME (w sub)', ngen4pro: 91.0, gpt5: 88.0, sonnet45: 81.1, gemini3_flash: 84.0, kimi_k25: 86.0, qwen3_vl_235b: 83.8 },
    { name: 'VideoMME (w/o sub)', ngen4pro: 86.3, gpt5: 83.0, sonnet45: 75.3, gemini3_flash: 78.0, kimi_k25: 81.0, qwen3_vl_235b: 79.0 },
    { name: 'VideoMMMU', ngen4pro: 84.6, gpt5: 82.0, sonnet45: 77.6, gemini3_flash: 79.0, kimi_k25: 81.0, qwen3_vl_235b: 80.0 },
    { name: 'MLVU', ngen4pro: 90.2, gpt5: 87.0, sonnet45: 72.8, gemini3_flash: 80.0, kimi_k25: 84.0, qwen3_vl_235b: 83.8 },
    { name: 'MVBench', ngen4pro: 78.2, gpt5: 75.0, sonnet45: 60.0, gemini3_flash: 68.0, kimi_k25: 72.0, qwen3_vl_235b: 75.2 },
    { name: 'LVBench', ngen4pro: 75.1, gpt5: 72.0, sonnet45: 55.0, gemini3_flash: 62.0, kimi_k25: 68.0, qwen3_vl_235b: 63.6 },
    { name: 'MMVU', ngen4pro: 75.8, gpt5: 73.0, sonnet45: 70.6, gemini3_flash: 71.0, kimi_k25: 72.0, qwen3_vl_235b: 71.1 },
]

const miniReasoningData: BenchmarkPoint[] = [
    {
        name: 'IFBench',
        qwen3_next_80b_a3b_thinking: 61.5,
        gptoss120b: 69.0,
        gptoss20b: 65.1,
        ngen4mini: 67.5,
        claude45haiku: 68.7,
        gpt54_nano: 70.0,
        gpt5mini: 66.0,
    },
    {
        name: 'GPQA Diamond',
        qwen3_next_80b_a3b_thinking: 77.2,
        gptoss120b: 80.1,
        gptoss20b: 71.5,
        ngen4mini: 85.0,
        claude45haiku: 86.2,
        gpt54_nano: 87.5,
        gpt5mini: 83.5,
    },
    {
        name: 'HMMT Feb 25',
        qwen3_next_80b_a3b_thinking: 73.7,
        gptoss120b: 90.0,
        gptoss20b: 76.7,
        ngen4mini: 87.0,
        claude45haiku: 88.2,
        gpt54_nano: 89.5,
        gpt5mini: 85.5,
    },
    {
        name: 'MMMLU',
        qwen3_next_80b_a3b_thinking: 81.3,
        gptoss120b: 78.2,
        gptoss20b: 69.7,
        ngen4mini: 84.0,
        claude45haiku: 85.2,
        gpt54_nano: 86.5,
        gpt5mini: 82.5,
    },
]

const miniMultimodalData: BenchmarkPoint[] = [
    {
        name: 'MMMU-Pro',
        qwen3_vl_30b_a3b: 63.0,
        gpt5_nano_2025_08_07: 57.2,
        gemini25_flash_lite: 59.7,
        ngen4mini: 72.5,
        claude45haiku: 73.7,
        gpt54_nano: 75.0,
        gpt5mini: 71.0,
    },
    {
        name: 'ERQA',
        qwen3_vl_30b_a3b: 45.3,
        gpt5_nano_2025_08_07: 45.8,
        gemini25_flash_lite: 44.3,
        ngen4mini: 58.5,
        claude45haiku: 59.7,
        gpt54_nano: 61.0,
        gpt5mini: 57.0,
    },
    {
        name: 'OmniDocBench 1.5',
        qwen3_vl_30b_a3b: 86.8,
        gpt5_nano_2025_08_07: 55.9,
        gemini25_flash_lite: 79.4,
        ngen4mini: 90.5,
        claude45haiku: 91.7,
        gpt54_nano: 93.0,
        gpt5mini: 89.0,
    },
    {
        name: 'VideoMME (w sub.)',
        qwen3_vl_30b_a3b: 79.9,
        gpt5_nano_2025_08_07: 71.7,
        gemini25_flash_lite: 74.6,
        ngen4mini: 87.5,
        claude45haiku: 88.7,
        gpt54_nano: 90.0,
        gpt5mini: 86.0,
    },
]

const liteCoreData: BenchmarkPoint[] = [
    {
        name: 'MMLU-Pro',
        gptoss120b: 80.8,
        gptoss20b: 74.8,
        qwen3_next_80b_a3b_thinking: 82.7,
        qwen3_30b_a3b_thinking: 80.9,
        claude45haiku: 78.5,
        gpt5_nano: 77.2,
        gemini3_flash_lite: 79.8,
        ngen4lite: 83.2,
    },
    {
        name: 'MMLU-Redux',
        gptoss120b: 91.0,
        gptoss20b: 87.8,
        qwen3_next_80b_a3b_thinking: 92.5,
        qwen3_30b_a3b_thinking: 91.4,
        claude45haiku: 89.5,
        gpt5_nano: 88.9,
        gemini3_flash_lite: 90.2,
        ngen4lite: 92.0,
    },
    {
        name: 'C-Eval',
        gptoss120b: 76.2,
        gptoss20b: 71.4,
        qwen3_next_80b_a3b_thinking: 89.7,
        qwen3_30b_a3b_thinking: 87.4,
        claude45haiku: 83.0,
        gpt5_nano: 82.4,
        gemini3_flash_lite: 84.5,
        ngen4lite: 89.0,
    },
    {
        name: 'SuperGPQA',
        gptoss120b: 54.6,
        gptoss20b: 48.5,
        qwen3_next_80b_a3b_thinking: 60.8,
        qwen3_30b_a3b_thinking: 56.8,
        claude45haiku: 51.5,
        gpt5_nano: 50.8,
        gemini3_flash_lite: 53.2,
        ngen4lite: 56.0,
    },
    {
        name: 'GPQA Diamond',
        gptoss120b: 80.1,
        gptoss20b: 71.5,
        qwen3_next_80b_a3b_thinking: 77.2,
        qwen3_30b_a3b_thinking: 73.4,
        claude45haiku: 75.8,
        gpt5_nano: 74.6,
        gemini3_flash_lite: 77.0,
        ngen4lite: 80.5,
    },
]

const liteInstructionData: BenchmarkPoint[] = [
    {
        name: 'IFEval',
        gptoss120b: 88.9,
        gptoss20b: 88.2,
        qwen3_next_80b_a3b_thinking: 88.9,
        qwen3_30b_a3b_thinking: 88.9,
        claude45haiku: 90.5,
        gpt5_nano: 89.9,
        gemini3_flash_lite: 91.0,
        ngen4lite: 92.5,
    },
    {
        name: 'IFBench',
        gptoss120b: 69.0,
        gptoss20b: 65.1,
        qwen3_next_80b_a3b_thinking: 61.5,
        qwen3_30b_a3b_thinking: 51.5,
        claude45haiku: 62.0,
        gpt5_nano: 60.5,
        gemini3_flash_lite: 63.2,
        ngen4lite: 63.5,
    },
    {
        name: 'MultiChallenge',
        gptoss120b: 45.3,
        gptoss20b: 40.1,
        qwen3_next_80b_a3b_thinking: 51.3,
        qwen3_30b_a3b_thinking: 46.5,
        claude45haiku: 50.2,
        gpt5_nano: 48.8,
        gemini3_flash_lite: 51.0,
        ngen4lite: 52.8,
    },
]

const liteLongContextData: BenchmarkPoint[] = [
    {
        name: 'AA-LCR',
        gptoss120b: 50.7,
        gptoss20b: 30.7,
        qwen3_next_80b_a3b_thinking: 51.7,
        qwen3_30b_a3b_thinking: 49.0,
        claude45haiku: 58.5,
        gpt5_nano: 56.8,
        gemini3_flash_lite: 60.2,
        ngen4lite: 60.5,
    },
    {
        name: 'LongBench v2',
        gptoss120b: 48.2,
        gptoss20b: 45.6,
        qwen3_next_80b_a3b_thinking: 48.0,
        qwen3_30b_a3b_thinking: 44.8,
        claude45haiku: 51.2,
        gpt5_nano: 50.5,
        gemini3_flash_lite: 52.8,
        ngen4lite: 53.8,
    },
]

const liteReasoningCodingData: BenchmarkPoint[] = [
    {
        name: 'HMMT Feb 25',
        gptoss120b: 90.0,
        gptoss20b: 76.7,
        qwen3_next_80b_a3b_thinking: 73.7,
        qwen3_30b_a3b_thinking: 63.1,
        claude45haiku: 72.5,
        gpt5_nano: 73.0,
        gemini3_flash_lite: 75.5,
        ngen4lite: 78.5,
    },
    {
        name: 'HMMT Nov 25',
        gptoss120b: 90.0,
        gptoss20b: 81.8,
        qwen3_next_80b_a3b_thinking: 81.2,
        qwen3_30b_a3b_thinking: 73.8,
        claude45haiku: 75.0,
        gpt5_nano: 75.8,
        gemini3_flash_lite: 78.0,
        ngen4lite: 81.0,
    },
    {
        name: 'LiveCodeBench v6',
        gptoss120b: 82.7,
        gptoss20b: 74.6,
        qwen3_next_80b_a3b_thinking: 68.7,
        qwen3_30b_a3b_thinking: 66.0,
        claude45haiku: 58.0,
        gpt5_nano: 57.5,
        gemini3_flash_lite: 60.2,
        ngen4lite: 60.5,
    },
    {
        name: 'OJBench',
        gptoss120b: 41.5,
        gptoss20b: 36.3,
        qwen3_next_80b_a3b_thinking: 29.7,
        qwen3_30b_a3b_thinking: 25.1,
        claude45haiku: 25.5,
        gpt5_nano: 25.0,
        gemini3_flash_lite: 27.8,
        ngen4lite: 27.0,
    },
]

const liteGeneralAgentData: BenchmarkPoint[] = [
    {
        name: 'BFCL-V4',
        qwen3_next_80b_a3b_thinking: 49.7,
        qwen3_30b_a3b_thinking: 42.4,
        claude45haiku: 55.0,
        gpt5_nano: 53.8,
        gemini3_flash_lite: 58.5,
        ngen4lite: 54.5,
    },
    {
        name: 'TAU2-Bench',
        qwen3_next_80b_a3b_thinking: 57.4,
        qwen3_30b_a3b_thinking: 41.9,
        claude45haiku: 78.0,
        gpt5_nano: 77.2,
        gemini3_flash_lite: 80.5,
        ngen4lite: 83.0,
    },
    {
        name: 'VITA-Bench',
        qwen3_next_80b_a3b_thinking: 29.5,
        qwen3_30b_a3b_thinking: 14.1,
        claude45haiku: 24.5,
        gpt5_nano: 23.0,
        gemini3_flash_lite: 26.2,
        ngen4lite: 25.0,
    },
    {
        name: 'DeepPlanning',
        qwen3_next_80b_a3b_thinking: 0.4,
        qwen3_30b_a3b_thinking: 4.9,
        claude45haiku: 18.5,
        gpt5_nano: 17.9,
        gemini3_flash_lite: 19.5,
        ngen4lite: 20.2,
    },
]

const liteMultilingualData: BenchmarkPoint[] = [
    {
        name: 'MMMLU',
        gptoss120b: 78.2,
        gptoss20b: 69.7,
        qwen3_next_80b_a3b_thinking: 81.3,
        qwen3_30b_a3b_thinking: 78.4,
        claude45haiku: 77.5,
        gpt5_nano: 76.8,
        gemini3_flash_lite: 79.5,
        ngen4lite: 80.0,
    },
    {
        name: 'MMLU-ProX',
        gptoss120b: 74.5,
        gptoss20b: 67.3,
        qwen3_next_80b_a3b_thinking: 73.6,
        qwen3_30b_a3b_thinking: 69.1,
        claude45haiku: 72.0,
        gpt5_nano: 71.2,
        gemini3_flash_lite: 73.8,
        ngen4lite: 75.2,
    },
    {
        name: 'NOVA-63',
        gptoss120b: 51.1,
        gptoss20b: 48.7,
        qwen3_next_80b_a3b_thinking: 53.3,
        qwen3_30b_a3b_thinking: 52.5,
        claude45haiku: 54.8,
        gpt5_nano: 54.0,
        gemini3_flash_lite: 55.5,
        ngen4lite: 57.5,
    },
    {
        name: 'INCLUDE',
        gptoss120b: 74.0,
        gptoss20b: 65.3,
        qwen3_next_80b_a3b_thinking: 78.3,
        qwen3_30b_a3b_thinking: 74.4,
        claude45haiku: 72.5,
        gpt5_nano: 71.8,
        gemini3_flash_lite: 73.5,
        ngen4lite: 74.8,
    },
    {
        name: 'Global PIQA',
        gptoss120b: 84.1,
        gptoss20b: 79.8,
        qwen3_next_80b_a3b_thinking: 83.5,
        qwen3_30b_a3b_thinking: 80.2,
        claude45haiku: 79.5,
        gpt5_nano: 79.0,
        gemini3_flash_lite: 81.0,
        ngen4lite: 82.0,
    },
    {
        name: 'PolyMATH',
        gptoss120b: 54.0,
        gptoss20b: 30.9,
        qwen3_next_80b_a3b_thinking: 62.4,
        qwen3_30b_a3b_thinking: 52.6,
        claude45haiku: 52.0,
        gpt5_nano: 51.5,
        gemini3_flash_lite: 54.2,
        ngen4lite: 55.0,
    },
    {
        name: 'WMT24++',
        gptoss120b: 74.4,
        gptoss20b: 67.8,
        qwen3_next_80b_a3b_thinking: 57.4,
        qwen3_30b_a3b_thinking: 69.3,
        claude45haiku: 68.5,
        gpt5_nano: 67.9,
        gemini3_flash_lite: 70.8,
        ngen4lite: 70.5,
    },
    {
        name: 'MAXIFE',
        gptoss120b: 83.7,
        gptoss20b: 80.1,
        qwen3_next_80b_a3b_thinking: 79.9,
        qwen3_30b_a3b_thinking: 77.4,
        claude45haiku: 79.2,
        gpt5_nano: 78.8,
        gemini3_flash_lite: 81.0,
        ngen4lite: 81.5,
    },
]

const ngen4KnowledgeData: BenchmarkPoint[] = [
    {
        name: 'MMLU-Pro',
        ngen4: 89.6,
        gemini31_pro: 89.8,
        gpt54: 87.4,
        claude_opus_46: 89.5,
        claude_sonnet_45: 80.8,
        qwen35_122b: 86.7,
        qwen35_35b: 85.3,
        glm5: 87.5,
        deepseek_v32: 87.0,
        kimi_k25: 86.0,
        gptoss120b: 80.8,
    },
    {
        name: 'MMLU-Redux',
        ngen4: 98.0,
        gemini31_pro: 98.5,
        gpt54: 97.5,
        claude_opus_46: 98.0,
        claude_sonnet_45: 91.0,
        qwen35_122b: 94.0,
        qwen35_35b: 93.3,
        glm5: 94.5,
        deepseek_v32: 94.0,
        kimi_k25: 92.5,
        gptoss120b: 91.0,
    },
    {
        name: 'C-Eval',
        ngen4: 94.7,
        gemini31_pro: 95.0,
        gpt54: 93.8,
        claude_opus_46: 94.5,
        claude_sonnet_45: 76.2,
        qwen35_122b: 91.9,
        qwen35_35b: 90.2,
        glm5: 96.5,
        deepseek_v32: 95.0,
        kimi_k25: 93.5,
        gptoss120b: 76.2,
    },
    {
        name: 'SuperGPQA',
        ngen4: 66.6,
        gemini31_pro: 69.0,
        gpt54: 68.5,
        claude_opus_46: 67.0,
        claude_sonnet_45: 54.6,
        qwen35_122b: 67.1,
        qwen35_35b: 63.4,
        glm5: undefined,
        deepseek_v32: 65.0,
        kimi_k25: undefined,
        gptoss120b: 54.6,
    },
    {
        name: 'GPQA Diamond',
        ngen4: 90.1,
        gemini31_pro: 80.1,
        gpt54: 80.1,
        claude_opus_46: 80.1,
        claude_sonnet_45: 71.5,
        qwen35_122b: 77.2,
        qwen35_35b: 73.4,
        glm5: undefined,
        deepseek_v32: undefined,
        kimi_k25: undefined,
        gptoss120b: 80.1,
    },
]

const ngen4InstructionData: BenchmarkPoint[] = [
    {
        name: 'IFEval',
        ngen4: 96.5,
        gemini31_pro: 96.8,
        gpt54: 95.5,
        claude_opus_46: 96.5,
        claude_sonnet_45: 88.9,
        qwen35_122b: 93.4,
        qwen35_35b: 91.9,
        glm5: 94.0,
        deepseek_v32: 93.5,
        kimi_k25: 91.0,
        gptoss120b: 88.9,
    },
    {
        name: 'IFBench',
        ngen4: 73.7,
        gemini31_pro: 78.0,
        gpt54: 77.0,
        claude_opus_46: 76.5,
        claude_sonnet_45: 69.0,
        qwen35_122b: 76.1,
        qwen35_35b: 70.2,
        glm5: undefined,
        deepseek_v32: undefined,
        kimi_k25: undefined,
        gptoss120b: 69.0,
    },
    {
        name: 'MultiChallenge',
        ngen4: 63.0,
        gemini31_pro: 65.0,
        gpt54: 64.0,
        claude_opus_46: 64.5,
        claude_sonnet_45: 45.3,
        qwen35_122b: 61.5,
        qwen35_35b: 60.0,
        glm5: undefined,
        deepseek_v32: undefined,
        kimi_k25: undefined,
        gptoss120b: 45.3,
    },
]

const ngen4LongContextData: BenchmarkPoint[] = [
    {
        name: 'AA-LCR',
        ngen4: 61.4,
        gemini31_pro: 70.0,
        gpt54: 68.0,
        claude_opus_46: 69.0,
        claude_sonnet_45: 50.7,
        qwen35_122b: 66.9,
        qwen35_35b: 58.5,
        glm5: undefined,
        deepseek_v32: undefined,
        kimi_k25: undefined,
        gptoss120b: 50.7,
    },
    {
        name: 'LongBench v2',
        ngen4: 62.0,
        gemini31_pro: 75.0,
        gpt54: 72.0,
        claude_opus_46: 74.5,
        claude_sonnet_45: 48.2,
        qwen35_122b: 60.2,
        qwen35_35b: 59.0,
        glm5: 68.5,
        deepseek_v32: 65.0,
        kimi_k25: 64.0,
        gptoss120b: 48.2,
    },
]

const ngen4EngineeringData: BenchmarkPoint[] = [
    {
        name: 'SWE-bench',
        ngen4: 72.7,
        claude_opus_46: 80.9,
        gpt54: 80.0,
        gemini31_pro: 80.6,
        glm5: 77.8,
        deepseek_v32: 73.1,
        qwen35_122b: 72.0,
        qwen35_35b: 69.2,
        claude_sonnet_45: 62.0,
        gptoss120b: 62.0,
    },
    {
        name: 'TerminalBench',
        ngen4: 42.5,
        claude_opus_46: 65.4,
        gpt54: 75.1,
        gemini31_pro: 68.5,
        glm5: 60.7,
        deepseek_v32: 39.3,
        qwen35_122b: 49.4,
        qwen35_35b: 40.5,
        claude_sonnet_45: 18.7,
        gptoss120b: 18.7,
    },
    {
        name: 'LiveCodeBench',
        ngen4: 78.3,
        claude_opus_46: 84.8,
        gpt54: 87.7,
        gemini31_pro: 90.7,
        glm5: 84.0,
        deepseek_v32: 82.0,
        qwen35_122b: 78.9,
        qwen35_35b: 74.6,
        claude_sonnet_45: 82.7,
        gptoss120b: 82.7,
    },
    {
        name: 'OJBench',
        ngen4: 37.8,
        claude_opus_46: 45.0,
        gpt54: 46.0,
        gemini31_pro: 48.0,
        glm5: undefined,
        deepseek_v32: undefined,
        qwen35_122b: 39.5,
        qwen35_35b: 36.0,
        claude_sonnet_45: 41.5,
        gptoss120b: 41.5,
    },
    {
        name: 'FullStack (EN)',
        ngen4: 61.0,
        claude_opus_46: 68.0,
        gpt54: 70.0,
        gemini31_pro: 72.0,
        glm5: undefined,
        deepseek_v32: undefined,
        qwen35_122b: 62.6,
        qwen35_35b: 58.1,
        claude_sonnet_45: 58.9,
        gptoss120b: 58.9,
    },
    {
        name: 'FullStack (ZH)',
        ngen4: 57.8,
        claude_opus_46: 60.0,
        gpt54: 62.0,
        gemini31_pro: 63.0,
        glm5: undefined,
        deepseek_v32: undefined,
        qwen35_122b: 58.7,
        qwen35_35b: 55.0,
        claude_sonnet_45: 60.4,
        gptoss120b: 60.4,
    },
]

const ngen4GeneralAgentData: BenchmarkPoint[] = [
    {
        name: 'BFCL-V4',
        ngen4: 70.7,
        claude_opus_46: 88.0,
        gemini31_pro: 90.0,
        gpt54: 85.0,
        glm5: 86.0,
        qwen35_122b: 72.2,
        qwen35_35b: 67.3,
        deepseek_v32: 75.0,
        claude_sonnet_45: 54.8,
    },
    {
        name: 'TAU2',
        ngen4: 85.3,
        claude_opus_46: 91.6,
        gemini31_pro: 90.8,
        gpt54: 85.5,
        glm5: 89.7,
        qwen35_122b: 79.5,
        qwen35_35b: 81.2,
        deepseek_v32: 85.3,
        claude_sonnet_45: 58.5,
    },
    {
        name: 'VITA',
        ngen4: 33.5,
        claude_opus_46: 45.0,
        gemini31_pro: 44.0,
        gpt54: 42.0,
        glm5: undefined,
        qwen35_122b: 33.6,
        qwen35_35b: 31.9,
        deepseek_v32: undefined,
        claude_sonnet_45: undefined,
    },
    {
        name: 'DeepPlanning',
        ngen4: 24.0,
        claude_opus_46: 35.0,
        gemini31_pro: 34.0,
        gpt54: 32.0,
        glm5: undefined,
        qwen35_122b: 24.1,
        qwen35_35b: 22.8,
        deepseek_v32: undefined,
        claude_sonnet_45: 17.1,
    },
    {
        name: 'BrowseComp',
        ngen4: 64.1,
        claude_opus_46: 84.0,
        gemini31_pro: 78.0,
        gpt54: 82.7,
        glm5: 75.9,
        qwen35_122b: 63.8,
        qwen35_35b: 61.0,
        deepseek_v32: 51.4,
        claude_sonnet_45: 41.1,
    },
    {
        name: 'WideSearch',
        ngen4: 60.0,
        claude_opus_46: 75.0,
        gemini31_pro: 72.0,
        gpt54: 70.0,
        glm5: undefined,
        qwen35_122b: 60.5,
        qwen35_35b: 57.1,
        deepseek_v32: undefined,
        claude_sonnet_45: 40.4,
    },
]

const ngen4MultilingualData: BenchmarkPoint[] = [
    {
        name: 'MMMLU',
        ngen4: 89.5,
        gemini31_pro: 92.0,
        gpt54: 91.0,
        claude_opus_46: 91.5,
        qwen35_122b: 86.7,
        qwen35_35b: 85.2,
        deepseek_v32: 88.0,
        sarvam_105b: 84.0,
        claude_sonnet_45: 78.2,
    },
    {
        name: 'MMLU-ProX',
        ngen4: 85.1,
        gemini31_pro: 88.0,
        gpt54: 86.5,
        claude_opus_46: 87.0,
        qwen35_122b: 82.2,
        qwen35_35b: 81.0,
        deepseek_v32: 84.5,
        sarvam_105b: 80.0,
        claude_sonnet_45: 74.5,
    },
    {
        name: 'Global PIQA',
        ngen4: 90.9,
        gemini31_pro: 94.0,
        gpt54: 93.0,
        claude_opus_46: 93.5,
        qwen35_122b: 88.4,
        qwen35_35b: 86.6,
        deepseek_v32: 89.0,
        sarvam_105b: 85.0,
        claude_sonnet_45: 84.1,
    },
    {
        name: 'PolyMATH',
        ngen4: 67.6,
        gemini31_pro: 75.0,
        gpt54: 74.0,
        claude_opus_46: 73.0,
        qwen35_122b: 68.9,
        qwen35_35b: 64.4,
        deepseek_v32: 71.0,
        sarvam_105b: undefined,
        claude_sonnet_45: 54.0,
    },
    {
        name: 'WMT24++',
        ngen4: 80.1,
        gemini31_pro: 86.0,
        gpt54: 85.0,
        claude_opus_46: 85.5,
        qwen35_122b: 78.3,
        qwen35_35b: 76.3,
        deepseek_v32: 81.0,
        sarvam_105b: 77.0,
        claude_sonnet_45: 74.4,
    },
]

const ngen4VisionData: BenchmarkPoint[] = [
    {
        name: 'MMMU',
        ngen4: 85.5,
        gemini31_pro: 88.0,
        gpt54: 86.7,
        claude_opus_46: 80.7,
        qwen35_122b: 83.9,
        qwen35_35b: 81.4,
        glm5: 85.0,
        minimax_m27: 80.0,
        claude_sonnet_45: 79.6,
    },
    {
        name: 'MMMU-Pro',
        ngen4: 78.9,
        gemini31_pro: 81.0,
        gpt54: 81.2,
        claude_opus_46: 74.0,
        qwen35_122b: 76.9,
        qwen35_35b: 75.1,
        glm5: 77.0,
        minimax_m27: 72.0,
        claude_sonnet_45: 68.4,
    },
    {
        name: 'MathVision',
        ngen4: 88.1,
        gemini31_pro: 90.0,
        gpt54: 89.0,
        claude_opus_46: 85.0,
        qwen35_122b: 86.2,
        qwen35_35b: 83.9,
        glm5: 87.0,
        minimax_m27: undefined,
        claude_sonnet_45: 71.1,
    },
    {
        name: 'MathVista',
        ngen4: 90.5,
        gemini31_pro: 93.0,
        gpt54: 92.0,
        claude_opus_46: 88.0,
        qwen35_122b: 87.4,
        qwen35_35b: 86.2,
        glm5: 89.0,
        minimax_m27: undefined,
        claude_sonnet_45: 79.8,
    },
    {
        name: 'RealWorldQA',
        ngen4: 88.3,
        gemini31_pro: 91.0,
        gpt54: 90.0,
        claude_opus_46: 87.0,
        qwen35_122b: 85.1,
        qwen35_35b: 84.1,
        glm5: 88.0,
        minimax_m27: undefined,
        claude_sonnet_45: 70.3,
    },
    {
        name: 'OCRBench',
        ngen4: 95.5,
        gemini31_pro: 96.0,
        gpt54: 95.0,
        claude_opus_46: 90.0,
        qwen35_122b: 92.1,
        qwen35_35b: 91.0,
        glm5: 94.0,
        minimax_m27: undefined,
        claude_sonnet_45: 76.6,
    },
    {
        name: 'ERQA',
        ngen4: 68.0,
        gemini31_pro: 74.0,
        gpt54: 72.0,
        claude_opus_46: 69.0,
        qwen35_122b: 62.0,
        qwen35_35b: 64.8,
        glm5: 70.0,
        minimax_m27: undefined,
        claude_sonnet_45: 45.0,
    },
    {
        name: 'VideoMME',
        ngen4: 90.9,
        gemini31_pro: 92.0,
        gpt54: 90.0,
        claude_opus_46: 87.0,
        qwen35_122b: 87.3,
        qwen35_35b: 86.6,
        glm5: 88.0,
        minimax_m27: undefined,
        claude_sonnet_45: 81.1,
    },
]

// NGen-4.1 Lite Preview data (from benchmark image)
const ngen41LiteKnowledgeData: BenchmarkPoint[] = [
    { name: 'MMLU-Pro', ngen41lite: 88.2, gptoss120b: 80.8, claude45haiku: 78.5, gpt5_nano: 77.2, gemini3_flash_lite: 79.8 },
    { name: 'MMLU-Redux', ngen41lite: 94.7, gptoss120b: 91.0, claude45haiku: 89.5, gpt5_nano: 88.9, gemini3_flash_lite: 90.2 },
    { name: 'C-Eval', ngen41lite: 92.3, gptoss120b: 76.2, claude45haiku: 83.0, gpt5_nano: 82.4, gemini3_flash_lite: 84.5 },
]

const ngen41LiteCapabilityData: BenchmarkPoint[] = [
    { name: 'GPQA Diamond', ngen41lite: 84.5, gptoss120b: 80.1, claude45haiku: 75.8, gpt5_nano: 74.6, gemini3_flash_lite: 77.0 },
    { name: 'IFEval', ngen41lite: 94.1, gptoss120b: 88.9, claude45haiku: 90.5, gpt5_nano: 89.9, gemini3_flash_lite: 91.0 },
    { name: 'MultiChallenge', ngen41lite: 55.2, gptoss120b: 45.3, claude45haiku: 50.2, gpt5_nano: 48.8, gemini3_flash_lite: 51.0 },
]

// NGen-4.1 Mini data
const ngen41MiniKnowledgeData: BenchmarkPoint[] = [
    { name: 'MMLU-Pro', ngen41mini: 88.4, gpt55: 92.1, claude_opus_47: 91.3, gemini31_pro: 90.2 },
    { name: 'MMLU-Redux', ngen41mini: 96.0, gpt55: 97.5, claude_opus_47: 96.8, gemini31_pro: 95.4 },
    { name: 'C-Eval', ngen41mini: 93.8, gpt55: 95.0, claude_opus_47: 93.4, gemini31_pro: 94.8 },
    { name: 'SuperGPQA', ngen41mini: 64.5, gpt55: 72.4, claude_opus_47: 70.6, gemini31_pro: 67.2 },
    { name: 'GPQA Diamond', ngen41mini: 87.2, gpt55: 93.6, claude_opus_47: 94.2, gemini31_pro: 94.3 },
]

const ngen41MiniInstructionData: BenchmarkPoint[] = [
    { name: 'IFEval', ngen41mini: 95.0, gpt55: 92.4, claude_opus_47: 91.8, gemini31_pro: 90.6 },
    { name: 'IFBench', ngen41mini: 71.0, gpt55: 79.8, claude_opus_47: 76.3, gemini31_pro: 72.0 },
    { name: 'MultiChallenge', ngen41mini: 60.8, gpt55: 70.5, claude_opus_47: 68.2, gemini31_pro: 64.7 },
    { name: 'MAXIFE', ngen41mini: 89.1, gpt55: 94.3, claude_opus_47: 92.2, gemini31_pro: 90.1 },
]

const ngen41MiniMathData: BenchmarkPoint[] = [
    { name: 'HMMT Feb 25', ngen41mini: 89.4, gpt55: 95.2, claude_opus_47: 91.1, gemini31_pro: 88.0 },
    { name: 'HMMT Nov 25', ngen41mini: 88.8, gpt55: 94.4, claude_opus_47: 90.7, gemini31_pro: 87.2 },
    { name: 'FrontierMath T1-3', ngen41mini: 41.2, gpt55: 51.7, claude_opus_47: 43.8, gemini31_pro: 36.9 },
    { name: 'FrontierMath T4', ngen41mini: 22.5, gpt55: 35.4, claude_opus_47: 22.9, gemini31_pro: 16.7 },
    { name: "HLE (tools)", ngen41mini: 43.0, gpt55: 52.2, claude_opus_47: 54.7, gemini31_pro: 51.4 },
    { name: 'ARC-AGI-1', ngen41mini: 89.1, gpt55: 95.0, claude_opus_47: 93.5, gemini31_pro: 98.0 },
    { name: 'ARC-AGI-2', ngen41mini: 69.5, gpt55: 85.0, claude_opus_47: 75.8, gemini31_pro: 77.1 },
]

const ngen41MiniCodingData: BenchmarkPoint[] = [
    { name: 'LiveCodeBench v6', ngen41mini: 72.5, gpt55: 85.5, claude_opus_47: 78.4, gemini31_pro: 74.8 },
    { name: 'OJBench', ngen41mini: 35.4, gpt55: 49.2, claude_opus_47: 43.1, gemini31_pro: 37.0 },
    { name: 'SWE-Bench Pro', ngen41mini: 48.5, gpt55: 58.6, claude_opus_47: 64.3, gemini31_pro: 54.2 },
    { name: 'Terminal-Bench 2.0', ngen41mini: 74.2, gpt55: 82.7, claude_opus_47: 69.4, gemini31_pro: 68.5 },
    { name: 'Expert-SWE', ngen41mini: 60.1, gpt55: 73.1, claude_opus_47: 69.0, gemini31_pro: 61.4 },
]

const ngen41MiniAgentData: BenchmarkPoint[] = [
    { name: 'BFCL-V4', ngen41mini: 72.0, gpt55: 82.0, claude_opus_47: 79.0, gemini31_pro: 74.0 },
    { name: 'TAU2-Bench', ngen41mini: 84.6, gpt55: 98.0, claude_opus_47: 88.2, gemini31_pro: 84.0 },
    { name: 'VITA-Bench', ngen41mini: 36.0, gpt55: 51.0, claude_opus_47: 46.2, gemini31_pro: 39.5 },
    { name: 'DeepPlanning', ngen41mini: 24.2, gpt55: 46.5, claude_opus_47: 40.4, gemini31_pro: 31.2 },
]

const ngen41MiniMultilingualData: BenchmarkPoint[] = [
    { name: 'MMMLU', ngen41mini: 87.0, gpt55: 91.8, claude_opus_47: 90.1, gemini31_pro: 89.7 },
    { name: 'MMLU-ProX', ngen41mini: 82.1, gpt55: 88.0, claude_opus_47: 86.4, gemini31_pro: 84.2 },
    { name: 'NOVA-63', ngen41mini: 61.4, gpt55: 68.8, claude_opus_47: 66.9, gemini31_pro: 64.1 },
    { name: 'INCLUDE', ngen41mini: 81.7, gpt55: 88.4, claude_opus_47: 85.0, gemini31_pro: 83.6 },
    { name: 'Global PIQA', ngen41mini: 88.6, gpt55: 92.2, claude_opus_47: 91.5, gemini31_pro: 89.7 },
    { name: 'PolyMATH', ngen41mini: 63.9, gpt55: 77.0, claude_opus_47: 71.3, gemini31_pro: 66.4 },
    { name: 'WMT24++', ngen41mini: 78.5, gpt55: 86.2, claude_opus_47: 82.1, gemini31_pro: 80.0 },
]

const ngen41MiniVisionData: BenchmarkPoint[] = [
    { name: 'MMMU', ngen41mini: 84.0, gpt55: 75.8, claude_opus_47: 78.0, gemini31_pro: 73.4 },
    { name: 'MMMU-Pro', ngen41mini: 76.5, gpt55: 81.2, claude_opus_47: 79.0, gemini31_pro: 80.5 },
    { name: 'MathVision', ngen41mini: 84.8, gpt55: 62.2, claude_opus_47: 70.1, gemini31_pro: 52.1 },
    { name: 'MathVista mini', ngen41mini: 91.2, gpt55: 71.5, claude_opus_47: 76.0, gemini31_pro: 72.8 },
    { name: 'DynaMath', ngen41mini: 89.0, gpt55: 78.0, claude_opus_47: 80.0, gemini31_pro: 69.9 },
    { name: 'RealWorldQA', ngen41mini: 86.0, gpt55: 71.8, claude_opus_47: 74.2, gemini31_pro: 72.2 },
    { name: 'MMBenchEN', ngen41mini: 95.0, gpt55: 80.3, claude_opus_47: 84.1, gemini31_pro: 82.7 },
    { name: 'HallusionBench', ngen41mini: 75.4, gpt55: 58.4, claude_opus_47: 63.8, gemini31_pro: 64.5 },
]

const ngen41MiniDocVideoData: BenchmarkPoint[] = [
    { name: 'OmniDocBench1.5', ngen41mini: 92.6, gpt55: 55.9, claude_opus_47: 71.5, gemini31_pro: 79.4 },
    { name: 'OCRBench', ngen41mini: 94.1, gpt55: 75.3, claude_opus_47: 80.2, gemini31_pro: 82.5 },
    { name: 'VideoMME', ngen41mini: 89.3, gpt55: 71.7, claude_opus_47: 75.0, gemini31_pro: 74.6 },
    { name: 'MLVU', ngen41mini: 89.0, gpt55: 69.2, claude_opus_47: 73.4, gemini31_pro: 78.5 },
]

const ngen41MiniAgentVisionData: BenchmarkPoint[] = [
    { name: 'OSWorld-Verified', ngen41mini: 48.2, gpt55: 78.7, claude_opus_47: 78.0, gemini31_pro: 60.0 },
    { name: 'AndroidWorld', ngen41mini: 63.6, gpt55: 74.0, claude_opus_47: 69.1, gemini31_pro: 66.0 },
    { name: 'TIR-Bench', ngen41mini: 52.0, gpt55: 55.6, claude_opus_47: 50.0, gemini31_pro: 48.8 },
    { name: 'SLAKE', ngen41mini: 84.9, gpt55: 57.0, claude_opus_47: 69.0, gemini31_pro: 65.0 },
    { name: 'PMC-VQA', ngen41mini: 64.0, gpt55: 37.8, claude_opus_47: 46.2, gemini31_pro: 48.8 },
    { name: 'MedXpertQA-MM', ngen41mini: 56.4, gpt55: 26.7, claude_opus_47: 38.0, gemini31_pro: 35.3 },
]

const ngen41MiniLongContextData: BenchmarkPoint[] = [
    { name: 'AA-LCR', ngen41mini: 69.5, gpt55: 80.0, claude_opus_47: 82.5, gemini31_pro: 71.4 },
    { name: 'LongBench v2', ngen41mini: 61.7, gpt55: 70.3, claude_opus_47: 72.0, gemini31_pro: 66.1 },
    { name: 'Graphwalks 256k', ngen41mini: 61.0, gpt55: 73.7, claude_opus_47: 76.9, gemini31_pro: 68.0 },
    { name: 'Graphwalks 1M', ngen41mini: 34.8, gpt55: 45.4, claude_opus_47: 41.2, gemini31_pro: 36.0 },
    { name: 'MRCR 128K-256K', ngen41mini: 71.2, gpt55: 87.5, claude_opus_47: 59.2, gemini31_pro: 65.0 },
    { name: 'MRCR 256K-512K', ngen41mini: 66.5, gpt55: 81.5, claude_opus_47: 46.0, gemini31_pro: 58.0 },
    { name: 'MRCR 512K-1M', ngen41mini: 58.5, gpt55: 74.0, claude_opus_47: 32.2, gemini31_pro: 44.0 },
]

// NGen-4.1 Pro data (updated with corrected benchmark values)
const ngen41ProKnowledgeData: BenchmarkPoint[] = [
    { name: 'MMLU Pro', ngen41pro: 95.8, gpt55: 92.1, claude_opus_47: 92.1, gemini31_pro: 96.5, mythos_preview: 94.3 },
    { name: 'MMLU Redux', ngen41pro: 97.8, gpt55: 96.5, claude_opus_47: 94.6, gemini31_pro: 96.8, mythos_preview: 94.1 },
    { name: 'MMLU-ProX', ngen41pro: 91.2, gpt55: 84.3, claude_opus_47: 81.2, gemini31_pro: 85.9, mythos_preview: 81.0 },
    { name: 'MMMLU', ngen41pro: 94.9, gpt55: 89.2, claude_opus_47: 89.3, gemini31_pro: 92.6, mythos_preview: 91.8 },
    { name: 'C-Eval', ngen41pro: 97.3, gpt55: 94.3, claude_opus_47: 92.1, gemini31_pro: 94.3, mythos_preview: 91.8 },
]

const ngen41ProInstructionData: BenchmarkPoint[] = [
    { name: 'IFEval', ngen41pro: 97.9, gpt55: 94.7, claude_opus_47: 89.7, gemini31_pro: 91.2, mythos_preview: 87.6 },
]

const ngen41ProReasoningData: BenchmarkPoint[] = [
    { name: 'AIME26', ngen41pro: 98.1, gpt55: 95.4, claude_opus_47: 95.4, gemini31_pro: 96.7, mythos_preview: 92.4 },
    { name: 'SuperGPQA', ngen41pro: 73.8, gpt55: 68.2, claude_opus_47: 64.2, gemini31_pro: 68.9, mythos_preview: 62.5 },
    { name: 'GPQA Diamond', ngen41pro: 98.2, gpt55: 95.5, claude_opus_47: 94.2, gemini31_pro: 94.4, mythos_preview: 94.3 },
]

const ngen41ProEngineeringData: BenchmarkPoint[] = [
    { name: 'SWE-Bench Verified', ngen41pro: 84.2, gpt55: 80.3, claude_opus_47: 87.6, gemini31_pro: 82.6, mythos_preview: 93.9 },
    { name: 'SWE Bench Pro', ngen41pro: 60.5, gpt55: 55.2, claude_opus_47: 64.3, gemini31_pro: 58.6, mythos_preview: 77.8 },
    { name: 'SWE-Bench Multilingual', ngen41pro: 78.3, gpt55: 72.5, claude_opus_47: 80.5 },
]

const ngen41ProAgentData: BenchmarkPoint[] = [
    { name: 'Terminal Bench 2.0', ngen41pro: 66.3, gpt55: 60.7, claude_opus_47: 69.4, gemini31_pro: 82.7, mythos_preview: 68.5 },
    { name: 'MCP-Atlas', ngen41pro: 72.1, gpt55: 68.2, claude_opus_47: 77.3, gemini31_pro: 69.2 },
]

// NGen-4.1 data (updated with corrected benchmark values)
const ngen41KnowledgeData: BenchmarkPoint[] = [
    { name: 'MMLU Pro', ngen41: 92.1, claude_opus_47: 92.1, gpt55: 96.5, gemini31_pro: 94.3, mythos_preview: 94.7 },
    { name: 'MMLU Redux', ngen41: 96.5, claude_opus_47: 94.6, gpt55: 96.8, gemini31_pro: 94.1, mythos_preview: 95.9 },
    { name: 'MMLU-ProX', ngen41: 84.3, claude_opus_47: 81.2, gpt55: 85.9, gemini31_pro: 81.0, mythos_preview: 84.8 },
    { name: 'MMMLU', ngen41: 89.2, claude_opus_47: 89.3, gpt55: 91.4, gemini31_pro: 92.6, mythos_preview: 91.1 },
    { name: 'C-Eval', ngen41: 94.3, claude_opus_47: 92.1, gpt55: 94.3, gemini31_pro: 91.8, mythos_preview: 95.2 },
]

const ngen41InstructionData: BenchmarkPoint[] = [
    { name: 'IFEval', ngen41: 94.7, claude_opus_47: 89.7, gpt55: 91.2, gemini31_pro: 87.6, mythos_preview: 92.8 },
]

const ngen41ReasoningData: BenchmarkPoint[] = [
    { name: 'AIME26', ngen41: 95.4, claude_opus_47: 95.4, gpt55: 96.7, gemini31_pro: 92.4, mythos_preview: 95.1 },
    { name: 'SuperGPQA', ngen41: 68.2, claude_opus_47: 64.2, gpt55: 68.9, gemini31_pro: 62.5, mythos_preview: 69.5 },
    { name: 'GPQA Diamond', ngen41: 95.5, claude_opus_47: 94.2, gpt55: 94.4, gemini31_pro: 94.3, mythos_preview: 94.6 },
]

const ngen41EngineeringData: BenchmarkPoint[] = [
    { name: 'SWE-Bench Verified', ngen41: 80.3, claude_opus_47: 87.6, gpt55: 82.6, gemini31_pro: 80.6, mythos_preview: 93.9 },
    { name: 'SWE Bench Pro', ngen41: 55.2, claude_opus_47: 64.3, gpt55: 58.6, gemini31_pro: 54.2, mythos_preview: 77.8 },
    { name: 'SWE-Bench Multilingual', ngen41: 72.5, claude_opus_47: 80.5, gpt55: undefined },
]

const ngen41AgentData: BenchmarkPoint[] = [
    { name: 'Terminal Bench 2.0', ngen41: 60.7, claude_opus_47: 69.4, gpt55: 82.7, gemini31_pro: 68.5, mythos_preview: 82.0 },
    { name: 'MCP-Atlas', ngen41: 68.2, claude_opus_47: 77.3, gpt55: 68.1, gemini31_pro: 69.2 },
]

const modelSpecs: Record<SupportedModel, ModelSpec> = {
    ngen4: {
        title: 'NGen-4 Evaluations',
        description: 'ShadCN benchmark charts for the new NGen-4 model using the benchmark sheet you provided.',
        charts: [
            {
                title: 'NGen-4 Knowledge & Reasoning',
                description: 'Academic knowledge, Chinese evaluation, and graduate-level reasoning benchmarks.',
                data: ngen4KnowledgeData,
                bars: [
                    'ngen4',
                    'gemini31_pro',
                    'gpt54',
                    'claude_opus_46',
                    'claude_sonnet_45',
                    'qwen35_122b',
                    'qwen35_35b',
                    'glm5',
                    'deepseek_v32',
                    'kimi_k25',
                    'gptoss120b',
                ],
            },
            {
                title: 'NGen-4 Instruction Following',
                description: 'Instruction alignment, prompt following, and multi-turn challenge compliance.',
                data: ngen4InstructionData,
                bars: [
                    'ngen4',
                    'gemini31_pro',
                    'gpt54',
                    'claude_opus_46',
                    'claude_sonnet_45',
                    'qwen35_122b',
                    'qwen35_35b',
                    'glm5',
                    'deepseek_v32',
                    'kimi_k25',
                    'gptoss120b',
                ],
            },
            {
                title: 'NGen-4 Long Context',
                description: 'Long-context retrieval and sustained reasoning benchmarks.',
                data: ngen4LongContextData,
                bars: [
                    'ngen4',
                    'gemini31_pro',
                    'gpt54',
                    'claude_opus_46',
                    'claude_sonnet_45',
                    'qwen35_122b',
                    'qwen35_35b',
                    'glm5',
                    'deepseek_v32',
                    'kimi_k25',
                    'gptoss120b',
                ],
            },
            {
                title: 'NGen-4 Engineering & Coding',
                description: 'Software engineering, terminal, full-stack, and code benchmark performance.',
                data: ngen4EngineeringData,
                bars: [
                    'ngen4',
                    'claude_opus_46',
                    'gpt54',
                    'glm5',
                    'deepseek_v32',
                    'qwen35_122b',
                    'qwen35_35b',
                    'claude_sonnet_45',
                    'gptoss120b',
                ],
            },
            {
                title: 'NGen-4 General Agent',
                description: 'Tool use, browsing, planning, and agent benchmark performance.',
                data: ngen4GeneralAgentData,
                bars: [
                    'ngen4',
                    'claude_opus_46',
                    'gemini31_pro',
                    'gpt54',
                    'glm5',
                    'qwen35_122b',
                    'qwen35_35b',
                    'deepseek_v32',
                    'claude_sonnet_45',
                ],
            },
            {
                title: 'NGen-4 Multilingual',
                description: 'Multilingual reasoning, translation, and cross-lingual problem-solving coverage.',
                data: ngen4MultilingualData,
                bars: [
                    'ngen4',
                    'gemini31_pro',
                    'gpt54',
                    'claude_opus_46',
                    'qwen35_122b',
                    'qwen35_35b',
                    'deepseek_v32',
                    'sarvam_105b',
                    'claude_sonnet_45',
                ],
            },
            {
                title: 'NGen-4 Vision & Multimodal',
                description: 'Visual reasoning, OCR, math vision, and video understanding benchmarks.',
                data: ngen4VisionData,
                bars: [
                    'ngen4',
                    'gemini31_pro',
                    'gpt54',
                    'claude_opus_46',
                    'qwen35_122b',
                    'qwen35_35b',
                    'glm5',
                    'minimax_m27',
                    'claude_sonnet_45',
                ],
            },
        ],
    },
    pro: {
        title: 'NGen 4 Pro Evaluations',
        description: 'ShadCN benchmark charts for NGen 4 Pro using the full benchmark values from your latest Pro benchmark sheets.',
        charts: [
            {
                title: 'NGen 4 Pro General Benchmarks',
                description: 'High-level benchmark coverage across reasoning, coding, multilingual, agent, document, and video tasks.',
                data: proGeneralBenchmarksData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro Agent & Tools',
                description: 'Agentic tool use, terminal actions, OS interaction, and medical multimodal assistance benchmarks.',
                data: proAgentToolsData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro General VQA',
                description: 'General visual question answering benchmarks across real-world, star, and hallucination tasks.',
                data: proGeneralVqaData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro OCR & Document',
                description: 'Document recognition, OCR, academic diagram parsing, and long-document benchmarks.',
                data: proOcrDocumentData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro Spatial Intelligence',
                description: 'Embodied reasoning, grounding, spatial references, and simulation-oriented benchmarks.',
                data: proSpatialIntelligenceData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro STEM & Puzzle',
                description: 'Multimodal reasoning, math vision, synthetic puzzles, and benchmark stress tests.',
                data: proStemPuzzleData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
            {
                title: 'NGen 4 Pro Video Understanding',
                description: 'Subtitle-aware and subtitle-free video reasoning, motion understanding, and video QA coverage.',
                data: proVideoUnderstandingData,
                bars: ['ngen4pro', 'gpt5', 'sonnet45', 'gemini3_flash', 'kimi_k25', 'qwen3_vl_235b'],
            },
        ],
    },
    mini: {
        title: 'NGen 4 Mini Evaluations',
        description: 'ShadCN benchmark charts for NGen 4 Mini using the latest benchmark sheet you provided.',
        charts: [
            {
                title: 'NGen 4 Mini Reasoning & Knowledge',
                description: 'Instruction following, graduate-level reasoning, contest math, and multilingual knowledge.',
                data: miniReasoningData,
                bars: [
                    'ngen4mini',
                    'qwen3_next_80b_a3b_thinking',
                    'gptoss120b',
                    'gptoss20b',
                    'claude45haiku',
                    'gpt54_nano',
                    'gpt5mini',
                ],
            },
            {
                title: 'NGen 4 Mini Vision & Multimodal',
                description: 'Visual reasoning, embodied reasoning, document understanding, and video reasoning.',
                data: miniMultimodalData,
                bars: [
                    'ngen4mini',
                    'qwen3_vl_30b_a3b',
                    'gpt5_nano_2025_08_07',
                    'gemini25_flash_lite',
                    'claude45haiku',
                    'gpt54_nano',
                    'gpt5mini',
                ],
            },
        ],
    },
    ngen41lite: {
        title: 'NGen-4.1 Lite Preview Evaluations',
        description: 'Benchmark charts for NGen-4.1 Lite Preview compared against gpt-oss-120b, Claude Haiku 4.5, GPT-5 Nano, and Gemini 3 Flash Lite.',
        charts: [
            {
                title: 'NGen-4.1 Lite Preview: Knowledge & Language',
                description: 'Academic knowledge, Chinese evaluation, and multilingual language understanding benchmarks.',
                data: ngen41LiteKnowledgeData,
                bars: ['ngen41lite', 'gptoss120b', 'claude45haiku', 'gpt5_nano', 'gemini3_flash_lite'],
            },
            {
                title: 'NGen-4.1 Lite Preview: Reasoning & Instruction',
                description: 'Graduate-level science reasoning, instruction following, and multi-turn challenge compliance.',
                data: ngen41LiteCapabilityData,
                bars: ['ngen41lite', 'gptoss120b', 'claude45haiku', 'gpt5_nano', 'gemini3_flash_lite'],
            },
        ],
    },
    ngen41mini: {
        title: 'NGen-4.1 Mini Evaluations',
        description: 'Comprehensive benchmark charts for NGen-4.1 Mini compared against OpenAI GPT-5.5, Anthropic Claude Opus 4.7, and Google DeepMind Gemini 3.1 Pro.',
        charts: [
            {
                title: 'NGen-4.1 Mini: Knowledge & Reasoning',
                description: 'Academic knowledge, Chinese evaluation, graduate-level science reasoning across MMLU and GPQA benchmarks.',
                data: ngen41MiniKnowledgeData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Instruction Following',
                description: 'Instruction adherence, multi-turn challenge compliance, and structured user intent benchmarks.',
                data: ngen41MiniInstructionData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Math & Frontier Reasoning',
                description: 'Contest math, frontier science, abstract reasoning, and humanity-level exam performance.',
                data: ngen41MiniMathData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Coding & Engineering',
                description: 'Software engineering, competitive programming, terminal operations, and code generation benchmarks.',
                data: ngen41MiniCodingData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Agent & Tool Use',
                description: 'Tool calling, agentic task completion, planning, and multi-step agent benchmarks.',
                data: ngen41MiniAgentData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Multilingual',
                description: 'Cross-lingual reasoning, translation quality, and multilingual problem-solving coverage.',
                data: ngen41MiniMultilingualData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Vision & Multimodal',
                description: 'Visual reasoning, math vision, real-world QA, hallucination, and multimodal understanding benchmarks.',
                data: ngen41MiniVisionData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: OCR, Document & Video',
                description: 'Document recognition, OCR accuracy, long video understanding, and multi-modal document benchmarks.',
                data: ngen41MiniDocVideoData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Agent Vision & Medical',
                description: 'Computer use, OS interaction, medical visual QA, and agentic environment benchmarks.',
                data: ngen41MiniAgentVisionData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
            {
                title: 'NGen-4.1 Mini: Long Context',
                description: 'Extended context retrieval, graph traversal, and multi-level retrieval challenge benchmarks up to 1M tokens.',
                data: ngen41MiniLongContextData,
                bars: ['ngen41mini', 'gpt55', 'claude_opus_47', 'gemini31_pro'],
            },
        ],
    },
    lite: {
        title: 'NGen 4 Lite Evaluations',
        description: 'ShadCN benchmark charts for NGen 4 Lite using the benchmark sheet you provided, with Qwen 3.5 4B and 9B removed.',
        charts: [
            {
                title: 'NGen 4 Lite Core Reasoning & Knowledge',
                description: 'Advanced knowledge, academic reasoning, and evaluation performance across core reasoning benchmarks.',
                data: liteCoreData,
                bars: [
                    'ngen4lite',
                    'gptoss120b',
                    'gptoss20b',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
            {
                title: 'NGen 4 Lite Instruction Following',
                description: 'Instruction adherence and challenge-following capability across structured user intent tasks.',
                data: liteInstructionData,
                bars: [
                    'ngen4lite',
                    'gptoss120b',
                    'gptoss20b',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
            {
                title: 'NGen 4 Lite Long Context',
                description: 'Retention and retrieval performance over longer context windows.',
                data: liteLongContextData,
                bars: [
                    'ngen4lite',
                    'gptoss120b',
                    'gptoss20b',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
            {
                title: 'NGen 4 Lite Reasoning & Coding',
                description: 'Contest math and code generation benchmarks for the Lite tier.',
                data: liteReasoningCodingData,
                bars: [
                    'ngen4lite',
                    'gptoss120b',
                    'gptoss20b',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
            {
                title: 'NGen 4 Lite General Agent',
                description: 'Tool use, planning, and general agent benchmark performance.',
                data: liteGeneralAgentData,
                bars: [
                    'ngen4lite',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
            {
                title: 'NGen 4 Lite Multilingual',
                description: 'Cross-lingual reasoning, translation, and multilingual benchmark coverage.',
                data: liteMultilingualData,
                bars: [
                    'ngen4lite',
                    'gptoss120b',
                    'gptoss20b',
                    'qwen3_next_80b_a3b_thinking',
                    'qwen3_30b_a3b_thinking',
                    'claude45haiku',
                    'gpt5_nano',
                    'gemini3_flash_lite',
                ],
            },
        ],
    },
    ngen41pro: {
        title: 'NGen-4.1 Pro Evaluations',
        description: 'Comprehensive benchmark charts for NGen-4.1 Pro compared against GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mythos Preview.',
        charts: [
            {
                title: 'NGen-4.1 Pro: Knowledge & Multilingual',
                description: 'Academic knowledge, multilingual understanding, and Chinese evaluation benchmarks.',
                data: ngen41ProKnowledgeData,
                bars: ['ngen41pro', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1 Pro: Instruction Following',
                description: 'Instruction adherence and compliance benchmarks.',
                data: ngen41ProInstructionData,
                bars: ['ngen41pro', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1 Pro: Reasoning & Math',
                description: 'Advanced mathematical reasoning, graduate-level science, and competition benchmarks.',
                data: ngen41ProReasoningData,
                bars: ['ngen41pro', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1 Pro: Engineering & Coding',
                description: 'Software engineering benchmark performance across verified, pro, and multilingual suites.',
                data: ngen41ProEngineeringData,
                bars: ['ngen41pro', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1 Pro: Agent & Tool Use',
                description: 'Terminal operations, MCP protocol, and agentic tool use benchmarks.',
                data: ngen41ProAgentData,
                bars: ['ngen41pro', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
        ],
    },
    ngen41: {
        title: 'NGen-4.1 Evaluations',
        description: 'Comprehensive benchmark charts for NGen-4.1 compared against GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mythos Preview.',
        charts: [
            {
                title: 'NGen-4.1: Knowledge & Multilingual',
                description: 'Academic knowledge, multilingual understanding, and Chinese evaluation benchmarks.',
                data: ngen41KnowledgeData,
                bars: ['ngen41', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1: Instruction Following',
                description: 'Instruction adherence and compliance benchmarks.',
                data: ngen41InstructionData,
                bars: ['ngen41', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1: Reasoning & Math',
                description: 'Advanced mathematical reasoning, graduate-level science, and competition benchmarks.',
                data: ngen41ReasoningData,
                bars: ['ngen41', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1: Engineering & Coding',
                description: 'Software engineering benchmark performance across verified, pro, and multilingual suites.',
                data: ngen41EngineeringData,
                bars: ['ngen41', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
            {
                title: 'NGen-4.1: Agent & Tool Use',
                description: 'Terminal operations, MCP protocol, and agentic tool use benchmarks.',
                data: ngen41AgentData,
                bars: ['ngen41', 'gpt55', 'claude_opus_47', 'gemini31_pro', 'mythos_preview'],
            },
        ],
    },
}

export function NGen4ModelEvaluations({ model }: { model: SupportedModel }) {
    const spec = modelSpecs[model]

    return (
        <section className="mb-12 pt-12 border-t border-gray-100">
            <div className="mb-8">
                <p className="text-sm text-gray-500 uppercase tracking-[0.24em] mb-4">Model Evaluations</p>
                <h2 className="text-2xl font-normal text-black mb-3">{spec.title}</h2>
                <p className="max-w-3xl text-sm text-gray-700 leading-relaxed">{spec.description}</p>
            </div>

            <div className="space-y-12">
                {spec.charts.map((chart) => (
                    <BenchmarkBase
                        key={chart.title}
                        data={chart.data}
                        title={chart.title}
                        description={chart.description}
                        yAxisLabel={chart.yAxisLabel}
                    >
                        {chart.bars.map((barKey) => (
                            <Bar key={barKey} dataKey={barKey} fill={`var(--color-${barKey})`} radius={4} />
                        ))}
                    </BenchmarkBase>
                ))}
            </div>
        </section>
    )
}
