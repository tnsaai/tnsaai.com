import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function CrossModalContrastiveCurriculumLearningPage() {
  return (
    <ResearchPaperPage
      date="May 27, 2025"
      category="Multimodal Research"
      title="Cross Modal Contrastive Curriculum Learning"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Cross Modal Contrastive Curriculum Learning.png"
      imageAlt="Cross Modal Contrastive Curriculum Learning"
      pdfHref="/Cross_Modal_Contrastive_Curriculum_Learning__Enhancing_Multi_Modal_Alignment_Through_Progressive_Difficulty.pdf"
      paperContent={researchPaperContent.crossModalContrastiveCurriculumLearning}
    />
  )
}
