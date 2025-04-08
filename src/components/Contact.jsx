import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram, FaCode } from "react-icons/fa6";
import { FiSend, FiCommand } from "react-icons/fi";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const contactRef = collection(db, "ContactMessages");
      await addDoc(contactRef, {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      toast.success("Message sent successfully!");
      console.log("Message submitted:", { name, email, message });
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 px-4 relative overflow-hidden" id="contact">
      <Toaster toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
          border: '1px solid #2dd4bf',
        },
      }} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {Array(15).fill().map((_, i) => (
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
            {"{contact}"}
          </div>
        ))}
      </div>
      
      <motion.div 
        className="absolute top-20 right-10 text-teal-500 opacity-20"
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <FiCommand size={60} />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
          <div className="flex items-center font-mono text-gray-400 mb-2">
            <span>{"<"}</span>
            <span className="text-teal-400 mx-1">section</span>
            <span className="text-orange-300 mx-1">id</span>
            <span className="text-white">=</span>
            <span className="text-green-400 mx-1">"contact"</span>
            <span>{">"}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
            GET IN TOUCH
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-4"></div>
          
          <p className="text-gray-400 text-center max-w-lg">
            Ready to bring your vision to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <motion.div
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 inline-flex items-center"
              variants={itemVariants}
            >
              <span className="text-teal-400 mr-2">{">"}</span> Connect With Me
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              Have a groundbreaking idea or brand? Let's bring it to
              life together! Reach out, and let's collaborate to take your
              vision to the next level.
            </motion.p>
            
            <motion.ul className="space-y-6 mb-10" variants={containerVariants}>
              <motion.li 
                className="flex items-center"
                variants={itemVariants}
              >
                <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                  <MdOutlineEmail size={20} />
                </div>
                <a
                  href="mailto:RhythmicRhythm@outlook.com"
                  className="text-gray-300 ml-4 hover:text-teal-400 transition duration-300"
                >
                  RhythmicRhythm@outlook.com
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-center"
                variants={itemVariants}
              >
                <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                  <MdOutlineLocalPhone size={20} />
                </div>
                <a
                  href="tel:09058722003"
                  className="text-gray-300 ml-4 hover:text-teal-400 transition duration-300"
                >
                  0905-872-2003
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-center"
                variants={itemVariants}
              >
                <div className="bg-gray-700 p-3 rounded-lg text-teal-400">
                  <MdOutlineLocationOn size={20} />
                </div>
                <span className="text-gray-300 ml-4">
                  Lagos, Nigeria
                </span>
              </motion.li>
            </motion.ul>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 font-mono text-sm mb-4">
                // Find me on social platforms
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://x.com/Rhythm_bfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-lg flex items-center justify-center text-teal-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaXTwitter size={20} />
                </motion.a>
                
                <motion.a
                  href="https://github.com/RhythmicRhythm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-lg flex items-center justify-center text-teal-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                
                <motion.a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 h-12 w-12 rounded-lg flex items-center justify-center text-teal-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
            
            <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 z-10">
              <h3 className="text-2xl font-bold text-white mb-6 inline-flex items-center">
                <span className="text-teal-400 mr-2">{">"}</span> Send Message
              </h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    placeholder="Message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className={`w-full py-3 px-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 ${
                    loading ? "opacity-70" : "hover:shadow-lg hover:shadow-teal-500/25"
                  }`}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 font-mono text-xs">
                  // I'll get back to you as soon as possible
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex items-center justify-center font-mono text-gray-400 mt-16" variants={itemVariants}>
          <span>{"</"}</span>
          <span className="text-teal-400 mx-1">section</span>
          <span>{">"}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;