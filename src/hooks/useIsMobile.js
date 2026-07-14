import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
  // Initialize with the actual window width immediately
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

    // We already checked on mount, so just add the event listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
