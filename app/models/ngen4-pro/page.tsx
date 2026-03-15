'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen4SystemCard } from '@/components/ui/NGen4SystemCard'

export default function NGen4ProPage() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                {/* Date, Title & Authors */}
                <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Model • 26 February, 2026</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>NGen 4 Pro</h1>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600 mb-8 font-medium">
                        <span>Thishyaketh¹</span>
                        <span>Rishi¹</span>
                        <span>Aryavardhan²</span>
                        <span>Devansh²</span>
                        <span>Amala³</span>
                        <span>Neelansh³</span>
                        <span>Kritarth⁴</span>
                    </div>

                    <div className="text-sm text-gray-500 mb-8">
                        <span><sup>1</sup> AI Research</span>
                        <span className="mx-4">|</span>
                        <span><sup>2</sup> Safety & Alignment</span>
                        <span className="mx-4">|</span>
                        <span><sup>3</sup> Indian Applied Intelligence</span>
                        <span className="mx-4">|</span>
                        <span><sup>4</sup> Interpretability</span>
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/500]">
                    <Image
                        src="/ngen4-pro.png"
                        alt="NGen 4 Pro Banner"
                        fill
                        priority
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white pb-32">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-24">
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            NGen 4 Pro is our flagship frontier model, representing a significant leap forward in super-intelligence. By integrating breakthroughs in early-fusion multimodal learning, Mixture-of-Experts (MoE) efficiency, and massive-scale reinforcement learning, NGen 4 Pro empowers developers and enterprises with unprecedented reasoning, coding, and creative capabilities.
                        </p>
                    </div>



                    <NGen4SystemCard />

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
