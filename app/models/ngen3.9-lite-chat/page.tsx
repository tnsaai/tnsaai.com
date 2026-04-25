'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'

export default function NGen39LiteChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">September 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>NGen 3.9 Lite</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/ngen3.9-lite.png"
            alt="NGen 3.9 Lite"
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
              NGen 3.9 Lite is a fast and efficient conversational model optimized for basic chat applications, delivering rapid responses with cost-effective pricing.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Snapshots.</h2>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-normal text-black">NGen 3.9 Lite Chat</p>
                  <p className="mt-1 text-sm text-gray-500">Stable lightweight chat snapshot.</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Current</span>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-normal text-black">NGen 3.9 Lite 2006 Preview</p>
                  <p className="mt-1 text-sm text-gray-500">Preview snapshot for fast experimentation.</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Snapshot</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Benchmark Performance.</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2 font-semibold">Category</th>
                    <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
                    <th className="text-right py-3 px-2 font-semibold">NGen 3.9 Lite</th>
                    <th className="text-right py-3 px-2 font-semibold text-gray-500">Llama-3.3-70B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Knowledge</td>
                    <td className="py-3 px-2">MMLU-Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">77.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">82.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-Redux</td>
                    <td className="text-right py-3 px-2 font-semibold">90.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">GPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">63.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">69.4</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">SuperGPQA</td>
                    <td className="text-right py-3 px-2 font-semibold">49.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">55.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Reasoning</td>
                    <td className="py-3 px-2">AIME25</td>
                    <td className="text-right py-3 px-2 font-semibold">72.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">78.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">HMMT25</td>
                    <td className="text-right py-3 px-2 font-semibold">48.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">51.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">LiveBench</td>
                    <td className="text-right py-3 px-2 font-semibold">69.6</td>
                    <td className="text-right py-3 px-2 text-gray-500">75.6</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={3}>Coding</td>
                    <td className="py-3 px-2">LiveCodeBench v6</td>
                    <td className="text-right py-3 px-2 font-semibold">54.4</td>
                    <td className="text-right py-3 px-2 text-gray-500">61.9</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">CFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">1771</td>
                    <td className="text-right py-3 px-2 text-gray-500">2100</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">OJBench</td>
                    <td className="text-right py-3 px-2 font-semibold">22.1</td>
                    <td className="text-right py-3 px-2 text-gray-500">19.8</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={2}>Alignment</td>
                    <td className="py-3 px-2">IFEval</td>
                    <td className="text-right py-3 px-2 font-semibold">87.9</td>
                    <td className="text-right py-3 px-2 text-gray-500">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">Arena-Hard v2</td>
                    <td className="text-right py-3 px-2 font-semibold">19.7</td>
                    <td className="text-right py-3 px-2 text-gray-500">39.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Agent</td>
                    <td className="py-3 px-2">ScreenSpot Pro</td>
                    <td className="text-right py-3 px-2 font-semibold">64.2</td>
                    <td className="text-right py-3 px-2 text-gray-500">–</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium" rowSpan={4}>Multilingualism</td>
                    <td className="py-3 px-2">MultiIF</td>
                    <td className="text-right py-3 px-2 font-semibold">72.3</td>
                    <td className="text-right py-3 px-2 text-gray-500">80.1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">MMLU-ProX</td>
                    <td className="text-right py-3 px-2 font-semibold">67</td>
                    <td className="text-right py-3 px-2 text-gray-500">84.5</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">INCLUDE</td>
                    <td className="text-right py-3 px-2 font-semibold">67.8</td>
                    <td className="text-right py-3 px-2 text-gray-500">83.2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2">PolyMATH</td>
                    <td className="text-right py-3 px-2 font-semibold">46</td>
                    <td className="text-right py-3 px-2 text-gray-500">54.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Fast response times for seamless user experience</li>
              <li>Lightweight design optimized for efficiency</li>
              <li>40K token context length with 32K max generation</li>
              <li>Cost-effective solution for high-volume applications</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹0.10 input / ₹0.12 output per 1K tokens
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
