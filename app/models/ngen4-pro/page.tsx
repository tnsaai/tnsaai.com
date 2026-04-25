'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ModelMetaBadge } from '@/components/ui/ModelMetaBadge'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

export default function NGen4ProPage() {
    return (
        <div className="min-h-screen bg-white" style={{ paddingTop: '150px' }}>
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <ModelMetaBadge label={'Model \u2022 26 February, 2026'} />
                    <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>
                        NGen 4 Pro
                    </h1>
                </div>

                <div className="relative mx-auto mb-12 aspect-[1028/500] w-full max-w-[860px]">
                    <Image
                        src="/model-images/ngen4-pro.png"
                        alt="NGen 4 Pro Banner"
                        fill
                        priority
                        className="rounded-[10px] object-cover"
                    />
                </div>

            </div>

            <div className="bg-white pb-32">
                <div className="mx-auto max-w-[1380px] px-6">
                    <div className="mx-auto mb-12 max-w-3xl">
                        <p className="text-base font-light leading-relaxed text-gray-700">
                            NGen 4 Pro is our flagship frontier model, representing a significant leap forward in super-intelligence. By integrating breakthroughs in early-fusion multimodal learning, Mixture-of-Experts (MoE) efficiency, and massive-scale reinforcement learning, NGen 4 Pro empowers developers and enterprises with unprecedented reasoning, coding, and creative capabilities.
                        </p>
                    </div>

                    <NGen4ModelEvaluations model="pro" />

                    <div className="flex justify-center" style={{ marginBottom: '77px' }}>
                        <Link href="https://platform.tnsaai.com" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            {'Try on API Platform \u2192'}
                        </Link>
                    </div>

                    <div className="mx-auto max-w-5xl">
                        <NGen4TeamSection />
                    </div>
                </div>
            </div>
        </div>
    )
}
