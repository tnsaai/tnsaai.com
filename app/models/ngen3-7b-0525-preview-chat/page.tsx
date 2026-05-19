'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 7B 0525 Preview is a preview version of the 7B parameter model, offering early access to experimental features and improvements."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Preview version with experimental features",
      "7 billion parameter model",
      "Early access to improvements",
      "Beta testing opportunities"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.33 input / Rs 0.50 output per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen37b0525PreviewChatPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Chat Model",
    title: "NGen 3 7B 0525 Preview",
    deck: "NGen 3 7B 0525 Preview is a preview version of the 7B parameter model, offering early access to experimental features and improvements.",
    image: "/model-images/ngen3-7b.png",
    imageAlt: "NGen 3 7B 0525 Preview",
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
