import { researchPaperContent } from '@/content/researchPaperContent'
import { ResearchPaperPage } from '@/components/ui/ResearchPaperPage'

export default function ComputationalHardwareFoundationsPage() {
  return (
    <ResearchPaperPage
      date="June 21, 2025"
      category="Infrastructure Research"
      title="Computational Hardware and Data Foundations for Sustainable Superintelligence"
      deck="Full paper content extracted from the source PDF, with the original PDF appended below."
      image="/Computational Hardware and Data Foundations for Sustainable Superintelligence.png"
      imageAlt="Computational Hardware and Data Foundations"
      pdfHref="/Computational__Hardware__and_Data_Foundations_for_Sustainable_Superintelligence__Navigating_Energy__Multimodality__and_Ethical_Data_at_Scale.pdf"
      paperContent={researchPaperContent.computationalHardwareFoundations}
    />
  )
}
