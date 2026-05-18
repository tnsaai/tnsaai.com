'use client'

import Link from 'next/link'
import Image from 'next/image'

const papers = [
  {
    title: 'Tri-Flux Attention',
    date: 'Dec 20, 2025',
    description: 'Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces.',
    href: '/research/tri-flux-attention',
    backgroundImage: '/tri-flux-attention.png',
    category: 'Research Paper',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    date: 'May 25, 2025',
    description: 'A Paradigm Shift for Efficient Large Language Models and superintelligence.',
    href: '/research/adaptive-sparse-transformer-blocks',
    backgroundImage: '/Adaptive Sparse Transformer Blocks.png',
    category: 'Research Paper',
  },
  {
    title: 'Agentic Intelligence',
    date: 'Oct 26, 2025',
    description: 'Experimental analysis of agentic capabilities in our latest frontier model NGen3.9-Pro.',
    href: '/research/agentic-intelligence-ngen39-pro',
    backgroundImage: '/Agentic Intelligence in Large Language Models.png',
    category: 'Research Paper',
  },
  {
    title: 'Quantum-Based Language Models Survey',
    date: 'Nov 6, 2025',
    description: 'A comprehensive survey of quantum computing principles applied to language models.',
    href: '/research/quantum-based-language-models-survey',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-ybSql-GGUOE-unsplash.jpg',
    category: 'Research Paper',
  },
  {
    title: 'Interpretable Attention Visualization',
    date: 'May 24, 2025',
    description: 'Transforming Raw Attention into Human Readable Explanations.',
    href: '/research/interpretable-attention-visualization-module',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/rini-nur-rohmah-ZkGf87NclJ0-unsplash.jpg',
    category: 'Research Paper',
  },
  {
    title: 'Advanced Algorithmic Paradigms for ASI',
    date: 'Jan 15, 2026',
    description: 'Exploring the architectural foundations required for Artificial Superintelligence.',
    href: '/research/advanced-algorithmic-paradigms-asi',
    backgroundImage: '/Advanced Algorithmic Paradigms for Artificial Superintelligence.png',
    category: 'Research Paper',
  },
  {
    title: 'Computational Hardware Foundations',
    date: 'Feb 1, 2026',
    description: 'Sustainable superintelligence through optimized hardware and data foundations.',
    href: '/research/computational-hardware-and-data-foundations-for-sustainable-superintelligence',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-steve-1509534.jpg',
    category: 'Infrastructure',
  },
  {
    title: 'Cross-Modal Contrastive Learning',
    date: 'July 10, 2025',
    description: 'Curriculum learning approaches for synchronizing multimodal latent spaces.',
    href: '/research/cross-modal-contrastive-curriculum-learning',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592788.jpg',
    category: 'Research Paper',
  },
  {
    title: 'Quantum Intelligence & Future AI',
    date: 'Dec 5, 2025',
    description: 'Charting the path toward future AI systems using quantum intelligence principles.',
    href: '/research/quantum-intelligence-and-future-ai-systems',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-falling4utah-1934846.jpg',
    category: 'Quantum AI',
  },
  {
    title: 'Quantum Language Models',
    date: 'Nov 12, 2025',
    description: 'Innovative architectures for next-generation quantum-enhanced language modeling.',
    href: '/research/quantum-language-models',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-ybSql-GGUOE-unsplash.jpg',
    category: 'Research Paper',
  },
  {
    title: 'LLMs can be Creative and Independent',
    date: 'Jan 5, 2026',
    description: 'Investigating independent creative styles and stylistic autonomy in large language models.',
    href: '/research/llms-can-be-creative-and-independent',
    backgroundImage: '/llms-can-be-creative-and-independent.png',
    category: 'Intelligence',
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

function ResearchCard({ paper, priority = false }: { paper: any; priority?: boolean }) {
  return (
    <Link href={paper.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={paper.backgroundImage}
          alt={paper.title}
          fill
          priority={priority}
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {paper.title}
      </h3>
      <Label>{paper.category}</Label>
      {paper.description ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{paper.description}</p>
      ) : null}
    </Link>
  )
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore Research</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Research Index
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper, index) => (
              <ResearchCard
                key={paper.title}
                paper={paper}
                priority={index < 3}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
