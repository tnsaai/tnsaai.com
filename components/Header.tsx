'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SiteSearch, type SearchItem } from '@/components/SiteSearch'
import { SHOW_ASTRA } from '@/lib/features'

const navigation = [
  { name: 'Models', href: '/models' },
  { name: 'Research', href: '/research' },
  { name: 'Products', href: '/products' },
  { name: 'Developers', href: '/developers' },
  { name: 'Company', href: '/company' },
]

const searchItems: SearchItem[] = [
  // Models
  { name: 'NGen-4.5 Vayu', href: '/models/ngen4.5-vayu', category: 'Model', date: 'October 2026', description: 'Flagship frontier model matching NGen-4.3 Pro at 400 tokens/s. Available in India South, India Central, and US East-1.', image: '/model-images/ngen4.5-vayu-preview.svg' },
  { name: 'NGen-4.3 Pro', href: '/models/ngen4.3-pro', category: 'Model', date: 'August 2026', description: 'Frontier agentic intelligence with a 1,048,576-token context window and 248,320-token maximum output.', image: '/model-images/ngen4.3-pro-preview.svg' },
  { name: 'NGenSTT V2 Indic', href: '/models/ngenstt-v2-indic', category: 'Model', date: 'September 2026', description: 'Our flagship Speech-to-Text model for India: 27 languages, code-mixed transcription, and three output modes.', image: '/model-images/ngenstt-v2-indic.svg' },
  { name: 'Model Index', href: '/models', category: 'Models', date: 'April 2026', description: 'Explore our full suite of foundational AI models.', image: '/model-images/ngen4.png' },
  { name: 'NGen-4', href: '/models/ngen4', category: 'Model', date: 'April 15, 2026', description: 'Frontier intelligence for advanced reasoning and multi-modal tasks.', image: '/model-images/ngen4.png' },
  { name: 'NGen-4 Pro', href: '/models/ngen4-pro', category: 'Model', date: 'April 15, 2026', description: 'Frontier reasoning model for complex workflows and advanced problem solving.', image: '/model-images/ngen4-pro.png' },
  { name: 'NGen-4 Mini', href: '/models/ngen4-mini', category: 'Model', date: 'April 15, 2026', description: 'High performance conversational intelligence with lower latency.', image: '/model-images/ngen4-mini.png' },
  { name: 'NGen-4-K2-1T', href: '/models/ngen4-k2-1t', category: 'Model', date: 'Q3 2026', description: 'Massive scale 1 trillion parameter model for complex, long-horizon reasoning.', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow1t.png' },
  { name: 'IGen 1 Image', href: '/models/igen-1-image', category: 'Model', date: 'March 2026', description: 'High-fidelity, photorealistic text-to-image generation.', image: '/model-images/igen1.png' },
  { name: 'NGen 4 Blaze', href: '/models/ngen4-blaze', category: 'Model', date: 'Coming Soon', description: 'Ultra-fast intelligence optimized for low-latency edge deployment.' },
  { name: 'NGen 4 Flash', href: '/models/ngen4-flash', category: 'Model', date: 'Coming Soon', description: 'High-throughput reasoning for real-time applications.' },

  // Research
  { name: 'Research Index', href: '/research', category: 'Research', date: '2026', description: 'Explore our latest research papers and publications.', image: '/tri-flux-attention.png' },
  { name: 'Research Papers', href: '/research/papers', category: 'Research', date: '2026', description: 'A complete directory of TNSA technical papers and research findings.' },
  { name: 'Tri-Flux Attention', href: '/research/tri-flux-attention', category: 'Research Paper', date: 'Dec 20, 2025', description: 'Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces.', image: '/tri-flux-attention.png' },
  { name: 'Adaptive Sparse Transformers', href: '/research/adaptive-sparse-transformer-blocks', category: 'Research Paper', date: 'May 25, 2025', description: 'A Paradigm Shift for Efficient Large Language Models and superintelligence.', image: '/Adaptive Sparse Transformer Blocks.png' },
  { name: 'Agentic Intelligence', href: '/research/agentic-intelligence-ngen39-pro', category: 'Research Paper', date: 'Oct 26, 2025', description: 'Experimental analysis of agentic capabilities in our frontier models.', image: '/Agentic Intelligence in Large Language Models.png' },
  { name: 'Quantum Language Models', href: '/research/quantum-language-models', category: 'Research Paper', date: 'Nov 12, 2025', description: 'Innovative architectures for next-generation quantum-enhanced language modeling.', image: '/Quantum Language Models.png' },
  { name: 'Creative and Independent LLMs', href: '/research/llms-can-be-creative-and-independent', category: 'Research Paper', date: 'Jan 5, 2026', description: 'Investigating independent creative styles and stylistic autonomy in large language models.', image: '/llms-can-be-creative-and-independent.png' },

  // Products
  { name: 'Products Overview', href: '/products', category: 'Products', date: '2026', description: 'Discover products built on TNSA foundational models.' },
  ...(SHOW_ASTRA ? [{ name: 'Astra', href: '/astra', category: 'Product', date: '2026', description: 'A unified agentic workspace for models, knowledge, connected apps, and enterprise work.', image: '/astra-work-poster.png' }] : []),
  { name: 'GensChat', href: '/products/genchat', category: 'Product', date: '2026', description: 'The intelligent assistant powered by NGen 4.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg' },
  { name: 'EdgeChat', href: '/products/edgechat', category: 'Product', date: '2026', description: 'Privacy-focused local models running directly on your devices.' },

  // Developers
  { name: 'Developer Home', href: '/developers', category: 'Developers', date: '2026', description: 'Tools, APIs, and resources for building with TNSA models.' },
  { name: 'Status', href: 'https://status.tnsaai.com', category: 'Developers', description: 'System status and operational metrics for TNSA API and Services.' },
  { name: 'API Platform', href: 'https://platform.tnsaai.com', category: 'Product', date: '2026', description: 'Access our frontier models via the TNSA API Platform.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg' },

  // Company
  { name: 'Company Overview', href: '/company', category: 'Company', date: '2026', description: 'The company building superintelligence for India and the world.' },
  { name: 'About TNSA', href: '/about', category: 'Company', date: '2026', description: 'Learn about our mission to build superintelligence for India.', image: '/about.png' },
  { name: 'Introducing NGenSTT V2 Indic', href: '/company/news/ngenstt-v2-indic-launch', category: 'News', date: 'September 8, 2026', description: 'Our most capable Speech-to-Text model, built specifically for India across 27 languages.', image: '/model-images/ngenstt-v2-indic.svg' },
  { name: 'News', href: '/company/news', category: 'Company', date: '2026', description: 'Latest news, announcements, and research updates.' },
  { name: 'Careers', href: '/company/careers', category: 'Company', date: '2026', description: 'Join us in shaping the future of AI. View open roles across engineering and research.', image: '/Careers.png' },
  { name: 'Safety', href: '/safety', category: 'Company', date: '2026', description: 'Our approach to responsible AI development and deployment.', image: '/ai-safety.png' },
  { name: 'Enterprise', href: '/enterprises', category: 'Company', date: '2026', description: 'Custom model deployment and secure infrastructure for enterprises.' },
  { name: 'Contact', href: '/company/contact', category: 'Company', description: 'Get in touch with the TNSA team.' },
  { name: 'NGen-4 System Card', href: '/company/news/ngen-4-system-card', category: 'News', date: 'April 15, 2026', description: 'Detailed technical report and safety evaluations for the NGen-4 family.', image: '/model-images/ngen4.png' },
  { name: 'Research for India', href: '/company/news/transforming-government-services-with-large-language-models', category: 'News', description: 'Transforming Government Services with Large Language Models in India.' }
]

const megaMenus = {
  Models: {
    eyebrow: 'Explore Models',
    links: [
      { name: 'Model Index', href: '/models' },
      { name: 'NGen 4.5 Vayu', href: '/models/ngen4.5-vayu' },
      { name: 'NGen 4.3 Pro', href: '/models/ngen4.3-pro' },
      { name: 'NGen 4', href: '/models/ngen4' },
      { name: 'NGen 4 Pro', href: '/models/ngen4-pro' },
    ],
    sideTitle: 'Latest Models',
    sideLinks: [
      { name: 'NGenSTT V2 Indic', href: '/models/ngenstt-v2-indic' },
      { name: 'NGen-4-K2-1T', href: '/models/ngen4-k2-1t' },
      { name: 'NGen 4 Blaze', href: '/models/ngen4-blaze' },
      { name: 'NGen 4 Flash', href: '/models/ngen4-flash' },
      { name: 'IGen 1 Image', href: '/models/igen-1-image' },
    ],
  },
  Research: {
    eyebrow: 'Explore Research',
    links: [
      { name: 'Research Index', href: '/research' },
      { name: 'Research Papers', href: '/research/papers' },
      { name: 'Tri-Flux Attention', href: '/research/tri-flux-attention' },
      { name: 'Safety', href: '/safety' },
    ],
    sideTitle: 'Latest Advancements',
    sideLinks: [
      { name: 'Adaptive Sparse Transformers', href: '/research/adaptive-sparse-transformer-blocks' },
      { name: 'Agentic Intelligence', href: '/research/agentic-intelligence-ngen39-pro' },
      { name: 'Quantum Language Models', href: '/research/quantum-language-models' },
      { name: 'Creative LLMs', href: '/research/llms-can-be-creative-and-independent' },
    ],
  },
  Products: {
    eyebrow: 'Explore Products',
    links: [
      { name: 'Products Overview', href: '/products' },
      ...(SHOW_ASTRA ? [{ name: 'Astra', href: '/astra' }] : []),
      { name: 'TNSA Platform', href: 'https://platform.tnsaai.com' },
      { name: 'GensChat', href: '/products/genchat' },
    ],
    sideTitle: 'Build With TNSA',
    sideLinks: [
      { name: 'API Platform', href: 'https://platform.tnsaai.com' },
      { name: 'Developers', href: '/developers' },
      { name: 'Status', href: 'https://status.tnsaai.com' },
      { name: 'Enterprise', href: '/enterprises' },
    ],
  },
  Developers: {
    eyebrow: 'Explore Developers',
    links: [
      { name: 'Developer Home', href: '/developers' },
      { name: 'API Platform', href: 'https://platform.tnsaai.com' },
      { name: 'Status', href: 'https://status.tnsaai.com' },
      { name: 'Research Papers', href: '/research/papers' },
    ],
    sideTitle: 'Resources',
    sideLinks: [
      { name: 'Fine-tuning', href: '/enterprises/fine-tuning' },
      { name: 'Deployment', href: '/enterprises/deployment' },
      { name: 'Infrastructure', href: '/enterprises/infrastructure' },
      { name: 'Contact', href: '/company/contact' },
    ],
  },
  Company: {
    eyebrow: 'Explore Company',
    links: [
      { name: 'Company Overview', href: '/company' },
      { name: 'About TNSA', href: '/about' },
      { name: 'News', href: '/company/news' },
      { name: 'Careers', href: '/company/careers' },
    ],
    sideTitle: 'More From TNSA',
    sideLinks: [
      { name: 'Contact', href: '/company/contact' },
      { name: 'Safety', href: '/safety' },
      { name: 'Enterprise', href: '/enterprises' },
      { name: 'Research for India', href: '/company/news/transforming-government-services-with-large-language-models' },
    ],
  },
}

export default function Header() {
  const pathname = usePathname()
  const isAstraPage = pathname === '/astra'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 hover:bg-white ${isAstraPage && !isScrolled ? 'bg-transparent' : 'bg-white'}`}
    >
      <div className="mx-auto flex h-12 items-center justify-between px-5 md:h-16 md:max-w-[1440px] md:justify-start md:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="TNSA home">
          <Image src="/TNSA.svg" alt="TNSA" width={55} height={17} className="h-auto w-[52px] md:w-[55px] dark:invert" priority />
        </Link>

        <nav className="ml-12 hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="group flex h-16 items-center"
            >
              <Link href={item.href} className="text-[12px] font-normal leading-none text-black transition-colors hover:text-gray-600">
                {item.name}
              </Link>

              <div className="pointer-events-none invisible fixed inset-x-0 top-16 z-50 bg-white opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.035)] transition-opacity duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_360px] gap-20 px-8 pb-12 pt-8">
                  <div>
                    <p className="mb-4 text-[12px] font-medium text-gray-500">{megaMenus[item.name as keyof typeof megaMenus].eyebrow}</p>
                    <div className="flex flex-col items-start gap-4">
                      {megaMenus[item.name as keyof typeof megaMenus].links.map((menuItem) => (
                        <Link key={menuItem.name} href={menuItem.href} className="text-[28px] font-normal leading-none text-black transition-colors hover:text-gray-500">
                          {menuItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-5 text-[12px] font-medium text-gray-500">{megaMenus[item.name as keyof typeof megaMenus].sideTitle}</p>
                    <div className="flex flex-col items-start gap-4">
                      {megaMenus[item.name as keyof typeof megaMenus].sideLinks.map((menuItem) => (
                        <Link key={menuItem.name} href={menuItem.href} className="text-[13px] font-semibold leading-none text-black transition-colors hover:text-gray-500">
                          {menuItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <SiteSearch items={searchItems} />
          <ThemeToggle />
          <Link href="https://platform.tnsaai.com" className="flex h-8 items-center rounded-full bg-black px-4 text-[12px] font-semibold text-white transition-colors hover:bg-gray-800">
            Platform
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <SiteSearch items={searchItems} />
          <ThemeToggle />
          <button type="button" className="p-2 text-black" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-72 bg-white p-6 shadow-xl overflow-y-auto">
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close menu">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="py-2 text-[12px] font-medium text-gray-900 hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Link href="https://platform.tnsaai.com" className="mt-2 flex h-9 items-center justify-center rounded-full bg-black px-4 text-[12px] font-semibold text-white hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>
                Platform
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
