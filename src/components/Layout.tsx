import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 grow px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
