'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen-Realtime-Omni-Audio provides real-time audio processing and understanding capabilities. Process and understand audio streams in real-time for immediate insights with accurate speech recognition and comprehensive audio analysis."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Real-time audio processing and understanding",
      "Accurate speech recognition and transcription",
      "Audio analysis for sentiment and speaker identification",
      "Up to 60 minutes max duration per session"
    ]
  },
  {
    "title": "Applications",
    "body": "Ideal for live transcription of meetings and events, voice-controlled applications, call center automation, and real-time audio analysis systems."
  },
  {
    "title": "Pricing",
    "body": "Rs 1.66 per minute"
  }
]

const snapshots: never[] = []

export default function NgenRealtimeOmniAudioAudioPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Audio Model",
    title: "NGen-Realtime-Omni-Audio",
    deck: "NGen-Realtime-Omni-Audio provides real-time audio processing and understanding capabilities. Process and understand audio streams in real-time for immediate insights with accurate speech recognition and comprehensive audio analysis.",
    image: "/model-images/ngen-realtime-audio.png",
    imageAlt: "NGen-Realtime-Omni-Audio",
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
