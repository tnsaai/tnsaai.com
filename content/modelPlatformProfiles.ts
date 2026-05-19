import type { ModelPlatformProfile } from '@/components/ui/ModelPlatformDetails'

const commonModalities = [
    { label: 'Text', value: 'Supported' },
    { label: 'Image', value: 'Supported' },
    { label: 'Audio', value: 'Supported' },
    { label: 'Video', value: 'Supported' },
]

const commonEndpoints = [
    { label: 'Chat Completions', value: 'v1/chat/completions' },
    { label: 'Responses', value: 'v1/responses' },
    { label: 'Batch', value: 'v1/batch' },
    { label: 'Realtime', value: 'v1/realtime' },
    { label: 'Embeddings', value: 'v1/embeddings' },
    { label: 'Image generation', value: 'v1/images/generations' },
    { label: 'Speech generation', value: 'v1/audio/speech' },
    { label: 'Transcription', value: 'v1/audio/transcriptions' },
]

const commonFeatures = [
    { label: 'Streaming', value: 'Supported' },
    { label: 'Structured outputs', value: 'Supported' },
    { label: 'Function calling', value: 'Supported' },
    { label: 'JSON mode', value: 'Supported' },
    { label: 'Fine-tuning', value: 'Not supported' },
    { label: 'Distillation', value: 'Not supported' },
]

const commonTools = [
    { label: 'Web search', value: 'Supported' },
    { label: 'File search', value: 'Supported' },
    { label: 'Code interpreter', value: 'Supported' },
    { label: 'Apply patch', value: 'Supported' },
    { label: 'Hosted shell', value: 'Supported' },
    { label: 'MCP', value: 'Supported' },
    { label: 'Computer use', value: 'Supported' },
    { label: 'Tool search', value: 'Supported' },
]

const commonRateLimits = [
    { tier: 'Free', rpm: '250', tpm: '250,000', batchQueueLimit: '100,000' },
    { tier: 'Tier 1', rpm: '1,500', tpm: '2,000,000', batchQueueLimit: '800,000' },
    { tier: 'Tier 2', rpm: '4,000', tpm: '6,000,000', batchQueueLimit: '2,500,000' },
]

function profile(overrides: Omit<ModelPlatformProfile, 'modalities' | 'endpoints' | 'features' | 'tools' | 'rateLimits'>): ModelPlatformProfile {
    return {
        ...overrides,
        modalities: commonModalities,
        endpoints: commonEndpoints,
        features: commonFeatures,
        tools: commonTools,
        rateLimits: commonRateLimits,
    }
}

export const ngen4PlatformProfile = profile({
    name: 'NGen-4',
    variantCount: '1',
    reasoningTier: 'Highest',
    speedTier: 'Low',
    inputPrice: 'Rs 48 / 1M input tokens',
    cachedInputPrice: 'Rs 12 / 1M cached input tokens',
    outputPrice: 'Rs 88 / 1M output tokens',
    inputSupport: 'Text, image, audio, video',
    outputSupport: 'Text, image, audio, video',
    overview: 'NGen-4 has a 256K context window with a Low speed tier. Reasoning tier: Highest. Supported reasoning levels: Low, Medium, High. Input support: text, image, audio, video. Output support: text, image, audio, video.',
    overviewBullets: [
        'Context window: 256K (262,144 tokens).',
        'Speed tier: Low.',
        'Reasoning tier: Highest.',
        'Input support: text, image, audio, video. Output support: text, image, audio, video.',
        'Reasoning levels supported: Low, Medium, High.',
    ],
    reasoningLevels: ['Low', 'Medium', 'High'],
    coreStats: [
        { label: 'Context window', value: '256K (262,144 tokens)' },
        { label: 'Max output', value: '64K (65,536 tokens)' },
        { label: 'Knowledge cutoff', value: 'Jun 2024' },
        { label: 'Rate limit', value: '1,800 RPM' },
    ],
    snapshots: [
        {
            name: 'NGen-4',
            description: 'Base NGen-4 model with a 256K context window and the highest reasoning profile.',
            badge: 'Default',
            id: 'NGen4',
        },
    ],
})

export const ngen4MiniPlatformProfile = profile({
    name: 'NGen 4 Mini',
    variantCount: '1',
    reasoningTier: 'High',
    speedTier: 'Medium',
    inputPrice: 'Rs 32 / 1M input tokens',
    cachedInputPrice: 'Rs 8 / 1M cached input tokens',
    outputPrice: 'Rs 56 / 1M output tokens',
    inputSupport: 'Text, image, audio, video',
    outputSupport: 'Text, image, audio, video',
    overview: 'NGen 4 Mini has a 256K context window with a Medium speed tier. Reasoning tier: High. Input support: text, image, audio, video. Output support: text, image, audio, video.',
    overviewBullets: [
        'Context window: 256K (262,144 tokens).',
        'Speed tier: Medium.',
        'Reasoning tier: High.',
        'Input support: text, image, audio, video. Output support: text, image, audio, video.',
    ],
    coreStats: [
        { label: 'Context window', value: '256K (262,144 tokens)' },
        { label: 'Max output', value: '64K (65,536 tokens)' },
        { label: 'Knowledge cutoff', value: 'Jan 2025' },
        { label: 'Rate limit', value: '1,800 RPM' },
    ],
    snapshots: [
        {
            name: 'NGen 4 Mini',
            description: '256K context NGen 4 model with high reasoning.',
            badge: 'Default',
            id: 'ngen4-mini',
        },
    ],
})

export const ngen4LitePlatformProfile = profile({
    name: 'NGen 4 Lite',
    variantCount: '1',
    reasoningTier: 'Medium',
    speedTier: 'High',
    inputPrice: 'Rs 24 / 1M input tokens',
    cachedInputPrice: 'Rs 6 / 1M cached input tokens',
    outputPrice: 'Rs 40 / 1M output tokens',
    inputSupport: 'Text, image, audio, video',
    outputSupport: 'Text, image, audio, video',
    overview: 'NGen 4 Lite has a 256K context window with a High speed tier. Reasoning tier: Medium. Input support: text, image, audio, video. Output support: text, image, audio, video.',
    overviewBullets: [
        'Context window: 256K (262,144 tokens).',
        'Speed tier: High.',
        'Reasoning tier: Medium.',
        'Input support: text, image, audio, video. Output support: text, image, audio, video.',
    ],
    coreStats: [
        { label: 'Context window', value: '256K (262,144 tokens)' },
        { label: 'Max output', value: '64K (65,536 tokens)' },
        { label: 'Knowledge cutoff', value: 'Jan 2025' },
        { label: 'Rate limit', value: '1,200 RPM' },
    ],
    snapshots: [
        {
            name: 'NGen 4 Lite',
            description: '256K context NGen 4 Lite model with medium reasoning.',
            id: 'ngen4-lite',
        },
    ],
})

export const ngen4FlashPlatformProfile = profile({
    name: 'NGen 4 Flash',
    variantCount: '1',
    reasoningTier: 'Lowest',
    speedTier: 'Low',
    inputPrice: 'Rs 12 / 1M input tokens',
    cachedInputPrice: 'Rs 3 / 1M cached input tokens',
    outputPrice: 'Rs 20 / 1M output tokens',
    inputSupport: 'Text, image, audio, video',
    outputSupport: 'Text, image, audio, video',
    overview: 'NGen 4 Flash has a 256K context window with a Low speed tier. This is a non-reasoning model. Input support: text, image, audio, video. Output support: text, image, audio, video.',
    overviewBullets: [
        'Context window: 256K (262,144 tokens).',
        'Speed tier: Low.',
        'Reasoning levels are not available for this model.',
        'Input support: text, image, audio, video. Output support: text, image, audio, video.',
    ],
    coreStats: [
        { label: 'Context window', value: '256K (262,144 tokens)' },
        { label: 'Max output', value: '64K (65,536 tokens)' },
        { label: 'Knowledge cutoff', value: 'Jan 2025' },
        { label: 'Rate limit', value: '1,600 RPM' },
    ],
    snapshots: [
        {
            name: 'NGen 4 Flash',
            description: '256K context NGen 4 Flash model with the lowest reasoning profile.',
            badge: 'Realtime-friendly',
            id: 'ngen4-flash',
        },
    ],
    nonReasoning: true,
})

export const ngen4BlazePlatformProfile = profile({
    name: 'NGen 4 Blaze',
    variantCount: '1',
    reasoningTier: 'Low',
    speedTier: 'Highest',
    inputPrice: 'Rs 16 / 1M input tokens',
    cachedInputPrice: 'Rs 4 / 1M cached input tokens',
    outputPrice: 'Rs 28 / 1M output tokens',
    inputSupport: 'Text, image, audio, video',
    outputSupport: 'Text, image, audio, video',
    overview: 'NGen 4 Blaze has a 256K context window with a Highest speed tier. Reasoning tier: Low. Input support: text, image, audio, video. Output support: text, image, audio, video.',
    overviewBullets: [
        'Context window: 256K (262,144 tokens).',
        'Speed tier: Highest.',
        'Reasoning tier: Low.',
        'Input support: text, image, audio, video. Output support: text, image, audio, video.',
    ],
    coreStats: [
        { label: 'Context window', value: '256K (262,144 tokens)' },
        { label: 'Max output', value: '64K (65,536 tokens)' },
        { label: 'Knowledge cutoff', value: 'Jan 2025' },
        { label: 'Rate limit', value: '900 RPM' },
    ],
    snapshots: [
        {
            name: 'NGen 4 Blaze',
            description: '256K context NGen 4 Blaze model with low reasoning.',
            id: 'ngen4-blaze',
        },
    ],
})
