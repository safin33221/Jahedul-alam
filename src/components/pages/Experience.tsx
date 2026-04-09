"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    role: "UI/UX Design Practice Projects",
    company: "Self-Employed",
    period: "2024 - Present",
    desc: "Working on various UI/UX design projects to build expertise in user-centered design, wireframing, and prototyping. Focused on creating clean, modern interfaces that prioritize user experience.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    role: "WordPress Website Designer",
    company: "Freelance",
    period: "2023 - Present",
    desc: "Designing and developing professional WordPress websites for clients with focus on clean layouts, responsive design, and optimal user experience. Managing complete design process from concept to launch.",
    skills: ["WordPress", "Web Design", "Responsive Design"],
  },
  {
    role: "ICT Instructor",
    company: "Education Institute",
    period: "2022 - Present",
    desc: "Teaching Information and Communication Technology to students, covering digital literacy, computer fundamentals, and modern technology concepts. Developing curriculum and learning materials.",
    skills: ["Teaching", "ICT", "Digital Literacy"],
  },
  {
    role: "Office Computer Operator",
    company: "Corporate Office",
    period: "2021 - 2022",
    desc: "Handled data entry, document management, and office automation tasks using Microsoft Office suite. Maintained organized digital records and supported office operations.",
    skills: ["MS Office", "Data Entry", "Documentation"],
  },
];

export function Experience() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-4 pt-24 pb-24 sm:px-6 lg:px-8">
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
          title="My Experience"
          subtitle="A timeline of my professional journey and growth"
        />
      </motion.div>

      <div className="relative mt-12">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:block" />
        <div className="absolute left-4 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:hidden" />

        <div className="space-y-12 md:space-y-24">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={experience.role}
                initial={{
                  opacity: 0,
                  x: isEven ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.6,
                }}
                className={`relative flex flex-col items-center md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-blue-400 bg-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:left-1/2" />

                <div
                  className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <GlassCard hover className="relative">
                    <div
                      className={`absolute top-6 hidden h-4 w-4 rotate-45 transform border-t border-l border-white/10 bg-white/5 md:block ${
                        isEven
                          ? "-left-2 -rotate-45 border-b border-l-0"
                          : "-right-2 border-t-0 border-r"
                      }`}
                    />

                    <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-sm font-medium text-blue-300">
                        <Calendar className="mr-2 h-4 w-4" />
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="mb-1 text-2xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="mb-4 flex items-center font-medium text-blue-400">
                      <Briefcase className="mr-2 h-4 w-4" />
                      {experience.company}
                    </p>

                    <p className="mb-6 leading-relaxed text-slate-300">
                      {experience.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
