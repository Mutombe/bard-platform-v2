import { motion } from "framer-motion";

/**
 * Soft opacity-only page transition. No exit animation — popLayout means
 * the next route mounts before the previous one is torn down, and any exit
 * choreography looks juddery on a banking site. Quiet. Confident. In.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
