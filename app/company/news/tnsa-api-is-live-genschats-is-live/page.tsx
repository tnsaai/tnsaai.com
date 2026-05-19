import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function TNSAApiGensChatLiveNewsPost() {
  return (
    <NewsArticlePage
      date="January 5, 2025"
      category="Products"
      title="TNSA API & GensChat are Live"
      deck="The TNSA API Platform and GensChat are now available, giving developers and everyday users two ways to start working with NGen models."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/pexels-diva-34592788.jpg"
      imageAlt="TNSA API and GensChat Launch"
      readTime="4 min read"
      author="TNSA Product Team"
      sections={[
        {
          title: 'Launch announcement',
          content: [
            'The TNSA API Platform and GensChat are live, making TNSA models available to developers and users through both API access and a conversational product experience.',
            'This launch is meant to make the NGen ecosystem easier to try: builders can move directly into APIs, while users can explore model behavior through a lightweight chat interface.',
          ],
        },
        {
          title: 'TNSA API Platform',
          content: 'The API Platform is built for developers who want a simple path from prototype to production without stitching together a different interface for every model.',
          bullets: [
            'Unified access to TNSA model systems through simple APIs.',
            'Documentation and tooling for developers.',
            'Free tier for builders getting started.',
            'Enterprise-ready infrastructure for production applications.',
            'Model options for chat, reasoning, multimodal, and agentic workflows.',
          ],
        },
        {
          title: 'GensChat',
          content: 'GensChat is the user-facing way to try NGen models for writing, learning, planning, coding help, and multilingual assistance.',
          bullets: [
            'Conversational AI experience powered by NGen models.',
            'Support for Indian language and context workflows.',
            'Free access for users.',
            'Privacy-conscious product direction for everyday AI use.',
            'A cleaner interface for quick questions, longer drafts, and follow-up work.',
          ],
        },
        {
          title: 'What builders can make',
          content: 'The first wave of applications includes support assistants, document tools, education copilots, regional language services, internal search, workflow automation, and agent systems that connect models to tools.',
        },
        {
          title: 'Reliability in production',
          content: 'Teams moving from experimentation to production should evaluate output quality, latency, cost, safety behavior, and data handling together. A model that works in a demo still needs application-specific testing.',
          bullets: [
            'Start with a small set of representative prompts.',
            'Add retrieval or tool use only when the workflow needs it.',
            'Track failed answers and revise prompts, context, or model choice.',
            'Use human review for sensitive or high-impact workflows.',
          ],
        },
        {
          title: 'Get started',
          content: 'Developers can use the platform to build AI applications, while users can try GensChat directly for daily assistance, learning, creative work, and productivity.',
        },
      ]}
      cta={{ label: 'Try Platform', href: 'https://platform.tnsaai.com' }}
    />
  )
}
