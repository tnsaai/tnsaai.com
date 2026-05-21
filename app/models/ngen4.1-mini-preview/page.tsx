'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen41MiniPreviewPlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen-4.1 Mini Preview is a next-generation mini model with comprehensive multimodal, coding, long-context, and reasoning capabilities. It achieves competitive or leading results across vision benchmarks while maintaining practical latency, making it a strong choice for scaled multimodal product development.',
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Leading vision benchmarks: MMMU 84.0%, MathVision 84.8%, MathVista mini 91.2%, DynaMath 89.0%.',
            'Strong OCR and document understanding: OCRBench 94.1%, OmniDocBench 1.5 at 92.6%.',
            'Competitive instruction following: IFEval 95.0%, MAXIFE 89.1%.',
            'Solid coding performance: Terminal-Bench 2.0 at 74.2%, LiveCodeBench v6 at 72.5%.',
            'Long-context retrieval: MRCR 128K-256K at 71.2%, LongBench v2 at 61.7%.',
            'Broad multilingual coverage: MMMLU 87.0%, Global PIQA 88.6%, WMT24++ 78.5%.',
        ],
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Status', value: 'Preview — subject to change before general availability' },
            { label: 'Context Length', value: '256K (262,144 tokens)' },
            { label: 'Pricing', value: 'Rs 28 input / Rs 52 output per 1M tokens' },
            { label: 'Best For', value: 'Multimodal assistants, OCR pipelines, long-context workflows, coding tools, and scaled visual reasoning applications.' },
        ],
    },
    {
        title: 'Architecture Highlights',
        bullets: [
            'Unified vision-language foundation with improved early fusion training.',
            'Enhanced reasoning depth with thinking mode support.',
            'Stronger long-context architecture supporting up to 1M token graph traversal tasks.',
            'Medical and specialized domain vision improvements over NGen-4 Mini.',
        ],
    },
    {
        title: 'Serving Notes',
        body: 'NGen-4.1 Mini Preview operates with thinking mode enabled by default. For production workloads, use dedicated serving stacks such as SGLang, KTransformers, or vLLM with sufficient output token budgets for reasoning-heavy tasks. Available under the model ID ngen4.1-mini-preview.',
    },
]

export default function NGen41MiniPreviewPage() {
    return (
        <ModelDetailPage
            date="May 2026"
            category="Preview Model"
            title="NGen-4.1 Mini Preview"
            deck="A next-generation mini model with leading vision, OCR, long-context, and multimodal reasoning capabilities."
            image="/model-images/ngen4.1-mini-preview.png"
            imageAlt="NGen-4.1 Mini Preview"
            actions={[
                { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
                { label: 'NGen 4.1 System Card', href: '/NGen-4-System-Card.pdf' },
            ]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen41MiniPreviewPlatformProfile} />
                <NGen4ModelEvaluations model="ngen41mini" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
