'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Models', href: '/models' },
  { name: 'Research', href: '/research' },
  { name: 'Products', href: '/products' },
  { name: 'Developers', href: '/developers' },
  { name: 'Company', href: '/company' },
]

const searchItems = [
  // Models
  { name: 'Model Index', href: '/models', category: 'Models', date: 'April 2026', description: 'Explore our full suite of foundational AI models.', image: '/model-images/ngen4.png' },
  { name: 'NGen-4', href: '/models/ngen4', category: 'Model', date: 'April 15, 2026', description: 'Frontier intelligence for advanced reasoning and multi-modal tasks.', image: '/model-images/ngen4.png' },
  { name: 'NGen-4 Pro', href: '/models/ngen4-pro', category: 'Model', date: 'April 15, 2026', description: 'Frontier reasoning model for complex workflows and advanced problem solving.', image: '/model-images/ngen4-pro.png' },
  { name: 'NGen-4 Mini', href: '/models/ngen4-mini', category: 'Model', date: 'April 15, 2026', description: 'High performance conversational intelligence with lower latency.', image: '/model-images/ngen4-mini.png' },
  { name: 'NGen-4-K2-1T', href: '/models/ngen4-k2-1t', category: 'Model', date: 'Q3 2026', description: 'Massive scale 1 trillion parameter model for complex, long-horizon reasoning.', image: '/model-images/ngen4-k2.png' },
  { name: 'IGen 1 Image', href: '/models/igen-1-image', category: 'Model', date: 'March 2026', description: 'High-fidelity, photorealistic text-to-image generation.', image: '/model-images/igen-1.png' },
  { name: 'NGen 4 Blaze', href: '/models/ngen4-blaze', category: 'Model', date: 'Coming Soon', description: 'Ultra-fast intelligence optimized for low-latency edge deployment.' },
  { name: 'NGen 4 Flash', href: '/models/ngen4-flash', category: 'Model', date: 'Coming Soon', description: 'High-throughput reasoning for real-time applications.' },

  // Research
  { name: 'Research Index', href: '/research', category: 'Research', date: '2026', description: 'Explore our latest research papers and publications.', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg' },
  { name: 'Research Papers', href: '/research/papers', category: 'Research', date: '2026', description: 'A complete directory of TNSA technical papers and research findings.' },
  { name: 'Tri-Flux Attention', href: '/research/tri-flux-attention', category: 'Research Paper', date: 'Dec 20, 2025', description: 'Breaking the Linear Complexity Barrier via Symmetric Trigonometric State Spaces.', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/pexels-diva-32403296.jpg' },
  { name: 'Adaptive Sparse Transformers', href: '/research/adaptive-sparse-transformer-blocks', category: 'Research Paper', date: 'May 25, 2025', description: 'A Paradigm Shift for Efficient Large Language Models and superintelligence.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/abstral-official-kzTYEGMY4N0-unsplash.jpg' },
  { name: 'Agentic Intelligence', href: '/research/agentic-intelligence-ngen39-pro', category: 'Research Paper', date: 'Oct 26, 2025', description: 'Experimental analysis of agentic capabilities in our frontier models.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/mymind-3dmu0gu23uc-unsplash.jpg' },
  { name: 'Quantum Language Models', href: '/research/quantum-language-models', category: 'Research Paper', date: 'Nov 12, 2025', description: 'Innovative architectures for next-generation quantum-enhanced language modeling.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/boliviainteligente-ybSql-GGUOE-unsplash.jpg' },
  { name: 'Creative and Independent LLMs', href: '/research/llms-can-be-creative-and-independent', category: 'Research Paper', date: 'Jan 5, 2026', description: 'Investigating independent creative styles and stylistic autonomy in large language models.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg' },

  // Products
  { name: 'Products Overview', href: '/products', category: 'Products', date: '2026', description: 'Discover products built on TNSA foundational models.' },
  { name: 'GensChat', href: '/products/genchat', category: 'Product', date: '2026', description: 'The intelligent assistant powered by NGen 4.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/omid-armin-Nsn9FY4JGMs-unsplash.jpg' },
  { name: 'EdgeChat', href: '/products/edgechat', category: 'Product', date: '2026', description: 'Privacy-focused local models running directly on your devices.' },

  // Developers
  { name: 'Developer Home', href: '/developers', category: 'Developers', date: '2026', description: 'Tools, APIs, and resources for building with TNSA models.' },
  { name: 'Status', href: 'https://status.tnsaai.com', category: 'Developers', description: 'System status and operational metrics for TNSA API and Services.' },
  { name: 'API Platform', href: 'https://platform.tnsaai.com', category: 'Product', date: '2026', description: 'Access our frontier models via the TNSA API Platform.', image: 'https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/muhammad-ridwan-imam-fajar-meqxXc9zPGI-unsplash.jpg' },

  // Company
  { name: 'Company Overview', href: '/company', category: 'Company', date: '2026', description: 'The company building superintelligence for India and the world.' },
  { name: 'About TNSA', href: '/about', category: 'Company', date: '2026', description: 'Learn about our mission to build superintelligence for India.', image: '/about.png' },
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
      { name: 'NGen 4', href: '/models/ngen4' },
      { name: 'NGen 4 Pro', href: '/models/ngen4-pro' },
      { name: 'NGen 4 Mini', href: '/models/ngen4-mini' },
    ],
    sideTitle: 'Latest Models',
    sideLinks: [
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
      { name: 'TNSA Platform', href: 'https://platform.tnsaai.com' },
      { name: 'GensChat', href: '/products/genchat' },
      { name: 'EdgeChat', href: '/products/edgechat' },
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
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedSearch = searchQuery.trim().toLowerCase()
  const searchResults = (normalizedSearch
    ? searchItems.filter((item) => `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(normalizedSearch))
    : searchItems.slice(0, 4)
  ).slice(0, 5)

  const openSearch = () => {
    setSearchOpen(true)
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery('')
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const firstResult = searchResults[0]
    if (firstResult) {
      closeSearch()
      router.push(firstResult.href)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FFFFFF]">
      <div className="mx-auto flex h-12 items-center justify-between px-5 md:h-16 md:max-w-[1440px] md:justify-start md:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="TNSA home">
          <Image src="/TNSA.svg" alt="TNSA" width={55} height={17} className="h-auto w-[52px] md:w-[55px]" priority />
        </Link>

        <nav className="ml-12 hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="group flex h-16 items-center"
              onMouseEnter={() => setSearchOpen(false)}
            >
              <Link href={item.href} className="text-[12px] font-normal leading-none text-black transition-colors hover:text-gray-600">
                {item.name}
              </Link>

              <div className="pointer-events-none invisible fixed inset-x-0 top-16 z-50 bg-[#FFFFFF] opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.035)] transition-opacity duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
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
          <button type="button" className="flex h-8 w-8 items-center justify-center text-black transition-colors hover:text-gray-600" aria-label="Search" onClick={openSearch}>
            <Search className="h-4 w-4" strokeWidth={2} />
          </button>
          <Link href="https://platform.tnsaai.com" className="flex h-8 items-center rounded-full bg-black px-4 text-[12px] font-semibold text-white transition-colors hover:bg-gray-800">
            Platform
          </Link>
        </div>

        <button type="button" className="md:hidden p-2 text-black" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
          <div className="mx-auto max-w-[920px] px-5 pb-20 pt-8 md:px-8">
            <div className="flex items-center justify-between mb-16">
              <form onSubmit={handleSearchSubmit} className="flex-1 max-w-[600px]">
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  autoFocus
                  placeholder="Search..."
                  className="w-full bg-transparent text-[36px] md:text-[56px] text-black outline-none placeholder:text-gray-300 font-light"
                />
              </form>
              <button type="button" onClick={closeSearch} className="p-2 text-gray-400 hover:text-black rounded-full transition-colors">
                <XMarkIcon className="h-10 w-10" />
              </button>
            </div>

            <div className="flex flex-col">
              {searchResults.map((item) => (
                <Link key={`${item.category}-${item.href}`} href={item.href} className="group block border-t border-gray-100 py-10 first:border-t-0" onClick={closeSearch}>
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[15px] font-medium text-black">{item.category}</span>
                        {item.date && <span className="text-[15px] text-gray-500">{item.date}</span>}
                      </div>
                      <h3 className="text-[28px] md:text-[32px] font-medium leading-tight text-black transition-colors group-hover:text-gray-500">{item.name}</h3>
                      {item.description && <p className="mt-4 text-[16px] leading-relaxed text-gray-600 max-w-[600px]">{item.description}</p>}
                    </div>
                    {item.image && (
                      <div className="relative shrink-0 w-[180px] aspect-[4/3] md:w-[260px] overflow-hidden rounded-xl bg-gray-50">
                        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 260px, 180px" />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
              {searchResults.length === 0 && (
                <div className="py-12 border-t border-gray-100">
                  <p className="text-[24px] text-gray-400 font-light">No results found for &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
              <button type="button" className="flex items-center gap-2 py-2 text-left text-[12px] font-medium text-gray-900 hover:text-gray-600" onClick={() => { setMobileMenuOpen(false); openSearch() }}>
                <Search className="h-4 w-4" strokeWidth={2} />
                Search
              </button>
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
