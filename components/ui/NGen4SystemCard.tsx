import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { BenchmarkNGen4Reasoning, BenchmarkNGen4Coding } from '@/components/ui/BenchmarkNGen4';
import { BenchmarkAdvancedText, BenchmarkAdvancedLogic, BenchmarkAdvancedCoding, BenchmarkVisionMultimodal } from '@/components/ui/BenchmarkAdvanced';

const BenchmarkImage = ({ src, alt, title, caption }: { src: string; alt: string; title?: string, caption?: string }) => (
    <div className="group relative w-full mb-16">
        {title && <h3 className="text-2xl text-gray-800 mb-10 font-light text-center">{title}</h3>}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:aspect-[24/10] cursor-default bg-white items-center flex justify-center">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
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
        {caption && <p className="text-sm text-center text-gray-500 mt-6 italic">{caption}</p>}
    </div>
);

export function NGen4SystemCard() {
    return (
        <div className="mb-24 pt-24 border-t border-gray-100">
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-6 mb-8 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                    <span className="text-black font-semibold">TNSA Research</span>
                    <span>Publication</span>
                    <span>Safety</span>
                </div>
                
                <h2 className="text-5xl font-medium text-black tracking-tight mb-8">NGen 4 System Card</h2>
                
                <Link 
                    href="/NGen-4-System-Card.pdf" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#1a1a1a] border border-transparent rounded-full hover:bg-black transition-all"
                >
                    Read the System Card <span className="text-gray-400 font-sans opacity-70">↗</span>
                </Link>
            </div>

            <div className="space-y-12 text-base text-gray-700 leading-relaxed font-light">
                {/* 1 Introduction */}
                <section>
                    <h3 className="text-2xl text-gray-800 mb-4 font-normal">1 Introduction</h3>
                    <p className="mb-4">
                        The NGen 4 series is the official successor to the NGen 3 model family. While it follows the NGen
                        3.5 series chronologically (which notably succeeded NGen 3.9), NGen 4 is a fundamentally new
                        generation rather than being built directly on top of its predecessors’ architecture. Purpose-built
                        for advanced reasoning tasks and comprehensive Indic intelligence, the NGen 4 lineup introduces
                        two distinct architectural variants: NGen4Dense and NGen4MoMinMoM, both utilized to train
                        models of varying sizes. Unlike the previous NGen 3.9 and 3.5 models, the NGen 4 series features
                        flexible operational states, offering both standard Non-Reasoning and dedicated Reasoning modes.
                        The Reasoning mode allows the model to dynamically scale its compute across three distinct tiers:
                        Low, Medium, and High. The model progressions are detailed below:
                    </p>
                    <div className="overflow-x-auto mb-6">
                        <table className="min-w-full text-left bg-gray-50 border border-gray-200">
                            <thead className="border-b bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4 font-medium text-black">Previous Model Variants</th>
                                    <th className="py-2 px-4 font-medium text-black">Successors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="py-2 px-4">-</td><td className="py-2 px-4">NGen 4 Pro (Reasoning)</td></tr>
                                <tr className="border-b"><td className="py-2 px-4">-</td><td className="py-2 px-4">NGen 4 Mini (Reasoning)</td></tr>
                                <tr className="border-b"><td className="py-2 px-4">NGen 3.9 Pro (Agent-1)</td><td className="py-2 px-4">NGen 4 Lite (Reasoning)</td></tr>
                                <tr className="border-b"><td className="py-2 px-4">NGen 3.9 Lite</td><td className="py-2 px-4">NGen 4 Blaze (Reasoning)</td></tr>
                                <tr><td className="py-2 px-4">NGen 3 7B</td><td className="py-2 px-4">NGen 4 Flash (Non-Reasoning)</td></tr>
                            </tbody>
                        </table>
                        <p className="text-sm italic text-gray-500 mt-2">Note: The predecessors are smaller in size than their successors.</p>
                    </div>
                    <p className="mb-4">
                        This system card will majorly focus on the Training, some Architectural Specifications and
                        about the evaluations of NGen 4’s Pro and Mini variants.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-8 font-normal">1.1 Model Data</h4>
                    <p className="mb-4"><strong>Inputs:</strong> NGen 4 allows input of Text and Images, Videos, (Audio only with GensChat) under a Context window of 256K Tokens i.e. 262,144 Tokens.</p>
                    <p className="mb-4"><strong>Output:</strong> Is currently Text-only but we are working on adding more output modalities and Output up to 32K Tokens (including its chain-of-thoughts).</p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-8 font-normal">1.2 Instruct Mode</h4>
                    <p className="mb-4">
                        In early variants of the NGen 3 Models (90M and 140M), we included a special Instruct mode
                        which allowed the model to process instruction-following and conversational tasks more effectively.
                        Architecturally, under the NGen3ForCausalLMv1 framework, this was achieved by routing activations through an extra dense projection layer just before the final language modeling head. While
                        this feature showed great promise in separating foundational knowledge from user alignment, it remained experimental and did not make it into the final NGen 3 production releases. However, the
                        insights gained from these early checkpoints laid the essential groundwork for the NGen 4 series.
                    </p>
                    <p className="mb-4">
                        It is important to note that while NGen 3 utilized this simple dense layer approach, the NGen
                        4 series completely departs from the v1 implementation, employing a newly engineered, distinct
                        architectural variant to drive its production-ready Instruct and Reasoning modes.
                    </p>
                </section>

                {/* 2 Training Methods */}
                <section>
                    <h3 className="text-2xl text-gray-800 mb-4 font-normal">2 Training Methods</h3>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.1 Training Data</h4>
                    <p className="mb-4">
                        The training corpus for the NGen 4 series consists of a carefully curated blend of real and synthetic
                        data. The real-world data was primarily sourced and heavily filtered from large-scale, open-source
                        datasets, specifically Hugging Face’s FineWeb and AllenAI’s OLMo 3 pre-training corpora. To
                        specifically enhance the models’ Indic language proficiency and advanced reasoning skills, we augmented the training mix with approximately 112 billion synthetic tokens. This high-quality synthetic data was generated utilizing both the &quot;gpt-oss:120b&quot; and our proprietary &quot;ngen3.9-max:V3&quot;
                        models. For instruction tuning and reasoning alignment, we employed a hybrid approach of opensource collection and synthetic generation. We curated a diverse dataset of instruction and reasoning pairs, with a strong emphasis on &quot;real-world&quot; and &quot;agentic&quot; applications. Furthermore, we
                        iteratively refined this dataset based on actionable insights and feedback gathered from an early
                        beta model, &quot;ngen4-atom-chat&quot;. This refreshed, high-fidelity data pipeline was ultimately used to
                        train the final release variants of the NGen 4 series.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.2 Training Data Pre-Processing</h4>
                    <p className="mb-4">
                        Data filtering and preprocessing for the NGen training corpus included essential techniques such as
                        strict deduplication, honoring robots.txt directives, and rigorous quality filtering to mitigate risks
                        and improve the reliability of the training data. In line with TNSA’s commitment to developing
                        AI safely and responsibly, all collected data undergoes extensive cleaning to ensure its suitability
                        for model training. This pipeline involves comprehensive safety filtering to identify and remove
                        irrelevant or harmful text and multimodal content, ensuring the strict exclusion of material that is
                        pornographic, violent, or violative of child sexual abuse material (CSAM) laws.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.3 Framework</h4>
                    <p className="mb-4">
                        TNSA utilized the PyTorch framework as the primary foundation for the development and training of the NGen 4 series. To ensure the highest level of performance and to explore specialized
                        optimization techniques, our engineering team additionally conducted extensive experiments and
                        benchmarking using Google’s JAX and our OpenArchX (OAX) framework.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.4 Training Methodologies</h4>
                    <p className="mb-4">
                        We utilized standard Training Approaches and we divided the training into 4 phases which are
                        commonly used: Pre-Training, Post-Training (Instruct Tuning), RLHF, and Indic Alignment.
                    </p>

                    <h5 className="text-lg text-gray-800 mb-2 mt-4 font-medium">2.4.1 Phase 1: Pre-Training (Foundational Knowledge)</h5>
                    <p className="mb-4">
                        In this initial phase, the model builds its core linguistic and world-knowledge capabilities. The
                        models were exposed to our heavily curated, large-scale corpus, which includes filtered subsets
                        of Hugging Face’s FineWeb and AllenAI’s OLMo 3, augmented by over 100 billion high-quality
                        synthetic tokens generated via gpt-oss:120b and ngen3.9-max:V3. This phase leverages the PyTorch framework (alongside OpenArchX optimizations) to efficiently scale the NGen4Dense and
                        NGen4MoMinMoM architectures.
                    </p>

                    <h5 className="text-lg text-gray-800 mb-2 mt-4 font-medium">2.4.2 Phase 2: Post-Training (Instruct &amp; Agentic Tuning)</h5>
                    <p className="mb-4">
                        Moving beyond next-token prediction, this phase refines the model to accurately follow complex
                        user instructions and handle multi-turn conversations. We utilized a highly curated dataset focused
                        specifically on &quot;real-world&quot; and &quot;agentic&quot; applications. Furthermore, the data pipeline for this phase
                        was iteratively improved using actionable feedback gathered from our early beta model, ngen4-
                        atom-chat, ensuring the final Instruct mode was highly responsive and context-aware.
                    </p>

                    <h5 className="text-lg text-gray-800 mb-2 mt-4 font-medium">2.4.3 Phase 3: RLHF (Reinforcement Learning from Human Feedback)</h5>
                    <p className="mb-4">
                        To ensure the model remains safe, helpful, and objective, we applied extensive RLHF. This phase
                        aligns the model’s outputs with TNSA’s strict safety guidelines, actively penalizing toxic, biased, or
                        harmful outputs. It is also during this phase that we calibrated the dynamic tiers (Low, Medium,
                        and High) of the new Reasoning Mode, teaching the model when to allocate more compute to
                        complex logical tasks versus when to provide rapid, standard responses.
                    </p>

                    <h5 className="text-lg text-gray-800 mb-2 mt-4 font-medium">2.4.4 Phase 4: Indic Alignment (Cultural &amp; Regional Nuance)</h5>
                    <p className="mb-4">
                        While standard models often struggle with non-English contexts, this specialized final phase is
                        dedicated entirely to Indic intelligence. We fine-tuned the model to go beyond basic translation,
                        deeply embedding cultural nuances, regional idioms, and localized context. This ensures that NGen
                        4’s advanced reasoning capabilities are natively accessible and highly accurate across diverse Indic
                        languages.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.5 Teacher In-Loop RL Alignment</h4>
                    <p className="mb-4">
                        To align the NGen 4 series for advanced reasoning and Indic intelligence, we employed a sophisticated knowledge distillation and automated evaluation pipeline. We utilized our proprietary
                        NGen-3.9-Max:V3, alongside large-scale models like Kimi-K2-1T-Thinking and gpt-oss:120b, acting as evaluative teachers. To prevent the student models from inheriting unconstrained, unsafe,
                        or misaligned traits often colloquially referred to in AI as &quot;Shoggoth&quot; behaviors we strictly utilized
                        heavily tuned, safety-aligned variants of these teacher models. During the alignment phase, these
                        teachers evaluated and steered NGen 4’s outputs on a batch-by-batch basis, acting as a firewall
                        against corrupt or hallucinated knowledge. <strong>Known Trade-offs:</strong> This intensive teacher-steered approach introduced a deliberate architectural trade-off. The NGen 4 models internalized not just the
                        knowledge, but also the structural formatting and response styles of the teacher models, resulting
                        in a slight loss of NGen’s historically distinct conversational voice. However, TNSA actively prioritized reasoning fidelity, factual density, and safety over stylistic uniqueness, ensuring the model’s
                        core knowledge remains exceptionally robust.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">2.6 Transition to Structured Reasoning</h4>
                    <p className="mb-4">
                        A primary architectural shift in the NGen 4 series is the transition from paragraph-based Chainof-Thought (CoT) to a rigorous, step-by-step reasoning framework. While NGen 3.9 utilized a
                        prose-heavy reasoning style, NGen 4 is trained to decompose complex problems into discrete, logical segments. This granular approach significantly enhances the model’s overall intelligence and
                        problem-solving accuracy. More importantly, this structured methodology serves as a critical safeguard against hallucinations; by forcing the model to validate each logical step before proceeding, we
                        have drastically reduced &quot;leaps of logic&quot; and improved factual groundedness compared to previous
                        generations.
                    </p>
                </section>

                {/* 3 Benchmark Evaluations */}
                <section>
                    <h3 className="text-2xl text-gray-800 mb-8 font-normal">3 Benchmark Evaluations</h3>
                    <p className="mb-8">
                        To ensure maximum transparency and cross-industry comparability, TNSA has conducted all performance evaluations for the NGen 4 series using the exact benchmarking protocols established
                        by the Qwen 3 team. By adopting these standardized evaluation frameworks—including identical
                        prompt templates, scoring heuristics, and data contamination checks—we provide a verifiable and
                        objective baseline for NGen 4’s capabilities. This alignment allows users to directly compare NGen
                        4’s performance against contemporary state-of-the-art models with total confidence in the results.
                    </p>

                    <h4 className="text-xl text-gray-800 mb-6 mt-12 font-normal">3.1 NGen 4 Pro Evaluation Results</h4>
                    <ul className="list-disc list-inside space-y-2 mb-12">
                        <li><strong>Reasoning:</strong> GPQA Diamond 90.1, LiveBench 88.5</li>
                        <li><strong>Math:</strong> AIME 2025 100.0, GSM8K 99.2</li>
                        <li><strong>Coding:</strong> HumanEval+ 95.1, SWE-bench Verified 72.1</li>
                        <li><strong>Knowledge:</strong> MMMLU 93.2</li>
                        <li><strong>Visual &amp; Spatial:</strong> MMMU-Pro 79.3, ERQA 68.5</li>
                        <li><strong>Document:</strong> DocVQA 96.5, OmniDocBench v1.5 93.9</li>
                        <li><strong>Video:</strong> Video-MME 91.0</li>
                        <li><strong>Agentic &amp; General:</strong> BFCL V4 69.9, BrowseComp 64.8, Terminal-Bench 2 42.3, GAIA 60.5</li>
                    </ul>

                    <div className="space-y-12 my-16">
                        <BenchmarkImage src="/ngen4_benchmarks_expanded_pastel.png" alt="General Capabilities" caption="Figure 1: NGen 4 Pro: Frontier Reasoning, Knowledge Agentic." />
                        <BenchmarkImage src="/ngen4_pro_pastel_stem_puzzle.png" alt="STEM &amp; Puzzle" caption="Figure 2: NGen 4 Pro: STEM and general VQA results." />
                        <BenchmarkImage src="/ngen4_pro_pastel_general_vqa.png" alt="General VQA" />
                        <BenchmarkImage src="/ngen4_pro_pastel_ocr_document.png" alt="OCR &amp; Document" caption="Figure 3: NGen 4 Pro: OCR/document and agentic tool-use results." />
                        <BenchmarkImage src="/ngen4_pro_pastel_agent_tools.png" alt="Agent Tools" />
                        <BenchmarkImage src="/ngen4_pro_pastel_spatial_intelligence.png" alt="Spatial Intelligence" caption="Figure 4: NGen 4 Pro: General VQA and spatial intelligence results." />
                        <BenchmarkImage src="/ngen4_pro_pastel_video_understanding.png" alt="Video Understanding" />
                    </div>

                    <h4 className="text-xl text-gray-800 mb-6 mt-16 font-normal">3.2 NGen 4 Mini Evaluation Results</h4>
                    <p className="mb-6">
                        Selected reported points for NGen 4 Mini include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-12">
                        <li><strong>HMMT 2025:</strong> 76.7%</li>
                        <li>Competitive performance against Qwen 3 and earlier GPT variants on advanced math and reasoning tasks</li>
                    </ul>

                    <div className="space-y-12 my-16 overflow-hidden">
                        <div>
                            <BenchmarkNGen4Reasoning />
                            <p className="text-sm text-center text-gray-500 mt-4 italic">Figure 5: NGen 4 Mini: Reasoning, Knowledge, and Logic evaluations.</p>
                        </div>
                        <BenchmarkNGen4Coding />
                        <BenchmarkAdvancedText />
                        <BenchmarkAdvancedLogic />
                        <div>
                            <BenchmarkAdvancedCoding />
                            <BenchmarkVisionMultimodal />
                            <p className="text-sm text-center text-gray-500 mt-4 italic">Figure 6: NGen 4 Mini: Software Engineering and Vision capabilities.</p>
                        </div>
                    </div>

                    <h4 className="text-xl text-gray-800 mb-3 mt-16 font-normal">3.3 NGen 4 Lite Evaluation Results</h4>
                    <p className="mb-4">
                        NGen 4 Lite is positioned as the smallest reasoning-capable tier in the NGen 4 family. Detailed
                        benchmark tables for Lite are not included in this document version.
                    </p>
                    
                    <div className="space-y-12 my-16">
                        <BenchmarkImage src="/ngen4lite.png" alt="NGen 4 Lite Benchmarks" caption="Figure 7: NGen 4 Lite comparison against industry peers." />
                    </div>
                </section>

                {/* 4 Conclusion */}
                <section>
                    <h3 className="text-2xl text-gray-800 mb-4 font-normal">4 Conclusion</h3>
                    
                    <h4 className="text-xl text-gray-800 mb-3 mt-6 font-normal">4.1 Summary of NGen 4</h4>
                    <p className="mb-4">
                        The NGen 4 series marks a pivotal moment in the evolution of artificial intelligence, successfully bridging the gap between raw linguistic fluency and rigorous logical deduction. By moving
                        beyond the paragraph-style chain-of-thought of the NGen 3 generation and implementing a structured, step-by-step reasoning architecture, NGen 4 has redefined industry standards for factual
                        accuracy and logic-based grounding. The dual-architectural approach—utilizing NGen4Dense and
                        NGen4MoMinMoM—allows the series to scale its intelligence dynamically across the Lite, Mini,
                        and Pro tiers. Validated by world-leading scores on benchmarks such as AIME 2025 (100.0%) and
                        OmniDocBench (93.9%), NGen 4 stands as the premier foundation for multimodal reasoning and
                        complex problem-solving in the 2026 landscape.
                    </p>
                    <p className="mb-4">
                        Beyond its technical dominance, the series represents a deep commitment to cultural intelligence
                        and safety alignment. Through its proprietary Indic Alignment phase and the implementation of
                        teacher-steered safety protocols to mitigate &quot;Shoggoth&quot; behaviours, TNSA has produced a model
                        that is both high-performing and uniquely responsible. While NGen 4 adopts some syntactical
                        structures from its teacher models to ensure alignment, it retains an unparalleled depth of world
                        knowledge and reasoning capability. Whether deployed for autonomous agentic tasks, advanced
                        software engineering, or regional language comprehension, the NGen 4 series provides a secure,
                        culturally aware, and remarkably intelligent framework for the global future of AI.
                    </p>
                </section>
            </div>
        </div>
    );
}
