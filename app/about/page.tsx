'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Company</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>About Us</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/about.png"
            alt="About Us"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Our Story.</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              TNSA AI was founded in 2021 by Thishyaketh Abimalla and Nachiketh Abimalla with a bold mission — to make India the global leader in Artificial Intelligence and pioneer the world&apos;s first AGI and Quantum Intelligence systems.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Built without reliance on foreign core technology, TNSA develops foundational models, multimodal systems, and advanced AI frameworks. What began as an independent research initiative has evolved into a global AI company.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Our Founders.</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-[40px] p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Nachiketh Abimalla</h3>
                <p className="text-sm text-gray-600">Co-Founder & CEO</p>
              </div>
              <div className="border border-gray-200 rounded-[40px] p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Thishyaketh Abimalla</h3>
                <p className="text-sm text-gray-600">Co-Founder & CTO</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Our Products.</h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
              <li>NGen Series — Large language models from compact to billion-scale architectures</li>
              <li>IGen Series — Industry-grade text-to-image and text-to-video generators</li>
              <li>StellarTTS — Natural, human-like multilingual text-to-speech engine</li>
              <li>Neura BETA — First AGI architecture for reasoning and multi-domain learning</li>
              <li>Tokenize2 — In-house BPE tokenizer optimized for large-scale training</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Our Partners.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Supported by Microsoft for Startups and Google TPU Research Cloud, enabling cutting-edge AI research and development.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/contact" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Contact Us →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
