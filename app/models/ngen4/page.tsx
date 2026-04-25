'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ModelMetaBadge } from '@/components/ui/ModelMetaBadge'
import { NGen4IntelligencePriceChart } from '@/components/ui/NGen4IntelligencePriceChart'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

export default function NGen4Page() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <ModelMetaBadge label="Model" />
                    <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>NGen-4</h1>
                </div>

                <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
                    <Image
                        src="/model-images/ngen4.png"
                        alt="NGen-4"
                        fill
                        priority
                        unoptimized={true}
                        className="object-cover rounded-[10px]"
                    />
                </div>

            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-[1380px] px-6">
                    <div className="mx-auto mb-12 max-w-3xl">
                        <p className="text-sm text-gray-700 leading-relaxed text-center">
                            NGen-4 is the general frontier model tier for broad intelligence workloads, bringing together strong reasoning, coding, agentic execution, multilingual understanding, and multimodal performance in a single benchmark profile.
                        </p>
                    </div>

                    <div className="mb-12">
                        <NGen4IntelligencePriceChart />
                    </div>

                    <NGen4ModelEvaluations model="ngen4" />

                    <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '77px' }}>
                        <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            {'Try on API Platform \u2192'}
                        </Link>
                        <Link href="/NGen-4-System-Card.pdf" target="_blank" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            Read Model Card
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
