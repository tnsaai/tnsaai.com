'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Stellar Large is an enterprise-ready reasoning model at stellar scale, designed for complex problem-solving and advanced analytical tasks."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Stellar scale reasoning capabilities",
      "Enterprise-ready performance",
      "Advanced problem-solving",
      "Complex analytical tasks"
    ]
  },
  {
    "title": "Pricing",
    "body": "$1.20 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function StellarLargePage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "Stellar Large",
    deck: "Stellar Large is an enterprise-ready reasoning model at stellar scale, designed for complex problem-solving and advanced analytical tasks.",
    image: "/model-images/image-banner.jpg",
    imageAlt: "Stellar Large",
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
