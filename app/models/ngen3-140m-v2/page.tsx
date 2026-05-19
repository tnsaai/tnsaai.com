'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 140M V2 is an enhanced version of the 140M model with improved performance and capabilities while maintaining compact size and efficiency."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Enhanced 140 million parameter model",
      "Improved performance over V1",
      "Efficient and lightweight",
      "Optimized for edge deployment"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.06 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen3140mV2Page() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 140M V2",
    deck: "NGen 3 140M V2 is an enhanced version of the 140M model with improved performance and capabilities while maintaining compact size and efficiency.",
    image: "/model-images/ngen3-140mv2.png",
    imageAlt: "NGen 3 140M V2",
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
