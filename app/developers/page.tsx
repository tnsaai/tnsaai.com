'use client'

import Link from 'next/link'
import Image from 'next/image'

const resources = [
  {
    title: 'API Documentation',
    description: 'Comprehensive guides and REST API reference.',
    category: 'Documentation',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1616403.jpg',
  },
  {
    title: 'Getting Started',
    description: 'Quick start guide to integrate TNSA AI.',
    category: 'Guide',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-asim-razan-32997.jpg',
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official SDKs for Python, JavaScript, and more.',
    category: 'Tools',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-earano-3608311.jpg',
  },
  {
    title: 'Code Examples',
    description: 'Sample code and implementation examples.',
    category: 'Examples',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-roman-odintsov-4871011.jpg',
  },
  {
    title: 'API Reference',
    description: 'Complete API endpoint documentation.',
    category: 'Reference',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-3109807.jpg',
  },
  {
    title: 'Authentication',
    description: 'API key management and security best practices.',
    category: 'Security',
    href: 'https://platform.tnsaai.com/docs',
    imageUrl: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-4175070.jpg',
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

function DeveloperCard({ resource, priority = false }: { resource: any; priority?: boolean }) {
  return (
    <Link href={resource.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={resource.imageUrl}
          alt={resource.title}
          fill
          priority={priority}
          quality={100}
          className="object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {resource.title}
      </h3>
      <Label>{resource.category}</Label>
      {resource.description ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{resource.description}</p>
      ) : null}
    </Link>
  )
}

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore Developers</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Developers
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">Developer Resources</h2>
            <p className="mt-3 text-[15px] text-gray-500">Everything you need to build with TNSA AI.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <DeveloperCard
                key={resource.title}
                resource={resource}
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
