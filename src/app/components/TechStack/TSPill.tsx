import { motion } from "framer-motion";

type Props = {
  data: string;
  index: number;
};

function TSPill({ data, index }: Props) {
  const getTechIcon = (techName: string) => {
    const techIcons: { [key: string]: string } = {
      'React': '⚛️',
      'Next.js': '▲',
      'TypeScript': '📘',
      'JavaScript': '🟨',
      'Node.js': '🟢',
      'Python': '🐍',
      'Django': '🟢',
      'FastAPI': '⚡',
      'MySQL': '🐬',
      'PostgreSQL': '🐘',
      'Firebase': '🔥',
      'Supabase': '🔵',
      'AWS': '☁️',
      'Git': '📝',
      'Docker': '🐳',
      'Figma': '🎨',
      'HTML': '🌐',
      'CSS': '🎨',
      'Tailwind CSS': '🎨',
      'NestJS': '🟢',
      'MongoDB': '🍃',
      'Postman': '📮',
      'VS Code': '💻',
    };
    
    return techIcons[techName] || '⚡';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer"
    >
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-yellow-500/50 px-4 py-3 lg:px-6 lg:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 text-center">
        <div className="text-2xl lg:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {getTechIcon(data)}
        </div>
        <p className="text-white text-xs lg:text-sm font-medium uppercase tracking-wide">
          {data}
        </p>
      </div>
    </motion.div>
  );
}

export default TSPill;
