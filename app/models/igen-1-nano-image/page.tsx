'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "IGen-1 Nano is a compact and efficient image generation model optimized for fast generation at 512x512 resolution, perfect for rapid prototyping and content creation."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Fast image generation at 512x512 resolution",
      "Efficient and compact model architecture",
      "100 RPM rate limit for high-volume applications",
      "Cost-effective solution for image generation"
    ]
  },
  {
    "title": "Applications",
    "body": "Ideal for prototyping, social media content creation, blog post illustrations, and any application requiring fast, efficient image generation at moderate resolution."
  },
  {
    "title": "Pricing",
    "body": "Rs 0.83 per image"
  }
]

const snapshots = []

export default function Igen1NanoImagePage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Image Model",
    title: "IGen-1 Nano",
    deck: "IGen-1 Nano is a compact and efficient image generation model optimized for fast generation at 512x512 resolution, perfect for rapid prototyping and content creation.",
    image: "/model-images/igen1nano.png",
    imageAlt: "IGen-1 Nano",
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
