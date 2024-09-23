import ireoluwa from "../assets/ireoluwa.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="relative pb-20 px-6 mt-44">
        <div className="mx-auto flex flex-col sm:flex-row-reverse gap-4 justify-center items-center max-w-3xl">
          <div className="w-full mx-auto sm:w-1/2 flex justify-center items-center">
            <img src={ireoluwa} alt="" className="rounded-full w-60 border" />
          </div>
          <div className="flex flex-col justify-center items-center text-center w-full sm:w-1/2">
            <h2 className="mt-8 text-xl sm:text-2xl font-bold uppercase">
              Rhythmic Rhythm
            </h2>
            <h2 className="mt-2 text-gray-300 text-sm sm:text-xl font-bold uppercase">
              Software Developer
            </h2>
            <div className="flex gap-4 mt-2 px-2">
              <FaXTwitter className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
              <FaGlobe className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
              <FaTelegramPlane className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
            </div>
            <p className="mt-2 text-sm text-gray-500 py_font">
              Bringing code to life with creativity and problem-solving! I turn
              big ideas into smooth, user-friendly software that’s functional
              and fun. From brainstorming to the final line of code, I craft
              digital experiences people love.
            </p>
            <div className="mt-4">
              <Link
                to="https://wa.me/qr/MW77U4IMRXJAD1"
                className="btn bg-gray-800 rounded-lg"
              >
                {" "}
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
