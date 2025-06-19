"use client"
import { motion } from "framer-motion";

type Props = {
  label: string;
  onClick?: any;
  variant: "contact" | "resume" | "secondary";
};

function HSButtons({ variant, label, onClick }: Props) {
  const options: any = {
    contact: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
    resume: "border-2 border-yellow-500 text-white font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-105",
    secondary: "border-2 border-gray-500 text-gray-300 font-semibold hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 hover:scale-105",
  };
  
  return (
    <motion.button 
      className={`${options[variant]} px-8 py-4 rounded-lg text-sm lg:text-base font-medium`} 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
}

export default HSButtons;
