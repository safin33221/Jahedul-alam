import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Layout as SiteLayout } from "@/components/Layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jahedul Alam | UI/UX Designer",
  description:
    "Portfolio of Jahedul Alam, a UI/UX designer creating simple and meaningful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-sans text-slate-50">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
