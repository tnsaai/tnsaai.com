'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding, BenchmarkVisionMultimodal } from '@/components/ui/BenchmarkAdvanced'

export default function NGen35MaxChatPage() {
  const textBenchmarkRows = [
    { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 75.8, competitorValue: 81.2 },
    { category: 'Reasoning', benchmark: 'GPQA', value: 71.2, competitorValue: 68.4 },
    { category: 'Reasoning', benchmark: 'AIME 25', value: 89.1, competitorValue: 70.9 },
    { category: 'Coding', benchmark: 'LiveCodeBench', value: 62.5, competitorValue: 57.4 },
    { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 41.8, competitorValue: 36.3 },
  ]

  const visionBenchmarkRows = [
    { category: 'STEM', benchmark: 'MMMU (Val)', value: 75.6, competitorValue: 74.1 },
    { category: 'Math', benchmark: 'MathVista', value: 83.2, competitorValue: 81.4 },
    { category: 'OCR', benchmark: 'DocVQA', value: 95.6, competitorValue: 95.3 },
    { category: 'Video', benchmark: 'MVBench', value: 74.7, competitorValue: 69.0 },
  ]

  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Nov 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>
            NGen 3.5 Max
          </h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/ngen3.5-max.png"
            alt="NGen 3.5 Max"
            fill
            priority
            className="object-cover rounded-[10px]"
          />
        </div>

        <div className="mb-12 flex justify-center">
          <NGen3SystemCardLink />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              NGen 3.5 Max represents the pinnacle of TNSA&apos;s conversational AI capabilities, delivering maximum
              performance across knowledge, reasoning, coding, and vision intelligence tasks. Built for enterprise
              applications requiring the highest level of accuracy and capability.
            </p>
          </div>

          <div className="space-y-16 mb-12">
            <BenchmarkNGen3Reasoning />
            <BenchmarkAdvancedText />
            <BenchmarkAdvancedLogic />
            <BenchmarkAdvancedCoding />
            <BenchmarkVisionMultimodal />
          </div>

          <div className="mb-12">
            <BenchmarkTable title="The Text, Reasoning & Coding Benchmarks" rows={textBenchmarkRows} />
          </div>

          <div className="mb-12">
            <BenchmarkTable title="The Vision & Multimodal Benchmarks" rows={visionBenchmarkRows} />
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Context & Specs.</h2>
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-700">
              <div>
                <p className="font-medium text-black">Context Length</p>
                <p>262,144 Tokens</p>
              </div>
              <div>
                <p className="font-medium text-black">Multimodal</p>
                <p>Native Support</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Maximum performance and capability across all benchmarks</li>
              <li>Advanced vision intelligence with multimodal understanding</li>
              <li>Superior reasoning and mathematical problem-solving</li>
              <li>Enterprise-grade alignment and instruction following</li>
            </ul>
          </div>


          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹0.79 input / ₹1.18 output per 1K tokens
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link
              href="https://platform.tnsaai.com"
              className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              Try on API Platform →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
