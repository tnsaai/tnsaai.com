'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "IGen-1 delivers professional-grade image generation with up to 4K resolution and advanced editing features including inpainting, style transfer, and image masking."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "4K resolution (4096x4096) image generation",
      "Inpainting for object removal and image completion",
      "Style transfer capabilities",
      "Image masking for selective editing"
    ]
  },
  {
    "title": "Applications",
    "body": "Ideal for professional photography, graphic design, art and illustration, and any application requiring high-resolution image generation with advanced editing capabilities."
  },
  {
    "title": "Pricing",
    "body": "Rs 2.50 per image"
  }
]

const snapshots = []

export default function Igen1ImagePage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Image Model",
    title: "IGen-1",
    deck: "IGen-1 delivers professional-grade image generation with up to 4K resolution and advanced editing features including inpainting, style transfer, and image masking.",
    image: "/model-images/igen1.png",
    imageAlt: "IGen-1",
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
