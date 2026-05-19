'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "AudioTextSpeech-1 provides basic text-to-speech capabilities for simple applications. Cost-effective solution for converting text to natural-sounding speech with support for common use cases and languages."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Basic text-to-speech synthesis",
      "Natural-sounding voice output",
      "Cost-effective solution for simple applications",
      "Support for common languages"
    ]
  },
  {
    "title": "Applications",
    "body": "Ideal for basic voice notifications, simple voice assistants, text-to-speech for accessibility features, and cost-effective audio content generation."
  },
  {
    "title": "Pricing",
    "body": "Rs 0.33 per minute"
  }
]

const snapshots = []

export default function Audiotextspeech1AudioPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Audio Model",
    title: "AudioTextSpeech-1",
    deck: "AudioTextSpeech-1 provides basic text-to-speech capabilities for simple applications. Cost-effective solution for converting text to natural-sounding speech with support for common use cases and languages.",
    image: "/model-images/audio-text-speech-1.png",
    imageAlt: "AudioTextSpeech-1",
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
