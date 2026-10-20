import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Brain, Check, Minus, Zap } from 'lucide-react'
import { isModalityList, ModalityIcons } from '@/components/ui/ModalityIcons'
import { ModelRegions } from '@/components/ui/ModelRegions'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { PlatformBenchmarks } from '@/components/ui/PlatformBenchmarks'
import { ngen45VayuPlatformProfile as profile } from '@/content/modelPlatformProfiles'

export const metadata: Metadata = {
  title: 'NGen-4.5 Vayu | TNSA',
  description: 'Meet NGen-4.5 Vayu: our new flagship frontier model, matching NGen-4.3 Pro intelligence at 400 tokens per second.',
  openGraph: {
    title: 'Introducing NGen-4.5 Vayu',
    description: 'NGen-4.3 Pro intelligence at 400 tokens per second. Available in India South, India Central, and US East-1.',
    images: ['/model-images/ngen4.5-vayu-preview.svg'],
  },
}

const specs = [
  { label: 'Model ID', value: 'ngen-4.5-vayu', mono: true },
  { label: 'Output speed', value: 'Up to 400 tokens/s' },
  { label: 'Context window', value: '131,072 tokens, extendable to 1,048,576' },
  { label: 'Max output', value: '131,072 tokens' },
  { label: 'Input', value: profile.inputSupport },
  { label: 'Output', value: profile.outputSupport },
  { label: 'Reasoning levels', value: profile.reasoningLevels?.join(', ') ?? '' },
  { label: 'Rate limits', value: '1,000 requests/min · 250,000 tokens/min' },
]

const prices = [
  { label: 'Input', value: '$3.65', unit: 'per 1M tokens' },
  { label: 'Output', value: '$11.35', unit: 'per 1M tokens' },
  { label: 'Cached input', value: '—', unit: 'Not included in standard pricing' },
]

const capabilityGroups = [
  { title: 'Endpoints', items: profile.endpoints },
  { title: 'Features', items: profile.features },
  { title: 'Tools', items: profile.tools },
]

function MetricDots({ count, max = 5, icon: Icon }: { count: number; max?: number; icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, index) => (
        <Icon key={index} className={`h-4 w-4 ${index < count ? 'text-p-fg' : 'text-p-muted-fg opacity-35'}`} />
      ))}
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-p-muted-fg">{children}</p>
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-[720px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[32px] font-medium leading-tight tracking-tight md:text-[44px]">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-p-muted-fg">{body}</p> : null}
    </div>
  )
}

