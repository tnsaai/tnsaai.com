import { NewsArticlePage } from '@/components/ui/NewsArticlePage'
import { NGen4SystemCard } from '@/components/ui/NGen4SystemCard'

export default function NGen4SystemCardNewsPost() {
  return (
    <NewsArticlePage
      date="February 26, 2026"
      category="Models"
      title="NGen 4 System Card"
      deck="A closer look at the NGen 4 model family, including training direction, benchmark behavior, safety practices, and deployment notes."
      image="/ngen4-sys-card.png"
      imageAlt="NGen 4 System Card"
      readTime="6 min read"
      author="TNSA Safety and Models Team"
      sections={[
        {
          title: 'Why publish a system card',
          content: [
            'System cards help users understand how a model was built, what it is good at, where it still has limits, and how it should be evaluated before deployment.',
            'For NGen 4, we are documenting both capability progress and the safeguards that matter when stronger reasoning models move into real products.',
          ],
        },
        {
          title: 'What the card covers',
          content: 'The NGen 4 System Card summarizes model behavior across reasoning, coding, math, multilingual understanding, instruction following, and multimodal tasks.',
          bullets: [
            'Model family overview and intended use cases.',
            'Evaluation results across intelligence, price, and instruction-following benchmarks.',
            'Safety practices for training, testing, deployment, and monitoring.',
            'Known limitations and areas where developers should add additional checks.',
          ],
        },
        {
          title: 'Reading the benchmarks',
          content: 'Benchmarks are useful signals, but they are not a substitute for application-specific testing. We recommend evaluating NGen 4 on the exact tasks, languages, documents, and user conditions that matter for your product.',
          bullets: [
            'Use public benchmarks to compare broad capability.',
            'Use private task suites to measure production usefulness.',
            'Track failure modes, refusals, latency, and cost alongside accuracy.',
            'Retest after prompts, tools, retrieval systems, or model versions change.',
          ],
        },
        {
          title: 'Safety and deployment',
          content: 'The system card is also a deployment document. It outlines how we think about risk evaluation, model behavior monitoring, and human review for higher-impact use cases.',
        },
      ]}
      cta={{ label: 'View All News', href: '/company/news' }}
    >
      <NGen4SystemCard />
    </NewsArticlePage>
  )
}
