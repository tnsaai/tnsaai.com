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
            <p className="text-lg text-gray-900 sm:text-xl">Massive scale non-reasoning models for conversational AI</p>
          </div>

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 4 Mini"
              subtitle="Conversational AI"
              category="100B+ params"
              price="$2.00/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/tnsaai/images-urls/b541dce9d4e61765fc0e23374f20194bb5b69b33/ngen4-mini.svg"
              imageAlt="NGen 4 Mini Model"
              href="/models/ngen4-mini"
              showTitle={false}
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 3.5 Max"
              subtitle="Maximum performance and capability"
              category="Chat"
              price="₹1.00 input / ₹1.50 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
              imageAlt="NGen 3.5 Max Model"
              href="/models/ngen3.5-max-chat"
            />
            <FlightCard
              title="NGen 3.5 Pro"
              subtitle="Professional-grade conversational AI"
              category="Chat"
              price="₹0.60 input / ₹0.90 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
              imageAlt="NGen 3.5 Pro Model"
              href="/models/ngen3.5-pro-chat"
            />
            <FlightCard
              title="NGen 3.5 Lite"
              subtitle="Efficient and fast conversational model"
              category="Chat"
              price="₹0.30 input / ₹0.45 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/milad-fakurian-iFu2HILEng8-unsplash.jpg"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen3.1-Pro Multimodal"
              subtitle="Handles image and text inputs"
              category="Multimodal"
              price="₹0.42 input / ₹0.58 + ₹1.66/image output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen-Realtime-Omni Multimodal"
              subtitle="Text, audio, and image in real-time"
              category="Omni"
              price="₹1.25 input / ₹1.66 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/dirk-lach-fSgF4pEQEY8-unsplash.jpg"
              imageAlt="NGen-Realtime-Omni Multimodal Model"
              href="/models/ngen-realtime-omni-multimodal"
            />
            <FlightCard
              title="NGen-Realtime-Omni-Audio"
              subtitle="Real-time audio processing and understanding"
              category="Omni"
              price="₹1.66 per minute"
              buttonText="Know More"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="AudioTextSpeech-Pro"
              subtitle="Professional-grade text-to-speech synthesis"
              category="Audio"
              price="₹1.00 per minute"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-AwuBx2ocy34-unsplash.jpg"
              imageAlt="AudioTextSpeech-Pro Model"
              href="/models/audiotextspeech-pro-audio"
            />
            <FlightCard
              title="AudioTextSpeech-1"
              subtitle="Basic text-to-speech for simple applications"
              category="Audio"
              price="₹0.33 per minute"
              buttonText="Know More"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="IGen-1 Nano"
              subtitle="512×512, fast and efficient"
              category="Image"
              price="₹0.83 per image"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-EHOFLSDlmSE-unsplash.jpg"
              imageAlt="IGen-1 Nano Model"
              href="/models/igen-1-nano-image"
            />
            <FlightCard
              title="IGen-1"
              subtitle="Up to 4K resolution with advanced editing features"
              category="Image"
              price="₹2.50 per image"
              buttonText="Know More"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 3.9 Lite"
              subtitle="Fast & efficient for basic chat applications"
              category="Chat"
              price="₹0.10 input / ₹0.12 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/milad-fakurian-iFu2HILEng8-unsplash.jpg"
              imageAlt="NGen 3.9 Lite Model"
              href="/models/ngen3.9-lite-chat"
            />

            <FlightCard
              title="NGen 3.9 Pro"
              subtitle="Strong contextual and logical understanding"
              category="Chat"
              price="₹0.33 input / ₹0.50 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
              imageAlt="NGen 3.9 Pro Model"
              href="/models/ngen3.9-pro-chat"
            />

            <FlightCard
              title="NGen 3.9 Lite 2006 Preview"
              subtitle="Preview version with latest experimental features"
              category="Chat"
              price="₹0.08 input / ₹0.10 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/vincent-maufay-MWj1zsf5yjM-unsplash.jpg"
              imageAlt="NGen 3.9 Lite 2006 Preview Model"
              href="/models/ngen3.9-lite-2006-preview-chat"
            />
            <FlightCard
              title="NGen 3.9 Pro 2406 Preview"
              subtitle="Preview version with enhanced capabilities"
              category="Chat"
              price="₹0.25 input / ₹0.37 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/vincent-maufay-tfo-l7oHZcw-unsplash.jpg"
              imageAlt="NGen 3.9 Pro 2406 Preview Model"
              href="/models/ngen3.9-pro-2406-preview-chat"
            />

            <FlightCard
              title="NGen 3.9 Max V2 128K Preview"
              subtitle="Handles long documents and books"
              category="Chat"
              price="₹0.66 input / ₹1.00 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-tZCrFpSNiIQ-unsplash.jpg"
              imageAlt="NGen 3.9 Max V2 128K Preview Model"
              href="/models/ngen3.9-max-v2-128k-preview-chat"
            />

            <FlightCard
              title="NGen 3.9 Max"
              subtitle="Stable enterprise version for production workloads"
              category="Chat"
              price="₹0.83 input / ₹1.25 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/and-machines-FvjBNfAdTYE-unsplash.jpg"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 3 10B"
              subtitle="Frontier Model"
              category="10B params"
              price="$0.80/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-4c4mrsZwsnA-unsplash.jpg"
              imageAlt="NGen 3 10B Model"
              href="/models/ngen3-10b"
            />
            <FlightCard
              title="NGen 3 7B"
              subtitle="Foundational Model"
              category="7B params"
              price="$0.60/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-4VgbJyqALXM-unsplash.jpg"
              imageAlt="NGen 3 7B Model"
              href="/models/ngen3-7b"
            />
            <FlightCard
              title="NGen 3 3B"
              subtitle="Accessible AI"
              category="3B params"
              price="$0.40/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/vincent-maufay-H6ZAtlBReSk-unsplash.jpg"
              imageAlt="NGen 3 3B Model"
              href="/models/ngen3-3b"
            />

            <FlightCard
              title="NGen 3 140M"
              subtitle="Compact"
              category="140M params"
              price="$0.05/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/ikhlas-EWimyN-lBmQ-unsplash.jpg"
              imageAlt="NGen 3 140M Model"
              href="/models/ngen3-140m"
            />
            <FlightCard
              title="NGen 3 140M V2"
              subtitle="Enhanced"
              category="140M params"
              price="$0.06/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/ikhlas-mSZLRc6tp60-unsplash.jpg"
              imageAlt="NGen 3 140M V2 Model"
              href="/models/ngen3-140m-v2"
            />
            <FlightCard
              title="NGen 3 90M"
              subtitle="Smart"
              category="90M params"
              price="$0.04/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/sean-sinclair-C_NJKfnTR5A-unsplash.jpg"
              imageAlt="NGen 3 90M Model"
              href="/models/ngen3-90m"
            />

            <FlightCard
              title="NGen 3 15M"
              subtitle="Micro"
              category="15M params"
              price="$0.01/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/asif-aether-UmflEuFW7Cg-unsplash.jpg"
              imageAlt="NGen 3 15M Model"
              href="/models/ngen3-15m"
            />
            <FlightCard
              title="NGen 3 15M Embed"
              subtitle="Embedding"
              category="Vector Search"
              price="$0.01/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-EYnO1knx_8w-unsplash.jpg"
              imageAlt="NGen 3 15M Embed Model"
              href="/models/ngen3-15m-embed"
            />
            <FlightCard
              title="NGen 3 140M Instruct"
              subtitle="Instruction-Tuned"
              category="Task-Focused"
              price="$0.05/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/steve-johnson-Ynv62BMTaWg-unsplash.jpg"
              imageAlt="NGen 3 140M Instruct Model"
              href="/models/ngen3-140m-instruct"
            />

            <FlightCard
              title="NGen3-7B-0625 Chat"
              subtitle="High-efficiency conversational model"
              category="Chat"
              price="₹0.42 input / ₹0.58 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-9ZLLxhNCQxg-unsplash.jpg"
              imageAlt="NGen3-7B-0625 Chat Model"
              href="/models/ngen3-7b-0625-chat"
            />
            <FlightCard
              title="NGen3-7B-0525-Preview Chat"
              subtitle="Preview version of 7B parameter model"
              category="Chat"
              price="₹0.33 input / ₹0.50 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/ryunosuke-kikuno-lwvuKVgT4AU-unsplash.jpg"
              imageAlt="NGen3-7B-0525-Preview Chat Model"
              href="/models/ngen3-7b-0525-preview-chat"
            />
            <FlightCard
              title="NGen3-1B Chat"
              subtitle="Compact 1B parameter model for edge deployment"
              category="Chat"
              price="₹0.20 input / ₹0.30 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-zYWPpB1Tmco-unsplash.jpg"
              imageAlt="NGen3-1B Chat Model"
              href="/models/ngen3-1b-chat"
            />
            <FlightCard
              title="NGen3-1B-it Chat"
              subtitle="Instruction-tuned variant for better task performance"
              category="Chat"
              price="₹0.25 input / ₹0.35 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-Y6qcZ_VWEpU-unsplash.jpg"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 2 170M"
              subtitle="Gen-2 Core"
              category="170M params"
              price="$0.03/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/nicholas-ergemla-NIZvtxMVjWk-unsplash.jpg"
              imageAlt="NGen 2 170M Model"
              href="/models/ngen2-170m"
            />
            <FlightCard
              title="NGen 2 30M"
              subtitle="Compact Core"
              category="30M params"
              price="$0.02/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/nenad-novakovic-wnePSp6CT2U-unsplash.jpg"
              imageAlt="NGen 2 30M Model"
              href="/models/ngen2-30m"
            />
            <FlightCard
              title="NGen 2 15M"
              subtitle="Micro-Scale"
              category="15M params"
              price="$0.01/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/sean-fahrenbruch-g95tsUeCohM-unsplash.jpg"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="Stellar Large"
              subtitle="Stellar Scale"
              category="Enterprise Ready"
              price="$1.20/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-artempodrez-7233314.jpg"
              imageAlt="Stellar Large Model"
              href="/models/stellar-large"
            />
            <FlightCard
              title="Stellar Mini"
              subtitle="Compact Power"
              category="Smart Reasoning"
              price="$0.30/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-16SyukXEJbk-unsplash.jpg"
              imageAlt="Stellar Mini Model"
              href="/models/stellar-mini"
            />
            <FlightCard
              title="Stellar Nano"
              subtitle="Ultra-Compact"
              category="Edge-Native"
              price="$0.15/1K tokens"
              buttonText="Know More"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="WebSearch-1"
              subtitle="Real-time web search with source citations"
              category="Search"
              price="₹0.16 per query"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-y-0ThkdUKIk-unsplash.jpg"
              imageAlt="WebSearch-1 Model"
              href="/models/websearch-1-search"
            />
            <FlightCard
              title="Scientist-1"
              subtitle="Specialized for scientific research and analysis"
              category="Research"
              price="₹0.50 per query"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/eslam-ahmed-Z5eWc8EaMms-unsplash.jpg"
              imageAlt="Scientist-1 Model"
              href="/models/scientist-1-research"
            />
            <FlightCard
              title="Code-1"
              subtitle="Supports 30+ programming languages with advanced debugging"
              category="Code"
              price="₹0.42 input / ₹0.58 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/codioful-formerly-gradienta-DbFgNw3QshA-unsplash.jpg"
              imageAlt="Code-1 Model"
              href="/models/code-1-code"
            />
            <FlightCard
              title="MultiAgent-1"
              subtitle="Coordinates multiple AI agents for complex tasks"
              category="Agent"
              price="₹0.83 input / ₹1.25 output"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-UrOeJ0cLXAw-unsplash.jpg"
              imageAlt="MultiAgent-1 Model"
              href="/models/multiagent-1-agent"
            />
            <FlightCard
              title="AGent*"
              subtitle="Autonomous strategic agent"
              category="Agent"
              price="$2.50/1K tokens"
              buttonText="Know More"
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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            <FlightCard
              title="NGen 1"
              subtitle="Pioneer foundation model"
              category="Foundation"
              price="$0.02/1K tokens"
              buttonText="Know More"
              imageUrl="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/alexander-x-DcfqG9rmc8A-unsplash.jpg"
              imageAlt="NGen 1 Model"
              href="/models/ngen1"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[40px] flex flex-col items-center justify-center" style={{ width: '100%', maxWidth: '1028px', height: '575px', margin: '0 auto' }}>
            <h2 className="text-5xl font-normal text-center mb-8 text-black">
              Start building with TNSA today!
            </h2>
            <Link href="https://platform.tnsaai.com" className="px-8 py-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              API Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

