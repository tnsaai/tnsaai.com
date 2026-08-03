import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Open-Weight Model Licenses | TNSA',
  description: 'License information for TNSA open-weight model releases.',
}

const sections: LegalSection[] = [
  {
    title: 'License-first use',
    paragraphs: [
      'Each TNSA open-weight release includes a license in its official repository, model card, or distribution package. That release-specific license—not this overview—defines the permissions and conditions for the model.',
      'If files from different releases are combined, each applicable license may continue to govern its respective materials.',
    ],
  },
  {
    title: 'What may be covered',
    paragraphs: ['A release license may separately address the following materials:'],
    bullets: [
      'Model weights, checkpoints, adapters, and configuration files.',
      'Inference, evaluation, and training code.',
      'Tokenizer files, documentation, model cards, and example materials.',
      'Fine-tuned or otherwise modified versions and derivative models.',
    ],
  },
  {
    title: 'Your responsibilities',
    paragraphs: [
      'Before using or distributing a model, review the exact license shipped with that release. Preserve required notices, attribution, license copies, and modification statements. You are responsible for confirming that your intended use complies with the license and applicable law.',
      'Do not use TNSA names, logos, or trademarks to imply endorsement or that a modified model is an official TNSA release.',
    ],
  },
  {
    title: 'Responsible deployment',
    paragraphs: [
      'Open access to model weights does not remove the deployer’s responsibility to evaluate safety, privacy, security, bias, reliability, and legal compliance. Deployers should use safeguards appropriate to the model’s capabilities and intended users.',
      'Model outputs may be inaccurate or harmful. High-impact uses require domain expertise, human review, monitoring, and controls proportionate to the risk.',
    ],
  },
  {
    title: 'Third-party materials',
    paragraphs: [
      'A release may include or depend on third-party software, datasets, or other components governed by separate terms. TNSA does not grant rights to third-party materials beyond the rights their owners provide.',
    ],
  },
  {
    title: 'No warranty',
    paragraphs: [
      'Unless the applicable release license states otherwise, open-weight materials are provided without warranties or guarantees. Model availability, behavior, compatibility, and fitness for a particular use are not assured.',
    ],
  },
  {
    title: 'License questions',
    paragraphs: [
      'When contacting us, include the model name, exact version or commit, distribution source, and a concise description of the proposed use. We can clarify which published license applies, but we cannot provide legal advice for your deployment.',
    ],
  },
]

export default function OpenWeightLicensesPage() {
  return (
    <LegalDocument
      title="Open-Weight Model Licenses"
      summary="How to identify and follow the license that accompanies a TNSA open-weight model release."
      sections={sections}
      contactSubject="Open-weight model license question"
    />
  )
}
