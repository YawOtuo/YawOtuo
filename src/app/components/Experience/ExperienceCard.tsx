import Image from "next/image";
import { motion } from "framer-motion";
import { LuCompass, LuCalendar, LuMapPin } from "react-icons/lu";

type ExperienceType = {
  logo: string;
  title: string;
  position: string;
  duration: string;
  company: string;
  responsibilities?: any;
  description: any;
  startDate: any;
  endDate: any;
  location?: string;
  role?: string;
};

type Props = {
  data: ExperienceType;
  index: number;
};

const Responsibility = ({ text, index }: { text: string; index: number }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-gray-300 text-sm lg:text-base flex items-start gap-3"
    >
      <span className="text-yellow-500 mt-1">•</span>
      <span>{text}</span>
    </motion.li>
  );
};

function ExperienceCard({ data, index }: Props) {
  const isCurrent = data?.endDate === 'Present';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Company and Position */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
              <LuCompass className="text-yellow-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                {data?.role || data?.title}
              </h3>
              <p className="text-yellow-500 font-semibold text-base">
                @ {data?.company}
              </p>
            </div>
            {isCurrent && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                Current
              </span>
            )}
          </div>

          {/* Duration and Location */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <LuCalendar className="text-yellow-500" size={16} />
              <span>{data?.startDate} - {data?.endDate}</span>
            </div>
            {data?.location && (
              <div className="flex items-center gap-2">
                <LuMapPin className="text-yellow-500" size={16} />
                <span>{data?.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {data?.description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6"
          >
            {data?.description}
          </motion.p>
        )}

        {/* Responsibilities */}
        {data?.responsibilities && data.responsibilities.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm lg:text-base mb-3">
              Key Responsibilities & Achievements:
            </h4>
            <ul className="space-y-2">
              {data.responsibilities.map((responsibility: string, idx: number) => (
                <Responsibility key={idx} text={responsibility} index={idx} />
              ))}
            </ul>
          </div>
        )}

        {/* Duration Badge */}
        <div className="mt-6 pt-4 border-t border-gray-800/50">
          <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full">
            {data?.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
