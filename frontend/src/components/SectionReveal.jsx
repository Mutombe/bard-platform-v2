import { motion } from "framer-motion";

/**
 * Wrapper for sections + section headers that should reveal on scroll
 * into view. Lloyds-grade restraint — fade + light Y translation, not
 * theatre. Lands once and stays.
 *
 * Usage:
 *   <SectionReveal>
 *     <h2 className="display-xl">...</h2>
 *   </SectionReveal>
 *
 * Stagger children by passing `delay` (seconds).
 */
export default function SectionReveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
