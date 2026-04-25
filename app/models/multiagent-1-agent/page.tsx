'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function MultiAgent1Page() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>Agent Models</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/multi-agent-1.png"
            alt="Agent Models"
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
              Agent Models coordinate multiple AI agents for complex tasks, enabling sophisticated workflows, autonomous planning, and collaborative problem-solving.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Snapshots.</h2>
            <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-normal text-black">MultiAgent-1</p>
                  <p className="mt-1 text-sm text-gray-500">Multi-agent orchestration snapshot.</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Current</span>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-normal text-black">Agent-1</p>
                  <p className="mt-1 text-sm text-gray-500">Autonomous strategic agent snapshot.</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Snapshot</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Coordinates multiple AI agents</li>
              <li>Complex task orchestration</li>
              <li>Multi-agent workflows</li>
              <li>Collaborative problem-solving</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹0.83 input / ₹1.25 output per 1K tokens
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
