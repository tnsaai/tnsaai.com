export type AsrSystem = {
  key: string
  name: string
  ours?: boolean
}

export type AsrRow = {
  language: string
  group: AsrGroupName
  scores: number[]
}

export type AsrGroupName = 'Indo-Aryan' | 'Dravidian' | 'Dialects and low-resource'

/**
 * Word Error Rate on the Voice of India benchmark. Lower is better.
 * Column order below matches `asrSystems`.
 */
export const asrSystems: AsrSystem[] = [
  { key: 'ngenstt_v2_indic', name: 'NGenSTT V2 Indic', ours: true },
  { key: 'stt_core', name: 'Indic-Transcribe-core' },
  { key: 'stt_saaras_v3', name: 'Saaras V3' },
  { key: 'stt_indic_conformer', name: 'Indic Conformer' },
  { key: 'stt_gemini3_pro', name: 'Gemini 3 Pro' },
  { key: 'stt_gemini3_flash', name: 'Gemini 3 Flash' },
  { key: 'stt_gemma_e4b', name: 'Gemma E4B' },
  { key: 'stt_omniasr_llm_7b', name: 'OmniASR LLM 7B' },
  { key: 'stt_omniasr_ctc_7b', name: 'OmniASR CTC 7B' },
]

export const asrAverage: number[] = [9.6, 8.7, 10.7, 17.8, 21.1, 23.1, 36.1, 44.5, 62.5]

export const asrRows: AsrRow[] = [
  { language: 'Hindi', group: 'Indo-Aryan', scores: [3.4, 3.5, 3.8, 6.5, 9.3, 7.1, 9.1, 9.6, 20.7] },
  { language: 'Bengali', group: 'Indo-Aryan', scores: [4.4, 4.3, 5.2, 9.5, 10.3, 11.1, 19.6, 20.9, 43.5] },
  { language: 'Urdu', group: 'Indo-Aryan', scores: [5.0, 5.0, 7.5, 8.0, 10.6, 11.0, 14.2, 14.8, 89.3] },
  { language: 'Marathi', group: 'Indo-Aryan', scores: [5.9, 5.7, 6.5, 11.6, 14.0, 14.2, 24.4, 24.5, 33.6] },
  { language: 'Punjabi', group: 'Indo-Aryan', scores: [8.7, 8.3, 8.6, 19.1, 19.3, 23.2, 23.4, 31.7, 80.7] },
  { language: 'Assamese', group: 'Indo-Aryan', scores: [8.8, 8.2, 9.1, 13.1, 23.7, 25.0, 45.0, 23.9, 33.3] },
  { language: 'Odia', group: 'Indo-Aryan', scores: [9.4, 8.7, 11.1, 13.1, 25.7, 23.3, 44.4, 72.3, 90.2] },
  { language: 'Gujarati', group: 'Indo-Aryan', scores: [10.0, 9.2, 9.7, 16.3, 18.1, 20.3, 27.3, 32.0, 62.5] },
  { language: 'Kannada', group: 'Dravidian', scores: [8.9, 7.4, 8.8, 16.3, 20.1, 18.5, 31.0, 35.0, 50.0] },
  { language: 'Tamil', group: 'Dravidian', scores: [9.9, 9.0, 9.1, 16.2, 15.5, 17.3, 37.9, 40.6, 58.3] },
  { language: 'Telugu', group: 'Dravidian', scores: [12.3, 11.4, 13.5, 20.0, 24.6, 25.5, 41.6, 48.7, 62.1] },
  { language: 'Malayalam', group: 'Dravidian', scores: [12.9, 11.5, 12.2, 28.2, 21.0, 30.1, 44.4, 48.8, 61.3] },
  { language: 'Chhattisgarhi', group: 'Dialects and low-resource', scores: [12.8, 13.6, 14.0, 24.5, 19.6, 21.7, 24.0, 20.7, 33.4] },
  { language: 'Maithili', group: 'Dialects and low-resource', scores: [14.2, 11.3, 14.2, 16.3, 27.2, 28.0, 36.7, 44.6, 51.6] },
  { language: 'Bhojpuri', group: 'Dialects and low-resource', scores: [17.6, 13.3, 17.9, 30.3, 24.1, 20.2, 27.0, 26.3, 39.2] },
]

export const asrGroupOrder: AsrGroupName[] = ['Indo-Aryan', 'Dravidian', 'Dialects and low-resource']

export const asrGroupDescriptions: Record<AsrGroupName, string> = {
  'Indo-Aryan':
    'Hindi, Bengali, Urdu, Marathi, Punjabi, Assamese, Odia, and Gujarati — the highest-volume languages in Indian voice products.',
  Dravidian:
    'Kannada, Tamil, Telugu, and Malayalam, where agglutinative morphology and long compound words raise the difficulty.',
  'Dialects and low-resource':
    'Chhattisgarhi, Maithili, and Bhojpuri, where limited public training data makes transcription hardest.',
}

/** Index of the best (lowest) score in a WER row. */
export function bestIndex(scores: number[]): number {
  return scores.reduce((best, score, index) => (score < scores[best] ? index : best), 0)
}
