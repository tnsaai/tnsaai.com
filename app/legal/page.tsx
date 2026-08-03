import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal | TNSA',
  description: 'TNSA policies, terms, licenses, and reporting processes.',
}

const documents = [
  { title: 'Privacy Policy', href: '/privacy/policy', description: 'How we collect, use, protect, and manage personal information.' },
  { title: 'Terms and Conditions', href: '/t&c/terms-of-service', description: 'The terms governing access to TNSA products and services.' },
  { title: 'Open-Weight Model Licenses', href: '/legal/open-weight-model-licenses', description: 'How licenses apply to TNSA open-weight model releases.' },
  { title: 'Model Complaints', href: '/legal/model-complaints', description: 'Report concerning model behavior and request a review.' },
  { title: 'Content Moderation', href: '/legal/content-moderation', description: 'Our approach to prohibited content, enforcement, and appeals.' },
  { title: 'Data Issues', href: '/legal/data-issues', description: 'Raise privacy, provenance, deletion, or security concerns.' },
  { title: 'Data Processing Addendum', href: '/legal/data-processing-addendum', description: 'Data-processing terms for business, API, and enterprise customers.' },
]

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="pb-14 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="text-[12px] text-gray-500">Company</p>
          <h1 className="mt-4 text-[44px] font-normal leading-tight md:text-[64px]">Legal</h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-gray-500">
            Policies, terms, licenses, and reporting processes for TNSA products, models, and services.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <div className="grid border-t border-gray-200 sm:grid-cols-2">
          {documents.map((document, index) => (
            <Link
              key={document.href}
              href={document.href}
              className={`group border-b border-gray-200 py-8 transition-colors hover:bg-gray-50 sm:px-7 ${
                index === documents.length - 1 && documents.length % 2 === 1
                  ? 'sm:col-span-2'
                  : index % 2 === 0
                    ? 'sm:border-r'
                    : ''
              }`}
            >
              <p className="text-[11px] text-gray-400">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-5 text-[20px] font-normal transition-colors group-hover:text-gray-500">
                {document.title}
              </h2>
              <p className="mt-3 max-w-[340px] text-[12px] leading-6 text-gray-500">{document.description}</p>
              <span className="mt-6 inline-flex text-[12px] text-black">Read document →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
