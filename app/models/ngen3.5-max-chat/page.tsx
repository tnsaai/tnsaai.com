'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding, BenchmarkVisionMultimodal } from '@/components/ui/BenchmarkAdvanced'

const textBenchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 75.8, competitorValue: 81.2 },
    { category: 'Reasoning', benchmark: 'GPQA', value: 71.2, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 89.1, competitorValue: 70.9 },
    { category: 'Coding', benchmark: 'LiveCodeBench', value: 62.5, competitorValue: 57.4 },
    { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 41.8, competitorValue: 36.3 },
]

const visionBenchmarkRows = [
    { category: 'STEM', benchmark: 'MMMU (Val)', value: 75.6, competitorValue: 74.1 },
    { category: 'Math', benchmark: 'MathVista', value: 83.2, competitorValue: 81.4 },
    { category: 'OCR', benchmark: 'DocVQA', value: 95.6, competitorValue: 95.3 },
    { category: 'Video', benchmark: 'MVBench', value: 74.7, competitorValue: 69.0 },
]

const sections = [
    {
        title: 'Overview',
        body: 'NGen 3.5 Max represents the highest-capability tier of the NGen 3.5 family. It is built for enterprise applications that require stronger accuracy across knowledge, reasoning, coding, and multimodal intelligence.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Context Length', value: '262,144 tokens' },
            { label: 'Multimodal', value: 'Native support' },
            { label: 'Model Priority', value: 'Maximum 3.5-series capability' },
            { label: 'Pricing', value: 'Rs 0.79 input / Rs 1.18 output per 1K tokens' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Maximum performance and capability across the NGen 3.5 benchmark profile.',
            'Advanced vision intelligence with multimodal understanding.',
            'Superior reasoning and mathematical problem solving for complex workflows.',
            'Enterprise-grade alignment and instruction following.',
        ],
    },
]

export default function NGen35MaxChatPage() {
    return (
        <ModelDetailPage
            date="November 2025"
            category="Chat Model"
            title="NGen 3.5 Max"
            deck="The strongest NGen 3.5 conversational model for high-accuracy enterprise reasoning and multimodal work."
            image="/model-images/ngen3.5-max.png"
            imageAlt="NGen 3.5 Max"
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
                <BenchmarkTable title="Text, Reasoning & Coding Benchmarks" rows={textBenchmarkRows} />
                <BenchmarkTable title="Vision & Multimodal Benchmarks" rows={visionBenchmarkRows} />
            </div>
        </ModelDetailPage>
    )
}
