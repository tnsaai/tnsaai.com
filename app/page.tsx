'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PromptBox } from '@/components/ui/prompt-box'
import { FlightCard } from '@/components/ui/flight-card'
import { Shader, Aurora, FloatingParticles } from 'shaders/react'

export default function Home() {
  const handleSendMessage = (prompt: string) => {
    if (prompt.trim()) {
      const encodedMessage = encodeURIComponent(prompt.trim())
      window.open(`https://chat.tnsaai.com/?message=${encodedMessage}`, '_blank')
    }
  }

  return (
    <div className="bg-transparent relative">
      <div className="absolute inset-0 h-[100vh] -z-10 overflow-hidden pointer-events-none">
        <Shader className="w-full h-full">
          <Aurora
            colorA="#a533f8"
            colorB="#223dee"
            colorC="#1694e8"
            colorSpace="linear"
            balance={80}
            intensity={140}
            curtainCount={4}
            speed={5}
            waviness={50}
            rayDensity={20}
            height={120}
            center={{ x: 0.5, y: 0.8 }}
            seed={0}
          />
          <FloatingParticles
            particleColor="#ffffff"
            randomness={0.25}
            particleSize={1}
            particleSoftness={0}
            count={5}
            particleDensity={3}
            speed={0.25}
            angle={90}
            twinkle={0.5}
            speedVariance={0.3}
            angleVariance={30}
          />
        </Shader>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Hero section */}
      <div className="bg-transparent min-h-screen flex items-center justify-center pt-52 pb-20">
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
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm text-black bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              API Platform
            </Link>
            <Link href="https://chat.tnsaai.com" className="px-6 py-2.5 text-sm text-black bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              GensChat
            </Link>
            <Link href="/models" className="px-6 py-2.5 text-sm text-black bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              Models
            </Link>
            <Link href="/research" className="px-6 py-2.5 text-sm text-black bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full hover:bg-gray-50 transition-all">
              Research
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[150px] bg-gradient-to-b from-transparent to-white" />

      {/* Featured Banner Section */}
      <div className="bg-white pb-32 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/company/news/ngen-4-k2-1t-thinking-open-source" className="block relative w-full aspect-[21/9] md:aspect-[24/7] overflow-hidden rounded-[40px] group">
            <Image
              src="/TV - 4.svg"
              alt="The New Era of Intelligence: NGen-4-K2 and IGen 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
              <p className="text-sm font-medium mb-2 opacity-90">Featured Release</p>
              <h2 className="text-2xl md:text-4xl font-normal">Open-Sourcing NGen-4-K2-1T-Thinking</h2>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="md:col-span-3">
              <FlightCard
                title="NGen-4"
                subtitle="General frontier intelligence with balanced reasoning, coding, multilingual, and multimodal performance."
                category="Frontier"
                imageUrl="/ngen4.png"
                imageAlt="NGen-4"
                href="/models/ngen4"
                layout="horizontal"
              />
            </div>
            {/* Row 1: NGen 4 Pro (Featured) + NGen-4-OW-1T-Thinking */}
            <div className="md:col-span-2">
              <FlightCard
                title="NGen 4 Pro"
                subtitle="Frontier reasoning model. Massive scale, exceptional capabilities and tool-use."
                category="Frontier"
                date="Feb 26, 2026"
                imageUrl="/ngen4-pro.png"
                imageAlt="NGen 4 Pro"
                href="/models/ngen4-pro"
                layout="featured"
              />
            </div>
            <FlightCard
              title="NGen-4-OW-1T-Thinking"
              subtitle="Flagship open-weight reasoning model at trillion-parameter scale."
              category="Open Weights"
              date="Feb 23, 2026"
              imageUrl="/ngen4-k2-1t.png"
              imageAlt="NGen-4-OW-1T-Thinking"
              href="/models/ngen4-ow-1t-thinking"
            />

            {/* Row 2: NGen 4 Blaze + NGen 4 Mini */}
            <FlightCard
              title="NGen 4 Blaze"
              subtitle="Advanced intelligence mapped for extreme speed and reasoning."
              category="Reasoning"
              imageUrl="/ngen4-blaze.png"
              imageAlt="NGen 4 Blaze"
              href="/models/ngen4-blaze"
            />
            <div className="md:col-span-2">
              <FlightCard
                title="NGen 4 Mini"
                subtitle="Advanced reasoning and natural dialogue at scale. The perfect balance of performance and efficiency."
                category="Reasoning"
                imageUrl="/ngen4-mini.png"
                imageAlt="NGen 4 Mini"
                href="/models/ngen4-mini"
                layout="horizontal"
                imageFit="contain"
                className="h-full"
              />
            </div>

            {/* Row 3: NGen 4 Flash + IGen 1 */}
            <div className="md:col-span-2">
              <FlightCard
                title="IGen 1"
                subtitle="The future of creative intelligence. High-fidelity image synthesis and logical reasoning."
                category="Creative Intelligence"
                date="Feb 20, 2026"
                imageUrl="/new-embeddings-models-and-api-updates 1.png"
                imageAlt="IGen 1"
                href="/models/igen-1-image"
                layout="horizontal"
                className="h-full"
              />
            </div>
            <FlightCard
              title="NGen 4 Flash"
              subtitle="High-speed non-reasoning model uniquely designed for instant responses."
              category="Speed"
              imageUrl="/ngen4-flash.png"
              imageAlt="NGen 4 Flash"
              href="/models/ngen4-flash"
            />

            {/* Row 4: NGen 4 Lite (Full Width) */}
            <div className="md:col-span-3">
              <FlightCard
                title="NGen 4 Lite"
                subtitle="A fast and efficient reasoning model optimized for real-world interactions and rapid response times."
                category="Efficiency"
                imageUrl="/ngen4-lite.png"
                imageAlt="NGen 4 Lite"
                href="/models/ngen4-lite"
                layout="horizontal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
            <FlightCard
              title="NGen 3 Series"
              subtitle="Our most efficient production models, designed for scale and reliability."
              category="Standard"
              imageUrl="/ngen3-10b.png"
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
              title="Open-Sourcing NGen-4-K2-1T-Thinking: 1Param Indic-First LLM"
              category="Open Source"
              date="Feb 23, 2026"
              imageUrl="/TV - 4.svg"
              layout="horizontal"
              href="/company/news/ngen-4-k2-1t-thinking-open-source"
            />
            <FlightCard
              title="Introducing IGen-1: Advanced Image Generation"
              category="News"
              date="Feb 20, 2026"
              imageUrl="https://igen.tnsaai.com/images/igen1/igen1-7.png"
              layout="horizontal"
              href="/models/igen-1-image"
            />
            <FlightCard
              title={"Introducing Rishi (AAR-1): TNSA\u0027s First Automated AI Researcher"}
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
