'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 15M is a micro-scale model with 15 million parameters, offering extremely lightweight AI capabilities for highly resource-constrained applications."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "15 million parameter micro model",
      "Extremely lightweight",
      "Minimal resource footprint",
      "Ideal for IoT and embedded systems"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.01 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen315mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 15M",
    deck: "NGen 3 15M is a micro-scale model with 15 million parameters, offering extremely lightweight AI capabilities for highly resource-constrained applications.",
    image: "/model-images/ngen3-15m.png",
    imageAlt: "NGen 3 15M",
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
