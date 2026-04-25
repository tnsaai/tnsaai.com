'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PromptBox } from '@/components/ui/prompt-box'

const featuredCards = [
  {
    title: 'Introducing NGen-4',
    label: 'Flagship Model',
    href: '/models/ngen4',
    image: '/model-images/ngen4.png',
  },
  {
    title: 'NGen-4 Pro',
    label: 'Research',
    href: '/models/ngen4-pro',
    image: '/model-images/ngen4-pro.png',
  },
  {
    title: 'NGen-4 Mini',
    label: 'Model',
    href: '/models/ngen4-mini',
    image: '/model-images/ngen4-mini.png',
  },
]

const modelList = [
  { title: 'NGen-4 Lite', label: 'Open Weight Model', href: '/models/ngen4-lite', image: '/model-images/ngen4-lite.png' },
  { title: 'NGen-4 Blaze', label: 'Model', href: '/models/ngen4-blaze', image: '/model-images/ngen4-blaze.png' },
  { title: 'NGen-4-OW-1T-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-1t-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow1t.png' },
  { title: 'NGen-4 Flash', label: 'Model', href: '/models/ngen4-flash', image: '/model-images/ngen4-blaze-1.png' },
  { title: 'NGen 3 10B', label: 'Model', href: '/models/ngen3-10b', image: '/model-images/ngen3-10b.png' },
  { title: 'NGen-3.9 Pro', label: 'Open Weight Model', href: '/models/ngen3.9-pro-chat', image: '/model-images/ngen3.9-pro.png' },
]

const researchCards = [
  {
    title: 'Tri-Flux Attention: Constant Memory for LLMs',
    label: 'Research',
    href: '/research/tri-flux-attention',
    image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg',
  },
  {
    title: 'Understanding Agentic Models',
    label: 'Research',
    href: '/research/agentic-intelligence-ngen39-pro',
    image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-3dmu0gu23uc-unsplash.jpg',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    label: 'Research',
    href: '/research/adaptive-sparse-transformer-blocks',
    image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg',
  },
]

const productCards = [
  {
    title: 'TNSA Platform',
    label: 'Product',
    href: '/products/platform',
    image: '/tnsa-platform.png',
  },
  {
    title: 'GensChat',
    label: 'Assistant',
    href: '/products/genchat',
    image: '/genschat.png',
  },
  {
    title: 'EdgeChat',
    label: 'Product',
    href: '/products/edgechat',
    image: '/edgechat.png',
  },
]

const newsCards = [
  {
    title: 'NGen 4 System Card',
    label: 'News',
    href: '/company/news/ngen-4-system-card',
    image: '/ngen4-sys-card.png',
  },
  {
    title: 'Open-Sourcing NGen-4-K2-1T-Thinking',
    label: 'Open Source',
    href: '/company/news/ngen-4-k2-1t-thinking-open-source',
    image: '/TV - 4.svg',
  },
  {
    title: 'Introducing IGen-1: Advanced Image Generation',
    label: 'News',
    href: '/models/igen-1-image',
    image: '/model-images/igen1.png',
  },
  {
    title: 'NGen4 Atom Chat Launch',
    label: 'News',
    href: '/company/news/ngen4-atom-chat-launch',
    image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1568607.jpg',
  },
]

const companyCards = [
  {
    title: 'About TNSA',
    label: 'Company',
    href: '/about',
    image: '/about.png',
  },
  {
    title: 'Safety at TNSA',
    label: 'Safety',
    href: '/safety',
    image: '/ai-safety.png',
  },
  {
    title: 'Careers',
    label: 'Company',
    href: '/company/careers',
    image: '/Careers.png',
  },
]

