'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 3B provides accessible AI with 3 billion parameters, delivering efficient performance for a wide range of applications at an affordable price point."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "3 billion parameter accessible model",
      "Cost-effective AI solution",
      "Efficient performance",
      "Suitable for diverse applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.40 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen33bPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 3B",
    deck: "NGen 3 3B provides accessible AI with 3 billion parameters, delivering efficient performance for a wide range of applications at an affordable price point.",
    image: "/model-images/ngen3-3b.png",
    imageAlt: "NGen 3 3B",
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
