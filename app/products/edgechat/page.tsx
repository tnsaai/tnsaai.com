import { ProductDetailPage } from '@/components/ui/ProductDetailPage'

export default function EdgeChatPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="EdgeChat"
      description="EdgeChat brings AI closer to the device with locally running models for offline, privacy-first assistance where network access is limited or sensitive data must stay local."
      image="/edgechat.png"
      imageAlt="EdgeChat"
      features={[
        {
          title: 'Offline first',
          description: 'Run AI experiences without requiring constant network connectivity.',
        },
        {
          title: 'Private by design',
          description: 'Keep sensitive prompts and responses on-device for privacy-focused workflows.',
        },
        {
          title: 'Lightweight operation',
          description: 'Designed for efficient local use across edge devices and low-connectivity settings.',
        },
      ]}
      applications="Rural education, healthcare access, emergency services, field work, privacy-first productivity, offline assistance, and edge-device AI workflows."
      statusTitle="Availability"
      status="Coming soon."
      primaryAction={{ label: 'View Products', href: '/products' }}
      secondaryAction={{ label: 'Contact', href: '/company/contact' }}
    />
  )
}
