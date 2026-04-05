import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ModelMetaBadge } from '@/components/ui/ModelMetaBadge'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'

type NGen4OWModelPageProps = {
    title: string
    imageSrc: string
    imageAlt: string
    huggingFaceUrl: string
    releaseNoteParagraphs: string[]
    finalDisclaimer: string
}

const sharedIntroParagraphs = [
    'The NGen 4 series is the official successor to the NGen 3 model family. While it follows the NGen 3.5 series chronologically (which notably succeeded NGen 3.9), NGen 4 is a fundamentally new generation rather than being built directly on top of its predecessors\' architecture.',
    'Purpose-built for advanced reasoning tasks and comprehensive Indic intelligence, the NGen 4 lineup introduces two distinct architectural variants: NGen4Dense and NGen4MoMinMoM, both utilized to train models of varying sizes.',
    'Unlike the previous NGen 3.9 and 3.5 models, the NGen 4 series features flexible operational states, offering both standard Non-Reasoning and dedicated Reasoning modes. The Reasoning mode allows the model to dynamically scale its compute across three distinct tiers: Low, Medium, and High.',
    'This system card will majorly focus on the Training, some Architectural Specifications, and the evaluations of NGen 4\'s Pro, Mini, and Lite variants.',
]

const modelProgressions = [
    ['-', 'NGen 4 Pro (Reasoning)'],
    ['-', 'NGen 4 Mini (Reasoning)'],
    ['NGen 3.9 Pro (Agent-1)', 'NGen 4 Lite (Reasoning)'],
    ['NGen 3.9 Lite', 'NGen 4 Blaze (Reasoning)'],
    ['NGen 3 7B', 'NGen 4 Flash (Non-Reasoning)'],
]

