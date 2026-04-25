'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AudioTextSpeech1Page() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>AudioTextSpeech-1</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/audio-text-speech-1.png"
            alt="AudioTextSpeech-1"
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
              AudioTextSpeech-1 provides basic text-to-speech capabilities for simple applications. Cost-effective solution for converting text to natural-sounding speech with support for common use cases and languages.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Basic text-to-speech synthesis</li>
              <li>Natural-sounding voice output</li>
              <li>Cost-effective solution for simple applications</li>
              <li>Support for common languages</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ideal for basic voice notifications, simple voice assistants, text-to-speech for accessibility features, and cost-effective audio content generation.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹0.33 per minute
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
