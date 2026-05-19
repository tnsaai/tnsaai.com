'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen4FlashPlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen 4 Flash is a realtime-friendly non-reasoning model designed for instant responses. It captures immediate context quickly and supports rapid-fire conversational AI experiences where latency matters most.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Priority', value: 'Instant response' },
            { label: 'Mode', value: 'Non-reasoning Flash tier' },
            { label: 'Best For', value: 'Chat surfaces, fast completion flows, quick classification, and low-latency user interactions.' },
            { label: 'System Card', value: 'NGen 4 system card linked above.' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Very low-latency generation for interactive chat and product workflows.',
            'Quick context capture for short-form tasks and instant responses.',
            'Efficient non-reasoning tier in the NGen 4 family.',
            'Designed for use cases where speed is more important than deep deliberation.',
        ],
    },
]

export default function NGen4FlashPage() {
    return (
        <ModelDetailPage
            date="February 2026"
            category="Model"
            title="NGen 4 Flash"
            deck="A realtime-friendly NGen 4 model for instant conversational responses and low-latency completions."
            image="/model-images/ngen4-blaze-1.png"
            imageAlt="NGen 4 Flash"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen4FlashPlatformProfile} />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
