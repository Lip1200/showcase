import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/components/portfolio-card/ThemeProvider";
import ThemeToggle from "@/components/portfolio-card/ThemeToggle";
import "@/components/portfolio-card/themes.css";

const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-inconsolata"
});

export const metadata: Metadata = {
  title: "Filipe. portfolio",
  description: "Clean Portfolio Card - Design inspired by Keita Yamada",
};

export default function PortfolioCardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body className={`${inconsolata.className} font-mono bg-main overflow-hidden`}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