export default function Home() {
  const handleSendMessage = (prompt: string) => {
    if (prompt.trim()) {
      const encodedMessage = encodeURIComponent(prompt.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
    }
  }

  return (
    <div className="relative bg-[#FFFFFF]">
      <section className="flex min-h-screen items-center justify-center bg-[#FFFFFF] px-6 pt-16">
        <div className="mx-auto w-full max-w-[560px] text-center">
          <h1 className="mb-5 text-[28px] font-normal leading-tight text-black md:text-[34px]">
            Building Super-Intelligence
          </h1>

          <PromptBox
            onSend={handleSendMessage}
            placeholder="Ask NGen"
            className="mb-7 w-full"
          />

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link href="https://platform.tnsaai.com" className="flex h-9 min-w-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-4 text-[12px] text-black shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
              API Platform
            </Link>
            <Link href="https://chat.tnsaai.com" className="flex h-9 min-w-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-4 text-[12px] text-black shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
              GensChat
            </Link>
            <Link href="/models" className="flex h-9 min-w-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-4 text-[12px] text-black shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
              Models
            </Link>
            <Link href="/research" className="flex h-9 min-w-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-4 text-[12px] text-black shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
              Research
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] pb-24 pt-4">
        <div className="mx-auto max-w-[920px] px-5">
          <div className="grid gap-6 md:grid-cols-[1.35fr_1fr] md:items-start">
            <Link href={featuredCards[0].href} className="group block">
              <div className="relative aspect-[1.12/1] overflow-hidden rounded-lg bg-gray-100">
                <Image src={featuredCards[0].image} alt={featuredCards[0].title} fill quality={100} priority className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 640px, (min-width: 768px) 64vw, calc(100vw - 40px)" />
              </div>
              <h2 className="mt-4 text-[24px] font-normal leading-tight text-black">{featuredCards[0].title}</h2>
              <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{featuredCards[0].label}</span>
            </Link>

            <div className="grid gap-5">
              {featuredCards.slice(1).map((card) => (
                <Link key={card.title} href={card.href} className="group block">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100">
                    <Image src={card.image} alt={card.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 420px, (min-width: 768px) 42vw, calc(100vw - 40px)" />
                  </div>
                  <h3 className="mt-3 text-[24px] font-normal leading-tight text-black">{card.title}</h3>
                  <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{card.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[16px] font-normal text-black">Models</h2>
              <Link href="/models" className="text-[10px] text-black transition-colors hover:text-gray-500">View All</Link>
            </div>

            <div className="grid gap-x-24 gap-y-6 md:grid-cols-2">
              {modelList.map((model) => (
                <Link key={model.title} href={model.href} className="group flex items-center gap-4">
                  <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={model.image} alt={model.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="96px" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">{model.title}</h3>
                    <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{model.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[16px] font-normal text-black">Research</h2>
              <Link href="/research" className="text-[10px] text-black transition-colors hover:text-gray-500">View All</Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {researchCards.map((card) => (
                <Link key={card.title} href={card.href} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image src={card.image} alt={card.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 340px, (min-width: 768px) 34vw, calc(100vw - 40px)" />
                  </div>
                  <h3 className="mt-3 text-[16px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">{card.title}</h3>
                  <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{card.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[16px] font-normal text-black">Products</h2>
              <Link href="/products" className="text-[10px] text-black transition-colors hover:text-gray-500">View All</Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {productCards.map((card) => (
                <Link key={card.title} href={card.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                    <Image src={card.image} alt={card.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 340px, (min-width: 768px) 34vw, calc(100vw - 40px)" />
                  </div>
                  <h3 className="mt-3 text-[16px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">{card.title}</h3>
                  <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{card.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[16px] font-normal text-black">Latest news</h2>
              <Link href="/company/news" className="text-[10px] text-black transition-colors hover:text-gray-500">View All</Link>
            </div>

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {newsCards.map((card) => (
                <Link key={card.title} href={card.href} className="group flex items-center gap-4">
                  <div className="relative h-[76px] w-[112px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={card.image} alt={card.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="160px" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">{card.title}</h3>
                    <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{card.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[16px] font-normal text-black">Company</h2>
              <Link href="/company" className="text-[10px] text-black transition-colors hover:text-gray-500">View All</Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {companyCards.map((card) => (
                <Link key={card.title} href={card.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                    <Image src={card.image} alt={card.title} fill quality={100} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 340px, (min-width: 768px) 34vw, calc(100vw - 40px)" />
                  </div>
                  <h3 className="mt-3 text-[16px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">{card.title}</h3>
                  <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] text-black">{card.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20 overflow-hidden rounded-lg">
            <div className="relative min-h-[360px]">
              <Image
                src="/india.png"
                alt="Vibrant Indian market street"
                fill
                quality={100}
                className="object-cover"
                sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
                <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                  Build intelligence for India
                </h2>
                <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                  Explore models, research, and developer tools built for real-world scale.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="https://platform.tnsaai.com" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                    Open Platform
                  </Link>
                  <Link href="/developers" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    Developers
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
