import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function NGen4K21TNewsPost() {
  return (
    <NewsArticlePage
      date="February 23, 2026"
      category="Models"
      title="TNSA is Open-Sourcing NGen-4-K2-1T-Thinking"
      deck="A trillion-parameter, Indic-first thinking model released for builders who need stronger multilingual reasoning and more open access to frontier-scale AI."
      image="/TV - 4.svg"
      imageAlt="NGen-4-K2-1T-Thinking"
      readTime="4 min read"
      author="TNSA Models Team"
      sections={[
        {
          title: 'What we are releasing',
          content: [
            'TNSA is open-sourcing NGen-4-K2-1T-Thinking, a 1 trillion parameter Indic-first model built for advanced reasoning, multilingual understanding, and long-form problem solving.',
            'The release is meant to give researchers, developers, startups, and public-interest builders a stronger base model to study, adapt, and deploy without waiting for closed access.',
          ],
        },
        {
          title: 'Indic-first by design',
          content: 'The model is designed around Indian languages and context instead of treating them as an afterthought. It supports Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Urdu, and many more.',
          bullets: [
            'Stronger handling of local names, places, cultural references, and mixed-language prompts.',
            'Better support for code-switching between English and Indian languages.',
            'A focus on practical use cases such as education, public services, business workflows, and regional content.',
          ],
        },
        {
          title: 'Thinking capabilities',
          content: [
            'The Thinking tier is built for step-by-step reasoning across math, science, code, multilingual writing, and advanced problem solving.',
            'Rather than only optimizing for short answers, the model is designed to spend more computation on planning, checking, and revising when the task needs depth.',
          ],
          bullets: [
            'Multi-step reasoning for math, logic, and technical problem solving.',
            'Instruction following across long, multi-part prompts.',
            'Code understanding and generation for developer workflows.',
            'Long-form synthesis across documents, notes, and structured context.',
          ],
        },
        {
          title: 'Open release model',
          content: 'The release is intended for both commercial and non-commercial use, giving researchers, developers, and organizations more freedom to build on top of the model.',
          bullets: [
            'Builders can experiment without designing around a closed endpoint from day one.',
            'Researchers can inspect behavior, compare results, and publish reproducible evaluations.',
            'Organizations can adapt the model to domain-specific tasks while keeping more control over deployment.',
          ],
        },
        {
          title: 'How builders can use it',
          content: 'NGen-4-K2-1T-Thinking is aimed at teams building agents, education assistants, multilingual search, regional copilots, research tools, and products that need reliable reasoning in Indian contexts.',
          bullets: [
            'Fine-tune for domain-specific writing, support, and knowledge workflows.',
            'Pair with retrieval for grounded answers over private data.',
            'Use as a reasoning engine inside agent systems that call tools and inspect results.',
            'Evaluate on local language benchmarks, enterprise tasks, and public-sector scenarios.',
          ],
        },
        {
          title: 'What comes next',
          content: [
            'The open-source release is the beginning of a longer feedback loop. We expect model behavior, evaluation coverage, and deployment recipes to improve as more teams test it in the real world.',
            'TNSA will keep publishing updates across models, safety notes, and practical guides as the NGen 4 family expands.',
          ],
        },
      ]}
      cta={{ label: 'Explore Models', href: '/models' }}
    />
  )
}
