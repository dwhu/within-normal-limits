import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// VERA's own face. The desk is Tahoma and Geist Mono — 1990s site software. She is the one
// modern thing on it, and reads as a vendor product bolted on top.
const veraMono = IBM_Plex_Mono({
  variable: "--font-vera-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Within Normal Limits",
  description:
    "Run a dermatology trial site with an AI assistant you can't turn off. Check everything and fall behind. Trust it and fail the audit.",
  openGraph: {
    title: "Within Normal Limits: a game about trusting AI at a trial site",
    description:
      "Nine hours, a queue of screening, safety, and data entry work, and an AI assistant named VERA. VERA is usually right. The audit only cares about the times she wasn't.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${veraMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
