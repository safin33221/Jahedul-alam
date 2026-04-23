import Image from "next/image";
import Link from "next/link";
import { Dribbble, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { LOGO_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/50 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Jahedul Alam Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-sm object-contain opacity-70"
            />
            <span className="font-medium tracking-wide text-slate-400">
              © {new Date().getFullYear()} Jahedul Alam. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-slate-400 transition-colors hover:text-blue-400"
              aria-label="Dribbble"
            >
              <Dribbble className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 transition-colors hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 transition-colors hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          
            <a
              href="mailto:hello@example.com"
              className="text-slate-400 transition-colors hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
