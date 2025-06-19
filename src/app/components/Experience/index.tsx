"use client";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import ExperienceCard from "./ExperienceCard";
import useExperienceData from "./useExperience";
import { motion } from "framer-motion";
import { useState } from "react";

type ExperienceItem = {
  company: string;
  logo: string;
  title: string;
  position: string;
  duration: string;
  description: string;
  responsibilities?: string[];
  startDate: string;
  endDate: string;
  location?: string;
  role?: string;
};

function Experience() {
  const { experienceData, loading, error } = useExperienceData();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Experience', icon: '🌟' },
    { id: 'current', label: 'Current Roles', icon: '🔥' },
    { id: 'startup', label: 'Startup Experience', icon: '🚀' },
    { id: 'contract', label: 'Contract Work', icon: '⚡' },
  ];

  const filteredData = (experienceData as ExperienceItem[])?.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'current') return item.endDate === 'Present';
    if (activeFilter === 'startup') return item.company.toLowerCase().includes('livestockly') || item.company.toLowerCase().includes('african bully');
    if (activeFilter === 'contract') return item.position?.toLowerCase().includes('contract') || item.position?.toLowerCase().includes('freelance');
    return true;
  });

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
        <p className="text-red-400">Error loading experience data. Please try again later.</p>
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
        <h2 className="title text-white mb-3 sm:mb-4">Experience</h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          My journey from startup founder to full-stack wizard
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4"
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeFilter === filter.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <span className="text-base sm:text-lg">{filter.icon}</span>
            <span>{filter.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Experience Timeline - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative w-full px-4"
      >
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-orange-500"></div>
        
        <div className="space-y-6 sm:space-y-8 lg:space-y-12 w-full">
          {filteredData?.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 w-full ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Experience Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <ExperienceCard data={experience} index={index} />
              </div>
              
              {/* Spacer for mobile */}
              <div className="lg:hidden"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 px-4"
      >
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-800/50">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6 text-center">
            What I&apos;ve Learned Along the Way
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "🎯",
                title: "Startup Mindset",
                description: "From founding Livestockly to scaling African Bully Registry, I understand what it takes to build and grow successful businesses."
              },
              {
                icon: "⚡",
                title: "Technical Excellence",
                description: "Full-stack development with modern technologies, always focusing on scalable architecture and clean code."
              },
              {
                icon: "🤝",
                title: "Team Leadership",
                description: "Leading development teams, mentoring junior developers, and collaborating with cross-functional teams."
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
    </div>
  );
}

export default Experience;
