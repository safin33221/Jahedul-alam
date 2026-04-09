"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Target, Zap } from "lucide-react";
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

export function About() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <SectionHeading
          title="About Me"
          subtitle="Get to know the designer behind the work"
        />
      </motion.div>

      <div className="mb-24 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative"
        >
          <div className="absolute inset-0 -rotate-3 scale-105 transform rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl" />
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-blue-500/20 blur-xl" />
          <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-purple-500/20 blur-xl" />

          <Image
            src={PROFILE_IMAGE_URL}
            alt="Jahed Bhuiyan"
            width={900}
            height={1125}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative z-10 aspect-[4/5] w-full rounded-3xl border border-white/20 object-cover shadow-2xl"
          />

          <div className="absolute right-[-1rem] bottom-12 z-20 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-xl">
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">2+</span>
              <span className="text-xs tracking-wider text-slate-300 uppercase">
                Years Exp.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="mb-2 text-3xl font-bold text-white">Jahed Bhuiyan</h2>
            <p className="mb-1 text-xl font-medium text-blue-400">UI/UX Designer</p>
            <p className="flex items-center text-slate-400">
              <Globe className="mr-2 h-4 w-4" /> Bangladesh
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-4 leading-relaxed text-slate-300"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Personal Introduction
            </h3>
            <p>
              I am a passionate UI/UX designer dedicated to creating meaningful
              digital experiences. I believe that great design is not just about
              how things look, but how they work and feel to the user.
            </p>
            <p>
              My approach to design is rooted in empathy and problem-solving. I
              focus on creating clean, user-centered interfaces that make
              technology accessible and enjoyable for everyone.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-4 leading-relaxed text-slate-300"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Professional Journey
            </h3>
            <p>
              My journey in tech started with strong computer skills and a deep
              interest in digital technology. This led me to explore WordPress
              website design, where I learned the fundamentals of web layouts
              and content structure.
            </p>
            <p>
              As I built more websites, I discovered my true passion lay in the
              user experience and interface design. I transitioned my focus
              entirely to UI/UX design, continuously building my expertise
              through practice projects, continuous learning, and hands-on
              experience.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <GlassCard className="h-full">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
              <Target className="mr-3 h-6 w-6 text-blue-400" /> Career Goals
            </h3>
            <ul className="space-y-4">
              {[
                "Mastering advanced UI/UX design principles and methodologies",
                "Working with international clients to solve complex design challenges",
                "Contributing to impactful digital products that improve people's lives",
                "Continuously learning and adapting to new design trends and tools",
              ].map((goal) => (
                <li key={goal} className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                  <span className="text-slate-300">{goal}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <GlassCard className="h-full">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
              <Zap className="mr-3 h-6 w-6 text-purple-400" /> What Drives Me
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Empathy",
                  desc: "Understanding the user's perspective and needs.",
                },
                {
                  title: "Simplicity",
                  desc: "Removing complexity to create intuitive experiences.",
                },
                {
                  title: "Aesthetics",
                  desc: "Crafting visually pleasing interfaces that delight.",
                },
                {
                  title: "Impact",
                  desc: "Designing solutions that make a real difference.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/5 bg-white/5 p-4"
                >
                  <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
