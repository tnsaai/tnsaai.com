import { EnterpriseServicePage } from '@/components/ui/EnterpriseServicePage'

export default function PreTrainingPage() {
  return (
    <EnterpriseServicePage
      title="Pre-Training Services"
      description="Build proprietary foundation models with custom data, architecture choices, training infrastructure, and evaluation loops designed for long-term enterprise capability."
      image="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/brandon-stecz-9rX32anLiVA-unsplash.jpg"
      imageAlt="Pre-Training Services"
      featuresTitle="Pre-training methods"
      features={[
        {
          title: 'Causal language modeling',
          description: 'Autoregressive training for GPT-style systems and generation-focused applications.',
        },
        {
          title: 'Masked language modeling',
          description: 'Bidirectional representation learning for retrieval, classification, and understanding tasks.',
        },
        {
          title: 'Mixture of experts',
          description: 'Sparse expert routing for larger effective capacity with more efficient inference paths.',
        },
      ]}
      steps={[
        { title: 'Data curation', description: 'Collect, clean, deduplicate, and filter large-scale training corpora.' },
        { title: 'Architecture design', description: 'Select transformer variants, tokenizer strategy, and scaling targets.' },
        { title: 'Distributed training', description: 'Run multi-node training with checkpointing and monitoring.' },
        { title: 'Evaluation', description: 'Measure quality, safety, robustness, and deployment readiness.' },
      ]}
      metricsTitle="Scaling signals"
      metrics={[
        { value: '100B+', label: 'Token-scale corpus planning' },
        { value: '10x', label: 'Potential MoE capacity expansion' },
        { value: '3D', label: 'Parallel training strategy' },
        { value: '40%', label: 'Embedding quality target improvement' },
      ]}
      applications="Proprietary enterprise models, domain foundation models, multilingual systems, government AI, research programs, and custom model families for regulated industries."
    />
  )
}
