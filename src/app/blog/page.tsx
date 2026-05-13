import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="bg-[#f9f8f6] min-h-screen flex flex-col">
      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Hero Section */}
        <section className="px-5 md:px-12 max-w-5xl mx-auto text-center mb-16 md:mb-20 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-[#f9f8f6] to-[#f9f8f6] blur-3xl rounded-[100%]" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111827] tracking-tight mb-4 md:mb-6 leading-tight">
            Insights to elevate your legal practice
          </h1>
          <p className="text-lg md:text-xl text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
            Stay up to date with the latest developments in international law, legal technology, and policy updates.
          </p>
        </section>

        <div className="px-5 md:px-12 max-w-7xl mx-auto">
          {/* Featured Post */}
          <section className="mb-16 md:mb-24">
            <Link href={`/blog/${featuredPost.slug}`} className="group block active:scale-[0.98] transition-transform duration-300">
              <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#e5e0d8] shadow-sm flex flex-col lg:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 md:p-5 lg:w-1/2">
                  <div className="h-64 sm:h-80 lg:h-[400px] relative overflow-hidden bg-[#f4efe9] rounded-2xl md:rounded-3xl">
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      fill 
                      className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="px-5 pb-6 md:px-8 md:pb-8 lg:p-12 lg:pl-4 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 mb-4 md:mb-6">
                    <span className="bg-[#594d45] text-white font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-wider text-[10px] md:text-xs">
                      Must Read
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-3 md:mb-4 leading-tight group-hover:text-amber-800 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[15px] md:text-[17px] text-[#4b5563] mb-6 md:mb-8 line-clamp-3 md:line-clamp-4 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#d4c5b5] to-[#a38b73] overflow-hidden flex items-center justify-center text-white font-bold text-sm md:text-base border-2 border-white shadow-sm">
                        <Image src="/logo.png" alt="Author" width={24} height={24} className="opacity-80" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold text-[#111827]">LegalRobe Editorial</p>
                        <p className="text-[10px] md:text-xs text-[#6b7280]">Legal Tech Insights</p>
                      </div>
                    </div>
                    <span className="bg-[#c25e40] text-white font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-wider text-[10px] md:text-xs">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* Regular Posts Grid */}
          <section>
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-6 md:mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {gridPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col active:scale-[0.98] transition-transform duration-300">
                  <div className="bg-white rounded-3xl border border-[#e5e0d8] shadow-sm flex-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="p-3">
                      <div className="h-48 sm:h-56 relative overflow-hidden bg-[#f4efe9] rounded-2xl">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="px-5 pb-6 pt-2 flex flex-col h-[calc(100%-14rem)] md:h-[calc(100%-16rem)]">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[11px] md:text-xs">
                        <span className="bg-[#f2f0ea] text-[#4b5563] font-semibold px-2.5 py-1 md:px-3 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-[#6b7280]">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2 md:mb-3 leading-snug group-hover:text-amber-800 transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-[#4b5563] mb-5 md:mb-6 line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-[11px] md:text-xs text-[#6b7280] pt-4 border-t border-[#f2f0ea]">
                        <span>{post.date}</span>
                        <span className="font-semibold text-[#111827] flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
