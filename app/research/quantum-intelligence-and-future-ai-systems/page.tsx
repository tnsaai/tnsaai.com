import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function QuantumIntelligenceFutureAISystemsPage() {
  return (
    <ResearchPaperPage
      date="April 11, 2025"
      category="Quantum AI"
      title="Quantum Intelligence and Future AI Systems"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Quantum Intelligence and Future AI Systems.png"
      imageAlt="Quantum Intelligence and Future AI Systems"
      pdfHref="/Quantum_Intelligence_and_Future_AI_Systems.pdf"
      paperContent={researchPaperContent.quantumIntelligenceFutureAi}
    />
  )
}
