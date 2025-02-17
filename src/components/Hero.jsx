import { motion } from "framer-motion";
import mugen from "../assets/Mugen.webp";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
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

  return (
    <div>
      <section className="relative pb-20 px-6 mt-44">
        <motion.div
          className="mx-auto flex flex-col sm:flex-row-reverse gap-4 justify-center items-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full mx-auto sm:w-1/2 flex justify-center items-center"
            variants={imageVariants}
          >
            <motion.img
              src={mugen}
              alt=""
              className="rounded-full w-60 border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center text-center w-full sm:w-1/2"
            variants={containerVariants}
          >
            <motion.h2
              className="mt-8 text-xl sm:text-2xl font-bold uppercase"
              variants={itemVariants}
            >
              Rhythmic Rhythm
            </motion.h2>
            <motion.h2
              className="mt-2 text-gray-400 text-sm sm:text-xl font-bold uppercase"
              variants={itemVariants}
            >
              Software Developer
            </motion.h2>
            <motion.div
              className="flex gap-4 mt-2 px-2"
              variants={itemVariants}
            >
              <Link
                to="/https://x.com/Rhythm_bfc"
                className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="/https://github.com/RhythmicRhythm"
                className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out"
              >
                <FaGithub />
              </Link>
              <Link
                to=""
                className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out"
              >
                <FaInstagram />
              </Link>
            </motion.div>
            <motion.p
              className="mt-2 text-sm font-bold text-gray-500 font-sans"
              variants={itemVariants}
            >
              I bring ideas to life through code, blending creativity with
              problem-solving to craft seamless, user-friendly software. From
              concept to execution, I transform big ideas into functional and
              enjoyable digital experiences. Whether it's brainstorming
              innovative solutions or writing the final line of code, I strive
              to create products that people love to use.
            </motion.p>
            <motion.div className="mt-4" variants={itemVariants}>
              <motion.button
                className="py-2 px-4 text-white bg-black rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="https://firebasestorage.googleapis.com/v0/b/fir-crud-33ba6.appspot.com/o/My%20FIles%2FRhythm-Okubadejo-FlowCV-Resume-20241206.pdf?alt=media&token=4b5f2cbf-0394-4758-80e5-82fb093d8da6">
                View My CV
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
