import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function NGen4AtomNewsPost() {
  return (
    <NewsArticlePage
      date="January 20, 2025"
      category="Products"
      title="NGen4 Atom Chat Launch"
      deck="NGen4 Atom Chat brings a larger conversational system to TNSA users, with better reasoning, richer context handling, and a cleaner path for product teams building chat experiences."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-zaksheuskaya-709412-1568607.jpg"
      imageAlt="NGen4 Atom Chat Launch"
      readTime="4 min read"
      author="TNSA Product Team"
      sections={[
        {
          title: 'A larger chat system',
          content: [
            'NGen4 Atom Chat marked a major step in TNSA conversational AI, scaling beyond earlier open-weight systems and setting a stronger baseline for advanced chat capability.',
            'The launch focuses on everyday usefulness: clearer answers, better task completion, stronger multilingual behavior, and more dependable follow-through across longer conversations.',
          ],
        },
        {
          title: 'Key features',
          content: 'Atom Chat is designed for people who want a fast assistant and for developers who need a model that can sit inside a real product experience.',
          bullets: [
            'Massive-scale architecture for advanced conversational understanding.',
            'Enhanced reasoning and problem-solving capabilities.',
            'Multilingual support with deeper contextual awareness.',
            'Improved instruction following and task completion.',
            'Cleaner behavior across drafting, planning, research, learning, and brainstorming workflows.',
          ],
        },
        {
          title: 'Performance highlights',
          content: 'The model improves the parts of chat that users notice quickly: context retention, answer structure, and the ability to keep working after a correction or follow-up.',
          bullets: [
            'Stronger long-context understanding and retention.',
            'Improved creative and analytical behavior.',
            'Better task completion across professional workflows.',
            'More consistent responses when prompts contain multiple constraints.',
            'Improved ability to explain uncertainty and ask for missing context.',
          ],
        },
        {
          title: 'Designed for products',
          content: [
            'Chat models become most valuable when they can be tuned to the shape of a product. Atom Chat is built to support familiar product patterns such as assistants, support flows, learning apps, internal copilots, and agent frontends.',
            'Teams can combine the model with retrieval, tools, and custom system instructions to make the assistant more grounded and useful.',
          ],
        },
        {
          title: 'Availability',
          content: 'NGen4 Atom Chat is available through TNSA systems for developers and enterprises building conversational AI applications.',
        },
        {
          title: 'What comes next',
          content: 'We will continue improving the chat experience with stronger safety behavior, better speed, richer integrations, and more model options across the NGen family.',
        },
      ]}
      cta={{ label: 'View Models', href: '/models' }}
    />
  )
}
