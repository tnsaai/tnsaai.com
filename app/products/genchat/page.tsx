'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GensChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>GensChat</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/genschat.png"
            alt="GensChat"
            fill
            priority
            className="object-cover rounded-[10px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              GensChat is India&apos;s own foundational model for conversational AI, built with deep understanding of Indian culture, languages, and context for authentic, natural interactions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Natural conversations with context understanding</li>
              <li>22+ Indian languages support</li>
              <li>Deep Indian cultural context</li>
              <li>Privacy-first with end-to-end encryption</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ideal for students and learning, professional productivity, creative projects, business support, personal assistance, and language practice.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Free
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://chat.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Try GensChat →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
