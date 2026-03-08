'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen31ProPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">October 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.1 Pro Multimodal</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/ngen3.1-pro.png"
            alt="NGen 3.1 Pro"
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
              NGen 3.1 Pro represents a quantum leap in artificial intelligence, combining cutting-edge multimodal capabilities with unprecedented reasoning power. Built on advanced transformer architecture with specialized multimodal fusion layers, NGen 3.1 Pro seamlessly processes and understands both textual and visual information.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Model Performance Benchmarks.</h2>
            <div className="overflow-x-auto">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/ngen3.1-detaild-bench.png"
                  alt="Detailed Benchmarks"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Average Performance by Category.</h2>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/ngen3.1-bar-graph.png"
                alt="Average Performance Bar Graph"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>True multimodal understanding with text and image processing</li>
              <li>Advanced document intelligence and OCR capabilities</li>
              <li>Superior performance in visual agent tasks</li>
              <li>Video understanding and analysis</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.42 input / ₹0.58 output + ₹1.66/image per 1K tokens
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
