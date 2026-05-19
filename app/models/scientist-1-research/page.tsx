'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Scientist-1 is specialized for scientific research and analysis, providing advanced capabilities for processing and understanding complex scientific information."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Specialized for scientific research",
      "Advanced analysis capabilities",
      "Complex scientific information processing",
      "Research-focused understanding"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.50 per query"
  }
]

const snapshots: never[] = []

export default function Scientist1ResearchPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Search Model",
    title: "Scientist-1",
    deck: "Scientist-1 is specialized for scientific research and analysis, providing advanced capabilities for processing and understanding complex scientific information.",
    image: "/model-images/scientist-1.png",
    imageAlt: "Scientist-1",
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
