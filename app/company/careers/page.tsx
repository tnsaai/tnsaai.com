'use client'

import Link from 'next/link'
import Image from 'next/image'

const jobs = [
  { title: 'Senior Full-Stack Engineer', department: 'Development', count: 2, location: 'Chennai' },
  { title: 'Backend/API Engineer', department: 'Development', count: 2, location: 'Chennai' },
  { title: 'Frontend Engineer (Web + Mobile)', department: 'Development', count: 1, location: 'Chennai' },
  { title: 'Frontend Engineer (Web + Mobile)', department: 'Development', count: 1, location: 'Remote' },
  { title: 'UI/UX Designer', department: 'Development', count: 1, location: 'Remote' },
  { title: 'ML Infrastructure Engineer', department: 'MLOps', count: 1, location: 'Chennai' },
  { title: 'AI Platform Engineer', department: 'MLOps', count: 1, location: 'Remote' },
  { title: 'Site Reliability Engineer (SRE)', department: 'MLOps', count: 1, location: 'Remote' },
  { title: 'LLM Research Scientist', department: 'Research', count: 2, location: 'Chennai' },
  { title: 'Multimodal Research Scientist', department: 'Research', count: 1, location: 'Chennai' },
  { title: 'RL Research Engineer', department: 'Research', count: 1, location: 'Chennai' },
  { title: 'Training Systems & Evaluation Engineer', department: 'Research', count: 1, location: 'Chennai' },
  { title: 'Technology & Corporate Lawyer', department: 'Legal (Consultants)', count: 1, location: 'Remote' },
  { title: 'IP, Privacy & Compliance Lawyer', department: 'Legal (Consultants)', count: 1, location: 'Remote' },
  { title: 'Chartered Accountant', department: 'CA Team (Consultants)', count: 1, location: 'Chennai' },
  { title: 'Financial & Audit Consultant', department: 'CA Team (Consultants)', count: 1, location: 'Remote' },
]

const totalOpenings = jobs.reduce((total, job) => total + job.count, 0)

const benefits = [
  { title: 'Frontier Research', description: 'Work on cutting-edge AI research and development at scale.' },
  { title: 'World-Class Team', description: 'Collaborate with top-tier researchers and engineers.' },
  { title: 'True Ownership', description: 'Competitive compensation with significant equity options.' },
  { title: 'Flexibility', description: 'Remote-first environment with flexible hybrid options.' },
]

export default function CareersPage() {
  // Group jobs by department
  const groupedJobs = jobs.reduce((acc, job) => {
    if (!acc[job.department]) acc[job.department] = []
    acc[job.department].push(job)
    return acc
  }, {} as Record<string, typeof jobs>)

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      {/* Header Section */}
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">Company</p>
          <h1 className="text-[44px] font-normal leading-tight tracking-normal text-black md:text-[64px]">
            Careers
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-[920px] px-5 pb-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 md:aspect-[2/1]">
          <Image
            src="/Careers.png"
            alt="TNSA Careers"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
          />
        </div>
      </section>

      {/* Intro & Benefits */}
      <section className="mx-auto max-w-[920px] px-5 pb-24">
        <div className="grid gap-16 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-[24px] font-normal leading-tight text-black">Join our team</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 max-w-[400px]">
              Help us build the future of artificial intelligence. We are looking for passionate individuals who want to make a difference in advancing AI technology for humanity.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="text-[15px] font-medium text-black">{benefit.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mx-auto max-w-[920px] px-5 pb-32">
        <div className="border-t border-gray-100 pt-16">
          <div className="mb-12">
            <h2 className="text-[32px] font-normal leading-tight text-black">Open positions</h2>
            <p className="mt-3 text-[15px] text-gray-500">
              {totalOpenings} openings across engineering, research, legal, and finance.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedJobs).map(([department, deptJobs]) => (
              <div key={department}>
                <div className="mb-6 flex items-end justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-[20px] font-medium text-black">{department}</h3>
                  <span className="text-[11px] text-gray-400">
                    {deptJobs.reduce((total, job) => total + job.count, 0)} open
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {deptJobs.map((job, index) => (
                    <div key={index} className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-black hover:shadow-sm">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-[16px] font-medium text-black transition-colors">{job.title}</h4>
                          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.08em] text-gray-400">Location</p>
                              <p className="mt-1 text-[12px] text-gray-700">{job.location}</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.08em] text-gray-400">Openings</p>
                              <p className="mt-1 text-[12px] text-gray-700">{job.count}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-[12px] text-gray-400 font-mono tracking-wide">{department.toUpperCase()}</span>
                          <Link 
                            href={`mailto:careers@tnsaai.com?subject=${encodeURIComponent(`Application — ${job.title} (${job.location})`)}`}
                            className="inline-flex h-8 items-center justify-center rounded-full bg-black px-4 text-[12px] text-white transition-transform group-hover:scale-105"
                          >
                            Apply
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
