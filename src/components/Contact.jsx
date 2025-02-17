import React, { useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div id="contact">
      <Toaster />
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg py-24">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4">
          {/* Contact Info Section */}
          <div>
            <h1 className="text-4xl font-bold text-black">Get in Touch</h1>
            <p className="text-xs text-gray-700 mt-4 leading-relaxed">
              Have a groundbreaking idea or brand? Let’s bring it to
              life together! Reach out, and let’s collaborate to take your
              vision to the next level. I’m here to provide the support you need
              to make it happen.
            </p>
            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <MdOutlineEmail className="text-xl text-black" />
                <Link
                  to="#"
                  className="text-black text-sm ml-4 hover:text-blue-600 transition duration-200"
                >
                 RhythmicRhythm@outlook.com
                </Link>
              </li>
              <li className="flex items-center">
                <MdOutlineLocalPhone className="text-xl text-black" />
                <Link
                  to="#"
                  className="text-black text-sm ml-4 hover:text-blue-600 transition duration-200"
                >
                  0905-872-2003
                </Link>
              </li>
              <li className="flex items-center">
                <MdOutlineLocationOn className="text-xl text-black" />
                <Link
                  to="#"
                  className="text-black text-sm ml-4 hover:text-blue-600 transition duration-200"
                >
                  Lagos, Nigeria
                </Link>
              </li>
            </ul>
            <ul className="flex mt-12 space-x-4">
              <li className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Link to="https://x.com/Rhythm_bfc">
                  <FaXTwitter className="text-black text-lg" />
                </Link>
              </li>
              <li className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Link to="https://github.com/RhythmicRhythm">
                  <FaGithub className="text-black text-lg" />
                </Link>
              </li>
              <li className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Link to="">
                  <FaInstagram className="text-black text-lg" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg py-3 px-4 text-gray-700 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg py-3 px-4 text-gray-700 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg px-4 text-gray-700 bg-white text-sm pt-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className={`text-white bg-black hover:bg-gray-200 hover:text-white tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6 ${
                  loading ? "opacity-50 pointer-events-none" : ""
                }`}
                disabled={loading}
              >
                <FiSend className="text-xl mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
