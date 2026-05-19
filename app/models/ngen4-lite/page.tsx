'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen4LitePlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen 4 Lite is a fast and efficient reasoning model optimized for real-world interactions. It gives teams a lightweight NGen 4 option with reliable response quality and practical production latency.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Priority', value: 'Lightweight reasoning' },
            { label: 'Mode', value: 'Reasoning-capable Lite tier' },
            { label: 'Best For', value: 'High-volume assistants, internal tools, quick reasoning tasks, and cost-aware production systems.' },
            { label: 'System Card', value: 'NGen 4 system card linked above.' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Fast and reliable reasoning for daily AI workflows.',
            'Efficient profile for product teams scaling NGen 4 usage.',
            'Strong instruction following and multilingual coverage for the Lite tier.',
            'Benchmark coverage across reasoning, long context, coding, agent, and multilingual tasks.',
        ],
    },
]

export default function NGen4LitePage() {
    return (
        <ModelDetailPage
            date="February 2026"
            category="Model"
            title="NGen 4 Lite"
            deck="A fast, efficient NGen 4 reasoning model for real-world product interactions."
            image="/model-images/ngen4-lite.png"
            imageAlt="NGen 4 Lite"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen4LitePlatformProfile} />
                <NGen4ModelEvaluations model="lite" />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
