"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/portfolio-card');
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center">
      <div className="text-white font-mono">Loading...</div>
    </div>
  );
}
