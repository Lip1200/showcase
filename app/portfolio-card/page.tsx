"use client";

import React, { useState, useEffect } from "react";
import Splash from "@/components/portfolio-card/Splash";
import PortfolioLayout from "@/components/portfolio-card/PortfolioLayout";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <PortfolioLayout />;
}
