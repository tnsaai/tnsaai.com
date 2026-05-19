'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Stellar Mini delivers compact power with smart reasoning capabilities, offering efficient performance for a wide range of analytical applications."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Compact power with smart reasoning",
      "Efficient performance",
      "Balanced capabilities",
      "Cost-effective reasoning"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.30 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function StellarMiniPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "Stellar Mini",
    deck: "Stellar Mini delivers compact power with smart reasoning capabilities, offering efficient performance for a wide range of analytical applications.",
    image: "/model-images/image-banner.jpg",
    imageAlt: "Stellar Mini",
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
