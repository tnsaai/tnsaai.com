'use client'

type LabelValue = {
    label: string
    value: string
}

type Snapshot = {
    name: string
    description: string
    badge?: string
    id: string
}

type RateLimit = {
    tier: string
    rpm: string
    tpm: string
    batchQueueLimit: string
}

export type ModelPlatformProfile = {
    name: string
    variantCount: string
    reasoningTier: string
    speedTier: string
    inputPrice: string
    cachedInputPrice: string
    outputPrice: string
    inputSupport: string
    outputSupport: string
    overview: string
    overviewBullets: string[]
    reasoningLevels?: string[]
    coreStats: LabelValue[]
    modalities: LabelValue[]
    endpoints: LabelValue[]
    features: LabelValue[]
    tools: LabelValue[]
    snapshots: Snapshot[]
    rateLimits: RateLimit[]
    nonReasoning?: boolean
}

function DetailStat({ label, value }: LabelValue) {
    return (
        <div className="border-t border-gray-100 pt-4">
            <p className="text-[12px] text-gray-500">{label}</p>
            <p className="mt-1 text-[15px] leading-6 text-black">{value}</p>
        </div>
    )
}

function SectionHeading({ label, title, body }: { label?: string; title: string; body?: string }) {
    return (
        <div className="mb-6">
            {label ? <p className="mb-3 text-[12px] text-gray-500">{label}</p> : null}
            <h2 className="text-[22px] font-normal leading-tight text-black">{title}</h2>
            {body ? <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-gray-600">{body}</p> : null}
        </div>
    )
}

export function ModelPlatformDetails({ profile }: { profile: ModelPlatformProfile }) {
    return (
        <div className="space-y-12">
            <section>
                <SectionHeading label="Selected release" title={profile.name} body={`${profile.variantCount} internal variant`} />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailStat label="Reasoning" value={profile.reasoningTier} />
                    <DetailStat label="Speed" value={profile.speedTier} />
                    <DetailStat label="Input price" value={profile.inputPrice} />
                    <DetailStat label="Output price" value={profile.outputPrice} />
                </div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <DetailStat label="Input" value={profile.inputSupport} />
                    <DetailStat label="Output" value={profile.outputSupport} />
                </div>
            </section>

            <section className="border-t border-gray-100 pt-12">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <SectionHeading title="Overview" body="Model capabilities, context, and selection details." />
                    <div className="text-[14px] leading-7 text-gray-700">
                        <p>{profile.overview}</p>
                        <ul className="mt-5 list-disc space-y-2 pl-5">
                            {profile.overviewBullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                        {profile.reasoningLevels?.length ? (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {profile.reasoningLevels.map((level) => (
                                    <span key={level} className="rounded-full border border-gray-200 px-3 py-1 text-[12px] text-black">
                                        {level}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {profile.coreStats.map((stat) => (
                        <DetailStat key={stat.label} label={stat.label} value={stat.value} />
                    ))}
                </div>
            </section>

            <section className="border-t border-gray-100 pt-12">
                <SectionHeading
                    title="Pricing"
                    body="Pricing is based on the selected internal release."
                />
                <div className="grid gap-5 sm:grid-cols-3">
                    <DetailStat label="Input" value={profile.inputPrice} />
                    <DetailStat label="Cached input" value={profile.cachedInputPrice} />
                    <DetailStat label="Output" value={profile.outputPrice} />
                </div>
            </section>
        </div>
    )
}
