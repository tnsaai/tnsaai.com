import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function InfrastructurePage() {
  return (
    <EnterpriseServicePage
      title="Infrastructure Support"
      description="Deploy and manage AI infrastructure with support for cloud, hybrid, and on-premise environments built around performance, reliability, and operational visibility."
      image="/infra-support.png"
      imageAlt="Infrastructure Support"
      featuresTitle="Infrastructure capabilities"
      features={[
        {
          title: 'Deployment design',
          description: 'Architecture planning for model serving, routing, observability, and scale.',
        },
        {
          title: 'Cloud and on-premise',
          description: 'Support for enterprise environments with security, compliance, and workload constraints.',
        },
        {
          title: 'Monitoring',
          description: 'Track latency, throughput, reliability, cost, and model-serving health.',
        },
      ]}
      steps={[
        { title: 'Assess workload', description: 'Map model type, traffic, latency, and availability requirements.' },
        { title: 'Design stack', description: 'Plan serving, storage, networking, monitoring, and fallbacks.' },
        { title: 'Deploy', description: 'Set up production infrastructure and release controls.' },
        { title: 'Optimize', description: 'Tune performance, cost, scale, and reliability over time.' },
      ]}
      applications="Enterprise deployments, high-availability model serving, hybrid cloud setups, regulated workloads, and teams moving AI systems from prototype to production."
    />
  )
}
