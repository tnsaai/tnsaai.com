'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 1 is the pioneer foundation model that started it all, representing the first generation of TNSA AI's language model development and research."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Pioneer foundation model",
      "First generation architecture",
      "Historical significance in TNSA AI development",
      "Foundation for future models"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.02 per 1K tokens"
  }
]

const snapshots = []

export default function Ngen1Page() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 1",
    deck: "NGen 1 is the pioneer foundation model that started it all, representing the first generation of TNSA AI's language model development and research.",
    image: "/model-images/ngen1.png",
    imageAlt: "NGen 1",
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
