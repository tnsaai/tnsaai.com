import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Terms and Conditions | TNSA',
  description: 'Terms governing access to TNSA websites, products, models, and AI services.',
}

const sections: LegalSection[] = [
  {
    title: 'Agreement and service scope',
    paragraphs: [
      'These Terms and Conditions (“Terms”) form an agreement between you and TNSA Private Limited (“TNSA,” “we,” “our,” or “us”) and govern your use of our websites, consumer applications, hosted AI products, model interfaces, software, and related services (collectively, the “Services”). By accessing or using a Service, you agree to these Terms.',
      'If you use the Services for a company or other organization, you represent that you have authority to bind that organization, and “you” includes that organization. A signed order form, enterprise agreement, model license, or product-specific term may supplement these Terms and will control if there is a conflict for the service it covers.',
      'Our Privacy Policy explains how we handle personal data. Business and developer customers may also enter into our Data Processing Addendum where applicable.',
    ],
  },
  {
    title: 'Registration and access',
    paragraphs: [
      'You must be at least 13 years old—or the higher minimum age required in your country—to use the Services. If you are under 18, you must have permission from a parent or legal guardian.',
      'You must provide accurate and complete registration and billing information, keep it current, protect your credentials, and promptly tell us about suspected unauthorized access. You may not sell, transfer, or make an account available to another person except through an organizational feature we expressly provide. You are responsible for activity under your account.',
    ],
  },
  {
    title: 'Using the Services',
    paragraphs: [
      'Subject to these Terms, applicable law, usage limits, and published safety requirements, TNSA grants you a limited, non-exclusive, non-transferable, revocable right to access and use the Services for their intended purpose.',
      'You are responsible for your use of the Services and for anyone who accesses them through your account, credentials, application, or integration.',
    ],
  },
  {
    title: 'Prohibited conduct',
    paragraphs: ['You may not use or help another person use the Services to:'],
    bullets: [
      'Engage in illegal, harmful, fraudulent, deceptive, abusive, or rights-infringing activity.',
      'Generate, distribute, or facilitate content prohibited by our safety or content-moderation policies.',
      'Circumvent safeguards, access controls, rate limits, geographic restrictions, monitoring, or technical protections.',
      'Probe, scan, disrupt, overload, introduce malicious code into, or gain unauthorized access to the Services or related systems.',
      'Reverse engineer, decompile, derive source code, extract model components, or copy the Services except where a restriction is prohibited by law or an applicable open-weight license expressly permits it.',
      'Scrape, harvest, or programmatically extract data or output outside authorized APIs and documented limits.',
      'Misrepresent AI output as human-created where disclosure is required by law or reasonably necessary to avoid deception.',
      'Use output about a person as the sole basis for a high-impact decision involving employment, credit, housing, insurance, education, healthcare, legal services, or access to essential services.',
    ],
  },
  {
    title: 'Software, integrations, and third parties',
    paragraphs: [
      'Software we provide may update automatically. Open-source components and open-weight materials are governed by the licenses supplied with them. Those licenses control for the materials they cover.',
      'The Services may connect to third-party products or display third-party information. Third-party services are governed by their own terms and privacy practices. TNSA does not control and is not responsible for third-party services, content, or availability.',
      'If you provide feedback, you grant TNSA a worldwide, perpetual, irrevocable, royalty-free right to use it without restriction or compensation, provided we do not publicly identify you as the source without permission.',
    ],
  },
  {
    title: 'Your content and AI output',
    paragraphs: [
      'You may submit prompts, messages, files, images, audio, data, and other material (“Input”) and receive model-generated responses (“Output”). Input and Output together are “Content.” You are responsible for Content and represent that you have the rights, permissions, and lawful basis needed to provide Input and direct us to process it.',
      'As between you and TNSA, you retain your rights in Input. To the extent permitted by law, TNSA assigns to you any rights it may have in Output generated specifically for you. This assignment does not cover another user’s output, third-party material, or TNSA technology.',
      'You grant TNSA the rights needed to host, reproduce, transmit, modify, and process Content to provide, secure, support, and maintain the Services; comply with law; and enforce our policies. Use of Content for general model improvement depends on the applicable product, account controls, and customer agreement.',
    ],
  },
  {
    title: 'Output limitations and responsibility',
    paragraphs: [
      'AI systems are probabilistic. Output may be inaccurate, incomplete, outdated, offensive, or unsuitable, and different users may receive similar output. Output does not necessarily reflect TNSA’s views or endorsement.',
      'You must evaluate Output for accuracy, safety, legality, and fitness for your use, including appropriate human review. Do not rely on Output as the sole source of truth or as a substitute for professional medical, legal, financial, or other regulated advice.',
      'You are responsible for how you use, publish, or act on Output and for providing disclosures, permissions, testing, monitoring, and safeguards appropriate to your context.',
    ],
  },
  {
    title: 'TNSA intellectual property',
    paragraphs: [
      'TNSA and its licensors retain all rights, title, and interest in the Services, model systems, software, interfaces, documentation, designs, datasets, trade secrets, and branding, except for rights expressly granted under these Terms or a separate license.',
      'You may not use TNSA names, logos, or marks in a way that suggests sponsorship, endorsement, partnership, or that a modified model or product is an official TNSA release without written permission.',
    ],
  },
  {
    title: 'Paid Services',
    paragraphs: [
      'For paid Services, you must provide valid billing information and pay the fees, taxes, and usage charges presented at purchase or stated in an order form. Recurring subscriptions renew and are charged on the stated cycle until cancelled.',
      'You may cancel a subscription through the available account controls or by contacting support. Payments are non-refundable except where required by law or expressly stated. Failed payment may result in downgrade, restriction, or suspension.',
      'We may change pricing or plan features. Where reasonably practicable, material price increases for an existing recurring subscription will be communicated before the next affected renewal.',
    ],
  },
  {
    title: 'Suspension, termination, and discontinuation',
    paragraphs: [
      'You may stop using the Services at any time. We may restrict, suspend, or terminate access when you materially or repeatedly breach these Terms, payment is overdue, law requires action, or continued use creates a credible risk to TNSA, users, third parties, or the Services.',
      'Where appropriate, we will provide notice and an opportunity to appeal. We may act immediately when delay could cause harm, compromise security, violate law, or prevent effective enforcement.',
      'We may change or discontinue a Service. For a discontinued prepaid Service, we will provide reasonable notice and an appropriate refund or credit for unused prepaid access where required by the applicable agreement or law.',
    ],
  },
  {
    title: 'Disclaimer of warranties',
    paragraphs: [
      'To the maximum extent permitted by law, the Services are provided “as is” and “as available.” TNSA and its affiliates, licensors, and suppliers disclaim express, implied, statutory, and other warranties, including merchantability, fitness for a particular purpose, non-infringement, satisfactory quality, and uninterrupted, accurate, secure, or error-free operation.',
      'Nothing in these Terms excludes warranties or consumer rights that cannot lawfully be excluded.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by law, TNSA and its affiliates, licensors, suppliers, and personnel will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profit, revenue, business opportunity, goodwill, use, or data, even if advised that such loss was possible.',
      'To the maximum extent permitted by law, TNSA’s aggregate liability arising from the Services or these Terms will not exceed the amount you paid TNSA for the affected Service during the 12 months before the event giving rise to the claim. These limits do not apply where liability cannot lawfully be limited.',
    ],
  },
  {
    title: 'Indemnity',
    paragraphs: [
      'If you use the Services for a business or organization, to the extent permitted by law you will defend, indemnify, and hold harmless TNSA, its affiliates, and their personnel from third-party claims, losses, liabilities, and reasonable costs arising from your Content, your use of the Services, or your material breach of these Terms or applicable law.',
    ],
  },
  {
    title: 'Complaints and intellectual-property notices',
    paragraphs: [
      'Before beginning formal proceedings, please contact support@tnsaai.com and give us a reasonable opportunity to understand and address the concern.',
      'An intellectual-property complaint should identify the rights owner and authorized representative, the protected work or right, the material at issue and where it appears, your contact information, the requested action, and a good-faith statement that the information is accurate and the challenged use is not authorized. We may remove or restrict material and take action against repeat infringers where appropriate.',
    ],
  },
  {
    title: 'General terms and governing law',
    paragraphs: [
      'You may not assign these Terms without TNSA’s written consent. TNSA may assign them to an affiliate or successor connected with the Services. A delay in enforcement is not a waiver. If a provision is unenforceable, it will be enforced to the maximum lawful extent and the remainder will continue in effect.',
      'You must comply with applicable export controls, sanctions, and trade restrictions. These Terms and any incorporated service-specific terms are the entire agreement concerning the Services they cover and replace prior discussions on the same subject.',
      'We may update these Terms for legal, security, safety, operational, or product reasons. Material changes will receive reasonable advance notice where practicable or required. If you do not agree to updated Terms, you must stop using the affected Services.',
      'These Terms are governed by the laws of India, without regard to conflict-of-law principles. Courts with jurisdiction in Hyderabad, Telangana will have exclusive jurisdiction, unless mandatory law requires a different forum.',
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title="Terms and Conditions"
      summary="The agreement governing access to TNSA websites, consumer applications, hosted AI products, model interfaces, and related services."
      sections={sections}
      contactSubject="Terms and conditions question"
    />
  )
}
