'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Stellar Nano is an ultra-compact edge-native reasoning model, optimized for deployment on resource-constrained devices while maintaining intelligent capabilities."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Ultra-compact edge-native model",
      "Optimized for resource-constrained devices",
      "Efficient reasoning capabilities",
      "Minimal resource footprint"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.15 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function StellarNanoPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "Stellar Nano",
    deck: "Stellar Nano is an ultra-compact edge-native reasoning model, optimized for deployment on resource-constrained devices while maintaining intelligent capabilities.",
    image: "/model-images/image-banner.jpg",
    imageAlt: "Stellar Nano",
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
