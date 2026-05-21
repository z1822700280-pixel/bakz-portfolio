import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import GlowCursor from "@/components/GlowCursor";
import ParticleField from "@/components/ParticleField";
import Watermark from "@/components/Watermark";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAKZ | 张洎彬 - AIGC Video Creator",
  description:
    "Personal portfolio of 张洎彬, AIGC video creator and digital media designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ParticleField />
            <Watermark />
            <Navbar />
            <GlowCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
