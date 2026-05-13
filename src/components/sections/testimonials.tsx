"use client"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f6f8] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-[28px] md:text-5xl font-bold text-[#111827] tracking-tight mb-8 md:mb-12 leading-tight md:leading-[1.1] text-center text-balance max-w-4xl mx-auto italic">
            "The future of legal work is not about working harder it is about using AI to organize knowledge, reduce manual efforts and make your Law Firm faster"
          </h2>
          <div className="flex flex-col items-center">
            <img src="/logos/logo-v2.png" alt="JMD Team" className="w-16 h-auto mb-4" />
            <h4 className="font-bold text-[#111827] text-[15px]">JMD Team</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
