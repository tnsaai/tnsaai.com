import { ProductDetailPage } from '@/components/ui/ProductDetailPage'

export default function GensChatPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="GensChat"
      description="GensChat is TNSA's conversational AI experience powered by NGen models, designed for natural assistance, creative work, study, and day-to-day productivity."
      image="/genschat.png"
      imageAlt="GensChat"
      features={[
        {
          title: 'Natural conversation',
          description: 'Maintain context across prompts and get useful responses for writing, reasoning, coding, and planning.',
        },
        {
          title: 'Indian context',
          description: 'Built with attention to Indian languages, cultural context, and local workflows.',
        },
        {
          title: 'NGen powered',
          description: 'Uses TNSA model systems for fast, capable, and increasingly multimodal assistance.',
        },
      ]}
      applications="Students, creators, professionals, founders, researchers, support workflows, language practice, productivity assistance, and everyday AI conversations."
      statusTitle="Pricing"
      status="Free to use."
      primaryAction={{ label: 'Try GensChat', href: 'https://chat.tnsaai.com' }}
      secondaryAction={{ label: 'Explore NGen', href: '/models' }}
    />
  )
}
