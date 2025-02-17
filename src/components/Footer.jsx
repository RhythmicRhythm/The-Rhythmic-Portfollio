import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/RhythmicRhythm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://x.com/Rhythm_bfc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="mailto:RhythmicRhythm@outlook.com"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>

          {/* Copyright Notice */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Rhythmic Rhythm. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
