"use client"

import { motion } from "framer-motion"
import { BarChart3, LineChart, Globe, Zap } from "lucide-react"

export function AnalyticsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6">
            Everything connects beautifully
          </h2>
          <p className="text-lg text-slate-600">
            Powerful insights and integrations that keep your firm running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:max-w-4xl xl:max-w-5xl mx-auto">
          {/* Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-8 overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Advanced Analytics</h3>
              <p className="text-slate-600 mb-8 max-w-md">Track billable hours, client acquisition costs, and firm profitability in real-time.</p>
            </div>
            
            {/* Chart Placeholder */}
            <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-white border-t border-l border-slate-200 rounded-tl-2xl shadow-lg p-4 group-hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-end h-full gap-2 pt-4">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm relative group-hover:bg-blue-500/30 transition-colors" style={{ height: `${h}%` }}>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Client Portal</h3>
            <p className="text-slate-600 text-sm">Secure 24/7 access for your clients.</p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Automations</h3>
            <p className="text-slate-600 text-sm">Automate document intake and client onboarding.</p>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-8 flex items-center justify-between overflow-hidden"
          >
            <div className="z-10">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Integrations</h3>
              <p className="text-slate-600 max-w-sm">Connects with Outlook, Gmail, QuickBooks, and 100+ other tools.</p>
            </div>
            <div className="flex -space-x-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center">
                   <div className="w-6 h-6 bg-slate-200 rounded-sm" />
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
