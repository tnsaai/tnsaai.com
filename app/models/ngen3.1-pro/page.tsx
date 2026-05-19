'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3.1 Pro represents a quantum leap in artificial intelligence, combining cutting-edge multimodal capabilities with unprecedented reasoning power. Built on advanced transformer architecture with specialized multimodal fusion layers, NGen 3.1 Pro seamlessly processes and understands both textual and visual information."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "True multimodal understanding with text and image processing",
      "Advanced document intelligence and OCR capabilities",
      "Superior performance in visual agent tasks",
      "Video understanding and analysis"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.42 input / Rs 0.58 output + Rs 1.66/image per 1K tokens"
  }
]

const snapshots = []

export default function Ngen31ProPage() {
  return ModelDetailPage({
    date: "October 2025",
    category: "Model",
    title: "NGen 3.1 Pro Multimodal",
    deck: "NGen 3.1 Pro represents a quantum leap in artificial intelligence, combining cutting-edge multimodal capabilities with unprecedented reasoning power. Built on advanced transformer architecture with specialized multimodal fusion layers, NGen 3.1 Pro seamlessly processes and understands both textual and visual information.",
    image: "/model-images/ngen3.1-pro.png",
    imageAlt: "NGen 3.1 Pro",
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
