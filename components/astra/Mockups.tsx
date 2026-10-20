import Image from 'next/image'
import {
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  FolderKanban,
  GitBranch,
  GitCommitHorizontal,
  Hand,
  Mic,
  Plug,
  Plus,
  Search,
  Sparkles,
  Wand2,
} from 'lucide-react'

// Illustrative product mockups for the Astra page. Built from Astra's real concepts
// (classified plan steps, approvals, repositories, extraction) and themed with the site tokens.

function Window({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="ml-2 truncate text-[11px] text-gray-400">{title}</span>
      </div>
      {children}
    </div>
  )
}

const stepTone = {
  read: 'text-gray-500 bg-gray-100',
  safe_write: 'text-emerald-700 bg-emerald-500/10 dark:text-emerald-400',
  consequential_write: 'text-amber-700 bg-amber-500/10 dark:text-amber-400',
}

export function WorkMock() {
  const steps = [
    { title: 'Read Q3 launch notes in Notion', tool: 'notion.search', risk: 'read' as const, done: true },
    { title: 'Pull pipeline numbers from Sheets', tool: 'sheets.read', risk: 'read' as const, done: true },
    { title: 'Draft the launch update', tool: 'docs.create', risk: 'safe_write' as const, done: true },
    { title: 'Email the update to the team', tool: 'gmail.send', risk: 'consequential_write' as const, done: false },
  ]

  return (
    <Window title="Astra Work — Launch planning">
      <div className="grid md:grid-cols-[210px_minmax(0,1fr)]">
        <aside className="hidden border-r border-gray-200 p-3 text-xs md:block">
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2.5 py-2 text-gray-500">
            <Search className="h-3.5 w-3.5" /> Search
          </div>
          <p className="mt-4 px-2 text-[10px] uppercase tracking-[0.14em] text-gray-400">Workspace</p>
          {[
            [FolderKanban, 'Projects'],
            [BookOpen, 'Knowledge'],
            [Plug, 'Connectors'],
            [Wand2, 'Skills'],
            [Sparkles, 'Gens'],
          ].map(([Icon, label]) => {
            const I = Icon as typeof Search
            return (
              <div key={label as string} className="mt-1 flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-gray-600">
                <I className="h-3.5 w-3.5" /> {label as string}
              </div>
            )
          })}
          <p className="mt-4 px-2 text-[10px] uppercase tracking-[0.14em] text-gray-400">Recent</p>
          {['Launch planning', 'Vendor review', 'Hiring loop'].map((chat, i) => (
            <div key={chat} className={`mt-1 truncate rounded-lg px-2.5 py-1.5 ${i === 0 ? 'bg-gray-100 text-black' : 'text-gray-500'}`}>{chat}</div>
          ))}
        </aside>

        <div className="space-y-4 p-4 md:p-6">
          <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-gray-100 px-4 py-2.5 text-sm">
            Summarise the Q3 launch status and send the team an update.
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium">Plan · 4 steps</p>
              <span className="text-[11px] text-gray-400">Approve for me</span>
            </div>
            <ol className="mt-3 space-y-2">
              {steps.map((step) => (
                <li key={step.title} className="flex items-center gap-3 text-xs">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${step.done ? 'bg-black text-white' : 'border border-gray-300 text-gray-400'}`}>
                    {step.done ? <Check className="h-3 w-3" /> : <Hand className="h-3 w-3" />}
                  </span>
                  <span className={`min-w-0 flex-1 truncate ${step.done ? '' : 'text-gray-500'}`}>{step.title}</span>
                  <span className="hidden font-mono text-[10px] text-gray-400 sm:inline">{step.tool}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${stepTone[step.risk]}`}>{step.risk.replace('_', ' ')}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
            <p className="text-xs font-medium">Approval needed · gmail.send</p>
            <p className="mt-1 text-xs text-gray-500">Send “Q3 launch update” to team@yourcompany.com · scope mail.send · expires in 10 min</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-black px-3 py-1.5 text-[11px] font-medium text-white">Approve once</span>
              <span className="rounded-full border border-gray-200 px-3 py-1.5 text-[11px] font-medium">Deny</span>
            </div>
          </div>
        </div>
      </div>
    </Window>
  )
}

export function VibeMock() {
  const diff = [
    { sign: ' ', text: 'export async function createInvoice(order: Order) {' },
    { sign: '-', text: '  const total = order.items.reduce((s, i) => s + i.price, 0)' },
    { sign: '+', text: '  const total = order.items.reduce((s, i) => s + i.price * i.qty, 0)' },
    { sign: '+', text: '  if (total <= 0) throw new InvoiceError("Empty order")' },
    { sign: ' ', text: '  return billing.issue({ orderId: order.id, total })' },
  ]

  return (
    <Window title="Vibe — billing-service">
      <div className="space-y-3 p-4 text-xs md:p-5">
        <div className="flex flex-wrap items-center gap-2 text-gray-500">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1"><GitBranch className="h-3 w-3" /> fix/invoice-qty</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1"><GitCommitHorizontal className="h-3 w-3" /> 3 commits ahead of main</span>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 font-mono text-[11px] leading-6">
          <div className="border-b border-gray-200 bg-gray-50 px-3 py-1.5 text-gray-500">src/invoice.ts</div>
          {diff.map((line, i) => (
            <div
              key={i}
              className={`flex gap-3 px-3 ${line.sign === '+' ? 'bg-emerald-500/10' : line.sign === '-' ? 'bg-red-500/10' : ''}`}
            >
              <span className="w-3 select-none text-gray-400">{line.sign}</span>
              <span className="truncate">{line.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Vibecoding… running the invoice tests
        </div>
      </div>
    </Window>
  )
}

export function DocMock() {
  const fields = [
    ['Document', 'Purchase invoice'],
    ['Vendor', 'Shree Ganesh Traders'],
    ['Invoice no.', 'SGT/24-25/0417'],
    ['GSTIN', '27AAB•••••1Z5'],
    ['Total', '₹ 1,18,000.00'],
    ['Language', 'Hindi → English'],
  ]

  return (
    <Window title="Doc Agents — Extraction">
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:p-5">
        <div className="relative rounded-lg border border-gray-200 bg-gray-50 p-4">
          <FileText className="h-5 w-5 text-gray-400" />
          <div className="mt-3 space-y-2">
            {[90, 70, 82, 55, 76, 64, 88, 48].map((w, i) => (
              <div key={i} className={`h-1.5 rounded-full ${i === 2 || i === 5 ? 'bg-blue-500/50' : 'bg-gray-200'}`} style={{ width: `${w}%` }} />
            ))}
          </div>
          <span className="absolute bottom-3 right-3 rounded-full bg-white px-2 py-0.5 text-[10px] text-gray-500 shadow-sm">scan · page 1/2</span>
        </div>
        <dl className="divide-y divide-gray-200 text-xs">
          {fields.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-3 py-2">
              <dt className="text-gray-500">{label}</dt>
              <dd className="text-right font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Window>
  )
}

export function AwaazMock() {
  const bars = [6, 14, 22, 30, 18, 26, 34, 20, 12, 24, 32, 16, 8, 20, 28, 14]
  return (
    <Window title="Awaaz — Voice agent">
      <div className="flex flex-col items-center gap-5 p-6">
        <div className="relative h-28 w-28 overflow-hidden rounded-full">
          <Image src="/astra/sky-mist.jpg" alt="" fill className="object-cover" sizes="112px" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Mic className="h-7 w-7 text-fixed-white drop-shadow" />
          </div>
        </div>
        <div className="flex h-10 items-end gap-1" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} className="w-1.5 rounded-full bg-blue-500/70" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="w-full space-y-2 text-xs">
          <p className="w-fit max-w-[85%] rounded-2xl bg-gray-100 px-3 py-2">नमस्ते, मेरा ऑर्डर कब तक पहुँचेगा?</p>
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl border border-gray-200 px-3 py-2">Your order ships today and arrives Thursday. Shall I send the tracking link on WhatsApp?</p>
        </div>
      </div>
    </Window>
  )
}

export function KnowledgeMock() {
  return (
    <Window title="Knowledge — Team handbook">
      <div className="p-4 text-xs md:p-5">
        <div className="flex items-center justify-between">
          <p className="font-medium">Team handbook · 24 sources</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-black px-2.5 py-1 text-[10px] font-medium text-white"><Plus className="h-3 w-3" /> Add</span>
        </div>
        <ul className="mt-3 divide-y divide-gray-200">
          {['Leave policy 2026.pdf', 'Brand guidelines.pptx', 'Pricing model.xlsx', 'Onboarding checklist.docx'].map((file) => (
            <li key={file} className="flex items-center gap-2 py-2 text-gray-600">
              <FileText className="h-3.5 w-3.5 text-gray-400" />
              <span className="flex-1 truncate">{file}</span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
            </li>
          ))}
        </ul>
      </div>
    </Window>
  )
}
