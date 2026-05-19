'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Code-1 supports 30+ programming languages with advanced debugging capabilities, providing comprehensive code generation, analysis, and debugging support."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Supports 30+ programming languages",
      "Advanced debugging capabilities",
      "Code generation and analysis",
      "Comprehensive development support"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.42 input / Rs 0.58 output per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Code1CodePage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Code Model",
    title: "Code-1",
    deck: "Code-1 supports 30+ programming languages with advanced debugging capabilities, providing comprehensive code generation, analysis, and debugging support.",
    image: "/model-images/code-1.png",
    imageAlt: "Code-1",
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
