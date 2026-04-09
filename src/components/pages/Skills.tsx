"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Figma,
  Globe,
  Monitor,
  Palette,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

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

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-white">{name}</span>
        <span className="text-sm text-slate-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: LucideIcon;
  skills: {
    name: string;
    level: number;
  }[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeInUp}
    >
      <GlassCard hover className="h-full">
        <div className="mb-6 flex items-center">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-400">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div>
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.level}
            />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function Skills() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-24 sm:px-6 lg:px-8">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <SectionHeading
          title="My Skills"
          subtitle="A comprehensive overview of my technical and professional abilities"
        />
      </motion.div>

      <div className="space-y-16">
        <div>
          <h3 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
            UI/UX Design Skills
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SkillCategory
              title="Core Design"
              icon={Palette}
              skills={[
                {
                  name: "UI Design",
                  level: 90,
                },
                {
                  name: "Wireframing",
                  level: 85,
                },
                {
                  name: "Prototyping",
                  level: 85,
                },
              ]}
            />
            <SkillCategory
              title="Research & Strategy"
              icon={Search}
              skills={[
                {
                  name: "UX Research",
                  level: 80,
                },
                {
                  name: "User Flow Design",
                  level: 80,
                },
                {
                  name: "Usability Testing",
                  level: 75,
                },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
              Tools & Technology
            </h3>
            <SkillCategory
              title="Design Tools"
              icon={Figma}
              skills={[
                {
                  name: "Figma (Expert)",
                  level: 90,
                },
                {
                  name: "Adobe Photoshop (Basic)",
                  level: 50,
                },
                {
                  name: "Adobe Illustrator (Basic)",
                  level: 45,
                },
              ]}
            />
            <SkillCategory
              title="Web Design"
              icon={Globe}
              skills={[
                {
                  name: "WordPress Website Design",
                  level: 85,
                },
                {
                  name: "Website Layout Design",
                  level: 80,
                },
              ]}
            />
          </div>

          <div className="space-y-8">
            <h3 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
              Professional Skills
            </h3>
            <SkillCategory
              title="Computer Skills"
              icon={Monitor}
              skills={[
                {
                  name: "Microsoft Word",
                  level: 90,
                },
                {
                  name: "Microsoft Excel",
                  level: 80,
                },
                {
                  name: "Microsoft PowerPoint",
                  level: 85,
                },
              ]}
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SkillCategory
                title="Teaching"
                icon={BookOpen}
                skills={[
                  {
                    name: "ICT Teaching",
                    level: 85,
                  },
                  {
                    name: "Digital Tech",
                    level: 80,
                  },
                ]}
              />
              <SkillCategory
                title="Office"
                icon={Briefcase}
                skills={[
                  {
                    name: "Data Entry",
                    level: 90,
                  },
                  {
                    name: "Office Ops",
                    level: 85,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
