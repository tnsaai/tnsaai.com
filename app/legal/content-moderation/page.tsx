import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Content Moderation | TNSA',
  description: 'How TNSA identifies and responds to prohibited content and misuse.',
}

const sections: LegalSection[] = [
  {
    title: 'Purpose and scope',
    paragraphs: [
      'TNSA applies content and usage safeguards to protect people, services, and the wider ecosystem. This page describes the general moderation approach for TNSA-hosted products and APIs.',
      'Product-specific policies, enterprise configurations, and applicable law may require additional controls. Open-weight deployments operated by third parties are controlled by those deployers.',
    ],
  },
  {
    title: 'Prohibited use',
    paragraphs: ['We may restrict content or activity involving:'],
    bullets: [
      'Child sexual abuse material, sexual exploitation, or grooming.',
      'Credible threats, terrorism support, targeted harassment, or instructions intended to cause serious harm.',
      'Fraud, impersonation, malware, credential theft, or attempts to compromise systems.',
      'Non-consensual intimate content, unlawful personal-data exposure, or severe privacy abuse.',
      'Content that infringes rights or violates applicable law.',
      'Attempts to evade safeguards or repeatedly misuse restricted capabilities.',
    ],
  },
  {
    title: 'How moderation works',
    paragraphs: [
      'We may use automated classifiers, rate and abuse signals, user reports, and human review to identify policy violations. Automated systems can make mistakes, so higher-impact decisions may receive additional review where practicable.',
      'We limit access to moderation data to personnel and service providers who need it for safety, security, support, or legal responsibilities.',
    ],
  },
  {
    title: 'Enforcement',
    paragraphs: [
      'Responses are selected based on severity, intent, context, history, and risk. Actions may include a warning, blocked output, content removal, feature restrictions, rate limits, account suspension, or termination.',
      'We may preserve evidence or report content to relevant authorities or specialist organizations when required by law or necessary to address an imminent and serious risk.',
    ],
  },
  {
    title: 'Reporting content',
    paragraphs: [
      'Reports should identify the product, approximate time, relevant content, and reason for concern. Do not redistribute illegal material in a report; provide a request ID, URL, or carefully redacted screenshot when possible.',
    ],
  },
  {
    title: 'Appeals',
    paragraphs: [
      'If your content or account was restricted and you believe the decision was incorrect, reply to the enforcement notice or contact us with the account email and decision details. We may decline repeated appeals that provide no new information.',
    ],
  },
  {
    title: 'Policy development',
    paragraphs: [
      'We update safeguards as models, abuse patterns, and legal requirements change. We evaluate both under-enforcement and over-enforcement and use credible reports to improve moderation quality.',
    ],
  },
]

export default function ContentModerationPage() {
  return (
    <LegalDocument
      title="Content Moderation"
      summary="The principles and processes used to identify prohibited content, respond to misuse, and review enforcement decisions."
      sections={sections}
      contactSubject="Content moderation report"
    />
  )
}
