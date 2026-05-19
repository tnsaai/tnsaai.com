'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 140M is a compact model with 140 million parameters, optimized for lightweight applications requiring fast inference and minimal resource usage."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "140 million parameter compact model",
      "Fast inference speed",
      "Minimal resource requirements",
      "Ideal for edge deployment"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.05 per 1K tokens"
  }
]

const snapshots = []

export default function Ngen3140mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 140M",
    deck: "NGen 3 140M is a compact model with 140 million parameters, optimized for lightweight applications requiring fast inference and minimal resource usage.",
    image: "/model-images/ngen3-140m.png",
    imageAlt: "NGen 3 140M",
    actions: [
    {
        "label": "Try in API Platform",
        "href": "https://platform.tnsaai.com",
        "external": true
    },
    {
        "label": "NGen 3 System Card",
        "href": "/NGen3%20System%20Card.pdf"
    }
],
    sections,
    snapshots,
  })
}