const sharedTrainingSections = [
    {
        title: '2.1 Training Data',
        paragraphs: [
            'The training corpus for the NGen 4 series consists of a carefully curated blend of real and synthetic data. The real-world data was primarily sourced and heavily filtered from large-scale, open-source datasets, specifically Hugging Face\'s FineWeb and AllenAI\'s OLMo 3 pre-training corpora.',
            'To specifically enhance the models\' Indic language proficiency and advanced reasoning skills, we augmented the training mix with approximately 112 billion synthetic tokens. This high-quality synthetic data was generated utilizing both the gpt-oss:120b and our proprietary ngen3.9-max:V3 models. For instruction tuning and reasoning alignment, we employed a hybrid approach of open-source collection and synthetic generation, emphasizing "real-world" and "agentic" applications. This dataset was iteratively refined based on actionable insights gathered from an early beta model, ngen4-atom-chat.',
        ],
    },
    {
        title: '2.2 Training Data Pre-Processing',
        paragraphs: [
            'Data filtering and preprocessing for the NGen training corpus included essential techniques such as strict deduplication, honoring robots.txt directives, and rigorous quality filtering. In line with TNSA\'s commitment to safe and responsible AI, all collected data underwent extensive cleaning. This pipeline involved comprehensive safety filtering to remove irrelevant, harmful, pornographic, violent, or CSAM-violative material.',
        ],
    },
    {
        title: '2.3 Framework',
        paragraphs: [
            'TNSA utilized the PyTorch framework as the primary foundation for development and training. To ensure maximum performance and explore specialized optimizations, our engineering team conducted extensive benchmarking using Google\'s JAX and our proprietary OpenArchX (OAX) framework.',
        ],
    },
    {
        title: '2.4 Training Methodologies',
        paragraphs: [
            'Training was divided into 4 standard phases:',
            '2.4.1 Phase 1: Pre-Training (Foundational Knowledge) - In this initial phase, the model builds its core linguistic and world-knowledge capabilities via subsets of FineWeb and OLMo 3, augmented by 100B+ synthetic tokens. This phase leveraged PyTorch alongside OpenArchX optimizations to scale the NGen4Dense and NGen4MoMinMoM architectures efficiently.',
            '2.4.2 Phase 2: Post-Training (Instruct & Agentic Tuning) - Moving beyond next-token prediction, this phase refines the model to follow complex user instructions and handle multi-turn conversations, utilizing a curated dataset focused on agentic applications.',
            '2.4.3 Phase 3: RLHF (Reinforcement Learning from Human Feedback) - To ensure safety, helpfulness, and objectivity, we applied extensive RLHF. This aligns outputs with TNSA\'s strict safety guidelines, penalizing toxicity and bias. During this phase, we also calibrated the dynamic tiers (Low, Medium, and High) of the new Reasoning Mode.',
            '2.4.4 Phase 4: Indic Alignment (Cultural & Regional Nuance) - Dedicated entirely to Indic intelligence, we fine-tuned the model to go beyond basic translation, deeply embedding cultural nuances, regional idioms, and localized context across diverse Indic languages.',
        ],
    },
    {
        title: '2.5 Teacher In-Loop RL Alignment',
        paragraphs: [
            'To align the NGen 4 series for advanced reasoning and Indic intelligence, we employed a sophisticated knowledge distillation and automated evaluation pipeline. We utilized our proprietary NGen-3.9-Max:V3, alongside Kimi-K2-1T-Thinking and gpt-oss:120b, acting as evaluative teachers.',
            'To prevent inheriting unconstrained or misaligned traits ("Shoggoth" behaviors), we utilized strictly safety-aligned variants of these teachers. They evaluated and steered NGen 4\'s outputs on a batch-by-batch basis, acting as a firewall against hallucinations.',
            'Known Trade-offs: This approach resulted in a slight loss of NGen\'s historically distinct conversational voice, as the model internalized the structural formatting of its teachers. However, TNSA actively prioritized reasoning fidelity, factual density, and safety over stylistic uniqueness.',
        ],
    },
    {
        title: '2.6 Transition to Structured Reasoning',
        paragraphs: [
            'A primary architectural shift in the NGen 4 series is the transition from paragraph-based Chain-of-Thought (CoT) to a rigorous, step-by-step reasoning framework. The model is trained to decompose complex problems into discrete, logical segments. By forcing the model to validate each logical step before proceeding, we drastically reduced "leaps of logic" and improved factual groundedness compared to previous generations.',
        ],
    },
]

