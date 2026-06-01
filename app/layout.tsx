import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "../components/portfolio-card/ThemeProvider";
import { LanguageProvider } from "../components/portfolio-card/LanguageProvider";

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
      <body className={`${inconsolata.className} font-mono bg-white dark:bg-black overflow-hidden`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

