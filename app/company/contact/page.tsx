import Image from 'next/image'
import Link from 'next/link'

const contactPaths = [
  {
    title: 'Model access',
    label: 'Models',
    href: 'mailto:support@tnsaai.com?subject=Model%20access%20with%20TNSA',
    description: 'For model access, private deployments, fine-tuning, pre-training, and enterprise AI programs.',
  },
  {
    title: 'Technical support',
    label: 'Support',
    href: 'mailto:support@tnsaai.com?subject=TNSA%20technical%20support',
    description: 'For platform issues, API questions, product access, account help, and developer troubleshooting.',
  },
  {
    title: 'Research and safety',
    label: 'Research',
    href: 'mailto:support@tnsaai.com?subject=Research%20or%20safety%20collaboration',
    description: 'For research collaborations, model evaluations, system cards, safety notes, and academic conversations.',
  },
  {
    title: 'Partnerships',
    label: 'Company',
    href: 'mailto:support@tnsaai.com?subject=Partnership%20with%20TNSA',
    description: 'For cloud, infrastructure, startup, education, public-sector, and ecosystem partnerships.',
  },
]

const requestTypes = [
  'API Platform access and production support',
  'GensChat, EdgeChat, or product questions',
  'Custom model development and fine-tuning',
  'Enterprise deployment, data, and infrastructure',
  'Research, safety, and benchmark collaboration',
]

const responseDetails = [
  {
    title: 'Location',
    description: 'Hyderabad, India',
  },
  {
    title: 'Office hours',
    description: 'Monday to Friday, 9:00 AM to 6:00 PM IST',
  },
  {
    title: 'Email',
    description: 'support@tnsaai.com',
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Company</p>
          <h1 className="max-w-[820px] text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Contact TNSA
          </h1>
          <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-gray-500">
            Talk to us about models, products, research, partnerships, and production AI systems.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 pb-12 pt-0 first:border-t-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-anniroenkae-4175054.jpg"
              alt="Contact TNSA"
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
              <h2 className="text-[22px] font-normal leading-tight text-black">Get in touch</h2>
              <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                Choose the path that best matches what you are building.
              </p>
            </div>
            <div className="space-y-4 text-[14px] leading-7 text-gray-700">
              <p>
                Whether you are testing the API, exploring GensChat, planning a private deployment, or looking for research collaboration, send us the context and we will route it to the right team.
              </p>
              <p>
                For faster replies, include your organization, the product or model you are asking about, expected timeline, and any technical requirements such as languages, data sources, deployment region, or model size.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">Contact paths</h2>
            <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
              One inbox, routed by request type.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {contactPaths.map((item) => (
              <Link key={item.title} href={item.href} className="group block rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50">
                <h3 className="text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
                  {item.title}
                </h3>
                <Label>{item.label}</Label>
                <p className="mt-4 text-[12px] leading-5 text-gray-500">{item.description}</p>
                <span className="mt-5 inline-flex text-[12px] text-black transition-colors group-hover:text-gray-500">
                  Email team
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">What we can help with</h2>
              <p className="mt-2 max-w-[360px] text-[12px] leading-5 text-gray-500">
                Common requests from developers, teams, and partners.
              </p>
            </div>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
              {requestTypes.map((item) => (
                <div key={item} className="px-5 py-4 text-[14px] leading-6 text-black">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8">
            <h2 className="text-[22px] font-normal leading-tight text-black">Details</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {responseDetails.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-[14px] font-normal text-black">{item.title}</h3>
                <p className="mt-3 text-[12px] leading-5 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 py-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[22px] font-normal leading-tight text-black">Before you write</h2>
            </div>
            <p className="text-[14px] leading-7 text-gray-700">
              If your message is about enterprise AI, include your target workflow, expected users, current stack, preferred deployment setup, and whether you need model customization. If it is about support, include the product, account email, route, error message, and the time the issue started.
            </p>
          </div>
        </section>

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
                Build with TNSA
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Start with the platform, or reach out for help designing your model and deployment path.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="mailto:support@tnsaai.com?subject=Build%20with%20TNSA" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  Email TNSA
                </Link>
                <Link href="/products/platform" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
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