const proBenchmarkBlocks = [
    {
        title: 'General Intelligence & Reasoning',
        content: [
            '**AIME 2025** | Mathematics (No Tools) | 100.0',
            '**GSM8K** | Math Reasoning | 99.2',
            '**DocVQA** | Visual Document Q&A | 96.5',
            '**IFBench / IFEval** | Instruction Following | 95.3',
            '**HumanEval+** | Coding Logic | 95.1',
            '**Big-Bench Hard (BBH)** | Complex Reasoning | 94.2',
            '**MMMLU** | Multilingual Knowledge | 93.2',
            '**HMMT Feb 2025** | Math Tournament | 92.5',
            '**GPQA Diamond** | Graduate-level Reasoning | 90.1',
            '**LiveBench** | Reasoning | 88.5',
            '**LongBench** | Long Context | 88.0',
            '**GAIA** | General AI Assistants | 60.5',
        ],
    },
    {
        title: 'STEM & Puzzle',
        content: [
            '**VlmsAreBlind** | 98.0',
            '**MathVista (mini)** | 91.0',
            '**DynaMath** | 89.6',
            '**MathVision** | 88.1',
            '**MMMU** | 86.2',
            '**MMMU-Pro** | 79.3',
            '**BabyVision** | 42.1',
            '**ZEROBench_sub** | 39.5',
            '**ZEROBench** | 7.0',
        ],
    },
    {
        title: 'General VQA',
        content: [
            '**MMBench EN** | 96.1',
            '**RealWorldQA** | 88.7',
            '**MMStar** | 86.5',
            '**HallusionBench** | 71.8',
            '**SimpleVQA** | 61.0',
        ],
    },
    {
        title: 'OCR & Document Understanding',
        content: [
            '**AI2D_TEST** | 97.2',
            '**OCRBench** | 95.4',
            '**OmniDocBench v1.5** | 93.9',
            '**CC-OCR** | 84.6',
            '**CharXiv (RQ)** | 81.4',
            '**MMLongBench-Doc** | 63.2',
        ],
    },
    {
        title: 'Agent & Tool Use',
        content: [
            '**V*** | 95.0',
            '**SLAKE** | 83.2',
            '**AndroidWorld** | 75.0',
            '**PMC-VQA** | 65.5',
            '**MedXpertQA-MM** | 64.2',
            '**OSWorld-Verified** | 57.0',
            '**ScreenSpot Pro** | 72.9',
            '**SWE-bench Verified** | 72.1',
            '**BFCL V4** | 69.9',
            '**BrowseComp** | 64.8',
            '**TIR-Bench** | 59.8',
            '**Terminal-Bench 2** | 42.3',
        ],
    },
    {
        title: 'Spatial Intelligence',
        content: [
            '**CountBench** | 99.0',
            '**RefCOCO (avg)** | 93.4',
            '**EmbSpatialBench** | 87.2',
            '**LingoQA** | 83.5',
            '**ERQA** | 68.5',
            '**RefSpatialBench** | 67.0',
            '**ODInW13** | 45.1',
            '**SUNRGBD** | 35.6',
            '**Nuscene** | 15.3',
            '**Hypersim** | 12.9',
        ],
    },
    {
        title: 'Video Understanding',
        content: [
            '**VideoMME (w/ sub)** | 91.0',
            '**MLVU** | 90.2',
            '**VideoMME (w/o sub)** | 86.3',
            '**VideoMMMU** | 84.6',
            '**MVBench** | 78.2',
            '**MMVU** | 75.8',
            '**LVBench** | 75.1',
        ],
    },
]

const miniCapabilityBullets = [
    '**HMMT 2025:** 76.7%',
    'Competitive performance against Qwen 3 and earlier GPT variants on advanced math and reasoning tasks.',
    '**Reasoning & Knowledge:** High zero-shot accuracy across MMLU, GPQA Diamond, Humanity\'s Last Exam, and AIME 2025.',
    '**Engineering (SWE-Bench):** Dedicated software engineering performance showcases top-tier accuracy.',
    '**Advanced Text & Reasoning:** Compares favorably against Qwen3, DeepSeek, and Llama 4 on MMLU-Pro, MMLU-Redux, and SuperGPQA.',
    '**Logic & Mathematical Reasoning:** Frontier performance on AIME 25, HMMT 25, and LiveBench.',
    '**Advanced Engineering & Coding:** Top-tier scoring on LiveCodeBench, CFEval, and OJBench.',
    '**Vision & Multimodal Intelligence:** Exceeds baseline performance compared to Gemini 2.5 Flash and GPT-5 Nano on MMMU (Val), MathVista, AI2D, and DocVQA.',
]

const liteBenchmarkLines = [
    '**OmniDocBench v1.5** | 91.0',
    '**Video-MME** | 88.1',
    '**GPQA Diamond** | 80.4',
    '**MMMLU** | 80.3',
    '**HMMT Feb 2025** | 78.0',
    '**MMMU-Pro** | 70.0',
    '**IFBench** | 62.5',
    '**ERQA** | 57.0',
]

