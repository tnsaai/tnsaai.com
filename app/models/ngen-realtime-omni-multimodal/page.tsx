'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen-Realtime-Omni Multimodal is a true omni-modal assistant that processes text, audio, and image inputs in real-time for instantaneous interactions. Engineered for low-latency responses with 125K token context length, making it ideal for real-time communication and multimodal applications."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Real-time processing of text, audio, and image inputs",
      "Low-latency responses for instantaneous interactions",
      "125K token context length with 32K max generation",
      "Transformer-based multimodal architecture"
    ]
  },
  {
    "title": "Applications",
    "body": "Ideal for live transcription and analysis, interactive voice agents, real-time video analysis, and multimodal communication systems requiring instantaneous processing across multiple input types."
  },
  {
    "title": "Pricing",
    "body": "Rs 1.25 input / Rs 1.66 output per 1K tokens"
  }
]

const snapshots = []

export default function NgenRealtimeOmniMultimodalPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen-Realtime-Omni Multimodal",
    deck: "NGen-Realtime-Omni Multimodal is a true omni-modal assistant that processes text, audio, and image inputs in real-time for instantaneous interactions. Engineered for low-latency responses with 125K token context length, making it ideal for real-time communication and multimodal applications.",
    image: "/model-images/ngen-realtime-omni.png",
    imageAlt: "NGen-Realtime-Omni Multimodal",
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
