import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Data Issues | TNSA',
  description: 'How to report privacy, data quality, provenance, deletion, and security concerns to TNSA.',
}

const sections: LegalSection[] = [
  {
    title: 'Issues covered',
    paragraphs: ['This process covers concerns relating to data handled by TNSA services or reflected in model output. Examples include:'],
    bullets: [
      'Requests to access, correct, delete, restrict, or obtain personal information.',
      'Model output that appears to expose personal, confidential, copyrighted, or inaccurate information.',
      'Questions about dataset provenance, licensing, consent, or attribution.',
      'Unexpected retention, account deletion, export, or data-processing behavior.',
      'Suspected unauthorized access, disclosure, loss, or alteration of data.',
    ],
  },
  {
    title: 'How to report',
    paragraphs: [
      'Email us with a concise description of the issue, the affected product or model, dates, request IDs, relevant URLs, and the outcome you are requesting. Use redacted examples wherever possible.',
      'Do not send passwords, API keys, authentication tokens, government identity numbers, complete financial details, or copies of illegal content.',
    ],
  },
  {
    title: 'Identity and authority',
    paragraphs: [
      'For privacy or account requests, we may verify your identity and authority before disclosing, correcting, or deleting data. An authorized representative may be asked to provide proof of authorization.',
    ],
  },
  {
    title: 'Our response process',
    paragraphs: [
      'We acknowledge and classify reports, preserve relevant records where appropriate, and route the matter to privacy, security, legal, product, or model teams. Complex model or provenance investigations may require additional time.',
      'We will explain the outcome where we can. Legal, safety, security, confidentiality, and the rights of other people may limit what we can disclose or remove.',
    ],
  },
  {
    title: 'Security concerns',
    paragraphs: [
      'If you believe you have found a security vulnerability, avoid accessing data beyond what is necessary to demonstrate the issue, do not disrupt services, and do not publicly disclose the issue before we have had a reasonable opportunity to investigate.',
      'Mark urgent reports clearly and include safe reproduction steps. We do not authorize testing that violates law, harms users, degrades services, or accesses third-party data.',
    ],
  },
  {
    title: 'Retention and legal limits',
    paragraphs: [
      'Some records cannot be deleted immediately because they are needed for security, fraud prevention, contractual records, legal obligations, or the protection of rights. Where deletion is not available, we may restrict use where appropriate and permitted.',
    ],
  },
  {
    title: 'Escalation',
    paragraphs: [
      'If you believe a response did not address the issue, reply to the case email with the missing facts or requested correction. You may also have the right to contact a data-protection or other competent authority in your jurisdiction.',
    ],
  },
]

export default function DataIssuesPage() {
  return (
    <LegalDocument
      title="Data Issues"
      summary="How to raise privacy, data quality, provenance, deletion, or security concerns involving TNSA services and models."
      sections={sections}
      contactSubject="Data issue report"
    />
  )
}
