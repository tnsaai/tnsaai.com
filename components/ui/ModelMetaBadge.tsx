'use client'

type ModelMetaBadgeProps = {
    label: string
}

export function ModelMetaBadge({ label }: ModelMetaBadgeProps) {
    return (
        <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-gray-200/80 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-600 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
                {label}
            </span>
        </div>
    )
}
