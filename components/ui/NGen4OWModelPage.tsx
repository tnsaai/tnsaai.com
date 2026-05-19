import { ModelDetailPage } from '@/components/ui/ModelDetailPage'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

type NGen4OWModelPageProps = {
    title: string
    imageSrc: string
    imageAlt: string
    huggingFaceUrl: string
    releaseNoteParagraphs: string[]
    finalDisclaimer: string
}

const architectureNotes = [
    'The NGen 4 open-weight releases are distilled from the NGen 4 frontier family into public checkpoints intended for research, experimentation, and community evaluation.',
    'Each model keeps the NGen 4 emphasis on structured reasoning, Indic intelligence, and safety-aware instruction following while adapting those traits into a smaller or more accessible base architecture.',
    'For best results on the open-weight variants, use the recommended NGen-4-OW-ForCasualLM architecture when it is available for the checkpoint. Some releases remain compatible with their original base architecture, but the custom path is preferred for stronger Indic behavior.',
]

const trainingNotes = [
    'The OW series uses a curated blend of open and synthetic data, with special attention on Indic language coverage, reasoning traces, and practical instruction-following tasks.',
    'Distillation draws from NGen 4 Pro and related teacher models, then aligns outputs toward a more reliable research checkpoint that can be evaluated outside the hosted API platform.',
    'Safety filtering, deduplication, and quality controls are applied before release so the checkpoints remain useful for academic and applied model evaluation.',
]

const evaluationBullets = [
    'Reasoning and instruction-following behavior across math, planning, and multi-step analysis tasks.',
    'Indic-language understanding, translation robustness, and culturally aware response quality.',
    'Compatibility with community inference stacks and reproducible research workflows.',
    'Practical limitations of each base architecture compared with the hosted NGen 4 API models.',
]

export function NGen4OWModelPage({
    title,
    imageSrc,
    imageAlt,
    huggingFaceUrl,
    releaseNoteParagraphs,
    finalDisclaimer,
}: NGen4OWModelPageProps) {
    const sections = [
        {
            title: 'Release Notes',
            body: releaseNoteParagraphs,
        },
        {
            title: 'Architecture',
            body: architectureNotes,
        },
        {
            title: 'Training & Alignment',
            body: trainingNotes,
        },
        {
            title: 'Evaluation Focus',
            body: 'The open-weight models are meant to make NGen 4 behavior easier to inspect and compare. Their value is in transparent evaluation, controlled deployments, and research workflows where teams need direct access to weights.',
            bullets: evaluationBullets,
        },
        {
            title: 'Responsible Release',
            body: finalDisclaimer,
        },
    ]

    return (
        <ModelDetailPage
            date="February 2026"
            category="Open Weights Model"
            title={title}
            deck="A research-oriented NGen 4 open-weight checkpoint for direct evaluation, adaptation, and community experimentation."
            image={imageSrc}
            imageAlt={imageAlt}
            actions={[
                { label: 'Download from Hugging Face', href: huggingFaceUrl, external: true },
                { label: 'NGen 4 System Card', href: '/NGen-4-System-Card.pdf' },
            ]}
            sections={sections}
        >
            <NGen4TeamSection />
        </ModelDetailPage>
    )
}
