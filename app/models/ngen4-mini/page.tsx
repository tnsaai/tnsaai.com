'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BenchmarkNGen4Reasoning, BenchmarkNGen4Coding } from '@/components/ui/BenchmarkNGen4'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding, BenchmarkVisionMultimodal } from '@/components/ui/BenchmarkAdvanced'
import { NGen4SystemCard } from '@/components/ui/NGen4SystemCard'

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
                {/* Date, Title & Authors */}
                <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Model • 29 November, 2025</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>NGen 4 Mini</h1>

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

                {/* Image */}
                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="/ngen4-mini.png"
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
                        <p className="text-base text-gray-700 leading-relaxed">
                            NGen 4 Mini represents a major step forward in reasoning and conversational capability. Built with an advanced thinking-mode architecture, it deliverers exceptional performance in dialogue, creative writing, and general language understanding. By integrating breakthroughs in early-fusion multimodal learning and efficient Mixture-of-Experts (MoE), NGen 4 Mini provides frontier intelligence at massive scale.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-6">NGen 4 Mini Highlights.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-black mb-2">Unified Vision-Language Foundation</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Early fusion training on multimodal tokens enables high-fidelity visual understanding and reasoning across diverse modalities.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-2">Efficient Hybrid Architecture</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Leverages sparse Mixture-of-Experts (MoE) to deliver exceptional throughput and minimal latency for high-traffic applications.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-2">Thinking Mode Enabled</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Designed for deep reasoning, the model operates in a thinking mode by default to solve complex logical and mathematical problems.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-2">Global Accessibility</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Optimized for over 200 languages, providing nuanced cultural understanding and world-class linguistic performance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24 mb-24">
                        <BenchmarkNGen4Reasoning />
                        <BenchmarkNGen4Coding />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <BenchmarkAdvancedCoding />
                        <BenchmarkVisionMultimodal />
                    </div>

                    <div className="mb-16">
                        <BenchmarkTable title="Core Performance Benchmarks" rows={textBenchmarkRows} />
                    </div>

                    <div className="mb-24">
                        <BenchmarkTable title="Alignment & Reasoning Benchmarks" rows={comparativeRows} />
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

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                            <li>Transformer architecture optimized for reasoning and conversational AI</li>
                            <li>128K token context window for extended dialogue and content generation</li>
                            <li>10X scale of TNSA&apos;s biggest open-weight model NGen3 10B</li>
                            <li>Exceptional performance in problem solving, natural dialogue, and creative writing</li>
                        </ul>
                    </div>


                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            $2.00 per 1M tokens
                        </p>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Serving & Best Practices.</h2>
                        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                            <p>
                                NGen 4 Mini operates in thinking mode by default, generating thinking content signifyed by <code className="bg-gray-100 px-1 rounded">&lt;think&gt;</code> tags. For production workloads, we recommend dedicated serving engines like SGLang, KTransformers, or vLLM to ensure optimal performance.
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 italic text-sm">
                                <p className="font-medium text-black not-italic mb-3">Recommended Sampling Parameters:</p>
                                <ul className="space-y-2">
                                    <li><span className="font-medium">Thinking Mode (General):</span> temperature=1.0, top_p=0.95, presence_penalty=1.5</li>
                                    <li><span className="font-medium">Thinking Mode (Coding):</span> temperature=0.6, top_p=0.95, presence_penalty=0.0</li>
                                    <li><span className="font-medium">Instruct (Non-Thinking) Mode:</span> temperature=0.7, top_p=0.8, presence_penalty=1.5</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-black mb-2">Adequate Output Length</h3>
                                <p>We recommend using an output length of 32,768 tokens for most queries. For competitions or high-complexity problems, consider setting the max output length to 81,920 tokens to allow sufficient thinking space.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Research.</h2>
                        <div className="grid grid-cols-1 gap-6 text-base text-gray-700">
                            <div>
                                <p className="font-medium text-black">AI Research</p>
                                <p>Thishyaketh<sup>1</sup>, Rishi<sup>1</sup></p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Safety & Alignment</p>
                                <p>Aryavardhan<sup>2</sup>, Devansh<sup>2</sup></p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Indian Applied Intelligence</p>
                                <p>Amala<sup>3</sup>, Neelansh<sup>3</sup></p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Interpretability</p>
                                <p>Kritarth<sup>4</sup></p>
                            </div>
                            <div className="text-sm text-gray-500 mt-4">
                                <p><sup>1</sup> AI Research</p>
                                <p><sup>2</sup> Safety & Alignment</p>
                                <p><sup>3</sup> Indian Applied Intelligence</p>
                                <p><sup>4</sup> Interpretability</p>
                            </div>
                        </div>
                    </div>

                    <NGen4SystemCard />

                    <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '77px' }}>
                        <Link href="https://platform.tnsaai.com" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            Try on API Platform →
                        </Link>
                        <Link href="/NGen-4-System-Card.pdf" target="_blank" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                            Read Model Card
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
