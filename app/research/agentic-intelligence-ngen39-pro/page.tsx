import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function AgenticIntelligencePage() {
  return (
    <ResearchPaperPage
      date="November 6, 2025"
      category="Agent Research"
      title="Agentic Intelligence in Large Language Models"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Agentic Intelligence in Large Language Models.png"
      imageAlt="Agentic Intelligence in Large Language Models"
      pdfHref="/Agentic_Intelligence_in_Large_Language_Models__A_Technical_Perspective_on_Collaborative_Reasoning_and_Responsible_Autonomy.pdf"
      paperContent={researchPaperContent.agenticIntelligence}
    />
  )
}
