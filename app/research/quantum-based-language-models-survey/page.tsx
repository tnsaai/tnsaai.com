import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function QuantumBasedLanguageModelsSurveyPage() {
  return (
    <ResearchPaperPage
      date="November 6, 2025"
      category="Quantum AI"
      title="Quantum-Based Language Models: A Survey of Principles and Advances"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Understanding Quantum Language Models.png"
      imageAlt="Quantum-Based Language Models"
      pdfHref="/Quantum_Language_Models_and_Their_Use_Cases.pdf"
      paperContent={researchPaperContent.quantumBasedLanguageModelsSurvey}
    />
  )
}
