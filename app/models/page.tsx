import Image from 'next/image'
import Link from 'next/link'

type ModelCard = {
  title: string
  label: string
  href: string
  image: string
  description?: string
}

type ModelSection = {
  title: string
  description?: string
  models: ModelCard[]
}

const modelImage = (file: string) => `/model-images/${file}`

const sections: ModelSection[] = [
  {
    title: 'NGen 4.1 Series',
    description: 'Next-generation NGen models with improved reasoning, vision, and long-context performance.',
    models: [
      {
        title: 'NGen-4.1 Pro',
        label: 'Frontier Model',
        href: '/models/ngen4.1-pro',
        image: modelImage('ngen4.1-pro.png'),
        description: 'Most capable NGen model with state-of-the-art performance across knowledge, reasoning, engineering, and agent benchmarks.',
      },
      {
        title: 'NGen-4.1',
        label: 'Frontier Model',
        href: '/models/ngen4.1',
        image: modelImage('ngen4.1.png'),
        description: 'Next-generation flagship model with leading performance across knowledge, reasoning, engineering, and agent benchmarks.',
      },
      {
        title: 'NGen-4.1 Mini',
        label: 'Frontier Model',
        href: '/models/ngen4.1-mini',
        image: modelImage('ngen4.1-mini.png'),
        description: 'Next-generation mini model with leading vision, OCR, long-context, and multimodal reasoning capabilities.',
      },
      {
        title: 'NGen-4.1 Lite',
        label: 'Frontier Model',
        href: '/models/ngen4.1-lite',
        image: modelImage('ngen4.1-lite.png'),
        description: 'Next-generation Lite model with substantially improved knowledge, reasoning, and instruction performance.',
      },
    ],
  },
  {
    title: 'NGen 4 Series',
    description: 'Frontier NGen systems for reasoning, speed, and general intelligence.',
    models: [
      {
        title: 'NGen-4',
        label: 'Frontier Model',
        href: '/models/ngen4',
        image: modelImage('ngen4.png'),
        description: 'General frontier model with strong reasoning, coding, multilingual, and multimodal performance.',
      },
      {
        title: 'NGen-4 Pro',
        label: 'Reasoning Model',
        href: '/models/ngen4-pro',
        image: modelImage('ngen4-pro.png'),
        description: 'Frontier reasoning model for complex workflows and advanced problem solving.',
      },
      {
        title: 'NGen-4 Mini',
        label: 'Model',
        href: '/models/ngen4-mini',
        image: modelImage('ngen4-mini.png'),
        description: 'High performance conversational intelligence with lower latency.',
      },
      { title: 'NGen-4 Lite', label: 'Model', href: '/models/ngen4-lite', image: modelImage('ngen4-lite.png') },
      { title: 'NGen-4 Flash', label: 'Model', href: '/models/ngen4-flash', image: modelImage('ngen4-blaze-1.png') },
      { title: 'NGen-4 Blaze', label: 'Model', href: '/models/ngen4-blaze', image: modelImage('ngen4-blaze.png') },
    ],
  },
  {
    title: 'NGen 4 Open Weight Series',
    description: 'Open-weight thinking models distilled for accessible reasoning.',
    models: [
      { title: 'NGen-4-OW-1T-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-1t-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow1t.png' },
      { title: 'NGen-4-OW-400B-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-400b-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow400b.png' },
      { title: 'NGen-4-OW-120B-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-120b-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow120b.png' },
      { title: 'NGen-4-OW-30B-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-30b-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow30b.png' },
      { title: 'NGen-4-OW-4B-Thinking', label: 'Open Weight Model', href: '/models/ngen4-ow-4b-thinking', image: 'https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow4b.png' },
    ],
  },
  {
    title: 'NGen 3.9 Series',
    description: 'Latest generation chat models for production assistants and long-context workflows.',
    models: [
      {
        title: 'NGen 3.9 Max',
        label: 'Chat Model',
        href: '/models/ngen3.9-max-stable-v3-chat',
        image: modelImage('ngen3.9-max.png'),
      },
      {
        title: 'NGen 3.9 Pro',
        label: 'Chat Model',
        href: '/models/ngen3.9-pro-chat',
        image: modelImage('ngen3.9-pro.png'),
      },
      {
        title: 'NGen 3.9 Lite',
        label: 'Chat Model',
        href: '/models/ngen3.9-lite-chat',
        image: modelImage('ngen3.9-lite.png'),
      },
    ],
  },
  {
    title: 'NGen 3.5 Series',
    description: 'Advanced chat models tuned for balanced intelligence and speed.',
    models: [
      { title: 'NGen 3.5 Max', label: 'Chat Model', href: '/models/ngen3.5-max-chat', image: modelImage('ngen3.5-max.png') },
      { title: 'NGen 3.5 Pro', label: 'Chat Model', href: '/models/ngen3.5-pro-chat', image: modelImage('ngen3.5-pro.png') },
      { title: 'NGen 3.5 Lite', label: 'Chat Model', href: '/models/ngen3.5-lite-chat', image: modelImage('ngen3.5-lite.png') },
    ],
  },
  {
    title: 'NGen 3.1 Series',
    description: 'Multimodal reasoning for text and image understanding.',
    models: [
      { title: 'NGen 3.1 Pro Multimodal', label: 'Multimodal Model', href: '/models/ngen3.1-pro', image: modelImage('ngen3.1-pro.png') },
    ],
  },
  {
    title: 'NGen 3 Series',
    description: 'Core language models across compact, instruct, embedding, and chat tiers.',
    models: [
      { title: 'NGen 3 10B', label: 'Model', href: '/models/ngen3-10b', image: modelImage('ngen3-10b.png') },
      { title: 'NGen 3 7B', label: 'Model', href: '/models/ngen3-7b', image: modelImage('ngen3-7b.png') },
      { title: 'NGen3-7B-0625 Chat', label: 'Chat Model', href: '/models/ngen3-7b-0625-chat', image: modelImage('ngen3-7b-0625.png') },
      { title: 'NGen3-7B-0525 Preview', label: 'Preview Model', href: '/models/ngen3-7b-0525-preview-chat', image: modelImage('ngen3-7b.png') },
      { title: 'NGen 3 3B', label: 'Model', href: '/models/ngen3-3b', image: modelImage('ngen3-3b.png') },
      { title: 'NGen3-1B Chat', label: 'Chat Model', href: '/models/ngen3-1b-chat', image: modelImage('ngen3-1b.png') },
      { title: 'NGen3-1B-it Chat', label: 'Chat Model', href: '/models/ngen3-1b-it-chat', image: modelImage('ngen3-1bit.png') },
      { title: 'NGen 3 140M', label: 'Model', href: '/models/ngen3-140m', image: modelImage('ngen3-140m.png') },
      { title: 'NGen 3 140M V2', label: 'Model', href: '/models/ngen3-140m-v2', image: modelImage('ngen3-140mv2.png') },
      { title: 'NGen 3 140M Instruct', label: 'Instruct Model', href: '/models/ngen3-140m-instruct', image: modelImage('ngen3-140mit.png') },
      { title: 'NGen 3 90M', label: 'Model', href: '/models/ngen3-90m', image: modelImage('ngen3-90m.png') },
      { title: 'NGen 3 15M', label: 'Model', href: '/models/ngen3-15m', image: modelImage('ngen3-15m.png') },
      { title: 'NGen 3 15M Embed', label: 'Embedding Model', href: '/models/ngen3-15m-embed', image: modelImage('ngen3-15m-embd.png') },
    ],
  },
  {
    title: 'NGen 2 Series',
    description: 'Earlier compact generation systems.',
    models: [
      { title: 'NGen 2 170M', label: 'Core Model', href: '/models/ngen2-170m', image: modelImage('ngen2-170m.png') },
      { title: 'NGen 2 30M', label: 'Core Model', href: '/models/ngen2-30m', image: modelImage('ngen2-30m.png') },
      { title: 'NGen 2 15M', label: 'Core Model', href: '/models/ngen2-15m', image: modelImage('ngen2-15m.png') },
    ],
  },
  {
    title: 'NGen 1 Series',
    description: 'The first-generation foundation model family.',
    models: [
      { title: 'NGen 1', label: 'Legacy Model', href: '/models/ngen1', image: modelImage('ngen1.png') },
    ],
  },
  {
    title: 'Omni and Audio Series',
    description: 'Real-time multimodal interaction, audio understanding, and text-to-speech models.',
    models: [
      { title: 'NGen-Realtime-Omni', label: 'Omni Model', href: '/models/ngen-realtime-omni-multimodal', image: modelImage('ngen-realtime-omni.png') },
      { title: 'NGen-Realtime-Omni-Audio', label: 'Audio Model', href: '/models/ngen-realtime-omni-audio-audio', image: modelImage('ngen-realtime-audio.png') },
      { title: 'AudioTextSpeech-Pro', label: 'Audio Model', href: '/models/audiotextspeech-pro-audio', image: modelImage('audio-text-speech-pro.png') },
      { title: 'AudioTextSpeech-1', label: 'Audio Model', href: '/models/audiotextspeech-1-audio', image: modelImage('audio-text-speech-1.png') },
    ],
  },
  {
    title: 'Image Series',
    description: 'Image generation and editing models.',
    models: [
      { title: 'IGen-1', label: 'Image Model', href: '/models/igen-1-image', image: modelImage('igen1.png') },
      { title: 'IGen-1 Nano', label: 'Image Model', href: '/models/igen-1-nano-image', image: modelImage('igen1nano.png') },
    ],
  },
  {
    title: 'Tool Models',
    description: 'Specialized systems for search, research, code, and agent coordination.',
    models: [
      { title: 'WebSearch-1', label: 'Search Model', href: '/models/websearch-1-search', image: modelImage('websearch-1.png') },
      { title: 'Scientist-1', label: 'Research Model', href: '/models/scientist-1-research', image: modelImage('scientist-1.png') },
      { title: 'Code-1', label: 'Code Model', href: '/models/code-1-code', image: modelImage('code-1.png') },
      {
        title: 'Agent Models',
        label: 'Agent Model',
        href: '/models/multiagent-1-agent',
        image: modelImage('multi-agent-1.png'),
      },
    ],
  },
]

