'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BenchmarkNGen4Reasoning, BenchmarkNGen4Coding } from '@/components/ui/BenchmarkNGen4'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding } from '@/components/ui/BenchmarkAdvanced'

export default function NGen4MiniPage() {
    const textBenchmarkRows = [
        { category: 'Knowledge', benchmark: 'MMLU', value: 93.0, competitorValue: 93.4 },
        { category: 'Reasoning', benchmark: 'GPQA Diamond', value: 82.0, competitorValue: 83.3 },
        { category: 'Math', benchmark: 'AIME 2025', value: 100.0, competitorValue: 98.4 },
        { category: 'Engineering', benchmark: 'SWE-Bench Verified', value: 63.7, competitorValue: 69.1 },
    ]

    const comparativeRows = [
        { category: 'Alignment', benchmark: 'IFEval', value: 95.2, competitorValue: 92.1 },
        { category: 'Reasoning', benchmark: 'LiveBench', value: 84.5, competitorValue: 74.3 },
    ]

    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                {/* Date and Title */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">29 November, 2025</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>NGen 4 Mini</h1>
                </div>

                {/* Image */}
                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="https://raw.githubusercontent.com/tnsaai/images-urls/b541dce9d4e61765fc0e23374f20194bb5b69b33/ngen4-mini.svg"
                        alt="NGen 4 Mini"
                        fill
                        priority
                        unoptimized={true}
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            {/* Paper Content */}
            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            NGen 4 Mini represents a massive leap in model scale and conversational capability. Built as a non-reasoning large language model, it&apos;s designed specifically for natural, engaging conversations and content generation at unprecedented scale. At 10X the size of TNSA&apos;s biggest open-weight model NGen3 10B, NGen 4 Mini delivers exceptional performance in dialogue, creative writing, and general language understanding with massive-scale AI capabilities.
                        </p>
                    </div>

                    <div className="space-y-24 mb-24">
                        <BenchmarkNGen4Reasoning />
                        <BenchmarkNGen4Coding />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <BenchmarkAdvancedCoding />
                    </div>

                    <div className="mb-16">
                        <BenchmarkTable title="Core Performance Benchmarks" rows={textBenchmarkRows} />
                    </div>

                    <div className="mb-24">
                        <BenchmarkTable title="Alignment & Reasoning Benchmarks" rows={comparativeRows} />
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-2 gap-8 text-base text-gray-700">
                            <div>
                                <p className="font-medium text-black">Context Length</p>
                                <p>128,000 Tokens</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Model Size</p>
                                <p>100B+ Parameters</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                            <li>100B+ parameter transformer architecture optimized for conversational AI</li>
                            <li>32K token context window for extended dialogue and content generation</li>
                            <li>10X scale of TNSA&apos;s biggest open-weight model NGen3 10B</li>
                            <li>Exceptional performance in natural dialogue and creative writing</li>
                        </ul>
                    </div>


                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            $2.00 per 1K tokens
                        </p>
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
