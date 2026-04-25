'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FineTuningPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '186px' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">Enterprise Service</p>
          <h1 className="text-4xl font-normal text-black" style={{ marginTop: '0px', marginBottom: '72px' }}>Custom Fine-Tuning</h1>
        </div>

        <div className="relative w-full max-w-[1028px] mx-auto mb-16 aspect-[1028/560]">
          <Image
            src="/fine-tuning.png"
            alt="Custom Fine-Tuning"
            fill
            priority
            className="object-cover rounded-[40px]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Overview.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Transform TNSA&apos;s foundation models into domain-specific AI solutions tailored to your unique business needs. Our custom fine-tuning service enables you to adapt powerful AI models to your specific use cases, data, and requirements.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Fine-Tuning Methods.</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Full Fine-Tuning</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Update all model parameters for maximum adaptation. Best for large datasets and significant domain shifts. Provides highest accuracy but requires more computational resources.
                </p>
              </div>
              <div className="border-l-4 border-gray-700 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">LoRA (Low-Rank Adaptation)</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Efficient fine-tuning by training small adapter layers. Reduces training time by 3x and memory usage by 70% while maintaining 95%+ of full fine-tuning performance.
                </p>
              </div>
              <div className="border-l-4 border-gray-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">QLoRA (Quantized LoRA)</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Memory-efficient fine-tuning using 4-bit quantization. Enables fine-tuning of 70B+ parameter models on single GPUs while preserving quality.
                </p>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Instruction Tuning</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Specialized fine-tuning for following instructions and task completion. Improves zero-shot performance on new tasks by 40-60%.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Training Pipeline.</h2>
            <div className="bg-gray-50 rounded-[40px] p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Data Preparation</h4>
                    <p className="text-sm text-gray-600">Clean, format, and validate training data</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hyperparameter Optimization</h4>
                    <p className="text-sm text-gray-600">Learning rate, batch size, epochs tuning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Training & Monitoring</h4>
                    <p className="text-sm text-gray-600">Distributed training with real-time metrics</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">4</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Evaluation & Validation</h4>
                    <p className="text-sm text-gray-600">Benchmark testing and quality assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Performance Metrics.</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3-10x</div>
                <div className="text-sm text-gray-600">Faster Training</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">70%</div>
                <div className="text-sm text-gray-600">Memory Reduction</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">95%+</div>
                <div className="text-sm text-gray-600">Accuracy Retention</div>
              </div>
              <div className="bg-gray-50 rounded-[40px] p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">40-60%</div>
                <div className="text-sm text-gray-600">Task Improvement</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">Applications.</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Industry-specific chatbots, specialized content generation, custom classification systems, domain-specific question answering, enterprise knowledge management, legal document analysis, medical diagnosis assistance, and financial forecasting.
            </p>
          </div>

          <div className="flex justify-center" style={{ marginBottom: '77px' }}>
            <Link href="/company/contact" className="px-6 py-2.5 text-sm font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Contact Sales →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
