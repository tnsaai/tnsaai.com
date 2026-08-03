import Link from 'next/link'
import Image from 'next/image'
import FooterImageLogo from './FooterImageLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-hidden rounded-t-[40px] border-t border-gray-200 bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image src="/TNSA.svg" alt="TNSA" width={120} height={40} />
            <p className="mt-3 text-sm text-gray-500">TNSA Private Limited</p>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-base text-black mb-4">Research</h3>
            <ul className="space-y-3">
              <li><Link href="/research" className="text-sm text-gray-500 hover:text-black transition-colors">Research Index</Link></li>
              <li><Link href="/safety" className="text-sm text-gray-500 hover:text-black transition-colors">Safety at TNSA</Link></li>
              <li><Link href="/company/news/transforming-government-services-with-large-language-models" className="text-sm text-gray-500 hover:text-black transition-colors">Research for India</Link></li>
            </ul>
            <h3 className="text-base text-black mt-8 mb-4">Models</h3>
            <ul className="space-y-3">
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 3.5</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 3.9</Link></li>
              <li><Link href="/models/ngen3.1-pro" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 3.1</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 3</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 2</Link></li>
              <li><Link href="/models/ngen1" className="text-sm text-gray-500 hover:text-black transition-colors">NGen 1</Link></li>
              <li><Link href="/models/igen-1-image" className="text-sm text-gray-500 hover:text-black transition-colors">IGen 1</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">Audio-Text-Speech</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">NGen-Realtime-Omni</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">ToolModels</Link></li>
              <li><Link href="/models" className="text-sm text-gray-500 hover:text-black transition-colors">Agent-QRL</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base text-black mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="https://platform.tnsaai.com" className="text-sm text-gray-500 hover:text-black transition-colors">API Platform</Link></li>
              <li><Link href="/products/genchat" className="text-sm text-gray-500 hover:text-black transition-colors">GensChat</Link></li>
              <li><Link href="/products/edgechat" className="text-sm text-gray-500 hover:text-black transition-colors">EdgeChat</Link></li>
            </ul>
            <h3 className="text-base text-black mt-8 mb-4">Business</h3>
            <ul className="space-y-3">
              <li><Link href="/enterprises" className="text-sm text-gray-500 hover:text-black transition-colors">AI as a Service</Link></li>
              <li><Link href="/enterprises/pre-training" className="text-sm text-gray-500 hover:text-black transition-colors">Pre-Training</Link></li>
              <li><Link href="/enterprises/fine-tuning" className="text-sm text-gray-500 hover:text-black transition-colors">Fine-Tuning</Link></li>
              <li><Link href="/enterprises/infrastructure" className="text-sm text-gray-500 hover:text-black transition-colors">Infrastructure Support</Link></li>
              <li><Link href="/enterprises/consulting" className="text-sm text-gray-500 hover:text-black transition-colors">AI Consulting</Link></li>
              <li><Link href="/enterprises/data-engineering" className="text-sm text-gray-500 hover:text-black transition-colors">Data Engineering</Link></li>
              <li><Link href="/enterprises/deployment" className="text-sm text-gray-500 hover:text-black transition-colors">Model Deployment</Link></li>
            </ul>
            <h3 className="text-base text-black mt-8 mb-4">More</h3>
            <ul className="space-y-3">
              <li><Link href="/company/news" className="text-sm text-gray-500 hover:text-black transition-colors">News</Link></li>
              <li><Link href="/research" className="text-sm text-gray-500 hover:text-black transition-colors">Stories</Link></li>
              <li><Link href="/research" className="text-sm text-gray-500 hover:text-black transition-colors">Ideas</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/safety" className="text-sm text-gray-500 hover:text-black transition-colors">AI Safety</Link></li>
              <li><Link href="/company/contact" className="text-sm text-gray-500 hover:text-black transition-colors">Contact</Link></li>
              <li><Link href="/company/careers" className="text-sm text-gray-500 hover:text-black transition-colors">Careers</Link></li>
            </ul>
            <h3 className="text-base text-black mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy/policy" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/t&c/terms-of-service" className="text-sm text-gray-500 hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal/open-weight-model-licenses" className="text-sm text-gray-500 hover:text-black transition-colors">Open-Weight Model Licenses</Link></li>
              <li><Link href="/legal/model-complaints" className="text-sm text-gray-500 hover:text-black transition-colors">Model Complaints</Link></li>
              <li><Link href="/legal/content-moderation" className="text-sm text-gray-500 hover:text-black transition-colors">Content Moderation</Link></li>
              <li><Link href="/legal/data-issues" className="text-sm text-gray-500 hover:text-black transition-colors">Data Issues</Link></li>
              <li><Link href="/legal/data-processing-addendum" className="text-sm text-gray-500 hover:text-black transition-colors">Data Processing Addendum</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-black">
            © 2021–{currentYear} TNSA. TNSA Private Limited. All rights reserved.
          </p>
        </div>

        {/* Image-filled wordmark */}
        <div className="mt-20 mb-0">
          <FooterImageLogo />
        </div>
      </div>
    </footer>
  )
}
