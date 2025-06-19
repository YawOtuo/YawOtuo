"use client";
import useAboutData from "./useAbout";
import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const { aboutData, loading, error } = useAboutData();
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'passion', label: 'My Passion', icon: '🔥' },
    { id: 'approach', label: 'My Approach', icon: '🎯' },
  ];

  const tabContent = {
    story: {
      title: "From Ghana to Global Impact",
      content: [
        "👋 Hello! I'm Yaw Otuo, a Full Stack Developer & AI Enthusiast from Ghana who's passionate about crafting efficient, scalable solutions that make a real difference.",
        "🚀 My journey started with a simple goal: to turn wild ideas into digital reality. Today, I've helped startups like African Bully Registry go from concept to international recognition in just one year.",
        "🎓 Currently pursuing Computer Engineering at Kwame Nkrumah University of Science and Technology, I combine academic knowledge with real-world experience to deliver exceptional results."
      ]
    },
    passion: {
      title: "What Drives Me",
      content: [
        "🧠 I'm deeply passionate about innovation, learning, and creating solutions that make life easier. I thrive in environments where I can experiment with new technologies and solve complex problems.",
        "🤝 I love working with dynamic teams and connecting with like-minded professionals. My ultimate goal is to explore the frontiers of AI and use it to enhance software development.",
        "🌍 When I'm not coding, I'm probably exploring new ideas, connecting with professionals, or thinking about how technology can shape the future of Africa and beyond."
      ]
    },
    approach: {
      title: "How I Work",
      content: [
        "⚡ I believe in building code that actually works (shocking, I know!). My approach combines technical excellence with practical problem-solving.",
        "🎨 I specialize in Next.js, Node.js, Django, FastAPI, and React Native - turning visionary ideas into functional, impactful software.",
        "📈 I focus on scalable architecture, clean code, and user experience. Every project I touch is designed to grow and evolve with your business needs."
      ]
    }
  };

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
        <p className="text-red-400">Error loading about data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-6 sm:gap-8 flex-col min-h-[80vh] w-full justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="title text-white mb-3 sm:mb-4">About Me</h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          Get to know the person behind the code
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === tab.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <span className="text-base sm:text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4"
      >
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-800/50">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6"
          >
            {tabContent[activeTab as keyof typeof tabContent].title}
          </motion.h3>
          
          <div className="space-y-4 sm:space-y-6">
            {tabContent[activeTab as keyof typeof tabContent].content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 px-4"
      >
        {[
          { number: "4+", label: "Years Experience", icon: "⏰" },
          { number: "10+", label: "Projects Delivered", icon: "🚀" },
          { number: "5+", label: "Technologies", icon: "🛠️" },
          { number: "∞", label: "Coffee Cups", icon: "☕" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-3 sm:p-4 bg-gray-900/20 rounded-xl border border-gray-800/30 hover:border-yellow-500/30 transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500">{stat.number}</div>
            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
