'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FlightCard } from '@/components/ui/flight-card'

const papers = [
  {
    title: 'Tri-Flux Attention',
    date: '20 Dec 2025',
    description: 'Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces.',
    href: '/research/tri-flux-attention',
    backgroundImage: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg',
  },
  {
    title: 'Quantum-Based Language Models',
    date: '6 Nov 2025',
    description: 'A comprehensive survey of quantum computing principles applied to language models.',
    href: '/research/quantum-based-language-models-survey',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-ybSql-GGUOE-unsplash.jpg',
  },
  {
    title: 'Agentic Intelligence in NGen3.9-Pro',
    date: '26 Oct 2025',
    description: 'Experimental analysis of agentic capabilities in NGen3.9-Pro-Agentic model.',
    href: '/research/agentic-intelligence-ngen39-pro',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-3dmu0gu23uc-unsplash.jpg',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    date: '25 May 2025',
    description: 'A Paradigm Shift for Efficient Large Language Models.',
    href: '/research/adaptive-sparse-transformer-blocks',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg',
  },
  {
    title: 'Advanced Algorithmic Paradigms for ASI',
    date: '28 May 2025',
    description: 'Exploring algorithmic approaches for safe and verifiable superintelligence.',
    href: '/research/advanced-algorithmic-paradigms-asi',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/logan-voss-B0APkM5QgnQ-unsplash.jpg',
  },
  {
    title: 'Interpretable Attention Visualization Module',
    date: '24 May 2025',
    description: 'Transforming Raw Attention into Human Readable Explanations.',
    href: '/research/interpretable-attention-visualization-module',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/rini-nur-rohmah-ZkGf87NclJ0-unsplash.jpg',
  },
  {
    title: 'Computational Hardware for Superintelligence',
    date: '21 June 2025',
    description: 'Navigating Energy, Multimodality, and Ethical Data at Scale.',
    href: '/research/computational-hardware-and-data-foundations-for-sustainable-superintelligence',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg',
  },
  {
    title: 'Quantum Language Models',
    date: '22 May 2025',
    description: 'Architectures, Applications, and a Practical Approach to Quantum Tensor Conversion for Enhanced Efficiency.',
    href: '/research/quantum-language-models',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-7TLXeqJgock-unsplash.jpg',
  },
  {
    title: 'Cross Modal Contrastive Curriculum Learning',
    date: '27 May 2025',
    description: 'Enhancing Multi Modal Alignment Through Progressive Difficulty.',
    href: '/research/cross-modal-contrastive-curriculum-learning',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-xS_lI4mtyzs-unsplash.jpg',
  },
  {
    title: 'Quantum Intelligence and Future AI Systems',
    date: '11 April 2025',
    description: 'A look into the future of AI with Quantum Intelligence.',
    href: '/research/quantum-intelligence-and-future-ai-systems',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-efren-ftz-365656346-14433444.jpg',
  },
  {
    title: 'LLMs can be Creative and Independent',
    date: '17 November 2024',
    description: 'Exploring the creative and independent capabilities of Large Language Models.',
    href: '/research/llms-can-be-creative-and-independent',
    backgroundImage: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/kukai-art-oDQqO9opEXc-unsplash.jpg',
  },
]

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

          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            {papers.map((paper) => (
              <FlightCard
                key={paper.title}
                title={paper.title}
                subtitle={paper.description}
                category="Research Paper"
                price="Free Access"
                buttonText="Read Paper"
                imageUrl={paper.backgroundImage}
                imageAlt={paper.title}
                href={paper.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
