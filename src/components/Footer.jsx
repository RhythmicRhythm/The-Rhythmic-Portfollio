import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaEnvelope,
  FaCode 
} from "react-icons/fa6";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black relative py-12 overflow-hidden">
      {/* Code particles background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array(10).fill().map((_, i) => (
          <div 
            key={i}
            className="absolute text-teal-400 text-opacity-20 font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${Math.random() * 0.6 + 0.4}rem`
            }}
          >
            {"{code}"}
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Top section with name and role */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-800 pb-6"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <motion.div
                animate={floatingAnimation}
                className="text-teal-400"
              >
                <FaCode size={18} />
              </motion.div>
              <h3 className="text-white font-bold text-xl">RHYTHMIC RHYTHM</h3>
            </div>
            <div className="font-mono">
              <span className="text-gray-400">const </span>
              <span className="text-teal-400">role</span>
              <span className="text-white"> = </span>
              <span className="text-orange-300">"Software Developer"</span>
            </div>
          </motion.div>
          
          {/* Middle section with links and social */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-white font-semibold mb-2">Connect With Me</h4>
              <div className="flex gap-6">
                <motion.a
                  href="https://x.com/Rhythm_bfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaXTwitter size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/RhythmicRhythm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
                <motion.a
                  href="mailto:RhythmicRhythm@outlook.com"
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-all duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Portfolio
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-all duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                About Me
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-all duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-all duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.a>
            </motion.div>
            
            {/* Email & Contact */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h4 className="text-white font-semibold mb-2">Contact</h4>
              <a href="mailto:RhythmicRhythm@outlook.com" className="text-gray-400 hover:text-teal-400 transition-all duration-200 text-sm">
                RhythmicRhythm@outlook.com
              </a>
              <button
                className="py-2 px-4 mt-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-teal-500/25 inline-flex items-center gap-2 w-fit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <span className="text-xs">{">"}</span>
              </button>
            </motion.div>
          </div>
          
          {/* Bottom section with copyright */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-gray-800 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Rhythmic Rhythm. All rights reserved.
            </p>
            <div className="flex items-center font-mono text-gray-400 text-xs">
              <span>{"<"}</span>
              <span className="text-teal-400 mx-1">built_with</span>
              <span className="text-white mx-1">=</span>
              <span className="text-orange-300">"passion"</span>
              <span>{" />"}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;