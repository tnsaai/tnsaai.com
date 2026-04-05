'use client'

import Link from 'next/link'
import { FlightCard } from '@/components/ui/flight-card'

export default function ModelsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero section */}
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Models.
          </h1>
        </div>
      </div>

      {/* NGen 4 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 4 Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Massive scale reasoning models for conversational AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen-4"
              subtitle="General frontier model with strong reasoning, coding, multilingual, and multimodal performance."
              category="Frontier"
              imageUrl="/ngen4.png"
              imageAlt="NGen-4 Model"
              href="/models/ngen4"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen 4 Mini"
              subtitle="Conversational AI. 100B+ params. High performance, low latency."
              category="Pioneer"
              imageUrl="/ngen4-mini.png"
              imageAlt="NGen 4 Mini Model"
              href="/models/ngen4-mini"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen 4 Lite"
              subtitle="Fast and efficient conversational model."
              category="Pioneer"
              imageUrl="/ngen4-lite.png"
              imageAlt="NGen 4 Lite Model"
              href="/models/ngen4-lite"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen 4 Flash"
              subtitle="High-speed non-reasoning model for instant responses."
              category="Pioneer"
              imageUrl="/ngen4-flash.png"
              imageAlt="NGen 4 Flash Model"
              href="/models/ngen4-flash"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen 4 Blaze"
              subtitle="Advanced intelligence mapped for extreme speed and reasoning."
              category="Pioneer"
              imageUrl="/ngen4-blaze.png"
              imageAlt="NGen 4 Blaze Model"
              href="/models/ngen4-blaze"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen 4 Pro"
              subtitle="Frontier reasoning model. Massive scale, exceptional capabilities."
              category="Pioneer"
              imageUrl="/ngen4-pro.png"
              imageAlt="NGen 4 Pro Model"
              href="/models/ngen4-pro"
              showTitle={false}
              imageFit="cover"
            />
          </div>
        </div>
      </div>

      {/* NGen 4 OW Series Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen-4-OW Series.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Open-weight thinking models distilled from NGen-4 Pro on the NGen-4-OW architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen-4-OW-1T-Thinking"
              subtitle="Flagship open-weight reasoning model at trillion-parameter scale."
              category="Open Weights"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow1t.png"
              imageAlt="NGen-4-OW-1T-Thinking"
              href="/models/ngen4-ow-1t-thinking"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen-4-OW-400B-Thinking"
              subtitle="High-capacity open-weight model for deep reasoning and structured thinking."
              category="Open Weights"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow400b.png"
              imageAlt="NGen-4-OW-400B-Thinking"
              href="/models/ngen4-ow-400b-thinking"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen-4-OW-120B-Thinking"
              subtitle="Efficient open-weight reasoning tier with strong frontier-style thinking."
              category="Open Weights"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow120b.png"
              imageAlt="NGen-4-OW-120B-Thinking"
              href="/models/ngen4-ow-120b-thinking"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen-4-OW-30B-Thinking"
              subtitle="Mid-scale open-weight thinking model for accessible experimentation."
              category="Open Weights"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow30b.png"
              imageAlt="NGen-4-OW-30B-Thinking"
              href="/models/ngen4-ow-30b-thinking"
              showTitle={false}
              imageFit="cover"
            />
            <FlightCard
              title="NGen-4-OW-4B-Thinking"
              subtitle="Compact open-weight reasoning model for lightweight deployments."
              category="Open Weights"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow4b.png"
              imageAlt="NGen-4-OW-4B-Thinking"
              href="/models/ngen4-ow-4b-thinking"
              showTitle={false}
              imageFit="cover"
            />
          </div>
        </div>
      </div>


      {/* NGen 3.5 Series Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 3.5 Series Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Advanced conversational models with enhanced capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen 3.5 Max"
              subtitle="Maximum performance and capability for complex reasoning."
              category="Chat"
              imageUrl="/ngen3.5-max.png"
              imageAlt="NGen 3.5 Max Model"
              href="/models/ngen3.5-max-chat"
            />
            <FlightCard
              title="NGen 3.5 Pro"
              subtitle="Professional-grade conversational AI for advanced workflows."
              category="Chat"
              imageUrl="/ngen3.5-pro.png"
              imageAlt="NGen 3.5 Pro Model"
              href="/models/ngen3.5-pro-chat"
            />
            <FlightCard
              title="NGen 3.5 Lite"
              subtitle="Efficient and fast conversational model for real-time use."
              category="Chat"
              imageUrl="/ngen3.5-lite.png"
              imageAlt="NGen 3.5 Lite Model"
              href="/models/ngen3.5-lite-chat"
            />
          </div>
        </div>
      </div>

      {/* NGen 3.1 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 3.1 Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Next-generation multimodal models with breakthrough performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr max-w-4xl">
            <FlightCard
              title="NGen3.1-Pro Multimodal"
              subtitle="Handles image and text inputs with breakthrough performance."
              category="Multimodal"
              imageUrl="/ngen3.1-pro.png"
              imageAlt="NGen3.1-Pro Multimodal Model"
              href="/models/ngen3.1-pro"
            />
          </div>
        </div>
      </div>

      {/* Omni Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Omni Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Real-time multimodal and audio processing capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen-Realtime-Omni"
              subtitle="Text, audio, and image in real-time."
              category="Omni"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/dirk-lach-fSgF4pEQEY8-unsplash.jpg"
              imageAlt="NGen-Realtime-Omni Multimodal Model"
              href="/models/ngen-realtime-omni-multimodal"
            />
            <FlightCard
              title="NGen-Realtime-Omni-Audio"
              subtitle="Real-time audio processing and understanding."
              category="Omni"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-VDgrUrFfad8-unsplash.jpg"
              imageAlt="NGen-Realtime-Omni-Audio Model"
              href="/models/ngen-realtime-omni-audio-audio"
            />
          </div>
        </div>
      </div>

      {/* Audio Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Audio Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Advanced audio processing and text-to-speech capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            <FlightCard
              title="AudioTextSpeech-Pro"
              subtitle="Professional-grade text-to-speech synthesis with natural prosody."
              category="Audio"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-AwuBx2ocy34-unsplash.jpg"
              imageAlt="AudioTextSpeech-Pro Model"
              href="/models/audiotextspeech-pro-audio"
            />
            <FlightCard
              title="AudioTextSpeech-1"
              subtitle="Basic text-to-speech for simple applications and notifications."
              category="Audio"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/steve-johnson-w6e5uRHgGNo-unsplash.jpg"
              imageAlt="AudioTextSpeech-1 Model"
              href="/models/audiotextspeech-1-audio"
            />
          </div>
        </div>
      </div>

      {/* Image Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Image Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Advanced image generation capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            <FlightCard
              title="IGen-1 Nano"
              subtitle="512×512, fast and efficient for rapid prototyping."
              category="Image"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-EHOFLSDlmSE-unsplash.jpg"
              imageAlt="IGen-1 Nano Model"
              href="/models/igen-1-nano-image"
            />
            <FlightCard
              title="IGen-1"
              subtitle="Up to 4K resolution with advanced editing and prompt adherence."
              category="Image"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-_ZCinpPTL_g-unsplash.jpg"
              imageAlt="IGen-1 Model"
              href="/models/igen-1-image"
            />
          </div>
        </div>
      </div>

      {/* NGen 3.9 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 3.9 Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Latest generation conversational AI models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen 3.9 Lite"
              subtitle="Fast & efficient for basic chat and low-latency interaction."
              category="Chat"
              imageUrl="/ngen3.9-lite.png"
              imageAlt="NGen 3.9 Lite Model"
              href="/models/ngen3.9-lite-chat"
            />

            <FlightCard
              title="NGen 3.9 Pro"
              subtitle="Strong contextual and logical understanding for professional use."
              category="Chat"
              imageUrl="/ngen3.9-pro.png"
              imageAlt="NGen 3.9 Pro Model"
              href="/models/ngen3.9-pro-chat"
            />

            <FlightCard
              title="NGen 3.9 Max"
              subtitle="Stable enterprise version for large-scale production workloads."
              category="Chat"
              imageUrl="/ngen3.9-max.png"
              imageAlt="NGen 3.9 Max Model"
              href="/models/ngen3.9-max-stable-v3-chat"
            />
          </div>
        </div>
      </div>

      {/* NGen 3 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 3 Models.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen 3 10B"
              subtitle="Frontier Model for advanced reasoning and large-scale applications."
              category="10B params"
              imageUrl="/ngen3-10b.png"
              imageAlt="NGen 3 10B Model"
              href="/models/ngen3-10b"
            />
            <FlightCard
              title="NGen 3 7B"
              subtitle="Foundational Model balancing power and speed."
              category="7B params"
              imageUrl="/ngen3-7b.png"
              imageAlt="NGen 3 7B Model"
              href="/models/ngen3-7b"
            />
            <FlightCard
              title="NGen 3 3B"
              subtitle="Accessible AI for general-purpose chat and assistance."
              category="3B params"
              imageUrl="/ngen3-3b.png"
              imageAlt="NGen 3 3B Model"
              href="/models/ngen3-3b"
            />

            <FlightCard
              title="NGen 3 140M"
              subtitle="Compact model for efficient on-device processing."
              category="140M params"
              imageUrl="/ngen3-140m.png"
              imageAlt="NGen 3 140M Model"
              href="/models/ngen3-140m"
            />
            <FlightCard
              title="NGen 3 140M V2"
              subtitle="Enhanced compact model with improved instruction following."
              category="140M params"
              imageUrl="/ngen3-140mv2.png"
              imageAlt="NGen 3 140M V2 Model"
              href="/models/ngen3-140m-v2"
            />
            <FlightCard
              title="NGen 3 90M"
              subtitle="Smart micro-model for simple text transformations."
              category="90M params"
              imageUrl="/ngen3-90m.png"
              imageAlt="NGen 3 90M Model"
              href="/models/ngen3-90m"
            />

            <FlightCard
              title="NGen 3 15M"
              subtitle="Micro-scale intelligence for highly constrained environments."
              category="15M params"
              imageUrl="/ngen3-15m.png"
              imageAlt="NGen 3 15M Model"
              href="/models/ngen3-15m"
            />
            <FlightCard
              title="NGen 3 15M Embed"
              subtitle="Specialized vector search and embedding model."
              category="Search"
              imageUrl="/ngen3-15m-embd.png"
              imageAlt="NGen 3 15M Embed Model"
              href="/models/ngen3-15m-embed"
            />
            <FlightCard
              title="NGen 3 140M Instruct"
              subtitle="Task-focused model optimized for direct instructions."
              category="Instruct"
              imageUrl="/ngen3-140mit.png"
              imageAlt="NGen 3 140M Instruct Model"
              href="/models/ngen3-140m-instruct"
            />

            <FlightCard
              title="NGen3-7B-0625 Chat"
              subtitle="High-efficiency conversational model with modern tuning."
              category="Chat"
              imageUrl="/ngen3-7b-0625.png"
              imageAlt="NGen3-7B-0625 Chat Model"
              href="/models/ngen3-7b-0625-chat"
            />
            <FlightCard
              title="NGen3-1B Chat"
              subtitle="Compact 1B parameter model for high-speed edge deployment."
              category="Chat"
              imageUrl="/ngen3-1b.png"
              imageAlt="NGen3-1B Chat Model"
              href="/models/ngen3-1b-chat"
            />
            <FlightCard
              title="NGen3-1B-it Chat"
              subtitle="Instruction-tuned variant for superior task performance."
              category="Chat"
              imageUrl="/ngen3-1bit.png"
              imageAlt="NGen3-1B-it Chat Model"
              href="/models/ngen3-1b-it-chat"
            />
          </div>
        </div>
      </div>

      {/* NGen 2 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 2 Models.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="NGen 2 170M"
              subtitle="Gen-2 Core for lightweight language tasks."
              category="Core"
              imageUrl="/ngen2-170m.png"
              imageAlt="NGen 2 170M Model"
              href="/models/ngen2-170m"
            />
            <FlightCard
              title="NGen 2 30M"
              subtitle="Compact Core for on-device processing."
              category="Core"
              imageUrl="/ngen2-30m.png"
              imageAlt="NGen 2 30M Model"
              href="/models/ngen2-30m"
            />
            <FlightCard
              title="NGen 2 15M"
              subtitle="Micro-Scale for extremely constrained environments."
              category="Core"
              imageUrl="/ngen2-15m.png"
              imageAlt="NGen 2 15M Model"
              href="/models/ngen2-15m"
            />
          </div>
        </div>
      </div>

      {/* Stellar - 2 Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Stellar - 2.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="Stellar Large"
              subtitle="Stellar Scale for enterprise-grade reasoning."
              category="Enterprise"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg"
              imageAlt="Stellar Large Model"
              href="/models/stellar-large"
            />
            <FlightCard
              title="Stellar Mini"
              subtitle="Compact Power with smart reasoning capabilities."
              category="Pro"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-16SyukXEJbk-unsplash.jpg"
              imageAlt="Stellar Mini Model"
              href="/models/stellar-mini"
            />
            <FlightCard
              title="Stellar Nano"
              subtitle="Ultra-Compact edge-native intelligence."
              category="Edge"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-UrOeJ0cLXAw-unsplash.jpg"
              imageAlt="Stellar Nano Model"
              href="/models/stellar-nano"
            />
          </div>
        </div>
      </div>

      {/* Special Tool Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Special Tool Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Specialized models for search, research, code, and agent coordination</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            <FlightCard
              title="WebSearch-1"
              subtitle="Real-time web search with source citations."
              category="Search"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-y-0ThkdUKIk-unsplash.jpg"
              imageAlt="WebSearch-1 Model"
              href="/models/websearch-1-search"
            />
            <FlightCard
              title="Scientist-1"
              subtitle="Specialized for scientific research and analysis."
              category="Research"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/eslam-ahmed-Z5eWc8EaMms-unsplash.jpg"
              imageAlt="Scientist-1 Model"
              href="/models/scientist-1-research"
            />
            <FlightCard
              title="Code-1"
              subtitle="Supports 30+ programming languages with advanced debugging."
              category="Code"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-DbFgNw3QshA-unsplash.jpg"
              imageAlt="Code-1 Model"
              href="/models/code-1-code"
            />
            <FlightCard
              title="MultiAgent-1"
              subtitle="Coordinates multiple AI agents for complex tasks."
              category="Agent"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-UrOeJ0cLXAw-unsplash.jpg"
              imageAlt="MultiAgent-1 Model"
              href="/models/multiagent-1-agent"
            />
            <FlightCard
              title="AGent*"
              subtitle="Autonomous strategic agent for complex decision making."
              category="Agent"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-llx7NBeA89U-unsplash.jpg"
              imageAlt="AGent* Model"
              href="/models/agent-star"
            />
          </div>
        </div>
      </div>

      {/* NGen 1 Models Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">NGen 1 Models.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">Pioneer foundation models that started it all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr max-w-4xl">
            <FlightCard
              title="NGen 1"
              subtitle="Pioneer foundation model that started it all."
              category="Legacy"
              imageUrl="/ngen1.png"
              imageAlt="NGen 1 Model"
              href="/models/ngen1"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
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

