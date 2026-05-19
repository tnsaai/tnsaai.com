'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "WebSearch-1 provides real-time web search capabilities with source citations, enabling AI applications to access and reference current information from the internet."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Real-time web search integration",
      "Source citations and references",
      "Current information access",
      "Accurate and verifiable results"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.16 per query"
  }
]

const snapshots: never[] = []

export default function Websearch1SearchPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Search Model",
    title: "WebSearch-1",
    deck: "WebSearch-1 provides real-time web search capabilities with source citations, enabling AI applications to access and reference current information from the internet.",
    image: "/model-images/websearch-1.png",
    imageAlt: "WebSearch-1",
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
