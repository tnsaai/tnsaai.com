import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function DataEngineeringPage() {
  return (
    <EnterpriseServicePage
      title="Data Engineering"
      description="Build robust data pipelines and governance systems so enterprise data is clean, accessible, secure, and ready for model training or AI applications."
      image="/data-engineering.png"
      imageAlt="Data Engineering"
      featuresTitle="Data capabilities"
      features={[
        {
          title: 'Pipeline design',
          description: 'Design ingestion, transformation, validation, and storage flows for AI workloads.',
        },
        {
          title: 'Data quality',
          description: 'Improve deduplication, labeling, filtering, schema quality, and dataset reliability.',
        },
        {
          title: 'Governance',
          description: 'Create controls for sensitive data, provenance, access, and auditability.',
        },
      ]}
      steps={[
        { title: 'Audit data', description: 'Review sources, quality, permissions, and missing structure.' },
        { title: 'Build pipelines', description: 'Create repeatable ETL or ELT flows for model and product teams.' },
        { title: 'Validate', description: 'Add checks for quality, safety, privacy, and schema stability.' },
        { title: 'Operate', description: 'Monitor pipelines and keep datasets reliable as usage grows.' },
      ]}
      applications="Data infrastructure modernization, AI data preparation, real-time analytics, enterprise knowledge integration, RAG datasets, and training corpus development."
    />
  )
}
