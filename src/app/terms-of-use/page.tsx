export default function TermsOfUse() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-8">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-lg text-[#4b5563] space-y-8">
          <p className="text-[17px]">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">1. Introduction</h2>
            <p className="text-[17px] leading-relaxed">
              Welcome to LawDesk. These Terms and Conditions govern your use of our website and platform. 
              By accessing or using our services, you agree to be bound by these terms. If you disagree 
              with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">2. Use of Service</h2>
            <p className="text-[17px] leading-relaxed">
              Our services are intended for legal professionals and law firms. You agree to use the service
              only for lawful purposes and in accordance with these Terms. You are responsible for ensuring 
              that your use of the service complies with all applicable local, state, national, and 
              international laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">3. User Accounts</h2>
            <p className="text-[17px] leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information.
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination 
              of your account. You are responsible for safeguarding the password that you use to access the 
              service and for any activities or actions under your password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Intellectual Property</h2>
            <p className="text-[17px] leading-relaxed">
              The service and its original content, features, and functionality are and will remain the 
              exclusive property of LawDesk and its licensors. The service is protected by copyright, 
              trademark, and other laws of both the United States and foreign countries. Our trademarks 
              and trade dress may not be used in connection with any product or service without the prior 
              written consent of LawDesk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Limitation of Liability</h2>
            <p className="text-[17px] leading-relaxed">
              In no event shall LawDesk, nor its directors, employees, partners, agents, suppliers, or 
              affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
              resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Changes to Terms</h2>
            <p className="text-[17px] leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              We will provide notice of any significant changes. Your continued use of the service following 
              any changes indicates your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Contact Us</h2>
            <p className="text-[17px] leading-relaxed">
              If you have any questions about these Terms, please contact us at support@lawdesk.com.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
