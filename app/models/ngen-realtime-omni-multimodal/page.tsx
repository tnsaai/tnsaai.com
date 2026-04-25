'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGenRealtimeOmniMultimodalPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>NGen-Realtime-Omni Multimodal</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/ngen-realtime-omni.png"
            alt="NGen-Realtime-Omni Multimodal"
            fill
            priority
            className="object-cover rounded-[10px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              NGen-Realtime-Omni Multimodal is a true omni-modal assistant that processes text, audio, and image inputs in real-time for instantaneous interactions. Engineered for low-latency responses with 125K token context length, making it ideal for real-time communication and multimodal applications.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Real-time processing of text, audio, and image inputs</li>
              <li>Low-latency responses for instantaneous interactions</li>
              <li>125K token context length with 32K max generation</li>
              <li>Transformer-based multimodal architecture</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ideal for live transcription and analysis, interactive voice agents, real-time video analysis, and multimodal communication systems requiring instantaneous processing across multiple input types.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹1.25 input / ₹1.66 output per 1K tokens
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Try on API Platform →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
