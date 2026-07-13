//src/hooks/useIsMobile.js
import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

    // Check immediately on mount
    checkMobile();

    // Add event listener for resizing
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
