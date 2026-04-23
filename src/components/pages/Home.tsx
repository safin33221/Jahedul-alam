"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Figma,
  GitBranch,
  Layout,
  Palette,
  Play,
  Search,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE_IMAGE_URL } from "@/lib/site";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Home() {
  return (
    <div className="flex w-full flex-col">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400"
            >
              UI/UX Designer
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-3xl leading-tight font-bold text-white md:text-5xl"
            >
              Creating Simple &amp; Meaningful{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Digital Experiences With
              </span>
              <span className="bg-linear-to-r from-blue-400 to-purple-500 ml-5 bg-clip-text text-transparent">
                Jahedul Alam
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl"
            >
              Passionate about designing modern digital interfaces and helping
              users interact with technology easily.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap gap-4">
              <Link
                href="/experience"
                className="rounded-full bg-linear-to-r from-blue-500 to-purple-600 px-8 py-4 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 text-sm text-slate-400"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">1+</span>
                <span>Years Experience</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">5+</span>
                <span>Projects</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">3+</span>
                <span>Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative hidden h-125 lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Floating Card 1 – Dashboard / Stats */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-10 z-20 h-80 w-64 -rotate-6 transform rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-blue-500/20 backdrop-blur-2xl"
              >
                {/* Chart / Graph area */}
                <div className="mb-4 h-32 w-full rounded-xl bg-linear-to-br from-blue-500/40 to-purple-500/40 p-2">
                  <div className="flex h-full items-end gap-1">
                    <div className="h-10 w-6 rounded bg-white/30" />
                    <div className="h-16 w-6 rounded bg-white/40" />
                    <div className="h-8 w-6 rounded bg-white/30" />
                    <div className="h-20 w-6 rounded bg-white/50" />
                    <div className="h-12 w-6 rounded bg-white/30" />
                  </div>
                </div>
                {/* Stat rows */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/80">Revenue</span>
                  <span className="text-xs font-bold text-white">$12,340</span>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/80">Users</span>
                  <span className="text-xs font-bold text-white">+23%</span>
                </div>
                {/* Color legends */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-[10px] text-white/60">Desktop</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span className="text-[10px] text-white/60">Mobile</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 – Chat / Message Preview */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-20 right-0 z-10 h-72 w-72 rotate-12 transform rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl"
              >
                {/* Chat header with avatar */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-linear-to-r from-emerald-400 to-cyan-400">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">MS</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">MR. Safin</div>
                    <div className="text-[10px] text-emerald-300">Online · Typing...</div>
                  </div>
                </div>
                {/* Chat bubbles */}
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/20 px-3 py-2 text-xs text-white">
                      Hey, how&apos;s the project going?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-none bg-blue-500/50 px-3 py-2 text-xs text-white">
                      Almost done! 🚀
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/20 px-3 py-2 text-xs text-white">
                      Can you share the update?
                    </div>
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="mt-3 flex gap-1">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.2s]" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.4s]" />
                </div>
              </motion.div>

              {/* Background blur orbs */}
              <div className="absolute top-10 right-20 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="absolute bottom-10 left-20 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute inset-0 scale-105 rotate-3 transform rounded-3xl bg-linear-to-tr from-blue-500 to-purple-500 opacity-50 blur-lg" />
            <Image
              src={PROFILE_IMAGE_URL}
              alt="Jahed Bhuiyan"
              width={900}
              height={900}
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="relative z-10 mx-auto aspect-square w-full max-w-md rounded-3xl border border-white/20 object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-3xl font-bold text-white md:text-4xl"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mb-8 space-y-4 text-lg text-slate-400"
            >
              <p>
                Hi, I&apos;m Jahed, a passionate UI/UX designer based in
                Bangladesh. I specialize in creating user-centered digital
                experiences that are both beautiful and functional.
              </p>
              <p>
                With a strong foundation in design principles and a keen eye for
                detail, I strive to bridge the gap between user needs and
                business goals through intuitive interfaces.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                className="inline-flex items-center font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <SectionHeading
            title="Core Skills"
            subtitle="Specialized in creating intuitive digital experiences"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Palette,
              title: "UI Design",
              desc: "Creating visually appealing interfaces that align with brand identity and user expectations.",
            },
            {
              icon: Search,
              title: "UX Research",
              desc: "Understanding user needs through research, interviews, and usability testing.",
            },
            {
              icon: Layout,
              title: "Wireframing",
              desc: "Building structural blueprints that define page layouts and user interactions.",
            },
            {
              icon: Play,
              title: "Prototyping",
              desc: "Developing interactive prototypes to test and validate design concepts.",
            },
            {
              icon: GitBranch,
              title: "User Flow",
              desc: "Mapping complete user journeys to ensure seamless navigation experiences.",
            },
            {
              icon: Figma,
              title: "Figma",
              desc: "Expert-level proficiency in Figma for design, prototyping, and collaboration.",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <GlassCard hover className="h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400">
                  <skill.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="leading-relaxed text-slate-400">{skill.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <SectionHeading
            title="Featured Work"
            subtitle="Selected projects showcasing my design process"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "E-Commerce App Redesign",
              category: "Mobile App Design",
              desc: "Complete redesign of shopping experience focusing on conversion optimization and user delight.",
              gradient: "from-blue-600 to-cyan-500",
            },
            {
              title: "Healthcare Dashboard",
              category: "Web Application",
              desc: "Data-rich dashboard for healthcare professionals to monitor patient metrics efficiently.",
              gradient: "from-purple-600 to-pink-500",
            },
            {
              title: "Travel Booking Platform",
              category: "UI/UX Design",
              desc: "End-to-end design for a travel platform with intuitive search and booking flow.",
              gradient: "from-emerald-500 to-teal-400",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <GlassCard hover className="flex h-full flex-col p-4">
                <div
                  className={`relative mb-6 h-48 overflow-hidden rounded-xl bg-linear-to-r ${project.gradient}`}
                >
                  <div className="absolute inset-4 rounded-lg border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-sm">
                    <div className="mb-4 h-3 w-1/3 rounded-full bg-white/30" />
                    <div className="space-y-2">
                      <div className="h-12 w-full rounded-md bg-white/20" />
                      <div className="h-12 w-full rounded-md bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-2">
                  <span className="mb-2 text-xs font-medium tracking-wider text-blue-400 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-slate-400">{project.desc}</p>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center font-medium text-white transition-colors hover:text-blue-400"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <SectionHeading title="Experience" subtitle="My professional journey" />
        </motion.div>

        <div className="relative mb-12 ml-4 space-y-12 border-l-2 border-blue-500/30 pl-8 md:ml-0 md:pl-12">
          {[
            {
              year: "2024 - Present",
              role: "UI/UX Design Practice Projects",
              company: "Self-Employed",
              desc: "Working on various UI/UX design projects to build expertise in user-centered design.",
            },
            {
              year: "2023 - Present",
              role: "WordPress Website Designer",
              company: "Freelance",
              desc: "Designing and developing professional WordPress websites for clients.",
            },
            {
              year: "2022 - Present",
              role: "ICT Instructor",
              company: "Education Institute",
              desc: "Teaching Information and Communication Technology to students.",
            },
          ].map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="relative"
            >
              <div className="absolute top-1 -left-[41px] h-5 w-5 rounded-full border-4 border-blue-500 bg-slate-900 md:-left-[57px]" />
              <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-400">
                {experience.year}
              </span>
              <h3 className="mb-1 text-xl font-bold text-white">
                {experience.role}
              </h3>
              <p className="mb-2 font-medium text-slate-300">{experience.company}</p>
              <p className="text-slate-400">{experience.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            View Full Timeline <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <SectionHeading
            title="Latest Articles"
            subtitle="Thoughts on design, technology, and creativity"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Getting Started with UI/UX Design in 2024",
              category: "UI/UX Design",
              date: "Jan 15, 2024",
              desc: "A comprehensive guide for beginners looking to start their journey in user interface and experience design.",
              gradient: "from-orange-500 to-rose-500",
            },
            {
              title: "WordPress Design Best Practices",
              category: "WordPress",
              date: "Dec 28, 2023",
              desc: "Essential tips for creating professional and user-friendly WordPress websites.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: "The Future of Digital Technology",
              category: "Technology",
              date: "Dec 20, 2023",
              desc: "Exploring emerging trends in digital technology and their impact on design.",
              gradient: "from-violet-500 to-fuchsia-500",
            },
          ].map((post, index) => (
            <motion.div
              key={post.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <GlassCard hover className="flex h-full flex-col p-4">
                <div
                  className={`mb-6 h-40 rounded-xl bg-linear-to-r ${post.gradient}`}
                />
                <div className="flex flex-1 flex-col px-2">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mb-6 line-clamp-2 flex-1 text-slate-400">
                    {post.desc}
                  </p>
                  <Link
                    href="/blog"
                    className="mt-auto inline-flex items-center font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 text-center backdrop-blur-xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            Have a project in mind? I&apos;d love to hear about it and explore how
            we can work together to bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
