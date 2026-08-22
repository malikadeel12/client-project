"use client";

/**
 * What: Soft route change only — first visit is never hidden.
 * Why: Starting the whole page at opacity 0 meant photos and motion waited
 *      for JavaScript. On a slow load that looked like a blank, frozen site.
 */

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { LITURGY_EASE } from "@/lib/ease";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    setHasNavigated(true);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={hasNavigated ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: LITURGY_EASE.divineArrival }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
