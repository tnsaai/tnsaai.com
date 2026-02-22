'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Products.
          </h1>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Core Products.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Making AI accessible to all humanity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlightCard
              title="TNSA Platform"
              subtitle="The unified API platform for building world-class AI applications."
              category="Production"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg"
              imageAlt="TNSA Platform"
              href="/products/platform"
            />

            <FlightCard
              title="GensChat"
              subtitle="Our flagship conversational AI experience, powered by NGen models."
              category="Chat"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg"
              imageAlt="GensChat"
              href="/products/genchat"
            />

            <FlightCard
              title="EdgeChat"
              subtitle="Full-scale privacy with locally-running AI models for offline use."
              category="Privacy"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/martin-de-arriba-J6kz1RK_kFc-unsplash.jpg"
              imageAlt="EdgeChat"
              href="/products/edgechat"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">API Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Integrate AI into your applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
            <FlightCard
              title="Text Generation API"
              subtitle="Integrate our frontier language models into your apps."
              category="API"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233329.jpg"
              imageAlt="Text Generation API"
              href="https://platform.tnsaai.com"
              layout="horizontal"
            />

            <FlightCard
              title="Image Generation API"
              subtitle="Generate high-fidelity visual assets on demand."
              category="API"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg"
              imageAlt="Image Generation API"
              href="https://platform.tnsaai.com"
              layout="horizontal"
            />

            <FlightCard
              title="Voice Interaction API"
              subtitle="Natural, real-time speech-to-text and text-to-speech."
              category="API"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-y-0ThkdUKIk-unsplash.jpg"
              imageAlt="Voice Interaction API"
              href="https://platform.tnsaai.com"
              layout="horizontal"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Enterprise Services.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Custom AI solutions for your business needs</p>
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
              Start building with TNSA today!
            </h2>
            <Link href="https://platform.tnsaai.com" className="px-10 py-4 text-sm text-white bg-black rounded-full hover:bg-gray-900 transition-all font-normal">
              API Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
