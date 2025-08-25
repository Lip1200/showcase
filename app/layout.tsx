import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filipe's portfolio",
  description: "Modern curriculum vitae and porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral overflow-y-scroll overflow-x-hidden`}
      >
        <div className="relative z-[30]">
          <Navbar />
        </div>
        <div className="relative z-[20]">
          {children} {/* Toutes les sections principales */}
        </div>
        <div className="relative z-[30]">
          <Footer />
        </div>
        <StarsCanvas />{" "}
        {/* Place les étoiles derrière en ajustant le z-index */}
      </body>
    </html>
  );
}
