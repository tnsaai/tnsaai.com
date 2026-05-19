'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "NGen 3 140M Instruct is an instruction-tuned model optimized for following specific tasks and commands with high accuracy and efficiency."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Instruction-tuned for task-focused applications",
      "High accuracy in following commands",
      "Compact 140M parameter model",
      "Optimized for specific task execution"
    ]
  },
  {
    "title": "Pricing",
    "body": "$0.05 per 1K tokens"
  }
]

const snapshots: never[] = []

export default function Ngen3140mInstructPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Model",
    title: "NGen 3 140M Instruct",
    deck: "NGen 3 140M Instruct is an instruction-tuned model optimized for following specific tasks and commands with high accuracy and efficiency.",
    image: "/model-images/ngen3-140mit.png",
    imageAlt: "NGen 3 140M Instruct",
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
