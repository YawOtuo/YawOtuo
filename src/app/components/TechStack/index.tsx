"use client";
import { motion } from "framer-motion";
import useAboutData from "../About/useAbout";
import TSPill from "./TSPill";
import { useState } from "react";

function TechStack() {
  const { aboutData, loading, error } = useAboutData();
  const [activeCategory, setActiveCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Technologies', icon: '🚀' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'tools', label: 'Tools & Cloud', icon: '☁️' },
  ];

  const categorizedTech = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Django', 'FastAPI', 'NestJS'],
    database: ['MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'MongoDB'],
    tools: ['AWS', 'Git', 'Docker', 'Figma', 'Postman', 'VS Code'],
  };

  const getFilteredTech = () => {
    if (activeCategory === 'all') {
      return aboutData?.techStack || [];
    }
    return categorizedTech[activeCategory as keyof typeof categorizedTech] || [];
  };

  const filteredTech = getFilteredTech();

  if (loading) {
    return (
      <div className="flex gap-2 flex-col min-h-[80vh] w-full justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex gap-2 flex-col min-h-[80vh] w-full justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
        <p className="text-red-400">Error loading tech stack data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-6 sm:gap-8 lg:gap-20 flex-col min-h-[80vh] w-full justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="title text-white mb-3 sm:mb-4">Tech Stack</h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          The tools and technologies I use to turn ideas into reality
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4"
      >
        {techCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeCategory === category.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <span className="text-base sm:text-lg">{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full px-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {filteredTech.map((tech: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
              viewport={{ once: true }}
            >
              <TSPill data={tech} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 px-4"
      >
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-800/50">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6 text-center">
            Why This Tech Stack?
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "⚡",
                title: "Performance First",
                description: "Next.js, React, and optimized databases ensure lightning-fast applications that users love."
              },
              {
                icon: "🛠️",
                title: "Scalable Architecture",
                description: "Microservices with FastAPI, NestJS, and cloud-native tools for growth-ready solutions."
              },
              {
                icon: "🎯",
                title: "Modern & Reliable",
                description: "TypeScript, modern frameworks, and proven tools for robust, maintainable code."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{item.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Learning Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 sm:p-8 border border-yellow-500/20">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-500 mb-3 sm:mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            I&apos;m constantly exploring new technologies and frameworks to stay ahead of the curve. 
            Currently diving deep into AI/ML integration and advanced cloud architectures.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default TechStack;
