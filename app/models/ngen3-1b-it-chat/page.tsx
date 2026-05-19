'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 1B IT is an instruction-tuned variant of the 1B model, optimized for better task performance and instruction following capabilities."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Instruction-tuned 1B parameter model",
      "Enhanced task performance",
      "Better instruction following",
      "Optimized for edge deployment"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.25 input / Rs 0.35 output per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen31bItChatPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Chat Model",
    title: "NGen 3 1B IT",
    deck: "NGen 3 1B IT is an instruction-tuned variant of the 1B model, optimized for better task performance and instruction following capabilities.",
    image: "/model-images/ngen3-1bit.png",
    imageAlt: "NGen 3 1B IT",
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
