'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 2 170M is a Gen-2 Core research model with 170 million parameters, developed for exploring foundational AI architectures and training methodologies."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "170 million parameter research model",
      "Gen-2 Core architecture",
      "Open research model",
      "Not available for API use"
    ]
  }
]

const snapshots = []

export default function Ngen2170mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 2 170M",
    deck: "NGen 2 170M is a Gen-2 Core research model with 170 million parameters, developed for exploring foundational AI architectures and training methodologies.",
    image: "/model-images/ngen2-170m.png",
    imageAlt: "NGen 2 170M",
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
