import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import moviehub from "../assets/works/Moviehub.png";
import andicox from "../assets/works/andicox.png";
import lyngual from "../assets/works/lyngual.png";
import etherpump from "../assets/works/etherpump.png";
import speechapp from "../assets/works/speechapp.png";
import dasahomes from "../assets/works/dasahomes.png";

const projects = [
  {
    name: "Rhythmic Hub",
    image: moviehub,
    link: "https://movieapp-inky.vercel.app",
    description:
      "A sleek movie discovery platform with real-time search and API integration.",
    tech: ["React", "API", "Tailwind CSS"]
  },
  {
    name: "Andicox Studios",
    image: andicox,
    link: "https://andicoxstudio.com",
    description:
      "A Nigerian gaming studio dedicated to crafting immersive and innovative gaming experiences.",
    tech: ["React", "Three.js", "CSS"]
  },
  {
    name: "Lyngual Labs",
    image: lyngual,
    link: "https://www.lynguallabs.org",
    description:
      "An AI-focused research lab pioneering advancements in artificial intelligence and machine learning.",
    tech: ["React", "Node.js", "AI Integration"]
  },
  {
    name: "Ether Pump",
    image: etherpump,
    link: "https://ether-pump-meme.vercel.app/",
    description:
      "The first Meme Fair Launch Platform on Ethereum. Meme Your Way to the Moon!",
    tech: ["Web3.js", "React", "Solidity"]
  },
  {
    name: "Speech App",
    image: speechapp,
    link: "https://speechapp.lynguallabs.org",
    description:
      "A speech curation project by Lyngual Labs that leverages AI for real-time speech-to-text processing.",
    tech: ["React", "WebSpeech API", "AI"]
  },
  {
    name: "Dasa Homes",
    image: dasahomes,
    link: "https://www.dasa.homes",
    description:
      "A Nigerian real estate company offering innovative solutions for buying, selling, and renting properties.",
    tech: ["React", "Node.js", "MongoDB"]
  },
];

const ProjectList = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      {/* Code particles background effect continued from hero */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
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

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={titleVariants}>
          <div className="flex items-center font-mono text-gray-400 mb-2">
            <span>{"<"}</span>
            <span className="text-teal-400 mx-1">section</span>
            <span className="text-orange-300 mx-1">id</span>
            <span className="text-white">=</span>
            <span className="text-green-400 mx-1">"projects"</span>
            <span>{">"}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
            MY PROJECTS
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-4"></div>
          
          <p className="text-gray-400 text-center max-w-lg">
            Showcasing my latest work and technical expertise. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-black/50 border border-gray-700 h-full transition-all duration-300 group-hover:shadow-teal-500/20 group-hover:border-teal-500/30"
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 z-10"
                    whileHover={{ opacity: 0 }}
                  />
                  
                  <motion.img
                    className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.name}
                  />
                  
                  <motion.div 
                    className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    whileHover={{ rotate: 15 }}
                  >
                    <FaExternalLinkAlt className="text-teal-400" />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <FaCode className="text-gray-500 group-hover:text-teal-400 transition-colors duration-300" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-700 text-xs font-mono text-teal-400 rounded group-hover:bg-gray-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div className="flex items-center justify-center font-mono text-gray-400 mt-16" variants={titleVariants}>
          <span>{"</"}</span>
          <span className="text-teal-400 mx-1">section</span>
          <span>{">"}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectList;