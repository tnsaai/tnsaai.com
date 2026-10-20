// TNSA serving regions and which models each region serves.
// Flagship, speech, and realtime models run in every region; all other models
// are served from the Indian regions only.

export type RegionId = 'in-south' | 'in-central' | 'us-east-1'

export const regions: { id: RegionId; name: string; country: string; flag: string }[] = [
  { id: 'in-south', name: 'India South', country: 'India', flag: '/flags/in.svg' },
  { id: 'in-central', name: 'India Central', country: 'India', flag: '/flags/in.svg' },
  { id: 'us-east-1', name: 'US East-1', country: 'United States', flag: '/flags/us.svg' },
]

const INDIA_REGIONS: RegionId[] = ['in-south', 'in-central']
const ALL_REGIONS: RegionId[] = regions.map((region) => region.id)

// Model page slugs (app/models/<slug>) served in every region.
const GLOBAL_MODELS = new Set([
  'ngen4.5-vayu',
  'ngen4.3-pro',
  'ngen4.1',
  'ngen4.1-pro',
  'ngenstt-v2-indic',
  'audiotextspeech-1-audio',
  'audiotextspeech-pro-audio',
  'ngen-realtime-omni-audio-audio',
  'ngen-realtime-omni-multimodal',
])

export function regionsForModel(slug: string): RegionId[] {
  return GLOBAL_MODELS.has(slug) ? ALL_REGIONS : INDIA_REGIONS
}
