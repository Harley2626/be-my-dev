import type { Metadata } from "next";
import { DM_Sans, Fraunces, Caveat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SoftBackground } from "@/components/ui/SoftBackground";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Be My Dev — A Craftsman's Workshop for Your Business",
  description:
    "One passionate developer in Cape Town. I craft websites and online stores for founders — not an agency, not a template, just honest work from my workshop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} ${caveat.variable}`}>
      <body className="paper-grain font-sans">
        <SoftBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
