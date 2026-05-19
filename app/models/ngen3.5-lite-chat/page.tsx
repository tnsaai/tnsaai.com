'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'

const benchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 70.4, competitorValue: 81.2 },
    { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 83.7, competitorValue: '-' },
    { category: 'Reasoning', benchmark: 'GPQA', value: 55.9, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 65.6, competitorValue: 70.9 },
]

const sections = [
    {
        title: 'Overview',
        body: 'NGen 3.5 Lite provides efficient and fast conversational AI capabilities, optimized for applications that need quick response times, low operating cost, and steady everyday reasoning quality.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Context Length', value: '128,000 tokens' },
            { label: 'Model Priority', value: 'Low-latency chat' },
            { label: 'Best For', value: 'Support flows, product assistants, high-volume messaging, and lightweight content tasks.' },
            { label: 'Pricing', value: 'Rs 0.30 input / Rs 0.45 output per 1K tokens' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Fast and efficient conversational model for repeated production use.',
            'Optimized for quick response times across common chat and support workloads.',
            'Cost-effective profile for high-volume applications.',
            'Balanced performance across knowledge, reasoning, and instruction-following tasks.',
        ],
    },
]

export default function NGen35LiteChatPage() {
    return (
        <ModelDetailPage
            date="November 2025"
            category="Chat Model"
            title="NGen 3.5 Lite"
            deck="Efficient conversational intelligence for high-volume product and support workflows."
            image="/model-images/ngen3.5-lite.png"
            imageAlt="NGen 3.5 Lite"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 3 System Card', href: '/NGen3%20System%20Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <BenchmarkTable title="Performance Benchmarks" rows={benchmarkRows} />
            </div>
        </ModelDetailPage>
    )
}