export default function NGen45VayuPage() {
  return (
    <main className="platform-theme min-h-screen">
      <section className="pb-12 pt-[116px] md:pt-[140px]">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-p-border px-3 py-1 text-[11px] font-medium text-p-muted-fg">
            <span className="h-1.5 w-1.5 rounded-full bg-p-fg" />
            New flagship model
          </span>
          <h1 className="mt-6 max-w-[980px] text-[52px] font-medium leading-[1] tracking-[-0.04em] md:text-[84px]">NGen-4.5 Vayu</h1>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-p-muted-fg md:text-xl md:leading-9">
            Our new flagship frontier model. NGen-4.3 Pro intelligence, delivered at 400 tokens per second.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="https://platform.tnsaai.com" className="inline-flex h-10 items-center rounded-full bg-p-primary px-5 text-sm font-medium text-p-primary-fg transition-opacity hover:opacity-90">
              Try in Playground
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <a href="#benchmarks" className="inline-flex h-10 items-center rounded-full border border-p-border px-5 text-sm font-medium transition-colors hover:bg-p-muted">
              Explore benchmarks
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-p-border bg-p-muted">
          <Image src="/model-images/ngen4.5-vayu-preview.svg" alt="NGen-4.5 Vayu launch artwork" fill priority unoptimized className="object-cover" sizes="(min-width: 1280px) 1180px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pt-10 md:px-8">
        <div className="grid overflow-hidden rounded-[28px] border border-p-border sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 border-b border-p-border p-6 sm:border-r lg:border-b-0">
            <Eyebrow>Reasoning</Eyebrow>
            <MetricDots count={5} icon={Brain} />
            <p className="text-sm font-medium">{profile.reasoningTier}</p>
          </div>
          <div className="space-y-3 border-b border-p-border p-6 lg:border-b-0 lg:border-r">
            <Eyebrow>Speed</Eyebrow>
            <MetricDots count={5} icon={Zap} />
            <p className="text-sm font-medium">400 tokens/s</p>
          </div>
          <div className="space-y-3 border-b border-p-border p-6 sm:border-b-0 sm:border-r">
            <Eyebrow>Intelligence</Eyebrow>
            <p className="text-2xl font-medium tracking-tight">NGen-4.3 Pro</p>
            <p className="text-sm text-p-muted-fg">Same model weights</p>
          </div>
          <div className="space-y-3 p-6">
            <Eyebrow>Price</Eyebrow>
            <p className="text-2xl font-medium tracking-tight">$3.65 <span className="text-base text-p-muted-fg">/ $11.35</span></p>
            <p className="text-sm text-p-muted-fg">Input / output per 1M tokens</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
        <SectionHeader
          eyebrow="Built for speed"
          title="Frontier intelligence at the speed of wind."
          body={profile.overview}
        />
        <dl className="divide-y divide-p-border border-y border-p-border">
          {specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-[140px_minmax(0,1fr)] gap-4 py-4 text-sm md:grid-cols-[180px_minmax(0,1fr)]">
              <dt className="text-p-muted-fg">{spec.label}</dt>
              <dd className={spec.mono ? 'font-mono text-[13px]' : 'font-medium'}>
                {isModalityList(spec.value) ? <ModalityIcons value={spec.value} /> : spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-28">
          <SectionHeader eyebrow="Availability" title="Served from TNSA regions." />
          <ModelRegions slug="ngen4.5-vayu" className="mt-10" />
        </div>
      </section>

      <section className="border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-28">
          <SectionHeader eyebrow="Pricing" title="Simple, metered pricing." body="Developer API pricing in USD. Input and output are metered and billed separately; taxes are added where applicable." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {prices.map((price) => (
              <div key={price.label} className="rounded-[24px] border border-p-border p-6">
                <p className="text-sm font-medium text-p-muted-fg">{price.label}</p>
                <p className="mt-3 text-4xl font-medium tracking-tight">{price.value}</p>
                <p className="mt-2 text-sm text-p-muted-fg">{price.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-28">
          <SectionHeader eyebrow="Capabilities" title="Everything in the API, out of the box." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="rounded-[24px] border border-p-border p-6">
                <h3 className="text-base font-medium">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => {
                    const supported = item.value !== 'Not supported'
                    const Icon = supported ? Check : Minus
                    return (
                      <li key={item.label} className="flex items-center gap-3 text-sm">
                        <Icon className={`h-4 w-4 shrink-0 ${supported ? 'text-p-fg' : 'text-p-muted-fg'}`} />
                        <span className={supported ? '' : 'text-p-muted-fg'}>{item.label}</span>
                        {item.value.startsWith('v1/') ? <span className="ml-auto font-mono text-[11px] text-p-muted-fg">{item.value}</span> : null}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benchmarks" className="scroll-mt-24 border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-28">
          <SectionHeader
            eyebrow="Model evaluations"
            title="NGen-4.3 Pro intelligence, unchanged."
            body="NGen-4.5 Vayu runs the same model weights as NGen-4.3 Pro on a faster inference stack, so its evaluation scores are identical. Scores are percentages; higher is better."
          />
          <div className="mt-10">
            <PlatformBenchmarks primaryModel="NGen-4.5 Vayu" primaryKey="ngen45vayu" />
          </div>
          <p className="mt-4 text-xs leading-5 text-p-muted-fg">CI denotes code interpreter. Scores are those measured for NGen-4.3 Pro.</p>
        </div>
      </section>

      <section className="border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8">
          <div className="mb-12 text-center">
            <Eyebrow>The team</Eyebrow>
            <h2 className="mt-4 text-[32px] font-medium tracking-tight md:text-[44px]">Built at TNSA.</h2>
          </div>
          <NGen4TeamSection tone="platform" />
        </div>
      </section>

      <section className="border-t border-p-border">
        <div className="mx-auto max-w-[1180px] px-5 py-24 text-center md:px-8 md:py-32">
          <Eyebrow>Available now</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-[760px] text-[36px] font-medium leading-tight tracking-tight md:text-[56px]">Build at 400 tokens per second.</h2>
          <Link href="https://platform.tnsaai.com" className="mt-8 inline-flex h-10 items-center rounded-full bg-p-primary px-6 text-sm font-medium text-p-primary-fg transition-opacity hover:opacity-90">
            Start building
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
