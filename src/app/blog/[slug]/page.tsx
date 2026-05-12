import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#f9f8f6] min-h-screen flex flex-col">
      <main className="flex-1 pt-32 pb-24">
        <article className="px-5 md:px-12 max-w-4xl mx-auto">
          <div className="mb-8 md:mb-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#6b7280] hover:text-[#111827] mb-6 md:mb-8 transition-colors">
              <span aria-hidden="true" className="mr-2">&larr;</span> Back to blog
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 text-xs md:text-sm">
              <span className="bg-white border border-[#e5e0d8] text-[#4b5563] font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-sm">
                {post.category}
              </span>
              <span className="text-[#6b7280]">{post.readTime}</span>
              <span className="text-[#d1d5db]">&bull;</span>
              <span className="text-[#6b7280]">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 md:mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-amber-200 to-amber-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
                LD
              </div>
              <div className="text-left">
                <p className="text-sm md:text-base font-bold text-[#111827]">LawDesk Editorial</p>
                <p className="text-xs md:text-sm text-[#6b7280]">Legal Tech Insights</p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-16 shadow-lg bg-[#f4efe9]">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-contain p-2 md:p-8"
              priority
            />
          </div>

          <div className="prose prose-slate max-w-none md:prose-lg prose-p:text-[16px] md:prose-p:text-[19px] prose-p:leading-relaxed prose-p:text-[#4b5563] prose-headings:text-[#111827] prose-strong:text-[#111827]">
            {post.content}
          </div>
        </article>

        {/* You might also like section */}
        <div className="max-w-7xl mx-auto px-5 md:px-12 mt-24 md:mt-32 pt-16 md:pt-20 border-t border-[#e5e0d8]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-8 md:mb-12">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
              <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group flex flex-col active:scale-[0.98] transition-transform duration-300">
                <div className="bg-white rounded-3xl border border-[#e5e0d8] shadow-sm flex-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="p-3">
                    <div className="h-48 sm:h-56 relative overflow-hidden bg-[#f4efe9] rounded-2xl">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        fill 
                        className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-6 pt-2 flex flex-col h-[calc(100%-14rem)] md:h-[calc(100%-16rem)]">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[11px] md:text-xs">
                      <span className="bg-[#f2f0ea] text-[#4b5563] font-semibold px-2.5 py-1 md:px-3 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-[#6b7280]">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2 md:mb-3 leading-snug group-hover:text-amber-800 transition-colors line-clamp-3">
                      {relatedPost.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-[11px] md:text-xs text-[#6b7280] pt-4 border-t border-[#f2f0ea]">
                      <span>{relatedPost.date}</span>
                      <span className="font-semibold text-[#111827] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
