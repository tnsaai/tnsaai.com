'use client'

import Link from 'next/link'
import Image from 'next/image'

import { BenchmarkTable } from '@/components/ui/BenchmarkTable'

export default function NGen35LiteChatPage() {
  const benchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 70.4, competitorValue: 81.2 },
    { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 83.7, competitorValue: '—' },
    { category: 'Reasoning', benchmark: 'GPQA', value: 55.9, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 65.6, competitorValue: 70.9 },
  ]

  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">November 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 3.5 Lite</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/milad-fakurian-iFu2HILEng8-unsplash.jpg"
            alt="NGen 3.5 Lite"
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
              NGen 3.5 Lite provides efficient and fast conversational AI capabilities, optimized for applications requiring quick response times and cost-effective deployment while maintaining strong performance.
            </p>
          </div>

          <BenchmarkTable rows={benchmarkRows} />


          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>Fast and efficient conversational model</li>
              <li>Optimized for quick response times</li>
              <li>Cost-effective solution for high-volume applications</li>
              <li>Balanced performance across common tasks</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              ₹0.30 input / ₹0.45 output per 1K tokens
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
