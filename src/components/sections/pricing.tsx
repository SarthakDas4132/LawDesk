"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingSection() {
  const [billing, setBilling] = useState<"Annually" | "Monthly">("Annually")

  return (
    <section id="pricing" className="pt-16 pb-24 md:pt-20 md:pb-32 bg-[#f2f0ea] dark:bg-[#0d1117] transition-colors duration-300 border-t border-[#e5e0d8] dark:border-[#21262d]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#8c8273] dark:text-[#8b949e] font-bold tracking-widest uppercase text-xs mb-4 transition-colors duration-300"
          >
            Transparent Plans
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[3.5rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight leading-[1.1] md:leading-[1.05] transition-colors duration-300"
          >
            Simple plans for serious work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#4b5563] dark:text-[#a3a3a3] text-[16px] md:text-[17px] max-w-lg mx-auto mt-4 leading-relaxed transition-colors duration-300"
          >
            Choose the plan that fits your practice. All Premium accounts start with a no-commitment free trial.
          </motion.p>
        </div>

        {/* Dynamic Pricing Toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="bg-[#eeebe3] dark:bg-[#161b22] p-1.5 rounded-full inline-flex relative border border-[#e5e0d8] dark:border-[#30363d] shadow-sm transition-colors duration-300">
            <motion.div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white dark:bg-[#30363d] rounded-full shadow-sm"
              animate={{ left: billing === "Annually" ? "6px" : "calc(50%)" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
            <button
              onClick={() => setBilling("Annually")}
              className={`relative z-10 px-6 py-2 rounded-full text-[13px] md:text-[14px] font-bold transition-colors duration-200 ${billing === "Annually" ? "text-[#111827] dark:text-[#fafafa]" : "text-[#6b7280] dark:text-[#8b949e]"}`}
            >
              Pay Annually <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold ml-1">Save 20%</span>
            </button>
            <button
              onClick={() => setBilling("Monthly")}
              className={`relative z-10 px-6 py-2 rounded-full text-[13px] md:text-[14px] font-bold transition-colors duration-200 ${billing === "Monthly" ? "text-[#111827] dark:text-[#fafafa]" : "text-[#6b7280] dark:text-[#8b949e]"}`}
            >
              Pay Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch max-w-md lg:max-w-none mx-auto">
          
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#eeebe3] dark:bg-[#161b22] rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-[#e5e0d8] dark:border-[#30363d]/80 group"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#fafafa] mb-2 transition-colors duration-300">Basic</h3>
              <p className="text-[#6b7280] dark:text-[#8b949e] text-[14px] leading-relaxed transition-colors duration-300">
                Core case organization and matter tracking for solo practitioners.
              </p>
            </div>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[2.75rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight transition-colors duration-300">Free</span>
            </div>
            
            <div className="h-[2px] bg-[#e5e0d8] dark:bg-[#30363d]/50 w-full mb-8" />
            
            <ul className="space-y-4 mb-10 text-[#4b5563] dark:text-[#c9d1d9] text-[15px] transition-colors duration-300 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Unlimited Cases & Matters</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Client Directory & CRM</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Hearing Tracker & Calendar</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Google Drive Cloud Storage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Mobile App Access</span>
              </li>
            </ul>

            <Link 
              href="/contact-us" 
              className="mt-auto block text-center border-2 border-[#1a1818] dark:border-[#fafafa] hover:bg-[#1a1818] hover:text-white dark:hover:bg-[#fafafa] dark:hover:text-[#0a0a0a] text-[#111827] dark:text-[#fafafa] text-[15px] font-bold py-3.5 rounded-full transition-all duration-300"
            >
              Get Basic
            </Link>
          </motion.div>

          {/* Premium Plan - Featured Card with 7-Day Trial */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#d2e5f9] dark:bg-[#112240] rounded-[2.5rem] p-8 md:p-10 border-2 border-[#82b8f4] dark:border-[#1d4ed8]/50 shadow-2xl relative z-10 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(29,78,216,0.15)] transition-all duration-300 scale-100 lg:scale-[1.03] group"
          >
            {/* Top Ribbons Container */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap z-20">
              <span className="bg-[#bdf0ce] dark:bg-[#064e3b] text-[#0d6a2f] dark:text-[#34d399] text-[11px] font-extrabold px-4 py-1.5 rounded-full border border-[#a2deb6] dark:border-[#059669] shadow-sm uppercase tracking-wider">
                7-Day Free Trial
              </span>
              <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-amber-300 dark:border-amber-900 shadow-sm uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#fafafa] mb-2 transition-colors duration-300">Premium</h3>
              <p className="text-[#4b5563] dark:text-[#94a3b8] text-[14px] leading-relaxed transition-colors duration-300">
                Advanced AI power, billing, and complete workflows for active law firms.
              </p>
            </div>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[2.75rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight transition-colors duration-300">
                {billing === "Annually" ? "$189" : "$229"}
              </span>
              <span className="text-[1.125rem] font-medium text-[#4b5563] dark:text-[#94a3b8]">/mo</span>
            </div>
            
            <div className="h-[2px] bg-[#82b8f4]/50 dark:bg-[#1d4ed8]/30 w-full mb-8" />
            
            <ul className="space-y-4 mb-10 text-[#2c3e50] dark:text-[#e2e8f0] text-[15px] transition-colors duration-300 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-semibold">Everything in Basic</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>AI Legal Assistant (Doc Summaries & Drafts)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>AI Case Memory & Assistant Chat</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Invoices & Online Payments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Trust Accounting & Expense Tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Smart Scheduling & Notifications</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Link 
                href="/contact-us" 
                className="block text-center bg-[#1a1818] dark:bg-[#fafafa] hover:bg-black dark:hover:bg-[#e5e5e5] text-white dark:text-[#0a0a0a] text-[15px] font-bold py-4 rounded-full transition-all duration-300 w-full shadow-lg shadow-blue-500/10 dark:shadow-none"
              >
                Start 7-Day Free Trial
              </Link>
              <p className="text-center text-[#4b5563] dark:text-[#94a3b8] text-[11px] font-medium mt-3">
                No credit card required • Cancel anytime
              </p>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#eeebe3] dark:bg-[#161b22] rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-[#e5e0d8] dark:border-[#30363d]/80 group"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#111827] dark:text-[#fafafa] mb-2 transition-colors duration-300">Enterprise</h3>
              <p className="text-[#6b7280] dark:text-[#8b949e] text-[14px] leading-relaxed transition-colors duration-300">
                Customized workspace, advanced integrations, and dedicated priority support.
              </p>
            </div>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[2.75rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight transition-colors duration-300">Flexible</span>
            </div>
            
            <div className="h-[2px] bg-[#e5e0d8] dark:bg-[#30363d]/50 w-full mb-8" />
            
            <ul className="space-y-4 mb-10 text-[#4b5563] dark:text-[#c9d1d9] text-[15px] transition-colors duration-300 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-semibold">Everything in Premium</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Custom Data Migration & Import</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Dedicated Firm Onboarding Manager</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Hubspot & Custom API Integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>Advanced Timesheets & Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                <span>24/7 Dedicated Priority Phone Support</span>
              </li>
            </ul>

            <Link 
              href="/contact-us" 
              className="mt-auto block text-center border-2 border-[#1a1818] dark:border-[#fafafa] hover:bg-[#1a1818] hover:text-white dark:hover:bg-[#fafafa] dark:hover:text-[#0a0a0a] text-[#111827] dark:text-[#fafafa] text-[15px] font-bold py-3.5 rounded-full transition-all duration-300"
            >
              Contact Sales
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
