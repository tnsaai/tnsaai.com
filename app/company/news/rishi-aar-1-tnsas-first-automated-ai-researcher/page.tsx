'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function RishiNewsPost() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">November 16, 2025</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>
            Introducing Rishi (AAR-1): TNSA&apos;s First Automated AI Researcher
          </h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="https://raw.githubusercontent.com/TnsaAi/images-urls/refs/heads/main/tnsa-risihi.png"
            alt="Rishi AAR-1"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">A Relentless Pursuit of SuperIntelligence</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              TNSA is proud to introduce Rishi (AAR-1), our first Automated AI Researcher. Rishi marks a significant leap forward in our mission to achieve SuperIntelligence. Operating autonomously every second of every day, Rishi is designed to accelerate AI progress at a scale previously unimaginable. It works tirelessly, building on its knowledge and capabilities with each passing moment.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">An Autonomous Powerhouse</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Rishi possesses a unique and powerful set of capabilities. It can build and study complex algorithms, run extensive tests, train new models, and analyze the results to design even better models in a continuous loop of improvement. This self-driven cycle of innovation allows Rishi to explore the frontiers of AI without direct human intervention. Its autonomous nature means it operates on a 30-second research cycle, constantly planning its next action and executing it without waiting for commands.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Robust and Resilient</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Designed for continuous operation, Rishi is both robust and resilient. It automatically starts on server restarts and can seamlessly resume its work from the last checkpoint, ensuring no progress is lost. Checkpoints are saved every five iterations, preserving the state of its research. This allows for long-term, uninterrupted research campaigns. Furthermore, Rishi is equipped with a sophisticated Knowledge Summarizer to prevent context loss over time, intelligently truncating its knowledge base to retain the most relevant information.
            </p>
          </div>

          <div id="rishi-workspace" className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Equipped for Discovery</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              To facilitate its research, Rishi has access to its own dedicated codebase and workspace where it can work, experiment, and document its findings. All its files, including thinking logs, generated algorithms, and research documents, are meticulously organized in its `rishi_workspace/`. It is equipped with a vast array of tools for web search, research, and algorithm generation, giving it the same powerful capabilities as our ngen3.9-pro-agentic model. Critically, Rishi leverages TNSA’s closed-source ARCH-X Framework, a powerful platform for AI development. TNSA also provides an open-source variant of this framework, OpenArch-X, to the broader research community.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">The Future of AI Research</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Rishi is more than just a tool; it is a tireless researcher working alongside our human experts. Its launch represents a fundamental shift in how AI research is conducted, paving the way for breakthroughs that will shape the future of technology and intelligence. By automating the research process, we can explore more ideas, iterate faster, and unlock new frontiers in AI. TNSA plans to add many more automated researchers to build a complete AI research team made of AI agents that operate alongside our human researchers. See the <Link href="/research/tri-flux-attention" className="underline font-medium">Tri-Flux Attention paper</Link> and <Link href="#rishi-workspace" className="underline font-medium">Rishi&apos;s workspace</Link> for details and references.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/news" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              View All News →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
