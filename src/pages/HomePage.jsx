import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <div>
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
