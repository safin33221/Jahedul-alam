"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitTimeoutRef = useRef<number | null>(null);
  const successTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        window.clearTimeout(submitTimeoutRef.current);
      }

      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    submitTimeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      successTimeoutRef.current = window.setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((currentState) => ({
      ...currentState,
      [event.target.name]: event.target.value,
    }));
  };

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
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it."
        />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
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
            delay: 0.2,
          }}
          className="space-y-8 lg:col-span-2"
        >
          <GlassCard className="flex h-full flex-col">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Contact Information
            </h3>

            <div className="flex-1 space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:jahedbhuiyan@email.com"
                    className="font-medium text-white transition-colors hover:text-blue-400"
                  >
                    jahedbhuiyan@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-slate-400">Location</p>
                  <p className="font-medium text-white">Bangladesh</p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center">
                  <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-medium text-slate-300">
                    Available for freelance
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm text-slate-400">Follow Me</p>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "#",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "#",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "#",
                    label: "Twitter",
                  },
                  {
                    icon: MapPin,
                    href: "#",
                    label: "Dribbble",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="lg:col-span-3"
        >
          <GlassCard>
            <h3 className="mb-8 text-2xl font-bold text-white">
              Send a Message
            </h3>

            {isSuccess ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-white">Thank You!</h4>
                <p className="text-emerald-200">
                  Your message has been sent successfully. I'll get back to you
                  soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="General Inquiry" className="bg-slate-900">
                      General Inquiry
                    </option>
                    <option value="Project Collaboration" className="bg-slate-900">
                      Project Collaboration
                    </option>
                    <option value="Freelance Work" className="bg-slate-900">
                      Freelance Work
                    </option>
                    <option value="Other" className="bg-slate-900">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
