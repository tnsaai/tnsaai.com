'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FlightCard } from '@/components/ui/flight-card'

const papers = [
  {
    title: 'Introducing Rishi (AAR-1): TNSA\'s First Automated AI Researcher',
    description: 'Meet Rishi, TNSA\'s pioneering Automated AI Researcher, relentlessly working to achieve SuperIntelligence.',
    href: '/company/news/rishi-aar-1-tnsas-first-automated-ai-researcher',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/tnsa-risihi%20(1).png',
    showTitle: false,
    imageFit: 'contain',
  },
  {
    title: 'NGen4 Atom Chat Launch',
    description: 'Introducing TNSA\'s most massive model - 10X larger than our biggest open-weight model NGen3 10B.',
    href: '/company/news/ngen4-atom-chat-launch',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1568607.jpg',
  },
  {
    title: 'Transforming Government Services with Large Language Models',
    description: 'A comprehensive look at how LLMs can revolutionize government services and public administration.',
    href: '/company/news/transforming-government-services-with-large-language-models',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg',
  },
  {
    title: 'NGen 3.1 Models Series Launch',
    description: 'Introducing the next generation of frontier AI models with breakthrough performance across all benchmarks.',
    href: '/company/news/ngen3.1-models-series-launch',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-pixabay-355288.jpg',
  },
  {
    title: 'TNSA X Microsoft for Startups & Google TPU Research Cloud',
    description: 'TNSA joins forces with Microsoft for Startups and Google TPU Research Cloud to accelerate AI research.',
    href: '/company/news/tnsa-x-microsoft-for-startups-tnsa-x-google-tpu-research-cloud',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-steve-1509534.jpg',
  },
  {
    title: 'TNSA API & GensChat are Live',
    description: 'The TNSA API and GensChat are now available for developers and users.',
    href: '/company/news/tnsa-api-is-live-genschats-is-live',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592788.jpg',
  },
  {
    title: 'A Guide to Build Agents with NGen and MCP',
    description: 'New practical guide on building agents with NGen and the Model Context Protocol (MCP).',
    href: '/company/news/a-guide-to-build-agents-with-ngen-and-mcp',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592795.jpg',
  },
]

export default function NewsPage() {
  return (
    <div className="bg-white">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            News.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Latest Updates.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">
              Stay updated with our latest announcements and developments.
            </p>
          </div>

          <div className="mb-8">
            <div className="rounded-lg bg-zinc-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700">Featured: Explore our latest research and tools.</div>
              <div className="flex gap-3">
                <Link href="/research/tri-flux-attention" className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50">Tri‑Flux Attention</Link>
                <Link href="/company/news/rishi-aar-1-tnsas-first-automated-ai-researcher" className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50">Meet Rishi</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            {papers.map((paper) => (
              <FlightCard
                key={paper.title}
                title={paper.title}
                subtitle={paper.description}
                category="News"
                price="Free Access"
                buttonText="Read More"
                imageUrl={paper.backgroundImage}
                imageAlt={paper.title}
                href={paper.href}
                // @ts-ignore
                showTitle={paper.showTitle}
                // @ts-ignore
                imageFit={paper.imageFit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
