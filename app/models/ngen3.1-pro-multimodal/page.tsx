'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'

export default function NGen31ProMultimodalPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/purple-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <p className="text-sm text-gray-500">October 2025</p>
            <h1 className="text-4xl font-medium tracking-tight mb-8 font-sans sm:text-5xl lg:text-6xl xl:text-7xl">
              NGen3.1-Pro Multimodal
            </h1>
            <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Handles image and text inputs.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Try API →
              </Link>
              <Link
                href="/developers"
                className="rounded-md bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/30 transition-all border border-white/30"
              >
                Documentation →
              </Link>
              <NGen3SystemCardLink />
            </div>

            <div className="flex justify-center">
              <Image
                src="/TNSA.png"
                alt="TNSA"
                width={80}
                height={32}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Text + Image Inputs</h3>
                <p className="text-gray-600">Process and understand both text and image inputs simultaneously.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Multimodal Reasoning</h3>
                <p className="text-gray-600">Perform complex reasoning tasks that involve both visual and textual information.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Visual Understanding</h3>
                <p className="text-gray-600">Analyze and interpret the content of images to provide insightful responses.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pricing</h2>
            <div className="bg-orange-50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-4">NGen3.1-Pro Multimodal</h3>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-2xl font-bold text-orange-600">₹0.42</div>
                  <div className="text-sm text-gray-600">Input / 1K tokens</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">₹0.58</div>
                  <div className="text-sm text-gray-600">Output / 1K tokens + ₹1.66/image</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Technical Specifications</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold mb-4">Limits & Specifications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Context Length: 125K tokens</li>
                    <li>• Rate Limit: 300 RPM</li>
                    <li>• Max Generation: 32K tokens</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-4">Model Architecture</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Transformer-based architecture</li>
                    <li>• Text + Image reasoning and understanding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Ideal Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Visual Q&A</h3>
                <p className="text-gray-600">Ask questions about images and get detailed textual answers.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Image Captioning</h3>
                <p className="text-gray-600">Generate descriptive captions for images automatically.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Product Recommendations</h3>
                <p className="text-gray-600">Provide product recommendations based on images and user queries.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore the world of multimodal AI with NGen3.1-Pro Multimodal.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Start Free Trial
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                View Documentation
              </Link>
              <NGen3SystemCardLink />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
