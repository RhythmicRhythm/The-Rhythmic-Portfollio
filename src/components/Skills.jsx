import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiReactquery,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-green-400" /> },
  { name: "TanStack Query", icon: <SiReactquery className="text-red-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
];

const Skills = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each skill card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-5xl mx-auto text-center py-24">
      <motion.h2
        className="text-4xl font-bold text-black mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        💡 My Tech Stack
      </motion.h2>
      <motion.p
        className="text-xs sm:text-sm text-gray-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I specialize in <strong>modern frontend development</strong> with clean,
        reusable, and scalable code.
      </motion.p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-black p-4 rounded-xl flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105"
            variants={cardVariants}
            whileHover={{ scale: 1.1 }} // Add hover animation
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-4xl">{skill.icon}</span>
            <p className="text-white text-lg font-semibold mt-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
