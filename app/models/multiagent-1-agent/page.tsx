'use client'

import { ModelDetailPage } from '@/components/ui/ModelDetailPage'

const sections = [
  {
    "title": "Overview",
    "body": "Agent Models coordinate multiple AI agents for complex tasks, enabling sophisticated workflows, autonomous planning, and collaborative problem-solving."
  },
  {
    "title": "Key Capabilities",
    "bullets": [
      "Coordinates multiple AI agents",
      "Complex task orchestration",
      "Multi-agent workflows",
      "Collaborative problem-solving"
    ]
  },
  {
    "title": "Pricing",
    "body": "Rs 0.83 input / Rs 1.25 output per 1K tokens"
  }
]

const snapshots = [
  {
    "name": "MultiAgent-1",
    "description": "Multi-agent orchestration snapshot.",
    "label": "Current"
  },
  {
    "name": "Agent-1",
    "description": "Autonomous strategic agent snapshot.",
    "label": "Snapshot"
  }
]

export default function Multiagent1AgentPage() {
  return ModelDetailPage({
    date: "January 2025",
    category: "Agent Model",
    title: "Agent Models",
    deck: "Agent Models coordinate multiple AI agents for complex tasks, enabling sophisticated workflows, autonomous planning, and collaborative problem-solving.",
    image: "/model-images/multi-agent-1.png",
    imageAlt: "Agent Models",
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