const conclusionParagraphs = [
    'The NGen 4 series marks a pivotal moment in the evolution of artificial intelligence, successfully bridging the gap between raw linguistic fluency and rigorous logical deduction. By moving beyond the paragraph-style chain-of-thought of the NGen 3 generation and implementing a structured, step-by-step reasoning architecture, NGen 4 has redefined industry standards for factual accuracy and logic-based grounding.',
    'The dual-architectural approach - utilizing NGen4Dense and NGen4MoMinMoM - allows the series to scale its intelligence dynamically across the Lite, Mini, and Pro tiers. Validated by world-leading scores on benchmarks such as AIME 2025 (100.0%) and OmniDocBench (93.9%), NGen 4 stands as the premier foundation for multimodal reasoning and complex problem-solving in the 2026 landscape.',
    'Beyond its technical dominance, the series represents a deep commitment to cultural intelligence and safety alignment. Through its proprietary Indic Alignment phase and the implementation of teacher-steered safety protocols to mitigate "Shoggoth" behaviours, TNSA has produced a model that is both high-performing and uniquely responsible. While NGen 4 adopts some syntactical structures from its teacher models to ensure alignment, it retains an unparalleled depth of world knowledge and reasoning capability. Whether deployed for autonomous agentic tasks, advanced software engineering, or regional language comprehension, the NGen 4 series provides a secure, culturally aware, and remarkably intelligent framework for the global future of AI.',
]

function SectionTitle({ children }: { children: ReactNode }) {
    return <h2 className="mb-5 text-3xl font-medium text-black">{children}</h2>
}

function SubsectionTitle({ children }: { children: ReactNode }) {
    return <h3 className="mb-3 text-xl font-medium text-black">{children}</h3>
}

