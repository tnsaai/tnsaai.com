'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 10B is a frontier model with 10 billion parameters, delivering powerful AI capabilities for complex tasks and advanced applications."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "10 billion parameter frontier model",
      "Advanced reasoning and problem-solving",
      "High-performance language understanding",
      "Suitable for complex AI applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.80 per 1K tokens"
  }
]

const snapshots = []

export default function Ngen310bPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 10B",
    deck: "NGen 3 10B is a frontier model with 10 billion parameters, delivering powerful AI capabilities for complex tasks and advanced applications.",
    image: "/model-images/ngen3-10b.png",
    imageAlt: "NGen 3 10B",
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
