"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const CATEGORIES = [
  "All",
  "UI/UX Design",
  "WordPress",
  "Digital Technology",
  "Computer Learning",
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with UI/UX Design",
    category: "UI/UX Design",
    date: "Jan 15, 2024",
    excerpt:
      "A comprehensive guide for beginners looking to start their journey in user interface and experience design. Learn the fundamental principles and tools.",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    id: 2,
    title: "Understanding User Research Methods",
    category: "UI/UX Design",
    date: "Jan 10, 2024",
    excerpt:
      "Learn about different user research techniques, from interviews to usability testing, and how to apply them effectively in your design process.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "WordPress Design Best Practices",
    category: "WordPress",
    date: "Dec 28, 2023",
    excerpt:
      "Essential tips for creating professional WordPress websites that are not only visually appealing but also optimized for performance and user experience.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "The Future of Digital Technology",
    category: "Digital Technology",
    date: "Dec 20, 2023",
    excerpt:
      "Exploring emerging trends in digital technology, including AI, spatial computing, and their potential impact on how we design digital products.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Mastering Microsoft Office Suite",
    category: "Computer Learning",
    date: "Dec 15, 2023",
    excerpt:
      "Tips and tricks to boost your productivity with MS Office. Learn advanced features in Word, Excel, and PowerPoint for professional use.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    title: "Creating Effective Wireframes",
    category: "UI/UX Design",
    date: "Dec 10, 2023",
    excerpt:
      "Step-by-step guide to creating wireframes that communicate structure and functionality clearly before moving to high-fidelity designs.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <SectionHeading
          title="Blog"
          subtitle="Insights, tutorials, and thoughts on design and technology"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "border border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            layout
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <GlassCard hover className="flex h-full flex-col p-4">
              <div
                className={`group relative mb-6 h-48 overflow-hidden rounded-xl bg-gradient-to-br ${post.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-lg bg-white/20 px-4 py-2 font-medium text-white backdrop-blur-md">
                    Read Article
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-2">
                <div className="mb-3">
                  <span className="inline-block rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 line-clamp-2 cursor-pointer text-xl font-bold text-white transition-colors hover:text-blue-400">
                  {post.title}
                </h3>

                <p className="mb-6 line-clamp-2 flex-1 text-slate-400">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center text-sm text-slate-400">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </span>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-slate-400">
            No articles found in this category.
          </p>
        </div>
      ) : null}
    </div>
  );
}
