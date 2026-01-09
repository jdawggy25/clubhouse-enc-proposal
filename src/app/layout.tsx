import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club House ENC x ComCreate | Website Redesign + SEO Proposal",
  description: "A comprehensive proposal for Club House ENC's premium website redesign and SEO optimization.",
  openGraph: {
    title: "Club House ENC x ComCreate | Website Redesign + SEO Proposal",
    description: "A comprehensive proposal for Club House ENC's premium website redesign and SEO optimization.",
    siteName: "ComCreate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body
        className={cn(
          geistSans.className,
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-black text-white antialiased selection:bg-primary/30"
        )}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative z-10 bg-black">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
