'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = []

const snapshots = []

export default function Igen1NanoPage() {
  return ModelDetailPage({
    date: "2026",
    category: "Image Model",
    title: "IGen 1 Nano",
    deck: "IGen 1 Nano is part of the TNSA model family for production AI workflows.",
    image: "/TNSA.png",
    imageAlt: "TNSA",
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
