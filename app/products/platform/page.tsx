'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TNSAPlatformPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>TNSA Platform</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/tnsa-platform.png"
            alt="TNSA Platform"
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
              TNSA Platform is your gateway to cutting-edge AI development, providing unified API access to all TNSA models with enterprise-ready infrastructure and comprehensive developer tools.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Unified API access to all TNSA models</li>
              <li>High-performance optimized infrastructure</li>
              <li>Advanced analytics and monitoring tools</li>
              <li>Comprehensive SDKs and documentation</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Perfect for application development, research experimentation, enterprise integration, startup innovation, educational projects, and content creation workflows.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Free tier available - Pay per use
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Access Platform →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
