import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type NewsSection = {
  title: string
  content?: ReactNode | ReactNode[]
  bullets?: ReactNode[]
}

type NewsArticlePageProps = {
  date: string
  category?: string
  title: string
  deck?: ReactNode
  image: string
  imageAlt: string
  imageFit?: 'cover' | 'contain'
  readTime?: string
  author?: string
  sections?: NewsSection[]
  children?: ReactNode
  keepReading?: {
    title: string
    href: string
    category?: string
    date?: string
  }[]
  cta?: {
    label: string
    href: string
  }
}

const defaultKeepReading = [
  {
    title: 'NGen 4 System Card',
    href: '/company/news/ngen-4-system-card',
    category: 'Company',
    date: 'February 26, 2026',
  },
  {
    title: 'TNSA is Open-Sourcing NGen-4-K2-1T-Thinking',
    href: '/company/news/ngen-4-k2-1t-thinking-open-source',
    category: 'Models',
    date: 'February 23, 2026',
  },
  {
    title: 'TNSA API & GensChat are Live',
    href: '/company/news/tnsa-api-is-live-genschats-is-live',
    category: 'Products',
    date: 'January 5, 2025',
  },
]

function renderContent(content: ReactNode | ReactNode[]) {
  const items = Array.isArray(content) ? content : [content]

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export function NewsArticlePage({
  date,
  category = 'Company',
  title,
  deck,
  image,
  imageAlt,
  imageFit = 'cover',
  readTime = '2 min read',
  author = 'TNSA',
  sections = [],
  children,
  keepReading = defaultKeepReading,
  cta = { label: 'View All News', href: '/company/news' },
}: NewsArticlePageProps) {
  const year = date.match(/\d{4}/)?.[0] ?? '2026'

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">{date}</p>
          <p className="mb-4 text-[12px] font-normal text-black">{category}</p>
          <h1 className="max-w-[860px] text-[40px] font-normal leading-tight tracking-normal text-black md:text-[58px]">
            {title}
          </h1>
          {deck ? (
            <div className="mt-5 max-w-[680px] text-[18px] font-normal leading-7 text-gray-500">
              {deck}
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-100 pt-5 text-[12px] text-gray-500">
            <span className="text-black">Listen to article</span>
            <span>{readTime}</span>
            <Link href="/company/news" className="transition-colors hover:text-black">
              Share
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 pb-12 pt-0 first:border-t-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              quality={100}
              className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="border-t border-gray-100 py-12">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">{section.title}</h2>
              </div>
              <div className="text-[14px] leading-7 text-gray-700">
                {section.content ? renderContent(section.content) : null}
                {section.bullets?.length ? (
                  <ul className={`${section.content ? 'mt-5 ' : ''}list-disc space-y-2 pl-5`}>
                    {section.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        {children ? (
          <section className="border-t border-gray-100 py-12">
            {children}
          </section>
        ) : null}

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <p className="text-[12px] text-gray-500">{year}</p>
            <div>
              <p className="text-[12px] text-gray-500">Author</p>
              <p className="mt-2 text-[16px] text-black">{author}</p>
            </div>
          </div>
        </section>

        {keepReading.length ? (
          <section className="border-t border-gray-100 py-12">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-[22px] font-normal leading-tight text-black">Keep reading</h2>
              <Link href="/company/news" className="text-[12px] text-black transition-colors hover:text-gray-500">
                View all
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {keepReading.map((item) => (
                <Link key={item.href} href={item.href} className="group block border-t border-gray-100 pt-4">
                  <p className="text-[12px] text-gray-500">{item.category ?? 'News'}</p>
                  <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
                    {item.title}
                  </h3>
                  {item.date ? <p className="mt-4 text-[12px] text-gray-500">{item.date}</p> : null}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="TNSA AI"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Follow TNSA updates
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Explore model releases, research notes, product updates, and company news.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href={cta.href} className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  {cta.label}
                </Link>
                <Link href="/company/news" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  All News
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
