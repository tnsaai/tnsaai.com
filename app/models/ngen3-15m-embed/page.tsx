'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 15M Embed is a specialized embedding model designed for vector search and semantic similarity tasks, providing efficient text representation capabilities."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Specialized embedding model",
      "Vector search optimization",
      "Semantic similarity analysis",
      "Efficient text representation"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.01 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen315mEmbedPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Embedding Model",
    title: "NGen 3 15M Embed",
    deck: "NGen 3 15M Embed is a specialized embedding model designed for vector search and semantic similarity tasks, providing efficient text representation capabilities.",
    image: "/model-images/ngen3-15m-embd.png",
    imageAlt: "NGen 3 15M Embed",
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
