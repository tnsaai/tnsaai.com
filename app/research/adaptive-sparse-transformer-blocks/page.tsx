import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function AdaptiveSparseTransformerBlocksPage() {
  return (
    <ResearchPaperPage
      date="May 25, 2025"
      category="Research Paper"
      title="Adaptive Sparse Transformer Blocks"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Adaptive Sparse Transformer Blocks.png"
      imageAlt="Adaptive Sparse Transformer Blocks"
      pdfHref="/Adaptive_Sparse_Transformer_Blocks__A_Paradigm_Shift_for_Efficient_Large_Language_Models.pdf"
      paperContent={researchPaperContent.adaptiveSparseTransformerBlocks}
    />
  )
}
