import Link from 'next/link'

export type LegalSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type LegalDocumentProps = {
  title: string
  summary: string
  updated?: string
  sections: LegalSection[]
  contactSubject: string
}

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function LegalDocument({
  title,
  summary,
  updated = 'August 3, 2026',
  sections,
  contactSubject,
}: LegalDocumentProps) {
  const contactHref = `mailto:support@tnsaai.com?subject=${encodeURIComponent(contactSubject)}`

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="pb-14 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <Link href="/legal" className="text-[12px] text-gray-500 transition-colors hover:text-black">
            Legal
          </Link>
          <h1 className="mt-4 max-w-[820px] text-[42px] font-normal leading-tight md:text-[60px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-gray-500">{summary}</p>
          <p className="mt-7 text-[11px] uppercase tracking-[0.08em] text-gray-400">Last updated {updated}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <nav aria-label={`${title} contents`} className="grid gap-5 border-t border-gray-200 py-10 md:grid-cols-[240px_1fr] md:gap-14">
          <h2 className="text-[18px] font-normal">Contents</h2>
          <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {sections.map((section, index) => (
              <li key={section.title}>
                <a href={`#${sectionId(section.title)}`} className="group flex text-[12px] leading-5 text-gray-500 transition-colors hover:text-black">
                  <span className="mr-3 text-gray-300 transition-colors group-hover:text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((section, index) => (
          <section
            key={section.title}
            id={sectionId(section.title)}
            className="scroll-mt-24 grid gap-7 border-t border-gray-200 py-10 md:grid-cols-[240px_1fr] md:gap-14"
          >
            <h2 className="text-[18px] font-normal leading-7 text-black">
              <span className="mr-3 text-[11px] text-gray-400">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>
            <div className="space-y-4 text-[14px] leading-7 text-gray-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 marker:text-gray-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="border-t border-gray-200 pt-10">
          <div className="rounded-lg bg-gray-50 p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-[18px] font-normal">Questions about this document?</h2>
              <p className="mt-2 text-[12px] leading-5 text-gray-500">
                Contact TNSA and include enough context for us to route your request.
              </p>
            </div>
            <Link
              href={contactHref}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-[12px] text-white transition-colors hover:bg-gray-800 md:mt-0"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