export function NGen4OWModelPage({
    title,
    imageSrc,
    imageAlt,
    huggingFaceUrl,
    releaseNoteParagraphs,
    finalDisclaimer,
}: NGen4OWModelPageProps) {
    return (
        <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <ModelMetaBadge label="Model / Open Weights" />
                    <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '24px' }}>
                        {title}
                    </h1>
                </div>

                <div className="relative mx-auto mb-10 aspect-[1028/560] w-full max-w-[1028px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        unoptimized={true}
                        className="rounded-[40px] object-cover"
                    />
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                            MIT
                        </span>
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                            transformers
                        </span>
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
                            gated access
                        </span>
                    </div>

                    <div className="mb-16 rounded-[32px] border border-gray-200 bg-white p-7">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                            Important Architectural & Release Note
                        </p>
                        <div className="space-y-4 text-sm leading-7 text-gray-700">
                            {releaseNoteParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mb-20 flex flex-wrap justify-center gap-4">
                        <Link href={huggingFaceUrl} target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            Hugging Face Repo
                        </Link>
                        <Link href="https://tnsaai.com/NGen-4-System-Card.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            NGen-4 System Card
                        </Link>
                    </div>

                    <div className="space-y-16">
                        <section>
                            <SectionTitle>1 Introduction</SectionTitle>
                            <div className="space-y-5 text-base leading-8 text-gray-700">
                                {sharedIntroParagraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="mt-8 overflow-x-auto">
                                <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="border-b border-gray-200 px-4 py-3 font-medium text-black">Previous Model Variants</th>
                                            <th className="border-b border-gray-200 px-4 py-3 font-medium text-black">Successors</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {modelProgressions.map(([previous, successor]) => (
                                            <tr key={`${previous}-${successor}`}>
                                                <td className="border-b border-gray-200 px-4 py-3">{previous}</td>
                                                <td className="border-b border-gray-200 px-4 py-3">{successor}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-3 text-sm italic text-gray-500">
                                Note: The predecessors are smaller in size than their successors.
                            </p>

                            <div className="mt-10 space-y-8">
                                <div>
                                    <SubsectionTitle>1.1 Model Data</SubsectionTitle>
                                    <div className="space-y-3 text-base leading-8 text-gray-700">
                                        <p><strong>Inputs:</strong> NGen 4 allows input of Text, Images, and Videos (Audio only with GensChat) under a massive Context window of 256K Tokens (i.e., 262,144 Tokens).</p>
                                        <p><strong>Output:</strong> Currently Text-only, but we are actively working on adding more output modalities. It can output up to 32K Tokens (including its chain-of-thought reasoning).</p>
                                    </div>
                                </div>

                                <div>
                                    <SubsectionTitle>1.2 Instruct Mode</SubsectionTitle>
                                    <div className="space-y-5 text-base leading-8 text-gray-700">
                                        <p>In early variants of the NGen 3 Models (90M and 140M), we included a special Instruct mode which allowed the model to process instruction-following and conversational tasks more effectively. Architecturally, under the NGen3ForCausalLMv1 framework, this was achieved by routing activations through an extra dense projection layer just before the final language modeling head. While this feature showed great promise in separating foundational knowledge from user alignment, it remained experimental and did not make it into the final NGen 3 production releases. However, the insights gained from these early checkpoints laid the essential groundwork for the NGen 4 series.</p>
                                        <p>It is important to note that while NGen 3 utilized this simple dense layer approach, the NGen 4 series completely departs from the v1 implementation, employing a newly engineered, distinct architectural variant to drive its production-ready Instruct and Reasoning modes.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <SectionTitle>2 Training Methods</SectionTitle>
                            <div className="space-y-10">
                                {sharedTrainingSections.map((section) => (
                                    <div key={section.title}>
                                        <SubsectionTitle>{section.title}</SubsectionTitle>
                                        <div className="space-y-5 text-base leading-8 text-gray-700">
                                            {section.paragraphs.map((paragraph) => (
                                                <p key={paragraph}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <SectionTitle>3 Benchmark Evaluations</SectionTitle>
                            <p className="mb-8 text-base leading-8 text-gray-700">
                                To ensure maximum transparency, TNSA conducted all performance evaluations using the exact benchmarking protocols established by the Qwen 3 team (identical prompt templates, scoring heuristics, and data contamination checks).
                            </p>

                            <div className="space-y-10">
                                <div>
                                    <SubsectionTitle>3.1 NGen 4 Pro Evaluation Results</SubsectionTitle>
                                    <p className="mb-6 text-base leading-8 text-gray-700">
                                        The following tables detail the frontier performance of the NGen 4 Pro model across varying domains.
                                    </p>
                                    <div className="space-y-8">
                                        {proBenchmarkBlocks.map((block) => (
                                            <div key={block.title} className="rounded-[28px] border border-gray-200 bg-gray-50 p-6">
                                                <h4 className="mb-4 text-lg font-medium text-black">{block.title}</h4>
                                                <div className="space-y-2 text-sm leading-7 text-gray-700">
                                                    {block.content.map((line) => (
                                                        <p key={line}>{line}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <SubsectionTitle>3.2 NGen 4 Mini Evaluation Results</SubsectionTitle>
                                    <div className="space-y-3 text-base leading-8 text-gray-700">
                                        {miniCapabilityBullets.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <SubsectionTitle>3.3 NGen 4 Lite Evaluation Results</SubsectionTitle>
                                    <p className="mb-5 text-base leading-8 text-gray-700">
                                        NGen 4 Lite is positioned as the smallest reasoning-capable tier in the NGen 4 family. The following data highlights the benchmark performance of NGen-4 Lite against industry peers (Early 2026).
                                    </p>
                                    <div className="rounded-[28px] border border-gray-200 bg-gray-50 p-6 text-sm leading-7 text-gray-700">
                                        {liteBenchmarkLines.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <SectionTitle>4 Conclusion</SectionTitle>
                            <div className="space-y-5 text-base leading-8 text-gray-700">
                                {conclusionParagraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        <section className="rounded-[32px] border border-gray-200 bg-gray-50 p-7">
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                                Final Disclaimer
                            </p>
                            <p className="text-base leading-8 text-gray-700">
                                {finalDisclaimer}
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-4">
                        <Link href={huggingFaceUrl} target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            Hugging Face Repo
                        </Link>
                        <Link href="https://tnsaai.com/NGen-4-System-Card.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                            NGen-4 System Card
                        </Link>
                    </div>

                    <div style={{ marginBottom: '77px' }}>
                        <NGen4TeamSection />
                    </div>
                </div>
            </div>
        </div>
    )
}
