import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaBrain,
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
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Material UI", icon: <SiMui size={40} className="text-blue-500" /> },
  { name: "Chakra UI", icon: <SiChakraui size={40} className="text-green-400" /> },
  { name: "TanStack Query", icon: <SiReactquery size={40} className="text-red-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={40} className="text-gray-300" /> },
];

const Skills = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Animation variants for each skill card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  // Animation for floating icons
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {skills.map((skill, index) => (
          <div
            key={`bg-${index}`}
            className="absolute text-gray-400 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 45}deg)`,
            }}
          >
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Floating accent icons */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-10 text-teal-500 opacity-20"
      >
        <FaCode size={60} />
      </motion.div>

      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
        className="absolute bottom-20 right-10 text-blue-500 opacity-20"
      >
        <FaBrain size={60} />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={titleVariants}>
          <div className="flex items-center font-mono text-gray-400 mb-2">
            <span>{"<"}</span>
            <span className="text-teal-400 mx-1">section</span>
            <span className="text-orange-300 mx-1">id</span>
            <span className="text-white">=</span>
            <span className="text-green-400 mx-1">"skills"</span>
            <span>{">"}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            TECH STACK
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-center max-w-lg mb-2">
            I specialize in <span className="text-teal-400 font-semibold">modern frontend development</span> with clean,
            reusable, and scalable code.
          </p>
          
          <div className="font-mono text-xs text-gray-500">
            <span>// continuous learning and improvement</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <motion.div
                className="relative bg-gray-800 border border-gray-700 p-6 rounded-lg flex flex-col items-center justify-center h-full z-10 group-hover:border-teal-500/50 transition-colors duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  {skill.icon}
                </motion.div>
                
                <p className="text-gray-200 font-medium">
                  {skill.name}
                </p>
                
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-3"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex items-center justify-center font-mono text-gray-400 mt-16" variants={titleVariants}>
          <span>{"</"}</span>
          <span className="text-teal-400 mx-1">section</span>
          <span>{">"}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;