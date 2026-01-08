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

// Note: For dynamic metadata based on config, convert to generateMetadata()
// For now, using template tokens as placeholders
export const metadata: Metadata = {
  title: "{{CLIENT_NAME}} x ComCreate | Premium Web Development Proposal",
  description: "A comprehensive proposal for {{CLIENT_NAME}}'s premium website and {{INTEGRATION_NAME}} integration.",
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
