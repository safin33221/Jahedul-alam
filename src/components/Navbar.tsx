"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="glass fixed top-0 right-0 left-0 z-50 border-b-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src={LOGO_URL}
                alt="Jahedul Alam Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-sm object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white transition-all group-hover:text-transparent group-hover:[background-image:linear-gradient(to_right,var(--color-blue-400),var(--color-purple-500))] group-hover:bg-clip-text">
                Jahedul Alam
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="glass border-t border-slate-800/50 md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.path)
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
