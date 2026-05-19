'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 90M is a smart, ultra-compact model with 90 million parameters, designed for resource-constrained environments requiring efficient AI capabilities."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "90 million parameter smart model",
      "Ultra-compact and efficient",
      "Low resource requirements",
      "Perfect for edge devices"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.04 per 1K tokens"
  }
]

const snapshots = []

export default function Ngen390mPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 90M",
    deck: "NGen 3 90M is a smart, ultra-compact model with 90 million parameters, designed for resource-constrained environments requiring efficient AI capabilities.",
    image: "/model-images/ngen3-90m.png",
    imageAlt: "NGen 3 90M",
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
