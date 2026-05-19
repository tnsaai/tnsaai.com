import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function NGen31LaunchNewsPost() {
  return (
    <NewsArticlePage
      date="January 18, 2025"
      category="Models"
      title="NGen 3.1 Models Series Launch"
      deck="The NGen 3.1 series brings stronger multimodal understanding, better instruction following, and a clearer path from research models to production systems."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-pixabay-355288.jpg"
      imageAlt="NGen 3.1 Models Series Launch"
      readTime="4 min read"
      author="TNSA Models Team"
      sections={[
        {
          title: 'A new model series',
          content: [
            'The NGen 3.1 series introduced a new generation of TNSA models with stronger multimodal capabilities, enhanced reasoning, and improved performance across diverse tasks.',
            'It was designed as a practical model family: capable enough for advanced workflows, flexible enough for product integration, and efficient enough for teams that need predictable deployment.',
          ],
        },
        {
          title: 'Model lineup',
          content: 'The series is organized around clear use cases so builders can choose a model by capability, latency, and deployment needs instead of guessing from a single leaderboard score.',
          bullets: [
            'NGen 3.1 Pro for professional-grade multimodal workflows.',
            'Advanced vision and text capabilities for document, image, and reasoning tasks.',
            'Improved context understanding and response generation.',
            'Variants for teams that need lighter inference while keeping the NGen behavior profile.',
          ],
        },
        {
          title: 'Key innovations',
          content: 'NGen 3.1 focused on the parts of model behavior that show up in everyday product work: following nuanced instructions, reading visual context, and staying coherent over longer tasks.',
          bullets: [
            'Breakthrough multimodal architecture.',
            'Enhanced vision-language understanding.',
            'Stronger analytical and reasoning capabilities.',
            'Optimization for real-world applications.',
            'More reliable responses for structured prompts, summaries, and document workflows.',
          ],
        },
        {
          title: 'Developer experience',
          content: [
            'The API experience is built around simple model selection, predictable outputs, and compatibility with common application patterns such as retrieval, summarization, classification, and chat.',
            'Teams can start with a general model and move toward more specialized variants as their task mix becomes clearer.',
          ],
        },
        {
          title: 'Availability',
          content: 'The NGen 3.1 series is available through the TNSA API Platform for developers building multimodal AI applications, internal tools, and user-facing AI products.',
        },
        {
          title: 'What to evaluate',
          content: 'Before deploying NGen 3.1 in production, we recommend testing with your own prompts, documents, languages, image types, and edge cases. Model quality is strongest when benchmark results are paired with real workflow evaluation.',
        },
      ]}
      cta={{ label: 'Explore Models', href: '/models/ngen3.1-pro' }}
    />
  )
}
