'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function IGen1NanoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-white p-1 h-screen flex items-center justify-center">
        <div 
          className="relative isolate w-full h-full flex items-center justify-center rounded-3xl overflow-hidden border border-gray-200"
          style={{
            backgroundImage: 'url(/black-violet-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <h1 className="text-4xl font-medium tracking-tight mb-8 font-sans sm:text-5xl lg:text-6xl xl:text-7xl">
              IGen 1 Nano
            </h1>
            <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              Compact image generation powerhouse - creating visuals at the speed of thought.
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Visual Creation Redefined</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Generate high-quality images in seconds, perfect for real-time creative workflows and applications.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Nano Efficiency</h3>
                <p className="text-gray-600">Compact model size with minimal resource requirements while maintaining exceptional image quality.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">Consistent Quality</h3>
                <p className="text-gray-600">Reliable image generation with consistent style and quality across different prompts and use cases.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Image Generation Specs</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold mb-4">Generation Capabilities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Resolution: Up to 1024x1024 pixels</li>
                    <li>• Styles: Photorealistic, artistic, abstract</li>
                    <li>• Formats: PNG, JPEG, WebP</li>
                    <li>• Batch generation: Up to 10 images</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-4">Performance Metrics</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Generation time: 2-5 seconds</li>
                    <li>• Model size: &lt;500MB</li>
                    <li>• GPU memory: 2GB minimum</li>
                    <li>• Quality score: 8.5/10 average</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">Creative Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Social Media Content</h3>
                <p className="text-gray-600">Quick generation of engaging visuals for posts, stories, and marketing campaigns.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Product Mockups</h3>
                <p className="text-gray-600">Rapid prototyping and visualization for product design and e-commerce.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Game Assets</h3>
                <p className="text-gray-600">Quick generation of textures, backgrounds, and concept art for game development.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Educational Materials</h3>
                <p className="text-gray-600">Visual aids, diagrams, and illustrations for educational content creation.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Blog Illustrations</h3>
                <p className="text-gray-600">Custom images for articles, blog posts, and web content.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold mb-3">Creative Exploration</h3>
                <p className="text-gray-600">Artistic experimentation and creative ideation for designers and artists.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Start Creating Visually</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ideas into stunning visuals with IGen 1 Nano&apos;s fast and efficient image generation.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://platform.tnsaai.com"
                className="rounded-md bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
              >
                Generate Images
              </Link>
              <Link
                href="/developers"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
              >
                API Reference
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
