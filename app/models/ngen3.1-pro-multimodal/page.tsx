'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections: never[] = []

const snapshots: never[] = []

export default function Ngen31ProMultimodalPage() {
  return ModelDetailPage({
    date: "October 2025",
    category: "Model",
    title: "NGen3.1-Pro Multimodal",
    deck: "NGen3.1-Pro Multimodal is part of the TNSA model family for production AI workflows.",
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
