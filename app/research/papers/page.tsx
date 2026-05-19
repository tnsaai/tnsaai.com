import Link from 'next/link'

const papers = [
  {
    title: 'Tri-Flux Attention',
    date: 'Dec 20, 2025',
    category: 'Research Paper',
    href: '/research/tri-flux-attention',
  },
  {
    title: 'Adaptive Sparse Transformer Blocks',
    date: 'May 25, 2025',
    category: 'Research Paper',
    href: '/research/adaptive-sparse-transformer-blocks',
  },
  {
    title: 'Agentic Intelligence in Large Language Models',
    date: 'Nov 6, 2025',
    category: 'Agent Research',
    href: '/research/agentic-intelligence-ngen39-pro',
  },
  {
    title: 'Quantum-Based Language Models',
    date: 'Nov 6, 2025',
    category: 'Quantum AI',
    href: '/research/quantum-based-language-models-survey',
  },
  {
    title: 'Interpretable Attention Visualization Module',
    date: 'May 24, 2025',
    category: 'Interpretability',
    href: '/research/interpretable-attention-visualization-module',
  },
  {
    title: 'Advanced Algorithmic Paradigms for Artificial Superintelligence',
    date: 'Nov 6, 2025',
    category: 'Safety Research',
    href: '/research/advanced-algorithmic-paradigms-asi',
  },
  {
    title: 'Computational Hardware and Data Foundations',
    date: 'Jun 21, 2025',
    category: 'Infrastructure',
    href: '/research/computational-hardware-and-data-foundations-for-sustainable-superintelligence',
  },
  {
    title: 'Cross Modal Contrastive Curriculum Learning',
    date: 'May 27, 2025',
    category: 'Multimodal Research',
    href: '/research/cross-modal-contrastive-curriculum-learning',
  },
  {
    title: 'Quantum Intelligence and Future AI Systems',
    date: 'Apr 11, 2025',
    category: 'Quantum AI',
    href: '/research/quantum-intelligence-and-future-ai-systems',
  },
  {
    title: 'Quantum Language Models',
    date: 'May 22, 2025',
    category: 'Quantum AI',
    href: '/research/quantum-language-models',
  },
  {
    title: 'LLMs can be Creative and Independent',
    date: 'Nov 17, 2024',
    category: 'Intelligence',
    href: '/research/llms-can-be-creative-and-independent',
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

export default function PapersPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Research</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Research Papers
          </h1>
          <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-gray-500">
            Full paper pages with extracted PDF text and original PDFs appended.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
            {papers.map((paper) => (
              <Link key={paper.href} href={paper.href} className="group grid gap-4 px-5 py-5 transition-colors hover:bg-gray-50 md:grid-cols-[1fr_160px]">
                <div>
                  <h2 className="text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
                    {paper.title}
                  </h2>
                  <Label>{paper.category}</Label>
                </div>
                <p className="text-[12px] leading-5 text-gray-500 md:text-right">{paper.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
