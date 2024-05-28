import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Mono({ subsets: ["latin"]
  , weight: ['400', '500', '600', '700'],
  variable:'--font-ibm-plex-mono'
 });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Ai powered image generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased',IBMPlex.variable)}>{children}</body>
    </html>
  );
}
