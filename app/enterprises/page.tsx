'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Custom Fine-Tuning',
    subtitle: 'Domain-specific model optimization for unique business needs.',
    category: 'Service',
    imageUrl: '/fine-tuning.png',
    imageAlt: 'Custom Fine-Tuning',
    href: '/enterprises/fine-tuning',
  },
  {
    title: 'Infrastructure Support',
    subtitle: 'Enterprise-grade deployment across cloud and on-premise.',
    category: 'Service',
    imageUrl: '/infra-support.png',
    imageAlt: 'Infrastructure Support',
    href: '/enterprises/infrastructure',
  },
  {
    title: 'Data Engineering',
    subtitle: 'Robust pipeline design for scaling AI workloads.',
    category: 'Service',
    imageUrl: '/data-engineering.png',
    imageAlt: 'Data Engineering',
    href: '/enterprises/data-engineering',
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

function ServiceCard({ service, priority = false }: { service: any; priority?: boolean }) {
  return (
    <Link href={service.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          priority={priority}
          quality={100}
          className="object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {service.title}
      </h3>
      <Label>{service.category}</Label>
      {service.subtitle ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{service.subtitle}</p>
      ) : null}
    </Link>
  )
}

export default function EnterprisesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore Enterprise</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Enterprise
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">Custom AI Services</h2>
            <p className="mt-3 text-[15px] text-gray-500">Tailored solutions for your enterprise needs.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                priority={index < 3}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-lg">
          <div className="relative min-h-[360px]">
            <Image
              src="/india.png"
              alt="Ready to transform your enterprise?"
              fill
              quality={100}
              className="object-cover rounded-[10px]"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-[10px]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Ready to transform your enterprise?
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/company/contact" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
