"use client";

import { useEffect, useState } from "react";
import PinnedSplitMobile from "./PinnedSplitMobile";
import PinnedSplitPC from "./PinnedSplitPC";

export default function PinnedSplit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile ? <PinnedSplitMobile /> : <PinnedSplitPC />;
}