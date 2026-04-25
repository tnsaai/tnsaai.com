'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'

export default function NGen31BITChatPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">January 2025</p>
          <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>NGen 3 1B IT</h1>
        </div>

        <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
          <Image
            src="/model-images/ngen3-1bit.png"
            alt="NGen 3 1B IT"
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
              NGen 3 1B IT is an instruction-tuned variant of the 1B model, optimized for better task performance and instruction following capabilities.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
              <li>Instruction-tuned 1B parameter model</li>
              <li>Enhanced task performance</li>
              <li>Better instruction following</li>
              <li>Optimized for edge deployment</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ₹0.25 input / ₹0.35 output per 1K tokens
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
