'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FlightCard } from '@/components/ui/flight-card'

const papers = [
  {
    title: 'Tri-Flux Attention',
    date: 'Dec 20, 2025',
    description: 'Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces.',
    href: '/research/tri-flux-attention',
    backgroundImage: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg',
    category: 'Research Paper',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    date: 'May 25, 2025',
    description: 'A Paradigm Shift for Efficient Large Language Models and superintelligence.',
    href: '/research/adaptive-sparse-transformer-blocks',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg',
    category: 'Research Paper',
  },
  {
    title: 'Agentic Intelligence',
    date: 'Oct 26, 2025',
    description: 'Experimental analysis of agentic capabilities in our latest frontier model NGen3.9-Pro.',
    href: '/research/agentic-intelligence-ngen39-pro',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-3dmu0gu23uc-unsplash.jpg',
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
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-pixabay-355288.jpg',
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
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg',
    category: 'Intelligence',
  },
];

export default function ResearchPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-white pb-16 flex items-center justify-center" style={{ paddingTop: '222px' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-normal tracking-tight font-sans text-black sm:text-6xl lg:text-7xl">
            Research.
          </h1>
        </div>
      </div>

      {/* Papers List */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4 sm:text-4xl">Our Research.</h2>
            <p className="text-lg text-gray-900 sm:text-xl">
              Explore our latest research papers and publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr max-w-7xl mx-auto">
            {papers.map((paper, index) => {
              // Layout plan (11 papers, 3 cols, every row = 3):
              // Row 1: [0]=1  [1]=2         => 1+2=3
              // Row 2: [2]=1  [3]=1  [4]=1   => 1+1+1=3
              // Row 3: [5]=2  [6]=1          => 2+1=3
              // Row 4: [7]=1  [8]=1  [9]=1   => 1+1+1=3
              // Row 5: [10]=3                => 3=3

              let spanClass = "md:col-span-1";
              let layout: "vertical" | "horizontal" | "featured" = "vertical";

              if (index === 1) {
                spanClass = "md:col-span-2";
                layout = "horizontal";
              } else if (index === 5) {
                spanClass = "md:col-span-2";
                layout = "horizontal";
              } else if (index === 10) {
                spanClass = "md:col-span-3";
                layout = "featured";
              }

              return (
                <div key={paper.title} className={spanClass}>
                  <FlightCard
                    title={paper.title}
                    subtitle={paper.description}
                    category={paper.category}
                    date={paper.date}
                    imageUrl={paper.backgroundImage}
                    imageAlt={paper.title}
                    href={paper.href}
                    layout={layout}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
