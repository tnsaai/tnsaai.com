'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Dec 2025</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
                        NGen 3.9 Pro
                    </h1>
                </div>

                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/blur-1721080_1280.jpg"
                        alt="NGen 3.9 Pro"
                        fill
                        priority
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            NGen 3.9 Pro is our newest professional-grade model, offering significant improvements in contextual
                            understanding and complex reasoning. It serves as a powerful yet highly efficient choice for
                            sophisticated enterprise applications.
                        </p>
                    </div>

                    <div className="space-y-24 mb-24">
                        <BenchmarkNGen3Reasoning />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <BenchmarkAdvancedCoding />
                    </div>

                    <div className="mb-24">
                        <BenchmarkTable title="Performance Benchmarks" rows={textBenchmarkRows} />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-2 gap-8 text-base text-gray-700">
                            {contextSpecs.map((spec, i) => (
                                <div key={i}>
                                    <p className="font-medium text-black">{spec.label}</p>
                                    <p>{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                            <li>Advanced contextual processing capabilities</li>
                            <li>Superior logical reasoning and problem solving</li>
                            <li>Optimized for complex enterprise workflows</li>
                            <li>Enhanced instruction following and alignment</li>
                        </ul>
                    </div>


                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
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
