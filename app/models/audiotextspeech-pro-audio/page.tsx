'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "AudioTextSpeech-Pro delivers professional-grade text-to-speech synthesis with natural-sounding voices. Generate speech that is indistinguishable from human voice with support for multiple languages and dialects, producing high-fidelity audio output."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Natural-sounding voices indistinguishable from human speech",
      "Support for multiple languages and dialects",
      "High-fidelity audio output for professional quality",
      "Up to 30 minutes max duration per generation"
    ]
  },
  {
    "title": "Applications",
    "body": "Perfect for creating audiobooks and podcasts, generating voiceovers for videos and presentations, e-learning content, and accessibility applications for visually impaired users."
  },
  {
    "title": "Pricing",
    "body": "Rs 1.00 per minute"
  }
]

const snapshots = []

export default function AudiotextspeechProAudioPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Audio Model",
    title: "AudioTextSpeech-Pro",
    deck: "AudioTextSpeech-Pro delivers professional-grade text-to-speech synthesis with natural-sounding voices. Generate speech that is indistinguishable from human voice with support for multiple languages and dialects, producing high-fidelity audio output.",
    image: "/model-images/audio-text-speech-pro.png",
    imageAlt: "AudioTextSpeech-Pro",
    actions: [
    {
        "label": "Try in API Platform",
        "href": "https://platform.tnsaai.com",
        "external": true
    }
],
    sections,
    snapshots,
  })
}
