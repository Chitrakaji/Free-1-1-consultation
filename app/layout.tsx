import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const siteTitle = "Digital Chitra | Free 1:1 Digital Marketing Consultation";
const siteDescription =
  "Turn your marketing into a system that brings you customers consistently with a free one-on-one consultation and customised strategy.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
