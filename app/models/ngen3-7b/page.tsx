'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 7B is a foundational model with 7 billion parameters, offering a balanced combination of performance and efficiency for diverse AI applications."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "7 billion parameter foundational model",
      "Balanced performance and efficiency",
      "Strong language understanding",
      "Versatile for various applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.60 per 1K tokens"
  }
]

const snapshots = []

export default function Ngen37bPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 7B",
    deck: "NGen 3 7B is a foundational model with 7 billion parameters, offering a balanced combination of performance and efficiency for diverse AI applications.",
    image: "/model-images/ngen3-7b.png",
    imageAlt: "NGen 3 7B",
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
