'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4IntelligencePriceChart } from '@/components/ui/NGen4IntelligencePriceChart'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen4PlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen-4 is the general frontier model tier for broad intelligence workloads, bringing together strong reasoning, coding, agentic execution, multilingual understanding, and multimodal performance in a single benchmark profile.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Family', value: 'NGen 4 frontier series' },
            { label: 'Input support', value: 'Text, image, audio, video, and tool-oriented workflows' },
            { label: 'Best For', value: 'General frontier workloads, reasoning products, code assistants, and multimodal systems.' },
            { label: 'System Card', value: 'Available as a linked PDF for deeper model and safety details.' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Strong general intelligence across reasoning, coding, multilingual, and multimodal tasks.',
            'Designed for production API workflows and developer-facing applications.',
            'Benchmark profile spans knowledge, long context, engineering, agents, and vision.',
            'Built as the central model page for the NGen 4 release family.',
        ],
    },
]

export default function NGen4Page() {
    return (
        <ModelDetailPage
            date="February 2026"
            category="Model"
            title="NGen-4"
            deck="A frontier general-purpose model for reasoning, coding, multimodal understanding, and production AI systems."
            image="/model-images/ngen4.png"
            imageAlt="NGen-4"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen4PlatformProfile} />
                <NGen4IntelligencePriceChart />
                <NGen4ModelEvaluations model="ngen4" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
