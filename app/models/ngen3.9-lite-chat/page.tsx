'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3.9 Lite is a fast and efficient conversational model optimized for basic chat applications, delivering rapid responses with cost-effective pricing."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Fast response times for seamless user experience",
      "Lightweight design optimized for efficiency",
      "40K token context length with 32K max generation",
      "Cost-effective solution for high-volume applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.10 input / Rs 0.12 output per 1K tokens"
  }
]

const snapshots = [
  {
    "name": "NGen 3.9 Lite Chat",
    "description": "Stable lightweight chat snapshot.",
    "label": "Current"
  }
]

export default function Ngen39LiteChatPage() {
  return ModelDetailPage({
    date: "September 2025",
    category: "Chat Model",
    title: "NGen 3.9 Lite",
    deck: "NGen 3.9 Lite is a fast and efficient conversational model optimized for basic chat applications, delivering rapid responses with cost-effective pricing.",
    image: "/model-images/ngen3.9-lite.png",
    imageAlt: "NGen 3.9 Lite",
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
