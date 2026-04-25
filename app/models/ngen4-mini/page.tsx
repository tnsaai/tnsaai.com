'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ModelMetaBadge } from '@/components/ui/ModelMetaBadge'
import { NGen4ModelEvaluations } from '@/components/ui/NGen4ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

export default function NGen4MiniPage() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '150px' }}>
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <ModelMetaBadge label={'Model \u2022 29 November, 2025'} />
                    <h1 className="text-3xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>
                        NGen 4 Mini
                    </h1>
                </div>

                <div className="relative mx-auto mb-12 aspect-[1028/560] w-full max-w-[860px]">
                    <Image
                        src="/model-images/ngen4-mini.png"
                        alt="NGen 4 Mini"
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
                        <p className="text-sm leading-relaxed text-gray-700">
                            NGen 4 Mini represents a major step forward in reasoning and conversational capability. Built with an advanced thinking-mode architecture, it delivers exceptional performance in dialogue, creative writing, and general language understanding. By integrating breakthroughs in early-fusion multimodal learning and efficient Mixture-of-Experts (MoE), NGen 4 Mini provides frontier intelligence at massive scale.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="mb-6 text-xl text-gray-900">NGen 4 Mini Highlights.</h2>
                        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                            <div>
                                <h3 className="mb-2 text-base font-medium text-black">Unified Vision-Language Foundation</h3>
                                <p className="text-sm leading-relaxed text-gray-700">Early fusion training on multimodal tokens enables high-fidelity visual understanding and reasoning across diverse modalities.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-medium text-black">Efficient Hybrid Architecture</h3>
                                <p className="text-sm leading-relaxed text-gray-700">Leverages sparse Mixture-of-Experts (MoE) to deliver exceptional throughput and minimal latency for high-traffic applications.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-medium text-black">Thinking Mode Enabled</h3>
                                <p className="text-sm leading-relaxed text-gray-700">Designed for deep reasoning, the model operates in a thinking mode by default to solve complex logical and mathematical problems.</p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-medium text-black">Global Accessibility</h3>
                                <p className="text-sm leading-relaxed text-gray-700">Optimized for over 200 languages, providing nuanced cultural understanding and world-class linguistic performance.</p>
                            </div>
                        </div>
                    </div>

                    <NGen4ModelEvaluations model="mini" />

                    <div className="mb-12">
                        <h2 className="mb-4 text-xl text-gray-900">Context & Specs.</h2>
                        <div className="grid grid-cols-1 gap-8 text-sm text-gray-700">
                            <div>
                                <p className="font-medium text-black">Context Length</p>
                                <p>128,000 Tokens</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="mb-4 text-xl text-gray-900">Key Capabilities.</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-gray-700">
                            <li>Transformer architecture optimized for reasoning and conversational AI</li>
                            <li>128K token context window for extended dialogue and content generation</li>
                            <li>10X scale of TNSA&apos;s biggest open-weight model NGen3 10B</li>
                            <li>Exceptional performance in problem solving, natural dialogue, and creative writing</li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="mb-4 text-xl text-gray-900">Pricing.</h2>
                        <p className="text-sm leading-relaxed text-gray-700">$2.00 per 1M tokens</p>
                    </div>

                    <div className="mb-12">
                        <h2 className="mb-4 text-xl text-gray-900">Serving & Best Practices.</h2>
                        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
                            <p>
                                NGen 4 Mini operates in thinking mode by default, generating thinking content signified by <code className="rounded bg-gray-100 px-1">&lt;think&gt;</code> tags. For production workloads, we recommend dedicated serving engines like SGLang, KTransformers, or vLLM to ensure optimal performance.
                            </p>

                            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm italic">
                                <p className="mb-3 font-medium text-black not-italic">Recommended Sampling Parameters:</p>
                                <ul className="space-y-2">
                                    <li><span className="font-medium">Thinking Mode (General):</span> temperature=1.0, top_p=0.95, presence_penalty=1.5</li>
                                    <li><span className="font-medium">Thinking Mode (Coding):</span> temperature=0.6, top_p=0.95, presence_penalty=0.0</li>
                                    <li><span className="font-medium">Instruct (Non-Thinking) Mode:</span> temperature=0.7, top_p=0.8, presence_penalty=1.5</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-base font-medium text-black">Adequate Output Length</h3>
                                <p>We recommend using an output length of 32,768 tokens for most queries. For competitions or high-complexity problems, consider setting the max output length to 81,920 tokens to allow sufficient thinking space.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '77px' }}>
                        <Link href="https://platform.tnsaai.com" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            {'Try on API Platform \u2192'}
                        </Link>
                        <Link href="/NGen-4-System-Card.pdf" target="_blank" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            Read Model Card
                        </Link>
                    </div>

                    <NGen4TeamSection />
                </div>
            </div>
        </div>
    )
}
