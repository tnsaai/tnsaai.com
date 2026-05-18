import Image from 'next/image'
import Link from 'next/link'

type Feature = {
  title: string
  description: string
}

type ProductDetailPageProps = {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt: string
  features: Feature[]
  applications: string
  statusTitle: string
  status: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

export function ProductDetailPage({
  eyebrow = 'Product',
  title,
  description,
  image,
  imageAlt,
  features,
  applications,
  statusTitle,
  status,
  primaryAction,
  secondaryAction,
}: ProductDetailPageProps) {
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
                Product experience from TNSA AI.
              </p>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">{description}</p>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">Key capabilities</h2>
            <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
              Built for practical workflows, fast adoption, and reliable AI experiences.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-[18px] font-normal leading-tight text-black">{feature.title}</h3>
                <Label>Capability</Label>
                <p className="mt-4 text-[12px] leading-5 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Applications</h2>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">{applications}</p>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">{statusTitle}</h2>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">{status}</p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="Start building with TNSA"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Start building with TNSA
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Explore products, models, and APIs built for real-world AI.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href={primaryAction.href} className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  {primaryAction.label}
                </Link>
                {secondaryAction ? (
                  <Link href={secondaryAction.href} className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    {secondaryAction.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
