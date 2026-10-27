import { motion } from "framer-motion";

type Props = {
  data: string;
  index: number;
};

function TSPill({ data, index }: Props) {
  const initials = data
    .split(/[\s\.]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface hover:bg-surface-elevated transition-all duration-300">
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
          <span className="text-accent text-xs font-bold">{initials}</span>
        </div>
        <span className="text-white text-sm font-medium">{data}</span>
      </div>
    </motion.div>
  );
}

export default TSPill;
