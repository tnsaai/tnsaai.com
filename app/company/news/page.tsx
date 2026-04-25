'use client'

import Link from 'next/link'
import Image from 'next/image'

const papers = [
  {
    title: 'NGen 4 System Card',
    description: 'A comprehensive overview of the architecture, training methodologies, and benchmark evaluations for the NGen 4 model series.',
    href: '/company/news/ngen-4-system-card',
    backgroundImage: '/ngen4-sys-card.png',
  },
  {
    title: 'Open-Sourcing NGen-4-K2-1T-Thinking: 1T Param Indic-First LLM',
    description: 'TNSA is open-sourcing a 1 Trillion parameter Indic-first LLM under Apache 2.0, pushing multilingual intelligence at unprecedented scale.',
    href: '/company/news/ngen-4-k2-1t-thinking-open-source',
    backgroundImage: '/TV - 4.svg',
  },
  {
    title: 'Introducing IGen-1: Advanced Image Generation',
    description: 'IGen-1 delivers professional-grade image generation with up to 4K resolution and advanced editing capabilities.',
    href: '/models/igen-1-image',
    backgroundImage: 'https://igen.tnsaai.com/images/igen1/igen1-7.png',
  },
  {
    title: 'Introducing Rishi (AAR-1): TNSA\'s First Automated AI Researcher',
    description: 'Meet Rishi, TNSA\'s pioneering Automated AI Researcher, relentlessly working to achieve SuperIntelligence.',
    href: '/company/news/rishi-aar-1-tnsas-first-automated-ai-researcher',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/tnsa-risihi%20(1).png',
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

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

function NewsCard({ paper, priority = false }: { paper: any; priority?: boolean }) {
  return (
    <Link href={paper.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={paper.backgroundImage}
          alt={paper.title}
          fill
          priority={priority}
          quality={100}
          className={`rounded-[10px] transition-transform duration-500 group-hover:scale-105 ${paper.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {paper.title}
      </h3>
      <Label>News</Label>
      {paper.description ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{paper.description}</p>
      ) : null}
    </Link>
  )
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore News</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            News
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <div className="mb-12">
          <div className="rounded-lg bg-gray-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
            <div className="text-[13px] text-gray-700">Featured: Explore our latest research and tools.</div>
            <div className="flex gap-3">
              <Link href="/research/tri-flux-attention" className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md text-[12px] text-black transition-colors hover:bg-gray-50">Tri‑Flux Attention</Link>
              <Link href="/company/news/ngen-4-k2-1t-thinking-open-source" className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded-md text-[12px] text-black transition-colors hover:bg-gray-50">NGen-4-K2-1T</Link>
            </div>
          </div>
        </div>

        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">Latest Updates</h2>
            <p className="mt-3 text-[15px] text-gray-500">Stay updated with our latest announcements and developments.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper, index) => (
              <NewsCard
                key={paper.title}
                paper={paper}
                priority={index < 3}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-lg">
          <div className="relative min-h-[360px]">
            <Image
              src="/india.png"
              alt="Start building with TNSA today"
              fill
              quality={100}
              className="object-cover rounded-[10px]"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-[10px]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Start building with TNSA today
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="https://platform.tnsaai.com" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  API Platform
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
