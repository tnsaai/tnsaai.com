'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding } from '@/components/ui/BenchmarkAdvanced'

const textBenchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 81.8, competitorValue: 81.2 },
    { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 93.1, competitorValue: '-' },
    { category: 'Reasoning', benchmark: 'GPQA', value: 73.8, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 88.3, competitorValue: 70.9 },
    { category: 'Coding', benchmark: 'LiveCodeBench', value: 61.2, competitorValue: 57.4 },
    { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 40.9, competitorValue: 36.3 },
]

const visionBenchmarkRows = [
    { category: 'STEM', benchmark: 'MMMU (Val)', value: 75.6, competitorValue: 75.8 },
    { category: 'Math', benchmark: 'MathVista', value: 83.2, competitorValue: 81.4 },
    { category: 'OCR', benchmark: 'DocVQA', value: 95.6, competitorValue: 95.3 },
    { category: 'Video', benchmark: 'MVBench', value: 74.7, competitorValue: 69.0 },
]

const sections = [
    {
        title: 'Overview',
        body: 'NGen 3.9 Max Stable V3 is the flagship production model in the NGen 3.9 family. It is tuned for reliability, maximum 3.9-series performance, and high-confidence reasoning across production workloads.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Context Length', value: '262,144 tokens' },
            { label: 'Model Priority', value: 'Stable production flagship' },
            { label: 'Best For', value: 'Reasoning-heavy enterprise workflows, knowledge work, coding, and multimodal analysis.' },
            { label: 'Pricing', value: 'Rs 0.83 input / Rs 1.25 output per 1K tokens' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Maximum production stability and reliability for the NGen 3.9 series.',
            'Strong performance in reasoning, knowledge, and coding evaluations.',
            'Advanced multimodal understanding and document/vision coverage.',
            'Enterprise-grade safety and alignment features.',
        ],
    },
]

const snapshots = [
    { name: 'NGen 3.9 Max Stable V3', description: 'Production flagship snapshot.', label: 'Current' },
    { name: 'NGen 3.9 Max V2 128K Preview', description: 'Long-context preview snapshot.', label: 'Snapshot' },
]

export default function NGen39MaxStableV3ChatPage() {
    return (
        <ModelDetailPage
            date="December 2025"
            category="Chat Model"
            title="NGen 3.9 Max"
            deck="The strongest production snapshot in the NGen 3.9 family, built for demanding enterprise reasoning."
            image="/model-images/ngen3.9-max.png"
            imageAlt="NGen 3.9 Max"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 3 System Card', href: '/NGen3%20System%20Card.pdf' },
]}
            sections={sections}
            snapshots={snapshots}
        >
            <div className="space-y-12">
                <BenchmarkNGen3Reasoning />
                <BenchmarkAdvancedText />
                <BenchmarkAdvancedLogic />
                <BenchmarkAdvancedCoding />
                <BenchmarkTable title="Text, Reasoning & Coding Benchmarks" rows={textBenchmarkRows} />
                <BenchmarkTable title="Vision & Multimodal Benchmarks" rows={visionBenchmarkRows} />
            </div>
        </ModelDetailPage>
    )
}
