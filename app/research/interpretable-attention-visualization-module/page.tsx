import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function InterpretableAttentionVisualizationPage() {
  return (
    <ResearchPaperPage
      date="May 24, 2025"
      category="Interpretability"
      title="Interpretable Attention Visualization Module"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Interpretable Attention Visualization Module.png"
      imageAlt="Interpretable Attention Visualization Module"
      pdfHref="/Interpretable_Attention_Visualization_Module__Transforming_Raw_Attention_into_Human_Readable_Explanations.pdf"
      paperContent={researchPaperContent.interpretableAttentionVisualization}
    />
  )
}
