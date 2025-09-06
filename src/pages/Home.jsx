import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  // const { theme, setTheme } = useTheme();
  return (
    <>
      <div className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        {/* <Testimonials /> */}
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
