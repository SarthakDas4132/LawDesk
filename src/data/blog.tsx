export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: React.ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "eu-ai-act",
    title: "Technology Law: The Implementation of the EU Artificial Intelligence Act",
    summary: "The European Union's Artificial Intelligence Act officially went into effect, marking the world's first comprehensive, binding legal framework for AI.",
    category: "Technology Law",
    readTime: "5 min read",
    date: "August 1, 2024",
    image: "/blogimages/EU AI act.jpeg",
    content: (
      <>
        <p className="mb-4"><strong>The Core Issue:</strong> Regulating the rapid advancement of Artificial Intelligence.</p>
        <p className="mb-4">The European Union's Artificial Intelligence Act officially went into effect on August 1, 2024, marking the world's first comprehensive, binding legal framework for AI. The legislation is expected to become the global &quot;gold standard&quot; for AI regulation, much like the General Data Protection Regulation (GDPR) did for data privacy.</p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#111827]">Legal Analysis:</h3>
        <p className="mb-4">The Act utilizes a risk-based approach, classifying AI systems into distinct tiers and applying regulations proportionately:</p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>Unacceptable Risk (Banned):</strong> AI systems that threaten fundamental rights are strictly prohibited. This includes government-run social scoring systems, real-time remote biometric identification (facial recognition) in public spaces for standard law enforcement, and AI that uses subliminal techniques to manipulate behavior.</li>
          <li><strong>High-Risk:</strong> Systems used in critical infrastructure, employment (e.g., CV-scanning tools), education, and law enforcement face stringent obligations. Providers must maintain high data quality, ensure human oversight, and undergo conformity assessments.</li>
          <li><strong>General Purpose AI (GPAI):</strong> In response to the rise of advanced LLMs, the Act includes specific transparency and copyright compliance rules for GPAI models. Models deemed to pose &quot;systemic risks&quot; (based on computing power and parameter size) face even heavier reporting requirements.</li>
        </ul>
        <p className="mb-4">Most obligations for organizations will be fully enforceable by the first half of 2026, forcing global companies operating in the EU to drastically overhaul their AI governance structures.</p>
      </>
    )
  },
  {
    slug: "klimaseniorinnen-v-switzerland",
    title: "Human Rights & Environmental Law: KlimaSeniorinnen v. Switzerland",
    summary: "Holding national governments legally accountable for climate change inaction under international human rights law.",
    category: "Human Rights",
    readTime: "4 min read",
    date: "April 2024",
    image: "/blogimages/ECHR Rulling.jpeg",
    content: (
      <>
        <p className="mb-4"><strong>The Core Issue:</strong> Holding national governments legally accountable for climate change inaction under international human rights law.</p>
        <p className="mb-4">In April 2024, the European Court of Human Rights (ECHR) delivered a landmark ruling in the case of Verein KlimaSeniorinnen Schweiz and Others v. Switzerland. The case was brought by a group of older Swiss women who argued that their government's inadequate climate policies violated their right to life and health, as elderly women are particularly vulnerable to extreme heat waves.</p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#111827]">Legal Analysis:</h3>
        <p className="mb-4">The Court ruled in favor of the plaintiffs, finding that Switzerland violated Article 8 of the European Convention on Human Rights (the right to respect for private and family life).</p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li>The Court established that Article 8 encompasses a right to effective protection by State authorities from the serious adverse effects of climate change.</li>
          <li>It legally determined that Switzerland failed to comply with its positive obligations by having &quot;critical gaps&quot; in its domestic regulatory framework, specifically noting the lack of a national greenhouse gas (GHG) emissions limitation or a concrete carbon budget.</li>
        </ul>
        <p className="mb-4">This ruling is a massive precedent for global climate litigation. It legally bridges the gap between environmental policy and fundamental human rights, providing a blueprint for citizens across the 46 Council of Europe member states to sue their governments for failing to meet climate targets.</p>
      </>
    )
  },
  {
    slug: "us-tiktok-divestiture-mandate",
    title: "International Trade & Security Law: The U.S. TikTok Divestiture Mandate",
    summary: "Balancing national security and data sovereignty against First Amendment rights and international trade.",
    category: "Security Law",
    readTime: "6 min read",
    date: "Early 2026",
    image: "/blogimages/US Tik Tok.jpeg",
    content: (
      <>
        <p className="mb-4"><strong>The Core Issue:</strong> Balancing national security and data sovereignty against First Amendment rights and international trade.</p>
        <p className="mb-4">In 2024, the U.S. government passed the Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA). The law explicitly targeted TikTok and its Chinese parent company, ByteDance, giving them a strict deadline to sell the app's U.S. operations to American owners or face a nationwide ban.</p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#111827]">Legal Analysis:</h3>
        <p className="mb-4">The legal battle centered on national security versus free speech. Critics argued a ban would violate the First Amendment rights of millions of American users. However, the U.S. government framed the law not as a restriction on speech, but as a regulation of foreign adversarial control over critical data infrastructure. The primary concern was that the Chinese government could legally compel ByteDance to hand over American user data or manipulate the algorithm to conduct influence operations.</p>
        <p className="mb-4">The situation reached its legal conclusion in early 2026. Following executive delays to allow for negotiations, TikTok underwent a &quot;qualified divestiture.&quot; The U.S. operations were spun into a new entity where ByteDance retained less than a 20% stake, majority ownership was transferred to American investors, and all sensitive U.S. user data was legally mandated to be stored on domestic cloud servers, effectively ending the ban while satisfying the national security requirements of the Act.</p>
      </>
    )
  },
  {
    slug: "cross-border-data-transfers",
    title: "Data Privacy Law: The Enforcement Crackdown on Cross-Border Data Transfers",
    summary: "Restricting how multinational corporations move citizen data across international borders.",
    category: "Data Privacy",
    readTime: "5 min read",
    date: "Late 2024",
    image: "/blogimages/Privacy law.jpeg",
    content: (
      <>
        <p className="mb-4"><strong>The Core Issue:</strong> Restricting how multinational corporations move citizen data across international borders.</p>
        <p className="mb-4">Through late 2024 and beyond, global data privacy authorities shifted their focus from how data is collected to exactly where it is sent, resulting in massive fines and new compliance frameworks.</p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#111827]">Legal Analysis:</h3>
        <p className="mb-4">Several major actions highlighted this tightening of digital borders:</p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li><strong>The €290 Million Uber Fine:</strong> The Netherlands' Data Protection Authority levied a massive fine against Uber for transferring the personal data of European drivers (including location, payment, and criminal records) to U.S. servers without adequate safeguards. This occurred during the legal &quot;gap&quot; between the invalidation of the old Privacy Shield and the adoption of the new EU-U.S. Data Privacy Framework.</li>
          <li><strong>Brazil's New Transfer Rules:</strong> Brazil's National Data Protection Authority (ANPD) introduced strict new regulations (Resolution CD/ANPD No. 19/2024) under their General Data Protection Law (LGPD). U.S. and multinational companies are now legally required to execute approved Standard Contractual Clauses (SCCs) to move Brazilian consumer data out of the country, facing heavy operational penalties if they fail to comply.</li>
        </ul>
      </>
    )
  }
];
