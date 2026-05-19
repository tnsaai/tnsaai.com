'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type ModelAction = {
  label: string
  href: string
  external?: boolean
}

type ModelSnapshot = {
  name: string
  description: string
  label?: string
}

type ModelSection = {
  title: string
  body?: string | string[]
  bullets?: string[]
  specs?: Array<{
    label: string
    value: string
  }>
}

type ModelDetailPageProps = {
  date?: string
  category?: string
  title: string
  deck?: string
  image: string
  imageAlt: string
  priority?: boolean
  actions?: ModelAction[]
  sections?: ModelSection[]
  snapshots?: ModelSnapshot[]
  children?: ReactNode
}

const defaultActions: ModelAction[] = [
  {
    label: 'Try in API Platform',
    href: 'https://platform.tnsaai.com',
    external: true,
  },
]

function bodyItems(body?: string | string[]) {
  if (!body) {
    return []
  }

  return Array.isArray(body) ? body : [body]
}

export function ModelDetailPage({
  date,
  category = 'Model',
  title,
  deck,
  image,
  imageAlt,
  priority = true,
  actions = defaultActions,
  sections = [],
  snapshots = [],
  children,
}: ModelDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          {date ? <p className="mb-4 text-[12px] font-normal text-gray-500">{date}</p> : null}
          <p className="mb-4 text-[12px] font-normal text-black">{category}</p>
          <h1 className="max-w-[880px] text-[40px] font-normal leading-tight tracking-normal text-black md:text-[58px]">
            {title}
          </h1>
          {deck ? (
            <p className="mt-5 max-w-[700px] text-[16px] font-normal leading-7 text-gray-500 md:text-[18px]">
              {deck}
            </p>
          ) : null}

          {actions.length ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noreferrer' : undefined}
                  className={`flex h-9 min-w-[120px] items-center justify-center rounded-full px-4 text-[12px] transition-colors ${
                    index === 0
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border border-gray-200 bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 pb-12 pt-0 first:border-t-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-gray-100">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={priority}
              quality={100}
              unoptimized={image.startsWith('http')}
              className="object-cover"
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
                {bodyItems(section.body).map((paragraph) => (
                  <p key={paragraph} className="mb-5 last:mb-0">
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length ? (
                  <ul className={`${section.body ? 'mt-5 ' : ''}list-disc space-y-2 pl-5`}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {section.specs?.length ? (
                  <div className={`${section.body || section.bullets?.length ? 'mt-6 ' : ''}grid gap-5 sm:grid-cols-2`}>
                    {section.specs.map((spec) => (
                      <div key={`${spec.label}-${spec.value}`} className="border-t border-gray-100 pt-4">
                        <p className="text-[12px] text-gray-500">{spec.label}</p>
                        <p className="mt-1 text-[14px] leading-6 text-black">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        {snapshots.length ? (
          <section className="border-t border-gray-100 py-12">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">Snapshots</h2>
              </div>
              <div className="divide-y divide-gray-100 rounded-[10px] border border-gray-200 bg-white">
                {snapshots.map((snapshot) => (
                  <div key={snapshot.name} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="text-[14px] font-normal text-black">{snapshot.name}</p>
                      <p className="mt-1 text-[12px] leading-5 text-gray-500">{snapshot.description}</p>
                    </div>
                    {snapshot.label ? (
                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">
                        {snapshot.label}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {children ? <section className="border-t border-gray-100 py-12">{children}</section> : null}

        <section className="mt-8 overflow-hidden rounded-[10px]">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="TNSA platform"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Build with TNSA models
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Explore model families, snapshots, and developer tools for production AI systems.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="https://platform.tnsaai.com" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  API Platform
                </Link>
                <Link href="/models" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Model Index
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
