import { ProductDetailPage } from '@/components/ui/ProductDetailPage'

export default function TNSAPlatformPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="TNSA Platform"
      description="TNSA Platform is the unified API platform for building AI applications with TNSA models, enterprise-ready infrastructure, developer tooling, and production monitoring."
      image="/tnsa-platform.png"
      imageAlt="TNSA Platform"
      features={[
        {
          title: 'Unified model access',
          description: 'Use TNSA language, image, audio, and agent models from one developer surface.',
        },
        {
          title: 'Production infrastructure',
          description: 'Build with optimized serving, monitoring, usage controls, and scalable API access.',
        },
        {
          title: 'Developer workflow',
          description: 'Prototype, evaluate, and ship AI features with clear documentation and platform tooling.',
        },
      ]}
      applications="Application development, internal automation, research experimentation, enterprise integration, startup products, educational projects, and production AI workflows."
      statusTitle="Pricing"
      status="Free tier available with pay-per-use model access."
      primaryAction={{ label: 'Access Platform', href: 'https://platform.tnsaai.com' }}
      secondaryAction={{ label: 'View Models', href: '/models' }}
    />
  )
}
