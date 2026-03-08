'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NGen4BlazePage() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Model</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>NGen 4 Blaze</h1>
                </div>

                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="/ngen4-blaze.png"
                        alt="NGen 4 Blaze"
                        fill
                        priority
                        unoptimized={true}
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-16">
                        <p className="text-base text-gray-700 leading-relaxed text-center">
                            NGen 4 Blaze introduces advanced intelligence mapped for extreme speed and reasoning. Seamlessly pairing analytical depth with instantaneous generation, it paves the way for a revolutionary reasoning workflow.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-1 gap-8 text-base text-gray-700">
                            <div>
                                <p className="font-medium text-black">Context Length</p>
                                <p>128,000 Tokens</p>
                            </div>
                        </div>
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
