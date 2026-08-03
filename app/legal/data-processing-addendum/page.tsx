import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Data Processing Addendum | TNSA',
  description: 'Data-processing terms for TNSA business, developer, API, and enterprise customers.',
}

const sections: LegalSection[] = [
  {
    title: 'Application, scope, and roles',
    paragraphs: [
      'This Data Processing Addendum (“DPA”) supplements the agreement or order form between TNSA Private Limited (“TNSA”) and the customer identified in that agreement (“Customer”) for business, developer, API, hosted-model, or enterprise services (the “Agreement”). It applies only when the Agreement expressly incorporates this DPA or TNSA accepts it in writing.',
      'For Customer Personal Data processed to provide the Services, Customer acts as controller or processor, as applicable, and TNSA acts as Customer’s processor or sub-processor. Each party will comply with the data-protection laws applicable to its role.',
      'Capitalized terms not defined here have the meanings given in the Agreement. If this DPA conflicts with the Agreement on the processing of Customer Personal Data, this DPA controls for that subject.',
    ],
  },
  {
    title: 'Customer instructions and processing limits',
    paragraphs: [
      'The Agreement, this DPA, applicable order forms, and Customer’s lawful configuration and API instructions together constitute documented instructions to TNSA. TNSA will process Customer Personal Data only to provide, secure, support, and maintain the Services in accordance with those instructions, unless applicable law requires other processing.',
      'If law requires processing outside Customer’s instructions, TNSA will notify Customer before processing unless the law prohibits notice. TNSA will inform Customer if, in its reasonable opinion, an instruction violates applicable data-protection law and may suspend the affected processing while the parties address the concern.',
    ],
  },
  {
    title: 'Confidentiality and personnel',
    paragraphs: [
      'TNSA will ensure that personnel authorized to process Customer Personal Data are bound by confidentiality obligations, receive appropriate privacy and security guidance, and access data only to the extent required for their responsibilities.',
    ],
  },
  {
    title: 'Security measures',
    paragraphs: [
      'TNSA will maintain technical and organizational measures appropriate to the nature of the processing and reasonably designed to protect Customer Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.',
    ],
    bullets: [
      'Access controls based on role, least privilege, and authentication requirements.',
      'Encryption in transit and appropriate protection for stored data supported by the relevant Service.',
      'Logging, monitoring, vulnerability management, and incident-response procedures.',
      'Business-continuity, backup, recovery, and availability measures proportionate to the Service.',
      'Periodic review of security controls and personnel confidentiality obligations.',
    ],
  },
  {
    title: 'Data-subject requests and compliance assistance',
    paragraphs: [
      'If TNSA receives a request from an individual relating to Customer Personal Data, TNSA may redirect the requester to Customer and will not independently respond on Customer’s behalf unless authorized by Customer or required by law.',
      'Taking into account the nature of processing and information available, TNSA will provide reasonable assistance for Customer’s response to data-subject requests, security obligations, data-protection impact assessments, and legally required regulator consultations. Additional work outside ordinary product capabilities may be subject to agreed fees.',
    ],
  },
  {
    title: 'Personal Data Breaches',
    paragraphs: [
      'TNSA will notify Customer without undue delay after confirming a Personal Data Breach affecting Customer Personal Data. Notice will include information reasonably available to TNSA about the nature of the incident, affected data, likely consequences, and mitigation steps.',
      'TNSA will take reasonable steps to contain, investigate, and remediate the incident and will provide reasonable cooperation for Customer’s legally required notifications. A notice is not an admission of fault or liability.',
    ],
  },
  {
    title: 'Sub-processors',
    paragraphs: [
      'Customer gives TNSA general authorization to engage affiliates and third-party sub-processors needed to provide the Services. TNSA will impose written data-protection obligations on each sub-processor that are materially consistent with the obligations applicable to TNSA under this DPA.',
      'On reasonable request, TNSA will provide information about relevant sub-processors. Where required by applicable law or the Agreement, TNSA will provide notice of a new sub-processor and a reasonable period for Customer to raise a documented data-protection objection. The parties will work in good faith on a commercially reasonable solution; if none is available, either party may terminate only the affected Service under the Agreement.',
      'TNSA remains responsible for a sub-processor’s performance of obligations delegated by TNSA, subject to the liability terms of the Agreement.',
    ],
  },
  {
    title: 'Compliance information and audits',
    paragraphs: [
      'TNSA will make available information reasonably necessary to demonstrate compliance with this DPA. Where legally required and the available documentation is insufficient, Customer may request an audit no more than once in a 12-month period, unless a confirmed Personal Data Breach or regulator requires an additional audit.',
      'Audits must be conducted by an independent qualified auditor under confidentiality obligations, at Customer’s expense, during normal business hours, with reasonable notice, and without compromising other customers, security, or TNSA operations. TNSA may satisfy a request with relevant independent assessment reports where permitted by law.',
    ],
  },
  {
    title: 'Return and deletion',
    paragraphs: [
      'During the term, Customer may use available Service features to access, export, or delete Customer Personal Data. After the affected Service ends, TNSA will delete or return Customer Personal Data on Customer’s written instruction, unless the Agreement specifies a different process or applicable law requires retention.',
      'Data retained by law will be isolated and protected from further processing except for the legally required purpose. Backup copies may remain until overwritten under ordinary backup schedules, subject to continued protection.',
    ],
  },
  {
    title: 'Customer responsibilities',
    paragraphs: [
      'Customer is responsible for the lawfulness, accuracy, and quality of Customer Personal Data and for providing required notices, obtaining required consents or other legal bases, responding to individuals, and issuing lawful instructions.',
      'Customer will configure and use the Services in compliance with law, apply appropriate access and retention settings, protect credentials, and avoid submitting sensitive or regulated data unless the Agreement expressly supports that use and Customer has implemented suitable safeguards.',
    ],
  },
  {
    title: 'International transfers',
    paragraphs: [
      'Customer authorizes TNSA and its approved sub-processors to process Customer Personal Data in India and other locations necessary to provide the Services. Where data-protection law requires a transfer mechanism, the parties will use the applicable approved contractual clauses, addendum, adequacy decision, certification, or other lawful mechanism.',
      'If a transfer assessment or additional safeguard is legally required, the parties will reasonably cooperate based on the processing, destination, and protections available. Any standard contractual clauses must be separately executed or validly incorporated where required.',
    ],
  },
  {
    title: 'Regional requirements',
    paragraphs: [
      'Where applicable law treats TNSA as a service provider, contractor, or processor, TNSA will not sell Customer Personal Data, retain or use it outside the direct business relationship except as permitted to provide and protect the Services, or combine it with unrelated personal data except as instructed or legally permitted.',
      'TNSA will maintain de-identified data in de-identified form and will not attempt to re-identify it except to test whether de-identification measures are effective or where law permits.',
    ],
  },
  {
    title: 'Duration, liability, and order of precedence',
    paragraphs: [
      'This DPA begins when it becomes part of the Agreement and remains effective while TNSA processes Customer Personal Data. The Agreement’s liability limitations, exclusions, dispute terms, and governing law apply to this DPA unless mandatory data-protection law requires otherwise.',
      'If an executed transfer mechanism conflicts with this DPA, the transfer mechanism controls for the conflicting processing. Otherwise, this DPA controls over the Agreement only for data-protection obligations relating to Customer Personal Data.',
    ],
  },
  {
    title: 'Definitions',
    paragraphs: [
      '“Customer Personal Data” means personal data processed by TNSA on Customer’s behalf to provide the Services. “Data-protection law” means privacy and data-protection law applicable to that processing. “Personal Data Breach” means a security breach leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Customer Personal Data.',
      '“Controller,” “processor,” “processing,” “personal data,” and “data subject” have the meanings assigned by applicable data-protection law. “Sub-processor” means a third party engaged by TNSA to process Customer Personal Data for the Services.',
    ],
  },
  {
    title: 'Schedule — details of processing',
    paragraphs: [
      'Subject matter and purpose: providing, securing, supporting, and maintaining the Services described in the Agreement. Duration: the Agreement term and the limited period needed for deletion, return, legal retention, and surviving obligations.',
      'Data categories are determined by Customer’s use and may include identifiers, contact and account information, device and usage information, support communications, and personal data contained in prompts, messages, files, images, audio, output, or other unstructured content. Data subjects may include Customer’s personnel, contractors, applicants, customers, suppliers, users, and other individuals whose data Customer submits.',
      'Processing may include collection, transmission, hosting, organization, retrieval, inference, generation, support access, security monitoring, deletion, and other operations necessary for the Services. Frequency may be continuous or on demand according to Customer’s use.',
      'Customer should not submit sensitive personal data unless the relevant Service and Agreement expressly support it. Where authorized, Customer must apply purpose limitation, access restrictions, retention controls, and other safeguards proportionate to the risk.',
    ],
  },
]

export default function DataProcessingAddendumPage() {
  return (
    <LegalDocument
      title="Data Processing Addendum"
      summary="Data-protection terms for TNSA business, developer, API, hosted-model, and enterprise customers when incorporated into a customer agreement."
      sections={sections}
      contactSubject="Data Processing Addendum request"
    />
  )
}
