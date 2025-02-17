import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  },
  {
    name: "Andicox Studios",
    image: andicox,
    link: "https://andicoxstudio.com",
    description:
      "A Nigerian gaming studio dedicated to crafting immersive and innovative gaming experiences.",
  },
  {
    name: "Lyngual Labs",
    image: lyngual,
    link: "https://www.lynguallabs.org",
    description:
      "An AI-focused research lab pioneering advancements in artificial intelligence and machine learning.",
  },
  {
    name: "Ether Pump",
    image: etherpump,
    link: "https://ether-pump-meme.vercel.app/",
    description:
      "The first Meme Fair Launch Platform on Ethereum. Meme Your Way to the Moon!",
  },
  {
    name: "Speech App",
    image: speechapp,
    link: "https://speechapp.lynguallabs.org",
    description:
      "A speech curation project by Lyngual Labs that leverages AI for real-time speech-to-text processing.",
  },
  {
    name: "Dasa Homes",
    image: dasahomes,
    link: "https://www.dasa.homes",
    description:
      "A Nigerian real estate company offering innovative solutions for buying, selling, and renting properties.",
  },
];

const ProjectList = () => {
  // Animation variants for each project card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full p-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the card is in view
          >
            <Link to={project.link} className="group block">
              <motion.img
                className="h-60 w-full object-cover rounded-2xl mb-4 shadow-lg"
                src={project.image}
                alt={project.name}
                whileHover={{ scale: 1.05 }} // Add hover animation
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="text-black text-lg font-bold group-hover:underline">
                {project.name}
              </p>
              <p className="text-gray-700 text-sm font-bold mt-2 font-sans">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
