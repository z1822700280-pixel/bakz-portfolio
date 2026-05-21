import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import GrainOverlay from "@/components/GrainOverlay";
import GlowCursor from "@/components/GlowCursor";
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
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <GrainOverlay />
            <GlowCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
