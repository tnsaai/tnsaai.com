'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NGen3SystemCardLink } from '@/components/ui/NGen3SystemCardLink'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding } from '@/components/ui/BenchmarkAdvanced'

export default function NGen39ProChatPage() {
    const textBenchmarkRows = [
        { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 77.2, competitorValue: 81.2 },
        { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 90.4, competitorValue: '—' },
        { category: 'Reasoning', benchmark: 'GPQA', value: 63.1, competitorValue: 68.4 },
        { category: 'Reasoning', benchmark: 'AIME 25', value: 72.6, competitorValue: 70.9 },
        { category: 'Coding', benchmark: 'LiveCodeBench', value: 54.4, competitorValue: 57.4 },
        { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 19.7, competitorValue: 36.3 },
    ]

    const contextSpecs = [
        { label: 'Context Length', value: '262,144 Tokens' },
        { label: 'Model Priority', value: 'Professional Grade' },
    ]

    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Dec 2025</p>
                    <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '48px' }}>
                        NGen 3.9 Pro
                    </h1>
                </div>

                <div className="relative w-full max-w-[860px] mx-auto mb-12 aspect-[1028/560]">
                    <Image
                        src="/model-images/ngen3.9-pro.png"
                        alt="NGen 3.9 Pro"
                        fill
                        priority
                        className="object-cover rounded-[10px]"
                    />
                </div>

        <div className="mb-12 flex justify-center">
          <NGen3SystemCardLink />
        </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="mb-12">
                        <h2 className="text-xl text-gray-900 mb-4">Overview.</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            NGen 3.9 Pro is our newest professional-grade model, offering significant improvements in contextual
                            understanding and complex reasoning. It serves as a powerful yet highly efficient choice for
                            sophisticated enterprise applications.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-xl text-gray-900 mb-4">Snapshots.</h2>
                        <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
                            <div className="flex items-center justify-between gap-4 px-5 py-4">
                                <div>
                                    <p className="text-sm font-normal text-black">NGen 3.9 Pro Chat</p>
                                    <p className="mt-1 text-sm text-gray-500">Stable professional-grade snapshot.</p>
                                </div>
                                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Current</span>
                            </div>
                            <div className="flex items-center justify-between gap-4 px-5 py-4">
                                <div>
                                    <p className="text-sm font-normal text-black">NGen 3.9 Pro 2406 Preview</p>
                                    <p className="mt-1 text-sm text-gray-500">Preview snapshot for newer Pro behavior.</p>
                                </div>
                                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-black">Snapshot</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16 mb-12">
                        <BenchmarkNGen3Reasoning />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <BenchmarkAdvancedCoding />
                    </div>

                    <div className="mb-12">
                        <BenchmarkTable title="Performance Benchmarks" rows={textBenchmarkRows} />
                    </div>

                    <div className="mb-12">
                        <h2 className="text-xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-2 gap-8 text-sm text-gray-700">
                            {contextSpecs.map((spec, i) => (
                                <div key={i}>
                                    <p className="font-medium text-black">{spec.label}</p>
                                    <p>{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                            <li>Advanced contextual processing capabilities</li>
                            <li>Superior logical reasoning and problem solving</li>
                            <li>Optimized for complex enterprise workflows</li>
                            <li>Enhanced instruction following and alignment</li>
                        </ul>
                    </div>


                    <div className="mb-12">
                        <h2 className="text-xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            ₹0.33 input / ₹0.50 output per 1K tokens
                        </p>
                    </div>

                    <div className="flex justify-center" style={{ marginBottom: '77px' }}>
                        <Link
                            href="https://platform.tnsaai.com"
                            className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Try on API Platform →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
