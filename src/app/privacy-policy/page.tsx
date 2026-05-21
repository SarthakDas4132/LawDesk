export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col transition-colors duration-300">
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-[#fafafa] tracking-tight mb-8 transition-colors duration-300">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg text-[#4b5563] dark:text-[#a3a3a3] space-y-8 transition-colors duration-300">
          <p className="text-[17px]">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">1. Introduction</h2>
            <p className="text-[17px] leading-relaxed">
              At LegalRobe, we respect your privacy and are committed to protecting your personal data and client case information. This Privacy Policy explains how we collect, use, store, and protect your information when you register for, access, or use the LegalRobe matter management platform and website. By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">2. Information We Collect</h2>
            <p className="text-[17px] leading-relaxed mb-4">
              We collect information to provide a better, more secure legal workspace experience. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[17px] leading-relaxed">
              <li><strong>Account Registration Information</strong>: When you create a LegalRobe account or join our waitlist, we collect your name, email address, phone number, and law firm details.</li>
              <li><strong>Usage Information</strong>: We gather metadata about your interactions with our service, including IP addresses, browser types, device specifications, page navigation paths, and platform logs.</li>
              <li><strong>Case & Client Files</strong>: In using our matter workspace, you upload files, draft briefs, and compile transcripts. This data is subject to industry-standard zero-knowledge storage protocols, meaning it is encrypted and fully private to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">3. How We Use Your Information</h2>
            <p className="text-[17px] leading-relaxed mb-4">
              We utilize your information for purposes focused strictly on service optimization and user security:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[17px] leading-relaxed">
              <li>To provide, operate, and maintain the matter management workspace.</li>
              <li>To deliver intelligent matter summarizations, document analysis, and calendar syncing milestones.</li>
              <li>To process inquiries, provide support, and respond to contact requests.</li>
              <li>To detect, prevent, and address technical or security concerns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">4. Zero-Knowledge & Data Encryption</h2>
            <p className="text-[17px] leading-relaxed">
              Understanding the critical nature of client privilege, we implement state-of-the-art AES-256 encryption for all data in transit and at rest. Your uploaded case summaries, sensitive files, and platform messages are isolated inside zero-knowledge vaults. We do not inspect, parse, or train models on your proprietary or privileged case materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">5. Data Sharing & Third Parties</h2>
            <p className="text-[17px] leading-relaxed">
              LegalRobe does not sell, lease, or distribute your personal details or case files to third parties. We share information only with highly secure infrastructure providers (such as cloud backup systems) necessary to render our services, and only under strict confidentiality and compliance mandates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">6. Your Privacy Rights</h2>
            <p className="text-[17px] leading-relaxed">
              You retain full control over your data. Depending on your jurisdiction, you have the right to request access to, correction of, or complete deletion of your account and files. You may manage or deactivate your secure storage options directly from your platform dashboard at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">7. Changes to This Policy</h2>
            <p className="text-[17px] leading-relaxed">
              We may update this Privacy Policy from time to time to align with legal or operational shifts. Significant updates will be highlighted via site notices or sent to your registered account email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-4 transition-colors duration-300">8. Contact Us</h2>
            <p className="text-[17px] leading-relaxed">
              If you have any questions or feedback regarding our privacy protocols, or wish to exercise your data rights, please reach out to us at privacy@legalrobe.com.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
