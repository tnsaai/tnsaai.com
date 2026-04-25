'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen4SystemCard } from '@/components/ui/NGen4SystemCard'

export default function NGen4SystemCardNewsPost() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-500">February 26, 2026</p>
                </div>

                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/500]">
                    <Image
                        src="/ngen4-sys-card.png"
                        alt="NGen 4 Banner"
                        fill
                        priority
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-16">
                        <NGen4SystemCard />
                    </div>

                    <div className="flex justify-center mt-20" style={{ marginBottom: '77px' }}>
                        <Link href="/company/news" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            View All News →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
