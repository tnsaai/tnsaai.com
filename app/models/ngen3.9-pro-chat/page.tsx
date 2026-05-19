'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding } from '@/components/ui/BenchmarkAdvanced'

const textBenchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 77.2, competitorValue: 81.2 },
    { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 90.4, competitorValue: '-' },
    { category: 'Reasoning', benchmark: 'GPQA', value: 63.1, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 72.6, competitorValue: 70.9 },
    { category: 'Coding', benchmark: 'LiveCodeBench', value: 54.4, competitorValue: 57.4 },
    { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 19.7, competitorValue: 36.3 },
]

const sections = [
    {
        title: 'Overview',
        body: 'NGen 3.9 Pro is a professional-grade model with stronger contextual processing and complex reasoning than the earlier 3.5 series. It is intended for sophisticated product workflows where accuracy, responsiveness, and instruction following all matter.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Context Length', value: '262,144 tokens' },
            { label: 'Model Priority', value: 'Professional-grade reasoning' },
            { label: 'Best For', value: 'Enterprise assistants, planning workflows, coding support, and contextual analysis.' },
            { label: 'Pricing', value: 'Rs 0.33 input / Rs 0.50 output per 1K tokens' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Advanced contextual processing across long conversations and documents.',
            'Superior logical reasoning and problem solving for structured work.',
            'Optimized for complex enterprise workflows and internal assistants.',
            'Enhanced instruction following and alignment relative to previous Pro snapshots.',
        ],
    },
]

const snapshots = [
    { name: 'NGen 3.9 Pro Chat', description: 'Stable professional-grade snapshot.', label: 'Current' },
    { name: 'NGen 3.9 Pro 2406 Preview', description: 'Preview snapshot for newer Pro behavior.', label: 'Snapshot' },
]

export default function NGen39ProChatPage() {
    return (
        <ModelDetailPage
            date="December 2025"
            category="Chat Model"
            title="NGen 3.9 Pro"
            deck="Professional-grade NGen 3.9 intelligence for complex enterprise conversations and reasoning workflows."
            image="/model-images/ngen3.9-pro.png"
            imageAlt="NGen 3.9 Pro"
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
                <BenchmarkTable title="Performance Benchmarks" rows={textBenchmarkRows} />
            </div>
        </ModelDetailPage>
    )
}
