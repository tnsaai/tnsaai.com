'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen41LitePlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen-4.1 Lite is an early release of the next generation of the Lite tier. It builds on the NGen-4 Lite foundation with significantly improved accuracy across knowledge, reasoning, and instruction-following benchmarks, while keeping the fast response profile that makes Lite practical for high-volume production use.',
    },
    {
        title: 'What\'s New in 4.1',
        bullets: [
            'State-of-the-art MMLU-Pro score of 88.2%, up substantially from NGen-4 Lite.',
            'MMLU-Redux score of 94.7% and C-Eval score of 92.3% — leading the Lite tier.',
            'GPQA Diamond score of 84.5%, demonstrating stronger graduate-level reasoning.',
            'IFEval score of 94.1% for improved instruction adherence.',
            'Improved multilingual and instruction compliance with MultiChallenge at 55.2%.',
        ],
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Family', value: 'NGen-4.1' },
            { label: 'Speed Tier', value: 'High' },
            { label: 'Speed Tier', value: 'High' },
            { label: 'Best For', value: 'High-volume assistants, internal tools, cost-aware production systems requiring improved reasoning over NGen-4 Lite.' },
        ],
    },
    {
        title: 'Architecture Highlights',
        bullets: [
            'Next-generation architecture with improved early-fusion multimodal learning.',
            'Enhanced expert routing for complex multi-step reasoning chains.',
            'Advanced reinforcement learning fine-tuning across knowledge and coding domains.',
            'Stronger instruction-following alignment through IFEval optimization.',
        ],
    },
    {
        title: 'Serving Notes',
        body: 'NGen-4.1 Lite operates with thinking mode enabled by default. For production workloads, use dedicated serving stacks such as SGLang, KTransformers, or vLLM with sufficient output token budgets for reasoning-heavy tasks. Available under the model ID ngen4.1-lite.',
    },
]

export default function NGen41LitePage() {
    return (
        <ModelDetailPage
            date="June 2026"
            category="Frontier Model"
            title="NGen-4.1 Lite"
            deck="A next-generation Lite tier model with substantially improved knowledge, reasoning, and instruction performance."
            image="/model-images/ngen4.1-lite.png"
            imageAlt="NGen-4.1 Lite"
            actions={[
                { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
                { label: 'NGen 4.1 System Card', href: '/NGen-4-System-Card.pdf' },
            ]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen41LitePlatformProfile} />
                <NGen4ModelEvaluations model="ngen41lite" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
