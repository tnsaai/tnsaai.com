'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BenchmarkTable } from '@/components/ui/BenchmarkTable'
import { Download } from 'lucide-react'

export default function NGen4ProPage() {
    const textBenchmarkRows = [
        { category: 'Reasoning', benchmark: 'GPQA Diamond', value: 90.1, competitorValue: 87.3 },
        { category: 'Math', benchmark: 'AIME 2025', value: 100.0, competitorValue: 94.6 },
        { category: 'Math', benchmark: 'GSM8K', value: 99.2, competitorValue: 98.0 },
        { category: 'Coding', benchmark: 'HumanEval+', value: 95.1, competitorValue: 92.0 },
        { category: 'Coding', benchmark: 'SWE-bench Verified', value: 72.1, competitorValue: 74.9 },
        { category: 'Knowledge', benchmark: 'MMMLU', value: 93.2, competitorValue: 91.3 },
    ]

    const visionBenchmarkRows = [
        { category: 'Visual', benchmark: 'MMMU-Pro', value: 79.3, competitorValue: 86.0 },
        { category: 'Document', benchmark: 'DocVQA', value: 96.5, competitorValue: 95.0 },
        { category: 'Document', benchmark: 'OmniDocBench v1.5', value: 93.9, competitorValue: 94.0 },
        { category: 'Video', benchmark: 'Video-MME', value: 91.0, competitorValue: 92.0 },
        { category: 'Spatial', benchmark: 'ERQA', value: 68.5, competitorValue: 74.0 },
    ]

    const agenticBenchmarkRows = [
        { category: 'Agentic', benchmark: 'BFCL V4', value: 69.9, competitorValue: 80.0 },
        { category: 'Agentic', benchmark: 'BrowseComp', value: 64.8, competitorValue: 72.0 },
        { category: 'Agentic', benchmark: 'Terminal-Bench 2', value: 42.3, competitorValue: 60.0 },
        { category: 'Reasoning', benchmark: 'LiveBench', value: 88.5, competitorValue: 91.0 },
        { category: 'General', benchmark: 'GAIA', value: 60.5, competitorValue: 55.0 },
    ]

    const BenchmarkImage = ({ src, alt, title }: { src: string; alt: string; title?: string }) => (
        <div className="group relative w-full mb-24">
            {title && <h3 className="text-2xl text-gray-800 mb-10 font-light text-center">{title}</h3>}
            <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:aspect-[24/10] cursor-default">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority={src.includes('expanded')}
                />

                {/* TNSA Logo Overlay - Minimalist corner placement */}
                <div className="absolute top-8 left-8 w-16 h-8 opacity-20 pointer-events-none transition-opacity group-hover:opacity-40">
                    <Image src="/TNSA.svg" alt="TNSA Logo" fill className="object-contain" />
                </div>

                {/* Top Right Download Button */}
                <a
                    href={src}
                    download={src.split('/').pop()}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100/50 rounded-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title="Download Technical Asset"
                >
                    <Download className="w-5 h-5" />
                </a>
            </div>
        </div>
    )

    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                {/* Date, Title & Authors */}
                <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Model • 26 February, 2026</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>NGen 4 Pro</h1>

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

                {/* Hero Banner */}
                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/500]">
                    <Image
                        src="/ngen4-pro.png"
                        alt="NGen 4 Pro Banner"
                        fill
                        priority
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white pb-32">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-24">
                        <p className="text-lg text-gray-700 leading-relaxed font-light">
                            NGen 4 Pro is our flagship frontier model, representing a significant leap forward in super-intelligence. By integrating breakthroughs in early-fusion multimodal learning, Mixture-of-Experts (MoE) efficiency, and massive-scale reinforcement learning, NGen 4 Pro empowers developers and enterprises with unprecedented reasoning, coding, and creative capabilities.
                        </p>
                    </div>

                    <div className="mb-32">
                        <h2 className="text-2xl text-gray-900 mb-10 font-light">NGen 4 Highlights.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            <div>
                                <h3 className="text-lg font-medium text-black mb-3">Unified Vision-Language Foundation</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Early fusion training on multimodal tokens achieves cross-generational parity, outperforming dedicated vision models across reasoning, agents, and complex visual understanding.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-3">Efficient Hybrid Architecture</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Gated Delta Networks combined with sparse Mixture-of-Experts (MoE) deliver high-throughput inference with minimal latency and reduced cost overhead.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-3">Scalable RL Generalization</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Reinforcement learning scaled across massive synthetic environments for robust real-world adaptability and complex multi-step reasoning.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-black mb-3">Global Linguistic Coverage</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">Expanded support for over 200 languages and dialects, enabling inclusive deployment with nuanced cultural and regional understanding.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wide Benchmarks Section */}
                <div className="mx-auto px-6">
                    <div className="mb-48 flex flex-col items-center">
                        <h2 className="text-5xl text-gray-900 mb-24 text-center font-light tracking-tighter">Performance Benchmarks.</h2>

                        {/* Ultra Wide General Capabilities */}
                        <div className="w-full max-w-[1440px] mb-48">
                            <BenchmarkImage
                                src="/ngen4_benchmarks_expanded_pastel.png"
                                alt="General Capabilities"
                                title="NGen 4 Pro: Frontier Reasoning & Knowledge"
                            />
                        </div>

                        <div className="w-full max-w-[1100px] text-center mb-32">
                            <h3 className="text-3xl text-gray-800 mb-4 font-light tracking-tight">Multimodal Excellence</h3>
                            <p className="text-gray-500 max-w-2xl mx-auto">Evaluating the unified vision-language foundation across spatial, temporal, and logic-intensive visual tasks.</p>
                        </div>

                        <div className="w-full max-w-[1100px] space-y-48">
                            <BenchmarkImage src="/ngen4_pro_pastel_agent_tools.png" alt="Agent & Tools" />
                            <BenchmarkImage src="/ngen4_pro_pastel_general_vqa.png" alt="General VQA" />
                            <BenchmarkImage src="/ngen4_pro_pastel_ocr_document.png" alt="OCR & Document" />
                        </div>

                        {/* Ultra Wide Spatial Intelligence */}
                        <div className="w-full max-w-[1440px] my-48">
                            <BenchmarkImage
                                src="/ngen4_pro_pastel_spatial_intelligence.png"
                                alt="Spatial Intelligence"
                                title="Depth & Spatial Intelligence"
                            />
                        </div>

                        <div className="w-full max-w-[1100px] space-y-48">
                            <BenchmarkImage src="/ngen4_pro_pastel_stem_puzzle.png" alt="STEM & Puzzle" />
                            <BenchmarkImage src="/ngen4_pro_pastel_video_understanding.png" alt="Temporal & Video Understanding" />
                        </div>

                        <div className="mt-56 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <BenchmarkTable title="Reasoning & Knowledge" rows={textBenchmarkRows} />
                            <BenchmarkTable title="Vision & Multimodal" rows={visionBenchmarkRows} />
                        </div>
                        <div className="mt-20 w-full max-w-[1100px] mx-auto">
                            <BenchmarkTable title="Agentic & General Agency" rows={agenticBenchmarkRows} />
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl px-6">
                    {/* Specs Section */}
                    <div className="mb-24 pt-24 border-t border-gray-100">
                        <h2 className="text-2xl text-gray-900 mb-4">Context & Specs.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-700">
                            <div>
                                <p className="font-medium text-black">Context Length</p>
                                <p>200,000 Tokens</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Architecture</p>
                                <p>Massive-scale Transformer</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Key Capabilities.</h2>
                        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2">
                            <li>Advanced instruction following and nuanced dialogue</li>
                            <li>High-fidelity content generation and creative writing</li>
                            <li>Superior performance in visual and video understanding</li>
                            <li>Robust tool-use and agentic coordination capabilities</li>
                            <li>200K token context window for large document processing</li>
                        </ul>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl text-gray-900 mb-4">Pricing.</h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                            $5.00 per 1M tokens (Input) / $15.00 per 1M tokens (Output)
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
