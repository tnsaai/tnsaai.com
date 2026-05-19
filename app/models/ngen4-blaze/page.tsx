'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen4BlazePlatformProfile } from '@/content/modelPlatformProfiles'

const sections = [
    {
        title: 'Overview',
        body: 'NGen 4 Blaze introduces advanced intelligence mapped for speed and reasoning. It pairs analytical depth with fast generation for teams that want a responsive NGen 4 model without moving to the largest frontier tier.',
    },
    {
        title: 'Context & Specs',
        specs: [
            { label: 'Model Priority', value: 'Fast reasoning' },
            { label: 'Mode', value: 'Reasoning-capable Blaze tier' },
            { label: 'Best For', value: 'Fast assistant experiences, reasoning workflows, product copilots, and lightweight analysis.' },
            { label: 'System Card', value: 'NGen 4 system card linked above.' },
        ],
    },
    {
        title: 'Key Capabilities',
        bullets: [
            'Responsive generation for interactive product surfaces.',
            'Reasoning support for analytical and planning tasks.',
            'Designed as a middle tier between Lite efficiency and larger NGen 4 capability.',
            'Works through the same API Platform flow as the rest of the NGen 4 family.',
        ],
    },
]

export default function NGen4BlazePage() {
    return (
        <ModelDetailPage
            date="February 2026"
            category="Model"
            title="NGen 4 Blaze"
            deck="A fast reasoning model in the NGen 4 family for responsive assistants and lightweight analysis."
            image="/model-images/ngen4-blaze.png"
            imageAlt="NGen 4 Blaze"
            actions={[
    { label: 'Try in API Platform', href: 'https://platform.tnsaai.com', external: true },
    { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
]}
            sections={sections}
        >
            <div className="space-y-12">
                <ModelPlatformDetails profile={ngen4BlazePlatformProfile} />
                <NGen4TeamSection />
            </div>
        </ModelDetailPage>
    )
}
