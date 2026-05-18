import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function LLMsCreativeIndependentPage() {
  return (
    <ResearchPaperPage
      date="November 17, 2024"
      category="Intelligence"
      title="LLMs can be Creative and Independent"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/llms-can-be-creative-and-independent.png"
      imageAlt="LLMs can be Creative and Independent"
      pdfHref="/LLMs_can_be_Creative_and_Independent.pdf"
      paperContent={researchPaperContent.llmsCreativeIndependent}
    />
  )
}
