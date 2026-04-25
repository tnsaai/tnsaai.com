'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'

export default function NGen3MaxPage() {
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
            <h1 className="text-4xl font-medium tracking-tight mb-8 font-sans sm:text-5xl lg:text-6xl xl:text-7xl">
              NGen 3.9 Max
            </h1>
            <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              The most powerful model for cutting-edge research and complex multimodal applications.
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Maximum Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Maximum Power</h3>
                <p className="text-gray-600">Unprecedented computational capability for the most demanding AI tasks and research.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Deep Analytics</h3>
                <p className="text-gray-600">Advanced analytical reasoning with sophisticated pattern recognition and insight generation.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">True Multimodal</h3>
                <p className="text-gray-600">Seamless processing of text, images, audio, and structured data in unified workflows.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pricing</h2>
            <div className="bg-purple-50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-4">NGen 3.9 Max - Maximum Capability</h3>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹84.00</div>
                  <div className="text-sm text-gray-600">Input / 1M tokens</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹210.00</div>
                  <div className="text-sm text-gray-600">Output / 1M tokens</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Stable • Context 40K • Reasoning
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Cutting-Edge Architecture</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold mb-4">Advanced Architecture</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• State-of-the-art transformer design</li>
                    <li>• Multi-modal fusion layers</li>
                    <li>• Extended context: 128K tokens</li>
                    <li>• Advanced reasoning modules</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-4">Peak Performance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Response time: 1-3 seconds</li>
                    <li>• Accuracy: 98%+ on complex tasks</li>
                    <li>• Multi-modal processing capability</li>
                    <li>• 99.99% enterprise uptime</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Advanced Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Scientific Research</h3>
                <p className="text-gray-600">Advanced research analysis, hypothesis generation, and scientific literature review.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Medical Diagnosis</h3>
                <p className="text-gray-600">Multi-modal medical image analysis and diagnostic assistance for healthcare.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Creative AI</h3>
                <p className="text-gray-600">Advanced content creation combining text, images, and multimedia elements.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Complex Analytics</h3>
                <p className="text-gray-600">Deep data analysis across multiple formats and sources for strategic insights.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">AI Research</h3>
                <p className="text-gray-600">Foundation for advanced AI research and experimental applications.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Enterprise Intelligence</h3>
                <p className="text-gray-600">Comprehensive business intelligence with multi-source data integration.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Unlock Maximum Potential</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the pinnacle of AI capability with NGen 3.9 Max for your most ambitious projects.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Request Access
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Technical Specs
              </Link>
              <NGen3SystemCardLink />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
