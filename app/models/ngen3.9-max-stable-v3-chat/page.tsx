'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BenchmarkNGen3Reasoning } from '@/components/ui/BenchmarkNGen3'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding } from '@/components/ui/BenchmarkAdvanced'

export default function NGen39MaxStableV3ChatPage() {
    const textBenchmarkRows = [
        { category: 'Knowledge', benchmark: 'MMLU-Pro', value: 81.8, competitorValue: 81.2 },
        { category: 'Knowledge', benchmark: 'MMLU-Redux', value: 93.1, competitorValue: '—' },
        { category: 'Reasoning', benchmark: 'GPQA', value: 73.8, competitorValue: 68.4 },
        { category: 'Reasoning', benchmark: 'AIME 25', value: 88.3, competitorValue: 70.9 },
        { category: 'Coding', benchmark: 'LiveCodeBench', value: 61.2, competitorValue: 57.4 },
        { category: 'Alignment', benchmark: 'Arena-Hard v2', value: 40.9, competitorValue: 36.3 },
    ]

    const visionBenchmarkRows = [
        { category: 'STEM', benchmark: 'MMMU (Val)', value: 75.6, competitorValue: 75.8 },
        { category: 'Math', benchmark: 'MathVista', value: 83.2, competitorValue: 81.4 },
        { category: 'OCR', benchmark: 'DocVQA', value: 95.6, competitorValue: 95.3 },
        { category: 'Video', benchmark: 'MVBench', value: 74.7, competitorValue: 69.0 },
    ]

    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Dec 2025</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
                        NGen 3.9 Max
                    </h1>
                </div>

                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/and-machines-FvjBNfAdTYE-unsplash.jpg"
                        alt="NGen 3.9 Max"
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
                            NGen 3.9 Max (Stable V3) is our flagship production model for enterprise conversational AI.
                            It brings the highest level of performance, reliability, and capability to production workloads,
                            excelling in complex reasoning, coding, and knowledge-intensive tasks.
                        </p>
                    </div>

                    <div className="space-y-24 mb-24">
                        <BenchmarkNGen3Reasoning />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <BenchmarkAdvancedCoding />
                    </div>

                    <div className="mb-16">
                        <BenchmarkTable title="The Text, Reasoning & Coding Benchmarks" rows={textBenchmarkRows} />
                    </div>

                    <div className="mb-24">
                        <BenchmarkTable title="The Vision & Multimodal Benchmarks" rows={visionBenchmarkRows} />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-2 gap-8 text-base text-gray-700">
                            <div>
                                <p className="font-medium text-black">Context Length</p>
                                <p>262,144 Tokens</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Model Priority</p>
                                <p>Stable Production Flagship</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                            <li>Maximum production stability and reliability</li>
                            <li>SOTA performance in reasoning and knowledge</li>
                            <li>Advanced multimodal understanding and vision</li>
                            <li>Enterprise-grade safety and alignment features</li>
                        </ul>
                    </div>


                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            ₹0.83 input / ₹1.25 output per 1K tokens
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
