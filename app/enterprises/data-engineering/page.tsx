'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DataEngineeringPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Enterprise Service</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Data Engineering</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/data-engineering.png"
            alt="Data Engineering"
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
              Build robust data pipelines and infrastructure to power your AI initiatives. Our data engineering services ensure your data is clean, accessible, and optimized for AI applications.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Benefits.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Data pipeline design and implementation</li>
              <li>Data quality and governance frameworks</li>
              <li>ETL/ELT process optimization</li>
              <li>Real-time data processing solutions</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Perfect for data infrastructure modernization, AI data preparation, real-time analytics, and enterprise data integration.
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
