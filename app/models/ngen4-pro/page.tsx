'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

const sections = [
    {
        title: 'Overview',
        body: 'NGen 4 Pro is the flagship frontier model in the NGen 4 family. It combines early-fusion multimodal learning, efficient expert routing, and large-scale reinforcement learning to support difficult reasoning, coding, visual analysis, and creative work.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Release', value: '26 February 2026' },
            { label: 'Model Priority', value: 'Flagship frontier reasoning' },
            { label: 'Best For', value: 'Advanced problem solving, agentic software work, document intelligence, and multimodal reasoning.' },
            { label: 'System Card', value: 'NGen 4 system card linked above.' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Flagship reasoning and math performance across difficult benchmark sets.',
            'Advanced coding and agentic task execution for software-heavy workflows.',
            'High-fidelity visual, document, spatial, and video understanding.',
            'Designed for frontier use cases where quality is more important than minimum latency.',
        ],
    },
]

export default function NGen4ProPage() {
    return (
        <ModelDetailPage
            date="26 February 2026"
            category="Model"
            title="NGen 4 Pro"
            deck="The flagship NGen 4 model for frontier reasoning, coding, visual intelligence, and agentic workflows."
            image="/model-images/ngen4-pro.png"
            imageAlt="NGen 4 Pro"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <NGen4ModelEvaluations model="pro" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
