"use client"

export function TestimonialsSection() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-[#f4f6f8] dark:bg-[#0d1117] transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-[24px] md:text-4xl font-bold text-[#111827] dark:text-[#fafafa] tracking-tight mb-8 md:mb-12 leading-tight md:leading-[1.1] text-center text-balance max-w-4xl mx-auto italic transition-colors duration-300">
            "The future of legal work is not about working harder it is about using AI to organize knowledge, reduce manual efforts and make your Law Firm faster"
          </h2>
          <div className="flex flex-col items-center">
            <img src="/logo-final-nobg.png" alt="JMD Team Light" className="w-20 h-auto mb-4 block dark:hidden" />
            <img src="/logos/invert-logo.png" alt="JMD Team Dark" className="w-20 h-auto mb-4 hidden dark:block" />
            <h4 className="font-bold text-[#111827] dark:text-[#fafafa] text-[15px] transition-colors duration-300">JMD Team</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
