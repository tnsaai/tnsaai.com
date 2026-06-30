'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen41ProPlatformProfile } from '@/content/modelPlatformProfiles'
import { BenchmarkComparisonTable, ngen41ProBenchmarkRows } from '@/components/ui/BenchmarkComparisonTable'

const sections = [
    {
        title: 'Overview',
        body: 'NGen-4.1 Pro is the most capable model in the NGen family, delivering state-of-the-art performance across knowledge, reasoning, instruction following, software engineering, and agentic benchmarks. It achieves a MMLU Pro score of 95.8%, GPQA score of 98.2%, and leads on SWE-Bench Verified at 84.2% — setting new standards for frontier-class AI systems.',
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'State-of-the-art MMLU Pro score of 95.8% and MMLU Redux at 97.8%.',
            'GPQA Diamond score of 98.2%, demonstrating exceptional graduate-level reasoning.',
            'AIME26 score of 98.1% for advanced mathematical problem solving.',
            'SWE-Bench Verified at 84.2% and SWE Bench Pro at 60.5%.',
            'Terminal Bench 2.0 at 66.3% with strong MCP-Atlas performance at 72.1%.',
        ],
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Family', value: 'NGen-4.1' },
            { label: 'Input Support', value: 'Text, image, audio, video' },
            { label: 'Output Support', value: 'Text, image, audio, video' },
            { label: 'Best For', value: 'Complex reasoning tasks, software engineering workflows, advanced research, and production-grade agentic systems.' },
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
        body: 'NGen-4.1 Pro operates with thinking mode enabled by default. For production workloads, use dedicated serving stacks such as SGLang, KTransformers, or vLLM with sufficient output token budgets for reasoning-heavy tasks. Available under the model ID ngen4.1-pro.',
    },
]

export default function NGen41ProPage() {
    return (
        <ModelDetailPage
            date="June 2026"
            category="Frontier Model"
            title="NGen-4.1 Pro"
            deck="The most capable NGen model with state-of-the-art performance across knowledge, reasoning, engineering, and agent benchmarks."
            image="/model-images/ngen4.1-pro.png"
            imageAlt="NGen-4.1 Pro"
            actions={[
                { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
                { label: 'NGen 4.1 System Card', href: '/NGen-4-System-Card.pdf' },
            ]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen41ProPlatformProfile} />
                <BenchmarkComparisonTable data={ngen41ProBenchmarkRows} highlightCol="ngen41pro" />
                <NGen4ModelEvaluations model="ngen41pro" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}