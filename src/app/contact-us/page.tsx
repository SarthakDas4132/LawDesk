"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmName: "",
    message: ""
  })
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Makes a POST request to your backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      setStatus("success")
      setFormData({ name: "", email: "", firmName: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error(error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-[#f9f8f6] dark:bg-[#0a0a0a] pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Context & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#6b7280] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa] mb-8 transition-colors">
              <span aria-hidden="true" className="mr-2">&larr;</span> Back to home
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] dark:text-[#fafafa] mb-6 leading-tight tracking-tight transition-colors duration-300">
              Let's transform your legal workspace.
            </h1>
            <p className="text-[#4b5563] dark:text-[#a3a3a3] text-lg md:text-[20px] mb-10 leading-relaxed transition-colors duration-300">
              Join the waitlist for early access, request a custom demo, or simply say hello. Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-700 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-[#111827] dark:text-[#fafafa] font-bold text-lg mb-1 transition-colors duration-300">Email Us</h3>
                  <p className="text-[#4b5563] dark:text-[#a3a3a3] transition-colors duration-300">hello@jmdsolutions.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-[#111827] dark:text-[#fafafa] font-bold text-lg mb-1 transition-colors duration-300">Enterprise Sales</h3>
                  <p className="text-[#4b5563] dark:text-[#a3a3a3] transition-colors duration-300">enterprise@jmdsolutions.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#161b22] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#e5e0d8] dark:border-[#30363d] transition-colors duration-300 relative overflow-hidden"
          >
            {/* Subtle gradient glow in top right */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 dark:bg-amber-400/10 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] dark:text-[#fafafa] mb-8 transition-colors duration-300 relative z-10">
              Get in touch
            </h2>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#f0fdf4] dark:bg-[#052e16] border border-[#bbf7d0] dark:border-[#065f46] rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#dcfce7] dark:bg-[#064e3b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#16a34a] dark:text-[#34d399]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#166534] dark:text-[#34d399] mb-2">Request Received</h3>
                <p className="text-[#15803d] dark:text-[#6ee7b7]">Thank you! Our team will reach out to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[#4b5563] dark:text-[#a3a3a3] transition-colors">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-[#f9f8f6] dark:bg-[#0d1117] border border-[#e5e0d8] dark:border-[#30363d] rounded-xl text-[#111827] dark:text-[#fafafa] placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#111827]/20 dark:focus:ring-white/20 transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="firmName" className="text-sm font-semibold text-[#4b5563] dark:text-[#a3a3a3] transition-colors">Law Firm Name</label>
                    <input
                      type="text"
                      id="firmName"
                      name="firmName"
                      value={formData.firmName}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-[#f9f8f6] dark:bg-[#0d1117] border border-[#e5e0d8] dark:border-[#30363d] rounded-xl text-[#111827] dark:text-[#fafafa] placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#111827]/20 dark:focus:ring-white/20 transition-all duration-300"
                      placeholder="Doe & Associates"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#4b5563] dark:text-[#a3a3a3] transition-colors">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#f9f8f6] dark:bg-[#0d1117] border border-[#e5e0d8] dark:border-[#30363d] rounded-xl text-[#111827] dark:text-[#fafafa] placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#111827]/20 dark:focus:ring-white/20 transition-all duration-300"
                    placeholder="jane@doelaw.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[#4b5563] dark:text-[#a3a3a3] transition-colors">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#f9f8f6] dark:bg-[#0d1117] border border-[#e5e0d8] dark:border-[#30363d] rounded-xl text-[#111827] dark:text-[#fafafa] placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#111827]/20 dark:focus:ring-white/20 transition-all duration-300 resize-none"
                    placeholder="I'm interested in early access for my team of 5 lawyers..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1a1818] dark:bg-[#fafafa] hover:bg-black dark:hover:bg-[#e5e5e5] text-white dark:text-[#0a0a0a] text-[16px] font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-70 flex justify-center items-center"
                >
                  {status === "loading" ? (
                    <div className="w-6 h-6 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                  ) : (
                    "Submit Request"
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
