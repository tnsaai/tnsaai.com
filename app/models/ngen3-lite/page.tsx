'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = []

const snapshots = []

export default function Ngen3LitePage() {
  return ModelDetailPage({
    date: "2026",
    category: "Model",
    title: "NGen 3.9 Lite",
    deck: "NGen 3.9 Lite is part of the TNSA model family for production AI workflows.",
    image: "/TNSA.png",
    imageAlt: "TNSA",
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
