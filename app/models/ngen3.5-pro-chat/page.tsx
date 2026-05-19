'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding, BenchmarkVisionMultimodal } from '@/components/ui/BenchmarkAdvanced'

const textBenchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 73.4, competitorValue: 81.2 },
    { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 87.5, competitorValue: '-' },
    { category: 'Reasoning', benchmark: 'GPQA', value: 61.4, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 71.6, competitorValue: 70.9 },
    { category: 'Coding', benchmark: 'LiveCodeBench', value: 55.6, competitorValue: 57.4 },
    { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 20.4, competitorValue: 36.3 },
]

const visionBenchmarkRows = [
    { category: 'STEM', benchmark: 'MMMU (Val)', value: 73.4, competitorValue: 74.1 },
    { category: 'Math', benchmark: 'MathVista', value: 79.7, competitorValue: 81.4 },
    { category: 'OCR', benchmark: 'DocVQA', value: 90.3, competitorValue: 95.3 },
    { category: 'Video', benchmark: 'MVBench', value: 74.9, competitorValue: 69.0 },
]

const sections = [
    {
        title: 'Overview',
        body: 'NGen 3.5 Pro is a professional-grade conversational model balanced for speed, quality, and dependable reasoning. It is tuned for enterprise workflows that need higher accuracy than Lite while remaining efficient enough for broad deployment.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Context Length', value: '262,144 tokens' },
            { label: 'Multimodal', value: 'Supported' },
            { label: 'Model Priority', value: 'Professional-grade speed and capability' },
            { label: 'Pricing', value: 'Rs 0.60 input / Rs 0.90 output per 1K tokens' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Balanced performance for professional applications and enterprise assistants.',
            'Strong reasoning and logical understanding for multi-step tasks.',
            'High-speed responses for real-time product experiences.',
            'Cost-effective operation for teams scaling beyond basic chat.',
        ],
    },
]

export default function NGen35ProChatPage() {
    return (
        <ModelDetailPage
            date="November 2025"
            category="Chat Model"
            title="NGen 3.5 Pro"
            deck="Professional-grade conversational intelligence with stronger reasoning, coding, and multimodal coverage."
            image="/model-images/ngen3.5-pro.png"
            imageAlt="NGen 3.5 Pro"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 3 System Card', href: '/NGen3%20System%20Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <BenchmarkNGen3Reasoning />
                <BenchmarkAdvancedText />
                <BenchmarkAdvancedLogic />
                <BenchmarkAdvancedCoding />
                <BenchmarkVisionMultimodal />
                <BenchmarkTable title="Text Performance Benchmarks" rows={textBenchmarkRows} />
                <BenchmarkTable title="Vision Performance Benchmarks" rows={visionBenchmarkRows} />
            </div>
        </ModelDetailPage>
    )
}
