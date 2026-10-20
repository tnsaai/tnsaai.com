import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Brain, Check, ClipboardList, Layers3, Plug, ShieldCheck, Wand2 } from 'lucide-react'
import { ApprovalModes } from '@/components/astra/ApprovalModes'
import { ConnectorGallery } from '@/components/astra/ConnectorGallery'
import { AwaazMock, DocMock, KnowledgeMock, VibeMock, WorkMock } from '@/components/astra/Mockups'
import { approvalGuarantees, astraPlans, astraProducts, connectors, featuredGens, mandalas } from '@/content/astra'
import { SHOW_ASTRA } from '@/lib/features'

export const metadata: Metadata = {
  title: 'Astra | TNSA',
  description: 'Astra is TNSA’s agentic workspace for NGen models, agents, knowledge, and connected applications.',
  // Unlisted until launch: reachable by URL, kept out of search results.
  robots: SHOW_ASTRA ? undefined : { index: false, follow: false },
}

const sectionLinks = [
  ['Products', '#products'],
  ['Control', '#control'],
  ['Connectors', '#connectors'],
  ['Knowledge', '#knowledge'],
  ['Gens', '#gens'],
  ['Plans', '#plans'],
]

const pillars = [
  { icon: Brain, title: 'Models', detail: 'Reason across text, code, documents, images, and voice with the NGen family.' },
  { icon: Layers3, title: 'Agents', detail: 'Specialized agents for everyday work, engineering, voice, and documents.' },
  { icon: BookOpen, title: 'Knowledge', detail: 'Ground every task in projects, files, repositories, and team knowledge.' },
  { icon: Plug, title: 'Actions', detail: 'Act across approved apps while permissions and review stay intact.' },
]

const productStories = [
  {
    slug: 'vibe',
    eyebrow: 'Vibe',
    title: 'An engineer’s agent that reads the repo first.',
    body: 'Vibe works from your repositories, branches, and commit history, shows every tool call as it happens, and proposes changes you can review before they land.',
    points: ['GitHub, GitLab, Bitbucket, and Vercel connectors', 'Branch-aware edits and commit history', 'Tests and checks run in view'],
    mock: <VibeMock />,
  },
  {
    slug: 'docs',
    eyebrow: 'Doc Agents',
    title: 'From a scanned page to structured, usable data.',
    body: 'Doc Agents digitize and extract from documents in Indian and global languages, translate them, and keep each field linked to its source.',
    points: ['OCR and structured field extraction', 'Translation workspaces', 'Results saved to project context'],
    mock: <DocMock />,
  },
  {
    slug: 'awaaz',
    eyebrow: 'Awaaz · In development',
    title: 'Voice agents that speak the way India speaks.',
    body: 'Awaaz is building realtime voice agents that hold natural, multilingual conversations and hand off to approved work when a call needs action.',
    points: ['Realtime, interruptible conversation', 'Multilingual voices', 'Configurable roles and handoffs'],
    mock: <AwaazMock />,
  },
]

const contextFeatures = [
  {
    icon: BookOpen,
    title: 'Knowledge bases',
    body: 'Named collections of docs, decks, sheets, PDFs, and text that Astra retrieves when a task needs them.',
  },
  {
    icon: Wand2,
    title: 'Skills',
    body: 'Teach Astra how your team works. Write instructions or import a SKILL.md, version it, and Astra applies it only when the task matches.',
  },
  {
    icon: ClipboardList,
    title: 'Memory',
    body: 'Astra remembers preferences and context you share, and you can review, export, or clear what it keeps.',
  },
]

const layers = [
  { title: 'Experience', detail: 'Astra Work, Vibe, Awaaz, and Doc Agents', items: ['Text', 'Voice', 'Documents', 'Code'] },
  { title: 'Orchestration', detail: 'Plans, routes, and resumes multi-step runs', items: ['Planning', 'Routing', 'Approvals', 'Resumable runs'] },
  { title: 'Intelligence', detail: 'The NGen model family', items: ['NGen-4.5 Vayu', 'NGen-4.3 Pro', 'Realtime', 'Specialists'] },
  { title: 'Context', detail: 'What the task is grounded in', items: ['Knowledge', 'Projects', 'Memory', 'Skills'] },
  { title: 'Control', detail: 'What Astra may see and change', items: ['Identity', 'Scopes', 'Connectors', 'Audit'] },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">{children}</p>
}

