'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGenRealtimeOmniAudioPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>NGen-Realtime-Omni-Audio</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/ngen-realtime-audio.png"
            alt="NGen-Realtime-Omni-Audio"
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
              NGen-Realtime-Omni-Audio provides real-time audio processing and understanding capabilities. Process and understand audio streams in real-time for immediate insights with accurate speech recognition and comprehensive audio analysis.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Real-time audio processing and understanding</li>
              <li>Accurate speech recognition and transcription</li>
              <li>Audio analysis for sentiment and speaker identification</li>
              <li>Up to 60 minutes max duration per session</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ideal for live transcription of meetings and events, voice-controlled applications, call center automation, and real-time audio analysis systems.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹1.66 per minute
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
