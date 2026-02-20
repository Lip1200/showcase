import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "../components/portfolio-card/ThemeProvider";
import { LanguageProvider } from "../components/portfolio-card/LanguageProvider";
import MatomoAnalytics from "../components/MatomoAnalytics";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-inconsolata"
});

export const metadata: Metadata = {
  title: "Filipe Ramos - Developer",
  description: "Minimalist developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inconsolata.variable} dark`}>
      <body className={`${inter.className} bg-neutral-950 text-neutral-200 overflow-hidden`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <MatomoAnalytics />
      </body>
    </html>
  );
}

