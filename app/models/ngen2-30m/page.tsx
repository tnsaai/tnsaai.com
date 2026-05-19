'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 2 30M is a Compact Core research model with 30 million parameters, designed for studying efficient AI architectures and lightweight model development."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "30 million parameter research model",
      "Compact Core architecture",
      "Open research model",
      "Not available for API use"
    ]
  }
]

const snapshots: never[] = []

export default function Ngen230mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 2 30M",
    deck: "NGen 2 30M is a Compact Core research model with 30 million parameters, designed for studying efficient AI architectures and lightweight model development.",
    image: "/model-images/ngen2-30m.png",
    imageAlt: "NGen 2 30M",
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
