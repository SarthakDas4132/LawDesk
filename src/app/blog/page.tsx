"use client";

import { useState, useMemo } from "react";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Is there any active filter or search?
  const isFiltered = searchQuery !== "" || selectedCategory !== "All";

  // Featured article is always the first one under default (unfiltered) view
  const featuredPost = blogPosts[0];
  
  // If not filtered, we exclude the featured post from the bottom grid
  const gridPosts = useMemo(() => {
    if (isFiltered) return filteredPosts;
    return blogPosts.slice(1);
  }, [isFiltered, filteredPosts]);

  // Text highlighting utility for query keywords
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));
    
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark
              key={index}
              className="bg-amber-500/20 dark:bg-amber-500/40 text-amber-900 dark:text-amber-200 font-bold px-0.5 rounded-sm"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-[#f9f8f6] dark:bg-[#0a0a0a] min-h-screen flex flex-col transition-colors duration-300">
      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24">
        
        {/* Header Hero Section */}
        <section className="px-5 md:px-12 max-w-5xl mx-auto text-center mb-12 md:mb-16 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-[#f9f8f6] dark:via-[#0a0a0a] to-[#f9f8f6] dark:to-[#0a0a0a] blur-3xl rounded-[100%] transition-colors duration-300" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111827] dark:text-[#fafafa] tracking-tight mb-4 md:mb-6 leading-tight transition-colors duration-300">
            Insights to elevate your legal practice
          </h1>
          <p className="text-lg md:text-xl text-[#4b5563] dark:text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Stay up to date with the latest developments in international law, legal technology, and policy updates.
          </p>
        </section>

        {/* Interactive Search and Category Filter Toolbar */}
        <section className="px-5 md:px-12 max-w-7xl mx-auto mb-12 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-[#141414] border border-[#e5e0d8] dark:border-[#262626] rounded-3xl p-4 md:p-6 shadow-sm shadow-[#111827]/5 transition-colors duration-300">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 select-none cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa] bg-[#f4efe9]/40 dark:bg-[#1f1f1f]/40 hover:bg-[#f4efe9]/80 dark:hover:bg-[#1f1f1f]/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-[#594d45] dark:bg-[#333333] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input Box */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#6b7280] dark:text-[#737373]">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 bg-[#f4efe9]/40 dark:bg-[#1f1f1f]/40 border border-[#e5e0d8] dark:border-[#262626] focus:border-[#594d45] dark:focus:border-white rounded-full text-sm font-semibold text-[#111827] dark:text-[#fafafa] placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:outline-none focus:ring-4 focus:ring-amber-500/5 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-[#6b7280] hover:text-[#111827] dark:text-[#737373] dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

          </div>
        </section>

        {/* Main Content Area */}
        <div className="px-5 md:px-12 max-w-7xl mx-auto overflow-hidden">
          
          {/* DEFAULT VIEW: Highlight Featured Post */}
          <AnimatePresence mode="wait">
            {!isFiltered && (
              <motion.section
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-16 md:mb-24"
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block active:scale-[0.98] transition-transform duration-300"
                >
                  <div className="bg-white dark:bg-[#141414] rounded-3xl md:rounded-[2.5rem] border border-[#e5e0d8] dark:border-[#262626] shadow-sm flex flex-col lg:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="p-3 md:p-5 lg:w-1/2">
                      <div className="h-64 sm:h-80 lg:h-[400px] relative overflow-hidden bg-[#f4efe9] dark:bg-[#1f1f1f] rounded-2xl md:rounded-3xl transition-colors duration-300">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          priority
                          className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="px-5 pb-6 md:px-8 md:pb-8 lg:p-12 lg:pl-4 lg:w-1/2 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 mb-4 md:mb-6">
                        <span className="bg-[#594d45] dark:bg-[#333333] text-white font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-wider text-[10px] md:text-xs transition-colors duration-300">
                          Must Read
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] dark:text-[#fafafa] mb-3 md:mb-4 leading-tight group-hover:text-amber-800 dark:group-hover:text-amber-600 transition-colors duration-300">
                        {featuredPost.title}
                      </h2>
                      <p className="text-[15px] md:text-[17px] text-[#4b5563] dark:text-[#a3a3a3] mb-6 md:mb-8 line-clamp-3 md:line-clamp-4 leading-relaxed transition-colors duration-300">
                        {featuredPost.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#d4c5b5] to-[#a38b73] overflow-hidden flex items-center justify-center text-white font-bold text-sm md:text-base border-2 border-white dark:border-[#141414] shadow-sm transition-colors duration-300">
                            <Image
                              src="/logo-final-nobg.png"
                              alt="Author Logo Light"
                              width={32}
                              height={32}
                              className="opacity-80 block dark:hidden"
                            />
                            <Image
                              src="/logos/invert-logo.png"
                              alt="Author Logo Dark"
                              width={32}
                              height={32}
                              className="opacity-80 hidden dark:block"
                            />
                          </div>
                          <div>
                            <p className="text-xs md:text-sm font-bold text-[#111827] dark:text-[#fafafa] transition-colors duration-300">
                              LegalRobe Editorial
                            </p>
                            <p className="text-[10px] md:text-xs text-[#6b7280] dark:text-[#737373] transition-colors duration-300">
                              Legal Tech Insights
                            </p>
                          </div>
                        </div>
                        <span className="bg-[#c25e40] text-white font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-wider text-[10px] md:text-xs">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.section>
            )}
          </AnimatePresence>

          {/* DYNAMIC ARTICLE LIST / GRID SECTION */}
          <section className="relative min-h-[300px] mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-6 md:mb-8 transition-colors duration-300">
              {isFiltered ? `Search Results (${filteredPosts.length})` : "Latest Articles"}
            </h3>

            <AnimatePresence mode="popLayout">
              {gridPosts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {gridPosts.map((post) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      key={post.slug}
                      className="group flex flex-col h-full"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex flex-col h-full active:scale-[0.98] transition-transform duration-300"
                      >
                        <div className="bg-white dark:bg-[#141414] rounded-3xl border border-[#e5e0d8] dark:border-[#262626] shadow-sm flex-1 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                          <div className="p-3">
                            <div className="h-48 sm:h-56 relative overflow-hidden bg-[#f4efe9] dark:bg-[#1f1f1f] rounded-2xl transition-colors duration-300">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          </div>
                          
                          <div className="px-5 pb-6 pt-2 flex flex-col flex-1">
                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[11px] md:text-xs">
                              <span className="bg-[#f2f0ea] dark:bg-[#262626] text-[#4b5563] dark:text-[#a3a3a3] font-semibold px-2.5 py-1 md:px-3 rounded-full transition-colors duration-300">
                                {post.category}
                              </span>
                              <span className="text-[#6b7280] dark:text-[#737373] transition-colors duration-300">
                                {post.readTime}
                              </span>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold text-[#111827] dark:text-[#fafafa] mb-2 md:mb-3 leading-snug group-hover:text-amber-800 dark:group-hover:text-amber-600 transition-colors duration-300 line-clamp-3">
                              {highlightText(post.title, searchQuery)}
                            </h3>
                            
                            <p className="text-sm md:text-[15px] text-[#4b5563] dark:text-[#a3a3a3] mb-5 md:mb-6 line-clamp-3 leading-relaxed transition-colors duration-300">
                              {highlightText(post.summary, searchQuery)}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between text-[11px] md:text-xs text-[#6b7280] dark:text-[#737373] pt-4 border-t border-[#f2f0ea] dark:border-[#262626] transition-colors duration-300">
                              <span>{post.date}</span>
                              <span className="font-semibold text-[#111827] dark:text-[#fafafa] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read more <span aria-hidden="true">&rarr;</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* NO MATCHES FOUND STATE */
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-[#141414] border border-[#e5e0d8] dark:border-[#262626] rounded-3xl md:rounded-[2.5rem] p-10 md:p-14 text-center max-w-xl mx-auto shadow-sm shadow-[#111827]/5 my-8 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-[#f4efe9] dark:bg-[#1f1f1f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#6b7280] dark:text-[#737373] transition-colors duration-300">
                    <Search size={28} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-3 transition-colors duration-300">
                    No matching articles found
                  </h4>
                  <p className="text-[#4b5563] dark:text-[#a3a3a3] mb-8 leading-relaxed text-sm md:text-base transition-colors duration-300">
                    We couldn't find any articles matching your search for <span className="font-semibold text-amber-800 dark:text-amber-500">"{searchQuery}"</span>{selectedCategory !== "All" && <> in the <span className="font-semibold text-[#111827] dark:text-[#fafafa]">{selectedCategory}</span> category</>}.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="bg-[#1a1818] dark:bg-[#fafafa] hover:bg-black dark:hover:bg-[#e5e5e5] text-white dark:text-[#0a0a0a] text-xs md:text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                  >
                    Clear Filters & Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

        </div>
      </main>
    </div>
  );
}
