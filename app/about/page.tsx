'use client'

import Link from 'next/link'
import Image from 'next/image'

const founders = [
  {
    name: 'Nachiketh Abimalla',
    role: 'Co-Founder & CEO',
    description: 'Leads product, strategy, and the company direction for TNSA AI.',
  },
  {
    name: 'Thishyaketh Abimalla',
    role: 'Co-Founder & CTO',
    description: 'Leads model research, systems architecture, and frontier AI development.',
  },
]

const productAreas = [
  {
    title: 'NGen Series',
    label: 'Models',
    href: '/models',
    description: 'Language, reasoning, multimodal, and agent models across compact and frontier tiers.',
  },
  {
    title: 'IGen Series',
    label: 'Images',
    href: '/models/igen-1-image',
    description: 'Image generation and creative systems built for high-quality visual workflows.',
  },
  {
    title: 'TNSA Platform',
    label: 'Product',
    href: '/products/platform',
    description: 'Developer access to TNSA models, APIs, and deployment infrastructure.',
  },
  {
    title: 'GensChat',
    label: 'Assistant',
    href: '/products/genchat',
    description: 'Conversational AI experience powered by the NGen model family.',
  },
  {
    title: 'AI Safety',
    label: 'Safety',
    href: '/safety',
    description: 'Safety practices, model system cards, and alignment work across releases.',
  },
  {
    title: 'Research',
    label: 'Research',
    href: '/research',
    description: 'Public research on attention, agents, multimodality, quantum AI, and superintelligence.',
  },
]

const principles = [
  'Build core AI capability from India',
  'Ship useful systems with clear safety boundaries',
  'Make frontier intelligence accessible to builders',
  'Invest in long-term AGI and quantum intelligence research',
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Company</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            About TNSA
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 pb-12 pt-0 first:border-t-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/about.png"
              alt="TNSA AI"
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Our story</h2>
              <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                Independent AI research, product engineering, and model development.
              </p>
            </div>
            <div className="space-y-4 text-[14px] leading-7 text-gray-700">
              <p>
                TNSA AI was founded in 2021 by Thishyaketh Abimalla and Nachiketh Abimalla with a mission to build advanced artificial intelligence from India and push toward AGI, quantum intelligence, and useful model systems.
              </p>
              <p>
                The company develops foundation models, multimodal systems, AI products, and research frameworks without relying on foreign core technology. What began as an independent research initiative has grown into a focused AI company building across models, research, products, and safety.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">Founders</h2>
            <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
              A small founding team focused on research depth, product execution, and long-term AI capability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <div key={founder.name} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-[18px] font-normal leading-tight text-black">{founder.name}</h3>
                <Label>{founder.role}</Label>
                <p className="mt-4 text-[12px] leading-5 text-gray-500">{founder.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">What we build</h2>
            <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
              TNSA spans model development, developer tools, AI products, safety, and applied research.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {productAreas.map((item) => (
              <Link key={item.title} href={item.href} className="group block rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50">
                <h3 className="text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
                  {item.title}
                </h3>
                <Label>{item.label}</Label>
                <p className="mt-4 text-[12px] leading-5 text-gray-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Principles</h2>
              <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                The operating ideas behind our models, products, and research.
              </p>
            </div>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
              {principles.map((principle) => (
                <div key={principle} className="px-5 py-4 text-[14px] leading-6 text-black">
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Partners</h2>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">
              TNSA AI has been supported by Microsoft for Startups and Google TPU Research Cloud, enabling model training, experimentation, and advanced AI research.
            </p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="India"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Build intelligence from India
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Explore the models, research, and safety work behind TNSA AI.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/models" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  View Models
                </Link>
                <Link href="/company/contact" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
