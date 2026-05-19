import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function FineTuningPage() {
  return (
    <EnterpriseServicePage
      title="Custom Fine-Tuning"
      description="Transform TNSA foundation models into domain-specific AI systems tailored to your business needs, data, tone, and evaluation criteria."
      image="/fine-tuning.png"
      imageAlt="Custom Fine-Tuning"
      featuresTitle="Fine-tuning methods"
      features={[
        {
          title: 'Full fine-tuning',
          description: 'Update model parameters for deeper adaptation when the use case requires a substantial domain shift.',
        },
        {
          title: 'LoRA',
          description: 'Train efficient adapter layers to reduce compute and memory while retaining strong task performance.',
        },
        {
          title: 'Instruction tuning',
          description: 'Improve task-following behavior for enterprise workflows, support agents, and structured operations.',
        },
      ]}
      steps={[
        { title: 'Data preparation', description: 'Clean, format, deduplicate, and validate training data.' },
        { title: 'Training setup', description: 'Select method, model tier, hyperparameters, and evaluation targets.' },
        { title: 'Monitoring', description: 'Track training quality, loss, samples, and early warning signs.' },
        { title: 'Validation', description: 'Run benchmark and human review before deployment.' },
      ]}
      metricsTitle="Performance signals"
      metrics={[
        { value: '3-10x', label: 'Faster adapter training' },
        { value: '70%', label: 'Potential memory reduction' },
        { value: '95%+', label: 'Adapter quality retention target' },
        { value: '40-60%', label: 'Task-specific improvement range' },
      ]}
      applications="Industry-specific assistants, internal knowledge agents, legal and medical document analysis, custom classification, support automation, and domain-specific content generation."
    />
  )
}
