'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen4MiniPlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen 4 Mini brings NGen 4 reasoning into a smaller, faster tier. It is designed for high-quality dialogue, creative writing, visual understanding, and general problem solving while keeping serving practical for scaled product use.',
    },
    {
        title: 'Architecture Highlights',
        bullets: [
            'Unified vision-language foundation with early fusion training on multimodal tokens.',
            'Efficient hybrid architecture for strong throughput and latency characteristics.',
            'Thinking mode enabled for deeper reasoning on complex logical and mathematical problems.',
            'Optimized for broad language coverage and culturally nuanced interactions.',
        ],
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Release', value: '29 November 2025' },
            { label: 'Context Length', value: '256K (262,144 tokens)' },
            { label: 'Pricing', value: 'Rs 32 input / Rs 56 output per 1M tokens' },
            { label: 'Best For', value: 'Interactive assistants, reasoning products, creative workflows, and scaled multimodal applications.' },
        ],
    },
    {
        title: 'Serving Notes',
        body: 'NGen 4 Mini operates in thinking mode by default. For production workloads, use dedicated serving stacks such as SGLang, KTransformers, or vLLM and provide enough output length for tasks that need extended reasoning.',
    },
]

export default function NGen4MiniPage() {
    return (
        <ModelDetailPage
            date="29 November 2025"
            category="Model"
            title="NGen 4 Mini"
            deck="A smaller NGen 4 reasoning model for high-quality dialogue, multimodal understanding, and scaled product use."
            image="/model-images/ngen4-mini.png"
            imageAlt="NGen 4 Mini"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen4MiniPlatformProfile} />
                <NGen4ModelEvaluations model="mini" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
