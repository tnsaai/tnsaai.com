'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function NGen4K21TNewsPost() {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500">February 23, 2026</p>
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
                        TNSA is Open-Sourcing NGen-4-K2-1T-Thinking: A 1 Trillion Parameter Indic-First LLM
                    </h1>
                </div>

                <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
                    <Image
                        src="/TV - 4.svg"
                        alt="NGen-4-K2-1T-Thinking"
                        fill
                        priority
                        className="object-cover rounded-[40px]"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-7">
                            <div className="mb-16">
                                <h2 className="text-2xl text-gray-900 mb-4">Unprecedented Scale, Open for All</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    TNSA is open-sourcing a 1 Trillion parameter LLM &mdash; an Indic-first model at unprecedented scale, released under the Apache 2.0 License. NGen-4-K2-1T-Thinking represents a monumental leap in making advanced AI accessible to the world. With 1 trillion parameters, it is among the largest open-source language models ever released, and the first of its kind built with Indian languages as a core design priority.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl text-gray-900 mb-4">Indic-First by Design 🇮🇳</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Unlike models that treat Indian languages as an afterthought, NGen-4-K2-1T-Thinking is designed from the ground up to push the boundaries of multilingual intelligence, reasoning, and accessibility across Indian languages. It supports Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Urdu, and many more &mdash; ensuring that over a billion people can access state-of-the-art AI in their native tongue.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl text-gray-900 mb-4">Advanced Reasoning with Thinking Capabilities</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    The &ldquo;Thinking&rdquo; in the model&apos;s name reflects its architecture: NGen-4-K2-1T-Thinking incorporates chain-of-thought reasoning natively, allowing it to break down complex problems, reason step-by-step, and arrive at more accurate conclusions. This makes it exceptionally powerful for tasks ranging from mathematical problem-solving and scientific reasoning to code generation and creative writing &mdash; all in multiple languages.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl text-gray-900 mb-4">Apache 2.0: Truly Open</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    By releasing under the Apache 2.0 License, TNSA is ensuring that NGen-4-K2-1T-Thinking can be used, modified, and distributed freely &mdash; for both commercial and non-commercial purposes. We believe that the most transformative AI should be accessible to everyone, and this release reflects our commitment to democratizing intelligence at scale. Researchers, developers, and organizations worldwide can build upon this model to create solutions tailored to their unique needs.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl text-gray-900 mb-4">What&apos;s Next</h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    More details on model weights, benchmarks, training methodology, and fine-tuning guides will be released soon. We are preparing comprehensive documentation and evaluation results across multilingual benchmarks, reasoning tasks, and real-world applications. Stay tuned for the full release &mdash; this is just the beginning of making world-class AI truly accessible to all of India and beyond.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-40 lg:pl-12 border-l border-gray-100 h-fit">
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">From the Community</h3>
                                    <div className="rounded-2xl overflow-hidden bg-gray-50 p-1">
                                        <blockquote className="twitter-tweet">
                                            <p lang="en" dir="ltr">
                                                Biggest achievement than <a href="https://twitter.com/SarvamAI?ref_src=twsrc%5Etfw">@SarvamAI</a> in India, congrats <a href="https://twitter.com/Thishyaketh?ref_src=twsrc%5Etfw">@Thishyaketh</a> and <a href="https://twitter.com/tnsaai?ref_src=twsrc%5Etfw">@tnsaai</a> team <a href="https://t.co/1QlHHf4VJS">https://t.co/1QlHHf4VJS</a>
                                            </p>
                                            &mdash; Arun Teja (@arunteja_s) <a href="https://twitter.com/arunteja_s/status/2025870743133929556?ref_src=twsrc%5Etfw">February 23, 2026</a>
                                        </blockquote>
                                        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
                                    </div>
                                </div>
                            </div>
                        </div>
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
