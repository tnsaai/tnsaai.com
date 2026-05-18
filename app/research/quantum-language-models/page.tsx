import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function QuantumLanguageModelsPage() {
  return (
    <ResearchPaperPage
      date="May 22, 2025"
      category="Quantum AI"
      title="Quantum Language Models"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Quantum Language Models.png"
      imageAlt="Quantum Language Models"
      pdfHref="/Quantum_Language_Models__Architectures__Applications__and_a_Practical_Approach_to_Quantum_Tensor_Conversion_for_Enhanced_Efficiency.pdf"
      paperContent={researchPaperContent.quantumLanguageModels}
    />
  )
}
