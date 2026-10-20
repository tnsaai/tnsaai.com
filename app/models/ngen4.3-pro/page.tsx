import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ModelPlatformDetails } from '@/components/ui/ModelPlatformDetails'
import { ModalityIcons } from '@/components/ui/ModalityIcons'
import { ModelRegions } from '@/components/ui/ModelRegions'
import { NGen43BenchmarkTable } from '@/components/ui/NGen43BenchmarkTable'
import { NGen43ModelEvaluations } from '@/components/ui/NGen43ModelEvaluations'
import { NGen4TeamSection } from '@/components/ui/NGen4TeamSection'
import { ngen43ProPlatformProfile } from '@/content/modelPlatformProfiles'
import { ngen43BenchmarkGroups } from '@/content/ngen43Benchmarks'

export const metadata: Metadata = {
  title: 'NGen-4.3 Pro | TNSA',
  description: 'Meet NGen-4.3 Pro: frontier agentic intelligence with a 1,048,576-token context window and 248,320-token maximum output.',
  openGraph: {
    title: 'Introducing NGen-4.3 Pro',
    description: '1,048,576-token context. 248,320-token maximum output. Built for long-horizon reasoning and agentic work.',
    images: ['/ngen4.3-pro-launch.png'],
  },
}

export default function NGen43ProPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pb-10 pt-[116px] md:pt-[140px]">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <h1 className="max-w-[980px] text-[52px] font-normal leading-[0.98] tracking-[-0.045em] md:text-[88px]">Introducing NGen-4.3 Pro</h1>
          <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-gray-600 md:text-[22px] md:leading-9">
            Long-horizon intelligence for coding, computer use, multimodal work, and rigorous reasoning — with room to think at extraordinary scale.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="https://platform.tnsaai.com" className="rounded-full bg-black px-5 py-3 text-[12px] text-white transition-colors hover:bg-gray-800">Try in API Platform</Link>
            <a href="#benchmarks" className="rounded-full border border-gray-200 px-5 py-3 text-[12px] transition-colors hover:bg-gray-50">Explore benchmarks</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black">
          <Image src="/model-images/ngen4.3-pro-preview.svg" alt="NGen-4.3 Pro launch artwork" fill priority unoptimized className="object-cover" sizes="(min-width: 1280px) 1180px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Built for scale</p>
          <h2 className="mt-4 text-[34px] font-normal leading-tight tracking-[-0.03em] md:text-[48px]">One million tokens of working context.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Context window</p>
            <p className="mt-4 text-[31px] font-normal tracking-[-0.04em] md:text-[38px]">1,048,576</p>
            <p className="mt-1 text-[12px] text-gray-500">tokens · 1M</p>
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Maximum output</p>
            <p className="mt-4 text-[31px] font-normal tracking-[-0.04em] md:text-[38px]">248,320</p>
            <p className="mt-1 text-[12px] text-gray-500">tokens</p>
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Input</p>
            <ModalityIcons value="Text, image, audio, video" className="mt-4" />
          </div>
          <div className="bg-white p-7 md:p-9">
            <p className="text-[12px] text-gray-500">Model ID</p>
            <p className="mt-4 font-mono text-[16px]">ngen-4.3-pro</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-24">
        <ModelPlatformDetails profile={ngen43ProPlatformProfile} />
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 border-t border-gray-100 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Availability</p>
          <h2 className="mt-4 text-[34px] font-normal leading-tight tracking-[-0.03em] md:text-[44px]">Served from TNSA regions.</h2>
        </div>
        <ModelRegions slug="ngen4.3-pro" />
      </section>

      <section id="benchmarks" className="border-t border-gray-100 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Model evaluations</p>
            <h2 className="mt-4 text-[40px] font-normal tracking-[-0.035em] md:text-[60px]">Frontier performance, measured broadly.</h2>
            <p className="mt-5 text-[14px] leading-7 text-gray-600">Scores are percentages; higher is better. NGen-4.3 Pro is highlighted for quick comparison.</p>
          </div>

          <NGen43BenchmarkTable />
          <p className="mt-4 text-[11px] leading-5 text-gray-500">CI denotes code interpreter. Benchmark names and scores are presented as supplied.</p>
        </div>
      </section>

      <NGen43ModelEvaluations groups={ngen43BenchmarkGroups} />

      <section className="mx-auto max-w-[1180px] border-t border-gray-100 px-5 py-20 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">The team</p>
          <h2 className="mt-4 text-[36px] font-normal tracking-[-0.035em] md:text-[48px]">Built at TNSA.</h2>
        </div>
        <NGen4TeamSection />
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">Available now</p>
        <h2 className="mx-auto mt-4 max-w-[760px] text-[40px] font-normal leading-tight tracking-[-0.035em] md:text-[62px]">Put a million-token context to work.</h2>
        <Link href="https://platform.tnsaai.com" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-[12px] text-white hover:bg-gray-800">Start building</Link>
      </section>
    </main>
  )
}
