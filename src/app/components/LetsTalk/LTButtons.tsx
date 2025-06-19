import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  label: string;
  onClick?: any;
  variant?: any;
  url: string;
};

function LTButtons({ variant, label, url }: Props) {
  const getSocialIcon = (label: string) => {
    const icons: { [key: string]: { icon: string; color: string; bgColor: string } } = {
      '/linkedin.svg': { icon: '💼', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
      '/whatsapp.png': { icon: '💬', color: 'text-green-400', bgColor: 'bg-green-500/20' },
      '/github.png': { icon: '🐙', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
    };
    return icons[label] || { icon: '🔗', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' };
  };

  const socialInfo = getSocialIcon(label);

  return (
    <motion.a
      target="_blank"
      href={url}
      whileHover={{ 
        scale: 1.1,
        y: -3,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer"
    >
      <div className={`relative w-16 h-16 ${socialInfo.bgColor} rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-500/20`}>
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {socialInfo.icon}
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {label.includes('linkedin') ? 'LinkedIn' : 
             label.includes('whatsapp') ? 'WhatsApp' : 
             label.includes('github') ? 'GitHub' : 'Link'}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default LTButtons;
