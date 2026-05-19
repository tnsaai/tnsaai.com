import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function TNSAPartnershipNewsPost() {
  return (
    <NewsArticlePage
      date="January 10, 2025"
      category="Company"
      title="TNSA X Microsoft for Startups & Google TPU Research Cloud"
      deck="TNSA joins major startup and research infrastructure programs to accelerate model training, experimentation, and product delivery."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-steve-1509534.jpg"
      imageAlt="TNSA Partnerships"
      readTime="3 min read"
      author="TNSA"
      sections={[
        {
          title: 'Partnership announcement',
          content: [
            'TNSA joined Microsoft for Startups and Google TPU Research Cloud to accelerate AI research, model training, and infrastructure development.',
            'These programs give the team access to cloud support, compute resources, technical guidance, and a stronger foundation for scaling model experiments.',
          ],
        },
        {
          title: 'Microsoft for Startups',
          content: 'The Microsoft for Startups program helps young companies build and scale products with cloud infrastructure, technical resources, and ecosystem support.',
          bullets: [
            'Access to Azure cloud infrastructure and services.',
            'Technical support and mentorship from Microsoft experts.',
            'Collaboration opportunities across the Microsoft ecosystem.',
            'A path to enterprise-ready deployment patterns as products mature.',
          ],
        },
        {
          title: 'Google TPU Research Cloud',
          content: 'The Google TPU Research Cloud program supports AI research teams with access to TPU resources for large-scale experimentation.',
          bullets: [
            'Access to TPU hardware for AI research.',
            'Support for large-scale training and experimentation.',
            'Participation in a global AI research infrastructure program.',
            'More room to test architecture ideas, scaling behavior, and evaluation runs.',
          ],
        },
        {
          title: 'Impact on TNSA',
          content: [
            'These partnerships help TNSA train stronger models, conduct deeper experiments, and deliver better AI systems to users and partners.',
            'The most immediate impact is speed: more experiments can run in parallel, failures can be studied earlier, and promising systems can move toward product readiness faster.',
          ],
        },
        {
          title: 'What this enables',
          content: 'Infrastructure access matters because frontier AI work depends on repeated testing. More compute does not automatically create better models, but it gives researchers the ability to compare ideas with more evidence.',
          bullets: [
            'Larger training and evaluation jobs.',
            'More frequent ablation studies.',
            'Better infrastructure for model serving and developer products.',
            'Stronger foundations for future NGen releases.',
          ],
        },
        {
          title: 'Looking ahead',
          content: 'TNSA will continue using partnerships like these to connect research velocity with product reliability, especially for models and tools designed around Indian language and enterprise use cases.',
        },
      ]}
      cta={{ label: 'View All News', href: '/company/news' }}
    />
  )
}
