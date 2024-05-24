"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
    const timer = setTimeout(() => {
      router.push("/");
    });

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [router]);

  return;
};

export default Custom404;
