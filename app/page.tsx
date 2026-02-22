'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PromptBox } from '@/components/ui/prompt-box'
import { FlightCard } from '@/components/ui/flight-card'

export default function Home() {
  const handleSendMessage = (prompt: string) => {
    if (prompt.trim()) {
      const encodedMessage = encodeURIComponent(prompt.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white min-h-[85vh] flex items-center justify-center pt-24 pb-12">
        <div className="w-full max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-normal mb-12 text-black leading-tight">
            Building Super-Intelligence.
          </h1>

          <PromptBox
            onSend={handleSendMessage}
            placeholder="Ask me anything..."
            className="w-full mb-10 border-gray-100"
          />

          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm text-black bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              API Platform
            </Link>
            <Link href="https://chat.tnsaai.com" className="px-6 py-2.5 text-sm text-black bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              GensChat
            </Link>
            <Link href="/models" className="px-6 py-2.5 text-sm text-black bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              Models
            </Link>
            <Link href="/research" className="px-6 py-2.5 text-sm text-black bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              Research
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Large Feature Card - Spans 2 columns and 2 rows on desktop */}
            <div className="md:col-span-2 md:row-span-2 h-full">
              <FlightCard
                title="IGen 1"
                subtitle="The future of creative intelligence. High-fidelity image synthesis and logical reasoning across multiple modalities."
                category="Creative Intelligence"
                date="Feb 20, 2026"
                imageUrl="https://igen.tnsaai.com/images/igen1/igen1-7.png"
                imageAlt="IGen 1"
                href="/models/igen-1-image"
                className="h-full"
                layout="featured"
              />
            </div>

            {/* Stacked Small Cards on the right */}
            <FlightCard
              title="NGen 3.1 Pro"
              subtitle="Optimized for production reliability and breakthrough performance."
              category="Pro Model"
              date="Feb 13, 2026"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
              imageAlt="NGen 3.1 Pro"
              href="/models/ngen3.1-pro"
            />
            <FlightCard
              title="NGen 3.5 series"
              subtitle="The peak of performance with real-time optimization."
              category="Omni-Model"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-falling4utah-1934846.jpg"
              imageAlt="NGen 3.5 series"
              href="/models"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
            <FlightCard
              title="NGen 3 Series"
              subtitle="Our most efficient production models, designed for scale and reliability."
              category="Standard"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-4c4mrsZwsnA-unsplash.jpg"
              imageAlt="NGen 3 Series"
              href="/models"
              layout="vertical"
            />
            <FlightCard
              title="Tri-Flux Attention"
              subtitle="Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces."
              category="Research"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg"
              imageAlt="Tri-Flux Attention"
              href="/research/tri-flux-attention"
              layout="vertical"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-24">
            <Link
              href="/models"
              className="px-8 py-3 text-sm text-black bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-all font-normal"
            >
              View All Models →
            </Link>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-white py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-normal text-black">Latest news.</h2>
            <Link href="/company/news" className="text-sm text-black hover:text-gray-600 transition-colors">View all news →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
            <FlightCard
              title="Introducing Rishi (AAR-1): TNSA's First Automated AI Researcher"
              category="News"
              date="Feb 15, 2026"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/tnsa-risihi%20(1).png"
              layout="horizontal"
              href="/company/news/rishi-aar-1-tnsas-first-automated-ai-researcher"
              imageFit="contain"
            />
            <FlightCard
              title="NGen4 Atom Chat Launch: Scaling to Massive Parameters"
              category="News"
              date="Feb 14, 2026"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1568607.jpg"
              layout="horizontal"
              href="/company/news/ngen4-atom-chat-launch"
            />
            <FlightCard
              title="TNSA X Microsoft & Google TPU Research Cloud"
              category="Partnership"
              date="Feb 10, 2026"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-steve-1509534.jpg"
              layout="horizontal"
              href="/company/news/tnsa-x-microsoft-for-startups-tnsa-x-google-tpu-research-cloud"
            />
            <FlightCard
              title="TNSA API & GensChat are Live"
              category="News"
              date="Jan 28, 2026"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592788.jpg"
              layout="horizontal"
              href="/company/news/tnsa-api-is-live-genschats-is-live"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">Products.</h2>
            <p className="text-lg text-gray-500 font-normal">Making advanced AI accessible to all humanity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FlightCard
              title="TNSA Platform"
              subtitle="The infrastructure for intelligence. Build, deploy, and scale high-performance AI applications."
              category="Infrastructure"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg"
              imageAlt="TNSA Platform"
              href="https://platform.tnsaai.com"
            />
            <FlightCard
              title="GensChat"
              subtitle="Our flagship conversational assistant, powered by the latest NGen models to help you reason."
              category="Assistant"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg"
              imageAlt="GensChat"
              href="https://chat.tnsaai.com"
            />
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="bg-white py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">Research.</h2>
            <p className="text-lg text-gray-500 font-normal">Pushing the boundaries of what&apos;s possible with artificial intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FlightCard
              title="Creative Autonomy"
              subtitle="Investigating how large language models can develop independent creative styles."
              category="Intelligence"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-oDQqO9opEXc-unsplash.jpg"
              imageAlt="Creative Autonomy"
              href="/research/llms-can-be-creative-and-independent"
              layout="horizontal"
            />
            <FlightCard
              title="Transformer Optimization"
              subtitle="Novel research into adaptive sparse transformer blocks to improve inference speed."
              category="Architecture"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg"
              imageAlt="Transformer Optimization"
              href="/research/adaptive-sparse-transformer-blocks"
              layout="horizontal"
            />
          </div>
        </div>
      </div>

      {/* Collaborations Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-6">Our Partners.</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              TNSA is excited to announce its collaboration with Microsoft for Startups and our acceptance into the Google TPU Research Cloud program.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image
              src="/ms_startups.png"
              alt="Microsoft for Startups Logo"
              width={350}
              height={140}
              className="object-contain w-full max-w-[280px]"
            />
            <Image
              src="/google_trc.png"
              alt="Google TPU Research Cloud Logo"
              width={200}
              height={80}
              className="object-contain w-full max-w-[180px]"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[48px] flex flex-col items-center justify-center p-8 md:p-16 min-h-[450px] text-center">
            <h2 className="text-4xl md:text-6xl font-normal mb-10 text-black max-w-2xl leading-tight">
              Start building with TNSA today!
            </h2>
            <Link href="https://platform.tnsaai.com" className="px-10 py-4 text-sm text-white bg-black rounded-full hover:bg-gray-900 transition-all">
              Launch API Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
