'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function InfrastructurePage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Enterprise Service</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Infrastructure Support</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/infra-support.png"
            alt="Infrastructure Support"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Deploy and manage AI infrastructure with expert support for both cloud and on-premise environments. We provide comprehensive infrastructure solutions to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Benefits.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Cloud and on-premise deployment options</li>
              <li>Scalable infrastructure architecture</li>
              <li>24/7 monitoring and support</li>
              <li>Performance optimization and tuning</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Perfect for enterprise deployments, high-availability systems, hybrid cloud setups, and organizations with specific compliance requirements.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/contact" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Contact Sales →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
