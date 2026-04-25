'use client'

import Link from 'next/link'
import Image from 'next/image'

const coreProducts = [
  {
    title: 'TNSA Platform',
    subtitle: 'The unified API platform for building world-class AI applications.',
    category: 'Production',
    imageUrl: '/tnsa-platform.png',
    imageAlt: 'TNSA Platform',
    href: '/products/platform',
  },
  {
    title: 'GensChat',
    subtitle: 'Our flagship conversational AI experience, powered by NGen models.',
    category: 'Chat',
    imageUrl: '/genschat.png',
    imageAlt: 'GensChat',
    href: '/products/genchat',
  },
  {
    title: 'EdgeChat',
    subtitle: 'Full-scale privacy with locally-running AI models for offline use.',
    category: 'Privacy',
    imageUrl: '/edgechat.png',
    imageAlt: 'EdgeChat',
    href: '/products/edgechat',
  },
]

const apiServices = [
  {
    title: 'Text Generation API',
    subtitle: 'Integrate our frontier language models into your apps.',
    category: 'API',
    imageUrl: '/text-gen-api.png',
    imageAlt: 'Text Generation API',
    href: 'https://platform.tnsaai.com',
  },
  {
    title: 'Image Generation API',
    subtitle: 'Generate high-fidelity visual assets on demand.',
    category: 'API',
    imageUrl: '/image-gen-api.png',
    imageAlt: 'Image Generation API',
    href: 'https://platform.tnsaai.com',
  },
  {
    title: 'Voice Interaction API',
    subtitle: 'Natural, real-time speech-to-text and text-to-speech.',
    category: 'API',
    imageUrl: '/Voice-interactiona-api.png',
    imageAlt: 'Voice Interaction API',
    href: 'https://platform.tnsaai.com',
  },
]

const enterpriseServices = [
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

function ProductCard({ product, priority = false }: { product: any; priority?: boolean }) {
  return (
    <Link href={product.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          priority={priority}
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {product.title}
      </h3>
      <Label>{product.category}</Label>
      {product.subtitle ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{product.subtitle}</p>
      ) : null}
    </Link>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore Products</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Products
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">Core Products</h2>
            <p className="mt-3 text-[15px] text-gray-500">Making AI accessible to all humanity.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((product, index) => (
              <ProductCard
                key={product.title}
                product={product}
                priority={index < 3}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">API Services</h2>
            <p className="mt-3 text-[15px] text-gray-500">Integrate AI into your applications.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {apiServices.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-12">
            <h2 className="text-[24px] font-normal leading-tight text-black">Enterprise Services</h2>
            <p className="mt-3 text-[15px] text-gray-500">Custom AI solutions for your business needs.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseServices.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
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
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
