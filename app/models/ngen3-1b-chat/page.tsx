'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 1B is a compact 1 billion parameter model optimized for edge deployment, delivering efficient AI capabilities with minimal resource requirements."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "1 billion parameter compact model",
      "Optimized for edge deployment",
      "Efficient resource usage",
      "Suitable for on-device applications"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.20 input / Rs 0.30 output per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen31bChatPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Chat Model",
    title: "NGen 3 1B",
    deck: "NGen 3 1B is a compact 1 billion parameter model optimized for edge deployment, delivering efficient AI capabilities with minimal resource requirements.",
    image: "/model-images/ngen3-1b.png",
    imageAlt: "NGen 3 1B",
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
