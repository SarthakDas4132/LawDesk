import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f9f8f6] pt-16 md:pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* CTA Section */}
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-4">
            Ready to get started
          </h2>
          <p className="text-[#4b5563] text-[17px] mb-8">
            Download LegalRobe for free. No credit card required.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-block bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Try LegalRobe free
          </Link>
        </div>

        {/* Footer Box */}
        <div className="bg-[#f2f0ea] rounded-[2rem] p-10 md:p-16 border border-[#e5e0d8] shadow-sm relative">
          <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
            
            {/* Left Side */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 text-[#111827] font-bold text-xl tracking-tight">
                <img src="/logo.png" alt="LegalRobe" className="h-8 w-auto" />
                LegalRobe
              </Link>
              <p className="text-[#4b5563] mb-8 text-[15px]">
                Made for modern legal teams.
              </p>
              
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1818] text-white flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1818] text-white flex items-center justify-center hover:bg-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="flex gap-16 md:gap-24">
              <div>
                <h4 className="text-[#111827] font-bold mb-6 text-xs uppercase tracking-wider">Pages</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Home</Link></li>
                  <li><Link href="/#features" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Features</Link></li>
                  <li><Link href="/#pricing" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Pricing</Link></li>
                  <li><Link href="/blog" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#111827] font-bold mb-6 text-xs uppercase tracking-wider">Information</h4>
                <ul className="space-y-4">
                  <li><Link href="/contact-us" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Contact</Link></li>
                  <li><Link href="/privacy-policy" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Privacy</Link></li>
                  <li><Link href="/terms-of-use" className="text-[#4b5563] hover:text-[#111827] transition-colors text-[14px] font-medium">Terms of use</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#e5e0d8]">
            <p className="text-[#6b7280] text-sm">
              © 2026 LegalRobe. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
