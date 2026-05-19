import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function ConsultingPage() {
  return (
    <EnterpriseServicePage
      title="AI Consulting"
      description="Strategic AI consulting for teams planning model adoption, internal AI tools, automation programs, and long-term capability development."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-alexant-16738884.jpg"
      imageAlt="AI Consulting"
      featuresTitle="Consulting focus"
      features={[
        {
          title: 'AI roadmap',
          description: 'Identify where models can create value and sequence projects by risk, impact, and readiness.',
        },
        {
          title: 'Use case design',
          description: 'Shape workflows, evaluation criteria, and product requirements before implementation.',
        },
        {
          title: 'Implementation guidance',
          description: 'Support architecture, model choice, deployment planning, and operational handoff.',
        },
      ]}
      steps={[
        { title: 'Discovery', description: 'Understand business goals, constraints, data readiness, and existing systems.' },
        { title: 'Prioritization', description: 'Rank AI opportunities by value, complexity, safety, and deployment effort.' },
        { title: 'Prototype', description: 'Build and evaluate focused pilots before scaling investment.' },
        { title: 'Scale', description: 'Move successful workflows into production with measurement and governance.' },
      ]}
      applications="Organizations starting their AI journey, enterprise transformation teams, AI capability assessment, executive planning, and production rollout strategy."
    />
  )
}
