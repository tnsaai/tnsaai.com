'use client'

import { useState } from 'react'
import { Check, Hand, ShieldCheck } from 'lucide-react'
import { approvalModes, toolClasses, type Decision } from '@/content/astra'

const decisionCopy: Record<Decision, { label: string; className: string; icon: typeof Check }> = {
  execute: { label: 'Runs', className: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400', icon: Check },
  ask: { label: 'Waits for you', className: 'bg-amber-500/10 text-amber-700 dark:text-amber-400', icon: Hand },
  scoped: { label: 'Runs within scopes', className: 'bg-blue-500/10 text-blue-700 dark:text-blue-400', icon: ShieldCheck },
}

export function ApprovalModes() {
  const [modeId, setModeId] = useState<(typeof approvalModes)[number]['id']>('auto_safe')
  const mode = approvalModes.find((m) => m.id === modeId) ?? approvalModes[1]

  return (
    <div className="rounded-xl border border-gray-200 p-5 md:p-8">
      <div role="tablist" aria-label="Approval mode" className="inline-flex max-w-full flex-wrap gap-0.5 rounded-lg bg-gray-100 p-0.5 text-sm">
        {approvalModes.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={m.id === modeId}
            onClick={() => setModeId(m.id)}
            className={`rounded-md px-3 py-1.5 font-medium transition-colors ${m.id === modeId ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
          >
            {m.name}
          </button>
        ))}
      </div>
      <p className="mt-5 max-w-[560px] text-sm leading-6 text-gray-500">{mode.summary}</p>

      <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
        {toolClasses.map((toolClass) => {
          const decision = decisionCopy[mode.policy[toolClass.id]]
          const Icon = decision.icon
          return (
            <div key={toolClass.id} className="grid gap-3 py-5 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:gap-8">
              <div>
                <p className="text-sm font-medium">{toolClass.name}</p>
                <p className="mt-1 text-xs text-gray-500">{toolClass.description}</p>
              </div>
              <p className="text-xs text-gray-500">{toolClass.examples}</p>
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${decision.className}`}>
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {decision.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
