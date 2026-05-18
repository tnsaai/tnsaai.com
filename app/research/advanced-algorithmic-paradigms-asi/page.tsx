import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function AdvancedAlgorithmicParadigmsPage() {
  return (
    <ResearchPaperPage
      date="November 6, 2025"
      category="Safety Research"
      title="Advanced Algorithmic Paradigms for Artificial Superintelligence"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Advanced Algorithmic Paradigms for Artificial Superintelligence.png"
      imageAlt="Advanced Algorithmic Paradigms for Artificial Superintelligence"
      pdfHref="/Advanced_Algorithmic_Paradigms_for_Artificial_Superintelligence__Navigating_Safety__Generalization__Verification__and_Oversight.pdf"
      paperContent={researchPaperContent.advancedAlgorithmicParadigms}
    />
  )
}
