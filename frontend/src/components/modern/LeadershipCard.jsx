import { motion } from "framer-motion";

/**
 * LeadershipCard — named principal card.
 *
 * Portrait above, then role + name + bio. Sharp corners, hairline-
 * separated. Restrained, JPM/Goldman canonical.
 */
export default function LeadershipCard({ leader, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-flat p-0 h-full flex flex-col"
    >
      <div
        className="w-full aspect-[4/5] bg-cover bg-center photo-modern border-b border-line"
        style={{ backgroundImage: leader.image ? `url(${leader.image})` : undefined, backgroundColor: "var(--color-line)" }}
      />
      <div className="p-7 md:p-9 flex flex-col flex-1">
        <p className="t-mono text-orange-600 mb-3">{leader.short_role}</p>
        <h3 className="font-display text-[22px] md:text-[24px] font-medium text-ink leading-tight mb-1"
            style={{ fontVariationSettings: '"opsz" 28' }}>
          {leader.name}
        </h3>
        <p className="text-[13.5px] text-dim mb-5">{leader.role}</p>
        <p className="text-[14.5px] text-mute leading-relaxed flex-1">
          {leader.bio}
        </p>
      </div>
    </motion.article>
  );
}
