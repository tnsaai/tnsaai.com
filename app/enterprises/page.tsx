'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function EnterprisesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Enterprise.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Custom AI Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Tailored solutions for your enterprise needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
            <FlightCard
              title="Custom Fine-Tuning"
              subtitle="Domain-specific model optimization for unique business needs."
              category="Service"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/susan-wilkinson-6YNPuJ3Ybac-unsplash.jpg"
              imageAlt="Custom Fine-Tuning"
              href="/enterprises/fine-tuning"
              layout="horizontal"
            />

            <FlightCard
              title="Infrastructure Support"
              subtitle="Enterprise-grade deployment across cloud and on-premise."
              category="Service"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-eva-bronzini-7605542.jpg"
              imageAlt="Infrastructure Support"
              href="/enterprises/infrastructure"
              layout="horizontal"
            />

            <FlightCard
              title="AI Consulting"
              subtitle="Strategic roadmap development and AI implementation guides."
              category="Service"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-alexant-16738884.jpg"
              imageAlt="AI Consulting"
              href="/enterprises/consulting"
              layout="horizontal"
            />

            <FlightCard
              title="Data Engineering"
              subtitle="Robust pipeline design for scaling AI workloads."
              category="Service"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-karola-g-4046791.jpg"
              imageAlt="Data Engineering"
              href="/enterprises/data-engineering"
              layout="horizontal"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[48px] flex flex-col items-center justify-center p-8 md:p-16 min-h-[450px] text-center max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal mb-10 text-black max-w-2xl leading-tight">
              Ready to transform your enterprise?
            </h2>
            <Link href="/company/contact" className="px-10 py-4 text-sm text-white bg-black rounded-full hover:bg-gray-900 transition-all font-normal">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
