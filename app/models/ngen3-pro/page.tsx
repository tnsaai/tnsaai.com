'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'

export default function NGen3ProPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/blue-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <h1 className="text-4xl font-medium tracking-tight mb-8 font-sans sm:text-5xl lg:text-6xl xl:text-7xl">
              NGen 3.9 Pro
            </h1>
            <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              The professional-grade model for complex reasoning and enterprise applications.
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Professional Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Balanced Performance</h3>
                <p className="text-gray-600">Optimal trade-off between speed, accuracy, and resource usage for professional workflows.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Advanced Reasoning</h3>
                <p className="text-gray-600">Sophisticated logical reasoning capabilities for complex problem-solving and analysis.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Multi-Domain Versatility</h3>
                <p className="text-gray-600">Adaptable across industries from finance to healthcare, legal to creative content.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Pricing</h2>
            <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-4">NGen 3.9 Pro - Balanced & Powerful</h3>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹50.40</div>
                  <div className="text-sm text-gray-600">Input / 1M tokens</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹126.00</div>
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Enterprise-Grade Specifications</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold mb-4">Model Capabilities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced transformer architecture</li>
                    <li>• Multi-head attention mechanisms</li>
                    <li>• Context window: 40K tokens</li>
                    <li>• Fine-tuned for professional tasks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-4">Performance Metrics</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Response time: 500ms average</li>
                    <li>• Accuracy: 95%+ on benchmarks</li>
                    <li>• Concurrent users: 10,000+</li>
                    <li>• 99.95% uptime SLA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Professional Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Business Intelligence</h3>
                <p className="text-gray-600">Advanced data analysis and insights generation for strategic decision making.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Legal Document Analysis</h3>
                <p className="text-gray-600">Contract review, compliance checking, and legal research automation.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Financial Modeling</h3>
                <p className="text-gray-600">Risk assessment, market analysis, and financial report generation.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Technical Writing</h3>
                <p className="text-gray-600">Documentation, API guides, and technical specification creation.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Research & Analysis</h3>
                <p className="text-gray-600">Academic research, market studies, and comprehensive data analysis.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-600">Advanced customer service automation with contextual understanding.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Elevate Your Business</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your professional workflows with NGen 3.9 Pro&apos;s advanced reasoning capabilities.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Start Enterprise Trial
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                Integration Guide
              </Link>
              <NGen3SystemCardLink />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
