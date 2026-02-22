'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

const resources = [
  {
    title: 'API Documentation',
    description: 'Comprehensive guides and REST API reference',
    category: 'Documentation',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1616403.jpg',
  },
  {
    title: 'Getting Started',
    description: 'Quick start guide to integrate TNSA AI',
    category: 'Guide',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-asim-razan-32997.jpg',
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official SDKs for Python, JavaScript, and more',
    category: 'Tools',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-earano-3608311.jpg',
  },
  {
    title: 'Code Examples',
    description: 'Sample code and implementation examples',
    category: 'Examples',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-roman-odintsov-4871011.jpg',
  },
  {
    title: 'API Reference',
    description: 'Complete API endpoint documentation',
    category: 'Reference',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-3109807.jpg',
  },
  {
    title: 'Authentication',
    description: 'API key management and security best practices',
    category: 'Security',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-4175070.jpg',
  },
]

export default function DevelopersPage() {
  return (
    <div className="bg-white">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Developers.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Developer Resources.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">
              Everything you need to build with TNSA AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
            {resources.map((resource) => (
              <FlightCard
                key={resource.title}
                title={resource.title}
                subtitle={resource.description}
                category={resource.category}
                imageUrl={resource.imageUrl}
                imageAlt={resource.title}
                href={resource.href}
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
