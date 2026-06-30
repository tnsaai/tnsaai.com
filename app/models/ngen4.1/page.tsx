'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen41PlatformProfile } from '@/content/modelPlatformProfiles'
import { BenchmarkComparisonTable, ngen41BenchmarkRows } from '@/components/ui/BenchmarkComparisonTable'

const sections = [
    {
        title: 'Overview',
        body: 'NGen-4.1 is the next-generation flagship model in the NGen family, delivering leading performance across knowledge, reasoning, instruction following, software engineering, and agentic benchmarks. It achieves a MMLU Pro score of 92.1%, GPQA score of 95.5%, and SWE-Bench Verified at 80.3% — representing a significant step forward in frontier-class AI capabilities.',
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'MMLU Pro score of 92.1% and MMLU Redux at 96.5%.',
            'GPQA Diamond score of 95.5%, demonstrating strong graduate-level reasoning.',
            'AIME26 score of 95.4% for advanced mathematical problem solving.',
            'SWE-Bench Verified at 80.3% and SWE Bench Pro at 55.2%.',
            'Terminal Bench 2.0 at 60.7% with solid MCP-Atlas performance at 68.2%.',
        ],
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Family', value: 'NGen-4.1' },
            { label: 'Input Support', value: 'Text, image, audio, video' },
            { label: 'Output Support', value: 'Text, image, audio, video' },
            { label: 'Best For', value: 'Complex reasoning tasks, software engineering workflows, advanced research, and production-grade applications.' },
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
        body: 'NGen-4.1 operates with thinking mode enabled by default. For production workloads, use dedicated serving stacks such as SGLang, KTransformers, or vLLM with sufficient output token budgets for reasoning-heavy tasks. Available under the model ID ngen4.1.',
    },
]

export default function NGen41Page() {
    return (
        <ModelDetailPage
            date="June 2026"
            category="Frontier Model"
            title="NGen-4.1"
            deck="The next-generation flagship model with leading performance across knowledge, reasoning, engineering, and agent benchmarks."
            image="/model-images/ngen4.1.png"
            imageAlt="NGen-4.1"
            actions={[
                { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
                { label: 'NGen 4.1 System Card', href: '/NGen-4-System-Card.pdf' },
            ]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen41PlatformProfile} />
                <BenchmarkComparisonTable title="NGen-4.1 Benchmarks" description="All benchmark scores compared against GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mythos Preview." data={ngen41BenchmarkRows} highlightCol="ngen41" />
                <NGen4ModelEvaluations model="ngen41" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}