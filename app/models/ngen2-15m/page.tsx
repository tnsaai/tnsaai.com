'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 2 15M is a Micro-Scale research model with 15 million parameters, developed for exploring ultra-efficient AI architectures and minimal resource deployment."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "15 million parameter research model",
      "Micro-Scale architecture",
      "Open research model",
      "Not available for API use"
    ]
  }
]

const snapshots: never[] = []

export default function Ngen215mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 2 15M",
    deck: "NGen 2 15M is a Micro-Scale research model with 15 million parameters, developed for exploring ultra-efficient AI architectures and minimal resource deployment.",
    image: "/model-images/ngen2-15m.png",
    imageAlt: "NGen 2 15M",
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
