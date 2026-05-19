import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function DeploymentPage() {
  return (
    <EnterpriseServicePage
      title="Model Deployment"
      description="Deploy AI models to production with scalable serving, release controls, observability, and operational support for mission-critical applications."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046757.jpg"
      imageAlt="Model Deployment"
      featuresTitle="Deployment capabilities"
      features={[
        {
          title: 'Production serving',
          description: 'Set up model endpoints, routing, batching, caching, and throughput planning.',
        },
        {
          title: 'Release controls',
          description: 'Support staged rollouts, fallback behavior, versioning, and rollback paths.',
        },
        {
          title: 'Observability',
          description: 'Monitor latency, usage, failures, quality signals, and cost in production.',
        },
      ]}
      steps={[
        { title: 'Prepare model', description: 'Package model assets, dependencies, and runtime configuration.' },
        { title: 'Deploy endpoint', description: 'Launch scalable model serving with security and access controls.' },
        { title: 'Validate behavior', description: 'Run production checks, smoke tests, and rollback planning.' },
        { title: 'Monitor', description: 'Track reliability and improve serving performance after release.' },
      ]}
      applications="Production AI deployments, model serving at scale, continuous delivery for AI systems, internal applications, and high-availability enterprise workflows."
    />
  )
}