function SectionHeader({ eyebrow, title, body, center = false }: { eyebrow: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[34px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[54px]">{title}</h2>
      {body ? <p className={`mt-5 text-base leading-7 text-gray-500 ${center ? 'mx-auto max-w-[620px]' : 'max-w-[620px]'}`}>{body}</p> : null}
    </div>
  )
}

export default function AstraPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-black">
      {/* Hero */}
      <section className="relative isolate min-h-[780px] overflow-hidden pt-16 md:min-h-[900px]">
        <Image src="/astra/sky-mist.jpg" alt="" fill priority quality={90} className="-z-20 object-cover" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/50 via-white/10 to-white" />

        <div className="mx-auto flex min-h-[720px] max-w-[1180px] flex-col justify-end px-5 pb-16 md:min-h-[836px] md:px-8 md:pb-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] font-medium backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Astra by TNSA
          </span>
          <h1 className="mt-6 max-w-[920px] text-[52px] font-medium leading-[0.95] tracking-[-0.045em] md:text-[96px]">
            Intelligence that works with you.
          </h1>
          <p className="mt-6 max-w-[600px] text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            One workspace for NGen models, specialized agents, your team’s knowledge, and the apps you already use, with every action visible and under your control.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/company/contact" className="inline-flex h-11 items-center rounded-full bg-black px-6 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Talk to TNSA
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <a href="#products" className="inline-flex h-11 items-center rounded-full border border-black/15 bg-white/50 px-6 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/80">
              Explore Astra
            </a>
          </div>

          <ul className="mt-14 grid max-w-[760px] grid-cols-2 gap-3 sm:grid-cols-4">
            {astraProducts.map((product) => (
              <li key={product.slug}>
                <a href={`#product-${product.slug}`} className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white/55 p-2 pr-3 backdrop-blur-md transition-colors hover:bg-white/80">
                  <Image src={product.icon} alt="" width={40} height={40} unoptimized className="h-10 w-10 rounded-xl" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{product.name}</span>
                    <span className="block truncate text-[11px] text-gray-500">{product.status ?? product.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section nav */}
      <nav className="sticky top-12 z-30 border-y border-gray-200 bg-white/85 backdrop-blur-xl md:top-16" aria-label="Astra sections">
        <div className="mx-auto flex max-w-[1180px] items-center gap-6 overflow-x-auto px-5 py-3 text-xs text-gray-500 md:px-8">
          <span className="mr-auto shrink-0 font-medium text-black">Astra</span>
          {sectionLinks.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 transition-colors hover:text-black">{label}</a>
          ))}
        </div>
      </nav>

      {/* Platform */}
      <section className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="The platform"
          title="From a question to finished work, without losing context."
          body="Most AI tools stop at an answer. Astra carries the work forward: it plans, gathers what it needs, acts across your apps, and pauses for you whenever a step matters."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="bg-white p-6">
              <div className="w-fit rounded-2xl border border-gray-200 p-3">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-8 text-base font-medium">{title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">{detail}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] px-4 py-10 md:px-14 md:py-16">
          <Image src="/astra/sky-mist.jpg" alt="" fill className="-z-10 object-cover" sizes="(min-width: 1180px) 1116px, 100vw" />
          <div className="absolute inset-0 -z-10 bg-white/30" />
          <WorkMock />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-28 border-t border-gray-200">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeader
            eyebrow="Inside Astra"
            title="One intelligence layer. Four ways to work."
            body="Each Astra product is shaped around a different kind of work. They share models, identity, knowledge, permissions, and history, so your team never starts over."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {astraProducts.map((product) => (
              <article key={product.slug} id={`product-${product.slug}`} className="flex scroll-mt-32 flex-col rounded-[24px] border border-gray-200 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <Image src={product.icon} alt={`${product.name} icon`} width={64} height={64} unoptimized className="h-16 w-16 rounded-2xl" />
                  {product.status ? (
                    <span className="rounded-full border border-gray-200 px-3 py-1 text-[11px] font-medium text-gray-500">{product.status}</span>
                  ) : null}
                </div>
                <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-gray-500">{product.label}</p>
                <h3 className="mt-2 text-[28px] font-medium tracking-[-0.02em]">{product.name}</h3>
                <p className="mt-3 max-w-[460px] text-sm leading-6 text-gray-500">{product.description}</p>
                <ul className="mt-8 grid gap-2 border-t border-gray-200 pt-5 sm:grid-cols-2">
                  {product.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
            {productStories.map((story, index) => (
              <div key={story.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <Eyebrow>{story.eyebrow}</Eyebrow>
                  <h3 className="mt-4 text-[30px] font-medium leading-[1.08] tracking-[-0.025em] md:text-[40px]">{story.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-500">{story.body}</p>
                  <ul className="mt-6 space-y-3">
                    {story.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>{story.mock}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control */}
      <section id="control" className="scroll-mt-28 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Control"
              title="You decide what Astra may do on its own."
              body="Every tool Astra can use is classified on the server as a read, a safe write, or a consequential write. Your approval mode decides which of those run and which wait for you."
            />
            <ul className="mt-10 space-y-4">
              {approvalGuarantees.map((guarantee) => (
                <li key={guarantee} className="flex items-start gap-3 text-sm leading-6">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  {guarantee}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-6 text-gray-500">
              Prefer to look before anything runs? Plan mode returns an ordered plan and waits for you to execute it.
            </p>
          </div>
          <div className="bg-white">
            <ApprovalModes />
          </div>
        </div>
      </section>

      {/* Connectors */}
      <section id="connectors" className="scroll-mt-28 border-t border-gray-200">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Connectors"
              title="Works where your team already works."
              body="Connect approved apps through Composio. Astra reads and acts only within the accounts and scopes you grant."
            />
            <p className="shrink-0 text-sm text-gray-500">
              <span className="block text-[44px] font-medium leading-none tracking-tight text-black">1,000+</span>
              apps you can connect
            </p>
          </div>
          <div className="mt-12">
            <p className="mb-4 text-sm text-gray-500">Featured connectors · {connectors.length} of 1,000+</p>
            <ConnectorGallery />
          </div>
        </div>
      </section>

      {/* Knowledge, skills, memory */}
      <section id="knowledge" className="scroll-mt-28 border-t border-gray-200">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Context"
              title="Grounded in what your team knows."
              body="Astra brings the right context into every run, from the material you maintain, the way your team works, and what it has learned about you."
            />
            <div className="mt-10 space-y-3">
              {contextFeatures.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 rounded-[20px] border border-gray-200 p-5">
                  <div className="h-fit rounded-xl border border-gray-200 p-2.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <KnowledgeMock />
        </div>
      </section>

      {/* Gens */}
      <section id="gens" className="scroll-mt-28 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeader
            center
            eyebrow="Gens"
            title="Build your own specialists."
            body="Gens are custom assistants with their own instructions and knowledge. Create one for your team, or start from the Gens Store."
          />
          <div className="mx-auto mt-12 flex max-w-[720px] flex-wrap justify-center gap-3" aria-hidden="true">
            {mandalas.map((mandala) => (
              <div key={mandala} className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-gray-200 md:h-16 md:w-16">
                <Image src={`/astra/mandala-${mandala}.jpg`} alt="" fill className="scale-110 object-cover" sizes="64px" />
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featuredGens.map((gen) => (
              <article key={gen.name} className="rounded-[24px] border border-gray-200 bg-white p-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={`/astra/mandala-${gen.mandala}.jpg`} alt="" fill className="scale-110 object-cover" sizes="48px" />
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-gray-500">{gen.category}</p>
                <h3 className="mt-2 text-lg font-medium">{gen.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{gen.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-gray-200">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeader
            eyebrow="Architecture"
            title="A layered system you can reason about."
            body="Astra separates experience, orchestration, intelligence, context, and control, so agent work stays reviewable and every organization can connect the systems it already trusts."
          />
          <ol className="mt-14 space-y-2">
            {layers.map((layer, index) => (
              <li key={layer.title} className="grid items-center gap-4 rounded-[20px] border border-gray-200 p-5 md:grid-cols-[48px_200px_minmax(0,1fr)_auto] md:gap-8 md:px-7">
                <span className="text-xs tabular-nums text-gray-400">0{layers.length - index}</span>
                <p className="text-base font-medium">{layer.title}</p>
                <p className="text-sm text-gray-500">{layer.detail}</p>
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span key={item} className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">{item}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-28 border-t border-gray-200">
        <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
          <SectionHeader center eyebrow="Plans" title="Start with one team. Grow across the organization." />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {astraPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-[24px] border p-7 ${plan.popular ? 'border-blue-500/40 shadow-lg ring-1 ring-blue-500/20' : 'border-gray-200'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  {plan.popular ? <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-600 dark:text-blue-400">Most popular</span> : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-500">{plan.caption}</p>
                <ul className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href={plan.href}
                    className={`inline-flex h-10 w-full items-center justify-center rounded-full px-5 text-sm font-medium transition-opacity hover:opacity-90 ${plan.popular ? 'bg-black text-white' : 'border border-gray-200'}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built in India */}
      <section className="border-t border-gray-200">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
          <div className="relative aspect-[720/815] overflow-hidden rounded-[28px]">
            <Image src="/astra/arch.jpg" alt="An arched gateway framing the Astra mark at sunrise" fill className="object-cover" sizes="(min-width: 768px) 520px, 100vw" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Built in India"
              title="Made for the way India works, ready for the world."
              body="Astra runs on TNSA’s NGen models, built in India for multilingual teams, Indian documents, and the scale of Indian business, with the controls global enterprises expect."
            />
            <Link href="/models" className="mt-8 inline-flex items-center gap-1 text-sm font-medium">
              Explore NGen models <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-5 pb-10 md:px-8 md:pb-14">
        <div className="relative mx-auto flex min-h-[560px] max-w-[1376px] flex-col items-center justify-center overflow-hidden rounded-[32px] px-6 text-center">
          <Image src="/astra/sky-dusk.jpg" alt="" fill className="-z-10 object-cover" sizes="calc(100vw - 40px)" />
          <div className="absolute inset-0 -z-10 bg-fixed-black/25" />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fixed-white/80">Astra by TNSA</p>
          <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1] tracking-[-0.035em] text-fixed-white md:text-[68px]">
            Put your organization’s intelligence to work.
          </h2>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-fixed-white/85">
            Bring models, people, knowledge, and tools together in one controlled agentic workspace.
          </p>
          <Link href="/company/contact" className="mt-9 inline-flex h-11 items-center rounded-full bg-fixed-white px-6 text-sm font-medium text-fixed-black transition-opacity hover:opacity-90">
            Talk to TNSA
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
