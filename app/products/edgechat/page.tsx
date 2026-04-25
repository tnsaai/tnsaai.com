'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function EdgeChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>EdgeChat</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/edgechat.png"
            alt="EdgeChat"
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
              EdgeChat brings AI to everyone, everywhere - run powerful AI models completely offline without any network dependency, ensuring universal access and complete privacy.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>100% offline functionality</li>
              <li>Complete privacy - data never leaves your device</li>
              <li>Universal access without internet dependency</li>
              <li>Lightweight and battery efficient</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Perfect for rural education, healthcare access, emergency services, privacy-first applications, mobile productivity, and IoT edge devices.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Availability.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Coming Soon
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/products" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Learn More →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
