'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ModelMetaBadge } from '@/components/ui/ModelMetaBadge'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

export default function NGen4LitePage() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <ModelMetaBadge label="Model" />
                    <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>
                        NGen 4 Lite
                    </h1>
                </div>

                <div className="relative mx-auto mb-12 aspect-[1028/560] w-full max-w-[860px]">
                    <Image
                        src="/model-images/ngen4-lite.png"
                        alt="NGen 4 Lite"
                        fill
                        priority
                        unoptimized={true}
                        className="rounded-[10px] object-cover"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="mb-12">
                        <p className="text-sm text-gray-700 leading-relaxed text-center">
                            NGen 4 Lite is a fast and efficient reasoning model optimized for real-world interactions. With rapid response times and consistent reliability, it acts as a lightweight cornerstone for modern AI applications.
                        </p>
                    </div>

                    <NGen4ModelEvaluations model="lite" />

                    <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '77px' }}>
                        <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            {'Try on API Platform ->'}
                        </Link>
                        <Link href="/NGen-4-System-Card.pdf" target="_blank" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            Read Model Card
                        </Link>
                    </div>

                    <NGen4TeamSection />
                </div>
            </div>
        </div>
    )
}