function Label({ children }: { children: string }) {
  return (
    <span className="mt-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[8px] leading-4 text-black">
      {children}
    </span>
  )
}

function ModelCard({ model, priority = false }: { model: ModelCard; priority?: boolean }) {
  return (
    <Link href={model.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={model.image}
          alt={model.title}
          fill
          priority={priority}
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 33vw, calc(100vw - 40px)"
        />
      </div>
      <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
        {model.title}
      </h3>
      <Label>{model.label}</Label>
      {model.description ? (
        <p className="mt-3 max-w-[340px] text-[12px] leading-5 text-gray-500">{model.description}</p>
      ) : null}
    </Link>
  )
}

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Explore Models</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Model Index
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        {sections.map((section, sectionIndex) => (
          <section key={section.title} className="border-t border-gray-100 py-12 first:border-t-0 first:pt-0">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">{section.title}</h2>
                {section.description ? (
                  <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">{section.description}</p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {section.models.map((model, modelIndex) => (
                <ModelCard
                  key={`${section.title}-${model.title}`}
                  model={model}
                  priority={sectionIndex === 0 && modelIndex < 3}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[360px]">
            <Image
              src="/india.png"
              alt="Vibrant Indian market street"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Build intelligence for India
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Explore models, research, and developer tools built for real-world scale.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="https://platform.tnsaai.com" className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                  Open Platform
                </Link>
                <Link href="/developers" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Developers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
