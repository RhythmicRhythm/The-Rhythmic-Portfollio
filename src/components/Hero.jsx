import { motion } from "framer-motion";
import mugen from "../assets/Mugen.webp";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaCode,
  FaLaptopCode
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I bring ideas to life through code.";
  const typingSpeed = 100;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(typingTimeout);
    }
  }, [typedText]);

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.5 },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {/* Code particles background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array(20).fill().map((_, i) => (
          <div 
            key={i}
            className="absolute text-teal-400 text-opacity-20 font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${Math.random() * 0.8 + 0.5}rem`
            }}
          >
            {"{code}"}
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="relative pt-20 pb-20 px-6">
          <motion.div 
            animate={floatingAnimation}
            className="absolute top-16 right-16 text-teal-400 opacity-60"
          >
            <FaCode size={30} />
          </motion.div>
          
          <motion.div 
            animate={floatingAnimation}
            className="absolute bottom-16 left-16 text-teal-400 opacity-60"
          >
            <FaLaptopCode size={30} />
          </motion.div>
          
          <motion.div
            className="mx-auto flex flex-col sm:flex-row-reverse gap-8 justify-center items-center max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-full mx-auto sm:w-1/2 flex justify-center items-center"
              variants={imageVariants}
            >
              <motion.div className="relative">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 blur opacity-70"
                  style={{ transform: 'scale(1.05)' }}
                ></motion.div>
                
                <motion.img
                  src={mugen}
                  alt="Profile"
                  className="rounded-full w-60 border-4 border-gray-800 relative z-10"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                />
                
                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-gray-800 text-teal-400 p-2 rounded-full z-20"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <FaCode size={20} />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex flex-col justify-center items-start w-full sm:w-1/2"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center font-mono text-gray-400 mb-2">
                <span>{"<"}</span>
                <span className="text-teal-400 mx-1">introduction</span>
                <span>{">"}</span>
              </motion.div>
              
              <motion.h2
                className="text-3xl sm:text-5xl font-extrabold text-white mb-2"
                variants={itemVariants}
              >
                RHYTHMIC RHYTHM
              </motion.h2>
              
              <motion.h3
                className="text-xl sm:text-2xl font-bold uppercase bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4"
                variants={itemVariants}
              >
                Software Developer
              </motion.h3>
              
              <motion.div className="mb-6 font-mono" variants={itemVariants}>
                <span className="text-gray-400">const </span>
                <span className="text-teal-400">mission</span>
                <span className="text-white"> = </span>
                <span className="text-orange-300">"</span>
                <span className="text-orange-300">{typedText}</span>
                <span className="text-orange-300 animate-pulse">|</span>
                <span className="text-orange-300">"</span>
              </motion.div>
              
              <motion.p
                className="text-gray-300 mb-6 text-sm"
                variants={itemVariants}
              >
                I blend creativity with problem-solving to craft seamless, user-friendly software. From concept to execution, I transform big ideas into functional and enjoyable digital experiences. Whether it's brainstorming innovative solutions or writing the final line of code, I strive to create products that people love to use.
              </motion.p>
              
              <motion.div
                className="flex gap-6 mb-6"
                variants={itemVariants}
              >
                <motion.a
                  href="https://x.com/Rhythm_bfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaXTwitter size={22} />
                </motion.a>
                <motion.a
                  href="https://github.com/RhythmicRhythm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaLinkedinIn size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaInstagram size={22} />
                </motion.a>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  className="py-3 px-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-teal-500/25 flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>VIEW MY CV</span>
                  <span className="text-xs">{">"}</span>
                </motion.button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center font-mono text-gray-400 mt-4">
                <span>{"</"}</span>
                <span className="text-teal-400 mx-1">introduction</span>
                <span>{">"}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;