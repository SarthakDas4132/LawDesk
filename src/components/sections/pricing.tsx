"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingSection() {
  const [billing, setBilling] = useState<"Annually" | "Monthly">("Annually")

  return (
    <section id="pricing" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-[#eff3f8] dark:bg-[#161b22] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-[#8c8273] dark:text-[#737373] font-bold tracking-widest uppercase text-xs mb-4 transition-colors duration-300">
            Our Pricing
          </h3>
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight leading-[1.1] md:leading-[1.05] transition-colors duration-300">
            Simple plans<br className="hidden md:block"/>for serious work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch max-w-md lg:max-w-none mx-auto">
          
          {/* Basic Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-6 md:p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2 transition-colors duration-300">LegalRobe Basic</h3>
            <div className="text-4xl font-bold text-[#111827] mb-6 transition-colors duration-300">Free</div>
            <p className="text-[#6b7280] mb-8 text-[15px] transition-colors duration-300">For solo use with light needs.</p>
            
            <ul className="space-y-4 mb-10 text-[#4b5563] text-[15px] transition-colors duration-300">
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited projects</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Unlimited clients</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Time tracking</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> CRM</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> iOS & Andriod app</li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center border-2 border-[#1a1818] hover:bg-[#1a1818] hover:text-white text-[#111827] text-[15px] font-bold py-3.5 rounded-full transition-colors">
              Get Basic
            </Link>
          </div>

          {/* Premium - WITH TOGGLE */}
          <div className="bg-[#d2e5f9] dark:bg-[#111a2e] rounded-[2rem] p-2 border-2 border-[#82b8f4] dark:border-[#1d4ed8]/40 shadow-xl relative z-10 flex flex-col h-full transition-colors duration-300">
            
            {/* Toggle inside the top padding */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md p-1 rounded-full inline-flex relative border border-white/60 dark:border-white/10 shadow-sm transition-colors duration-300">
                <motion.div 
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-[#30363d] rounded-full shadow-sm"
                  animate={{ left: billing === "Annually" ? "4px" : "calc(50%)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <button
                  onClick={() => setBilling("Annually")}
                  className={`relative z-10 px-6 py-1.5 rounded-full text-[13px] font-bold transition-colors ${billing === "Annually" ? "text-[#111827] dark:text-[#fafafa]" : "text-[#4b5563] dark:text-[#a3a3a3]"}`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setBilling("Monthly")}
                  className={`relative z-10 px-6 py-1.5 rounded-full text-[13px] font-bold transition-colors ${billing === "Monthly" ? "text-[#111827] dark:text-[#fafafa]" : "text-[#4b5563] dark:text-[#a3a3a3]"}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex flex-col flex-grow">
              <div className="flex items-center gap-3">
                <h3 className="text-[17px] font-bold text-[#4b5563] dark:text-[#94a3b8] transition-colors duration-300">LegalRobe Premium</h3>
                <span className="bg-[#bdf0ce] dark:bg-[#064e3b] text-[#0d6a2f] dark:text-[#34d399] text-[10px] font-bold px-3 py-1 rounded-full border border-[#a2deb6] dark:border-[#059669] transition-colors duration-300">
                  Save 20%
                </span>
              </div>
              <div className="text-[2.75rem] font-bold text-[#111827] dark:text-[#fafafa] mb-6 transition-colors duration-300">{billing === "Annually" ? "$189" : "$229"}<span className="text-[1.5rem] font-medium text-[#4b5563] dark:text-[#94a3b8]">/mo</span></div>
              <p className="text-[#6b7280] dark:text-[#94a3b8] mb-8 text-[15px] transition-colors duration-300">For pro use with light needs.</p>
              
              <ul className="space-y-4 mb-10 text-[#4b5563] dark:text-[#e2e8f0] text-[15px] transition-colors duration-300">
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827] dark:text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Everything in Basic</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827] dark:text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Invoices & payments</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827] dark:text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Expense tracking</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827] dark:text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Income tracking</li>
                <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827] dark:text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Scheduling</li>
              </ul>

              <Link href="/contact-us" className="mt-auto block text-center bg-white dark:bg-[#fafafa] hover:bg-gray-100 dark:hover:bg-[#e5e5e5] text-[#1a1818] dark:text-[#0a0a0a] text-[15px] font-bold py-3.5 rounded-full transition-colors w-full">
                Get Premium
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#f2f0ea] rounded-[2rem] p-6 md:p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-[#e5e0d8]">
            <h3 className="text-[17px] font-bold text-[#4b5563] mb-2 transition-colors duration-300">LegalRobe Enterprise</h3>
            <div className="text-4xl font-bold text-[#111827] mb-6 transition-colors duration-300">Flexible</div>
            <p className="text-[#6b7280] mb-8 text-[15px] transition-colors duration-300">For team use with light needs.</p>
            
            <ul className="space-y-4 mb-10 text-[#4b5563] text-[15px] transition-colors duration-300">
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Everything in Premium</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Custom data import</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Advanced onboarding</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Hubspot integration</li>
              <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Timesheets</li>
            </ul>

            <Link href="/contact-us" className="mt-auto block text-center border-2 border-[#1a1818] hover:bg-[#1a1818] hover:text-white text-[#111827] text-[15px] font-bold py-3.5 rounded-full transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
