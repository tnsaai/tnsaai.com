import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Privacy Policy | TNSA',
  description: 'How TNSA collects, uses, shares, retains, and protects personal data.',
}

const sections: LegalSection[] = [
  {
    title: 'Scope and who this policy covers',
    paragraphs: [
      'This Privacy Policy describes how TNSA Private Limited (“TNSA,” “we,” “our,” or “us”) handles personal data when individuals visit our websites, create an account, use our applications and hosted AI services, or communicate with us. Together, these are the “Services.”',
      'When TNSA processes data on behalf of a business, developer, or enterprise customer—such as inputs submitted through a contracted API or private deployment—the customer agreement and any applicable data-processing terms govern that processing. The customer controls the data it submits and is responsible for providing required notices to its users.',
      'A product-specific notice may provide additional details. If a product notice or signed agreement conflicts with this policy, the more specific terms control for the relevant service.',
    ],
  },
  {
    title: 'Personal data we collect',
    paragraphs: [
      'We collect personal data you provide and data generated when you use the Services. The categories depend on the product and features you choose.',
    ],
    bullets: [
      'Account data, including your name, email address, organization, username, authentication information, subscription status, and account preferences.',
      'User content, including prompts, messages, files, images, audio, feedback, and other material you submit, together with model responses and related metadata.',
      'Payment and transaction data, such as plan, billing status, invoices, and limited payment details supplied by payment providers. TNSA does not need your complete card number to provide ordinary billing support.',
      'Communications, including support requests, survey responses, event registrations, safety reports, legal notices, and other correspondence.',
      'Log and usage data, such as IP address, request time, browser type, user agent, pages or features used, model selected, token or usage counts, error logs, and interaction signals.',
      'Device and approximate location data, including operating system, device type, language, and general region inferred from IP address. Precise location is collected only when a feature requests it and you choose to provide it.',
      'Cookies and similar technologies used for authentication, security, preferences, performance, analytics, and—where applicable and permitted—communications measurement.',
    ],
  },
  {
    title: 'Data from other sources and model development',
    paragraphs: [
      'We may receive information from security and fraud-prevention providers, payment processors, identity or age-verification providers, business partners, and publicly available sources. We use this information only for the purposes described in this policy and subject to applicable law.',
      'TNSA may develop models using a mixture of publicly available information, licensed datasets, data created by human reviewers, synthetic data, and information users choose to provide for improvement. Business-customer data is not used to train general models unless the governing agreement or an authorized customer setting expressly permits it.',
      'Model training does not operate like a searchable database, and a model does not intentionally store copies of training documents. Models can nevertheless produce inaccurate or unexpected information, so we provide a process for reporting personal-data and model-output concerns.',
    ],
  },
  {
    title: 'How we use personal data',
    paragraphs: [
      'We use personal data to operate the Services and for legitimate business, contractual, consent-based, and legal purposes.',
    ],
    bullets: [
      'Provide, authenticate, maintain, troubleshoot, and support the Services.',
      'Generate responses, process files, deliver requested features, and administer accounts and subscriptions.',
      'Analyze performance, conduct research, develop features, evaluate models, and improve quality when the applicable product terms and controls permit it.',
      'Personalize settings and product experiences based on your choices.',
      'Send transactional notices, respond to requests, and communicate product, safety, policy, or service changes.',
      'Protect users and systems, detect fraud and abuse, enforce our terms, investigate incidents, and prevent unlawful or harmful activity.',
      'Comply with legal obligations and protect the rights, privacy, safety, or property of TNSA, our users, and others.',
    ],
  },
  {
    title: 'How we disclose personal data',
    paragraphs: [
      'We do not sell personal data. We disclose it only where reasonably necessary for the Services, our operations, safety, or legal obligations.',
    ],
    bullets: [
      'Service providers that support cloud infrastructure, hosting, payments, analytics, customer support, communications, security, identity verification, and professional services. They process data under contractual restrictions appropriate to their role.',
      'Affiliates or entities under common control, where any use must remain consistent with this policy.',
      'Business-account administrators, who may manage membership, settings, access, usage, and content associated with an organizational workspace, depending on that product’s controls.',
      'Authorities, regulators, rights holders, safety organizations, or other parties when required by law or reasonably necessary to address fraud, abuse, security, policy violations, legal claims, or serious harm.',
      'Parties involved in a merger, financing, reorganization, acquisition, sale, or similar corporate transaction, subject to appropriate confidentiality and legal requirements.',
      'Other people or services when you direct us to share information, publish a link, enable an integration, or otherwise make content available to them.',
    ],
  },
  {
    title: 'Retention',
    paragraphs: [
      'We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, to provide the Services, and to meet safety, security, accounting, dispute-resolution, contractual, and legal obligations.',
      'Retention depends on the data’s nature, sensitivity, product configuration, user controls, risk of harm, and applicable requirements. Some information may remain until you delete it or close an account; other operational records may be deleted automatically under internal schedules.',
      'We may retain limited records after a deletion request when required for fraud and abuse prevention, financial reporting, legal process, enforcement, or proof that we completed the request. Data that has been irreversibly de-identified may no longer be linked to an account and may be retained for analytics and research.',
    ],
  },
  {
    title: 'Your data controls',
    paragraphs: [
      'Available controls vary by product and account type. Where a Service provides them, you may be able to review or delete conversations, remove uploaded content, export account data, close your account, manage model-improvement preferences, adjust cookies, or unsubscribe from non-essential communications.',
      'Deleting content from an account removes it from ordinary product access. Limited copies may persist temporarily in backup, security, legal, or abuse-prevention systems before they are deleted or isolated under applicable retention schedules.',
    ],
  },
  {
    title: 'Your privacy rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access personal data, learn how it is processed, correct inaccurate data, request deletion, restrict or object to processing, obtain portable data, withdraw consent, or complain to a competent authority.',
      'You may also ask us to review model output that appears to contain inaccurate personal information about you. Because generative models predict likely responses rather than retrieve a verified personal record, correction may require measures different from editing an account database, and requests are evaluated under applicable law and technical feasibility.',
      'To protect personal data, we may verify your identity and authority before completing a request. Authorized representatives may be required to provide written permission. You will not be treated unfairly for exercising a privacy right.',
    ],
  },
  {
    title: 'Children and younger users',
    paragraphs: [
      'The Services are not directed to children under 13, and we do not knowingly collect personal data from children under 13. A higher minimum age may apply where local law requires it. Users under 18 should use the Services only with permission from a parent or legal guardian.',
      'If you believe a child provided personal data without appropriate authorization, contact us with enough information to investigate without sending additional sensitive information about the child.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We use technical, administrative, and organizational measures designed to protect personal data against loss, misuse, unauthorized access, disclosure, alteration, and destruction. Access is limited according to role and operational need.',
      'No internet service, storage system, or email transmission is completely secure. You are responsible for protecting account credentials, using appropriate access controls, and deciding what information to submit to an AI service.',
    ],
  },
  {
    title: 'International processing',
    paragraphs: [
      'TNSA is based in India. We and our service providers may process personal data in India and other countries where infrastructure or support operations are located. Privacy laws in those places may differ from those in your country.',
      'Where required, we use legally recognized safeguards for international transfers and apply the protections described in this policy regardless of processing location.',
    ],
  },
  {
    title: 'Changes, controller, and contact',
    paragraphs: [
      'We may update this policy as our products, practices, and legal obligations change. We will publish the revised policy and updated date here, and provide additional notice where required.',
      'TNSA Private Limited is responsible for the personal-data processing described in this policy unless a product notice or customer agreement identifies another responsible entity. TNSA is based in Hyderabad, India.',
      'For questions, rights requests, model-output privacy concerns, or complaints, contact support@tnsaai.com with the subject “Privacy request.” Include the relevant account email, product, dates, and a concise description, but do not send passwords, authentication tokens, or unnecessary sensitive data.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      summary="How TNSA collects, uses, discloses, retains, and protects personal data across our websites, hosted AI products, model services, and support channels."
      sections={sections}
      contactSubject="Privacy request"
    />
  )
}
