'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 7B 0625 is a high-efficiency conversational model optimized for chat applications with enhanced performance and reliability."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "High-efficiency conversational AI",
      "7 billion parameter chat model",
      "Enhanced performance and reliability",
      "Optimized for chat applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.42 input / Rs 0.58 output per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen37b0625ChatPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Chat Model",
    title: "NGen 3 7B 0625",
    deck: "NGen 3 7B 0625 is a high-efficiency conversational model optimized for chat applications with enhanced performance and reliability.",
    image: "/model-images/ngen3-7b-0625.png",
    imageAlt: "NGen 3 7B 0625",
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
