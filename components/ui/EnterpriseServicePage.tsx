import Image from 'next/image'
import Link from 'next/link'

type Feature = {
  title: string
  description: string
}

type Metric = {
  value: string
  label: string
}

type Step = {
  title: string
  description: string
}

type EnterpriseServicePageProps = {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt: string
  featuresTitle?: string
  features: Feature[]
  stepsTitle?: string
  steps?: Step[]
  metricsTitle?: string
  metrics?: Metric[]
  applications: string
}

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

export function EnterpriseServicePage({
  eyebrow = 'Enterprise Service',
  title,
  description,
  image,
  imageAlt,
  featuresTitle = 'Capabilities',
  features,
  stepsTitle = 'Delivery process',
  steps,
  metricsTitle = 'Signals',
  metrics,
  applications,
}: EnterpriseServicePageProps) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">{eyebrow}</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            {title}
          </h1>
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
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Overview</h2>
              <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                Enterprise-grade support for teams building with TNSA models.
              </p>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">{description}</p>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">{featuresTitle}</h2>
            <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
              Focused services for production AI workflows.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-[18px] font-normal leading-tight text-black">{feature.title}</h3>
                <Label>Service</Label>
                <p className="mt-4 text-[12px] leading-5 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {steps?.length ? (
          <section className="border-t border-gray-100 py-12">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">{stepsTitle}</h2>
                <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                  A practical path from planning to production.
                </p>
              </div>
              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
                {steps.map((step, index) => (
                  <div key={step.title} className="grid gap-4 px-5 py-4 sm:grid-cols-[44px_1fr]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[12px] text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-normal text-black">{step.title}</h3>
                      <p className="mt-1 text-[12px] leading-5 text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {metrics?.length ? (
          <section className="border-t border-gray-100 py-12">
            <div className="mb-8">
              <h2 className="text-[22px] font-normal leading-tight text-black">{metricsTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} className="rounded-lg border border-gray-200 p-5">
                  <p className="text-[28px] font-normal leading-tight text-black">{metric.value}</p>
                  <p className="mt-2 text-[12px] leading-5 text-gray-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Applications</h2>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">{applications}</p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="Enterprise AI"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Build enterprise AI with TNSA
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Talk to us about models, data, deployment, and production support.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/company/contact" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  Contact Sales
                </Link>
                <Link href="/enterprises" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Enterprise
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
