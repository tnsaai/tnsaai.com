import Link from 'next/link'
import { NewsArticlePage } from '@/components/ui/NewsArticlePage'

export default function RishiNewsPost() {
  return (
    <NewsArticlePage
      date="November 16, 2025"
      category="Research"
      title="Introducing Rishi (AAR-1): TNSA's First Automated AI Researcher"
      deck="Rishi is an early automated research system built to help generate ideas, run experiments, read results, and improve AI research loops over time."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/tnsa-risihi.png"
      imageAlt="Rishi AAR-1"
      readTime="4 min read"
      author="TNSA Research Team"
      sections={[
        {
          title: 'A relentless pursuit of superintelligence',
          content: [
            "Rishi (AAR-1) is TNSA's first automated AI researcher, built to accelerate AI progress through continuous research, testing, and iteration.",
            'The goal is not to replace researchers, but to make the research loop faster: more hypotheses explored, more failed ideas filtered early, and more promising directions brought back to human teams.',
          ],
        },
        {
          title: 'Autonomous research loop',
          content: 'Rishi can study algorithms, run tests, train models, analyze results, and design follow-up experiments in a continuous cycle of improvement.',
          bullets: [
            'Read notes, papers, logs, and previous experiment results.',
            'Generate candidate algorithms and model changes.',
            'Run controlled tests and compare outcomes.',
            'Summarize what worked, what failed, and what should be tried next.',
          ],
        },
        {
          title: 'Robust operation',
          content: [
            'Research systems need to work over long horizons, not just single prompts. Rishi is designed for long-running campaigns with restart resilience, checkpointing, and summarization systems that preserve useful context over time.',
            'That structure lets it continue a line of work across experiments while keeping human researchers informed about important decisions and unexpected results.',
          ],
        },
        {
          title: 'Equipped for discovery',
          content: (
            <>
              Rishi works inside a dedicated workspace with files, logs, generated algorithms, and research documents. It also uses TNSA&apos;s ARCH-X framework and is connected to the broader direction behind the <Link href="/research/tri-flux-attention" className="underline">Tri-Flux Attention paper</Link>.
            </>
          ),
          bullets: [
            'Workspace-aware research with durable files and logs.',
            'Experiment summaries that make progress easier to review.',
            'Connections to model architecture research and benchmark analysis.',
          ],
        },
        {
          title: 'Future of AI research',
          content: [
            'Rishi is an early step toward AI research teams made of autonomous systems working alongside human researchers.',
            'We expect future versions to become better at experiment design, literature synthesis, code generation, benchmark construction, and safely coordinating with other specialized agents.',
          ],
        },
        {
          title: 'How we will measure progress',
          content: 'The most important metric is not whether an automated researcher can produce impressive text. It is whether it can produce useful research progress that survives review, replication, and comparison against strong baselines.',
          bullets: [
            'Higher-quality experiment proposals.',
            'More reproducible runs and clearer logs.',
            'Better ability to identify dead ends early.',
            'More useful summaries for human research decisions.',
          ],
        },
      ]}
      cta={{ label: 'View Research', href: '/research' }}
    />
  )
}
