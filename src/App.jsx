import Container from "@mui/material/Container";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Divider from "@mui/material/Divider";
import Main from "./components/Main";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";

function App() {
  console.log("render");
  const [show, setShow] = useState("hidden");
  useEffect(() => {
    const scrollToDown = () => {
      if (window.scrollY > 200) {
        setShow("");
      } else {
        setShow("hidden");
      }
    };
    window.addEventListener("scroll", scrollToDown);
    return () => {
      window.removeEventListener("scroll", scrollToDown);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className=" relative min-h-screen overflow-auto dark:bg-slate-900 bg-white px-5 ">
      <div
        onClick={scrollToTop}
        className={`scrollToTop cursor-pointer scroll-py-0.5  ${show} w-10 h-10 rounded-full animate-bounce p-3 bg-gray-200 hover:bg-gray-400 transition dark:bg-slate-700 dark:hover:bg-slate-800 flex justify-center items-center fixed bottom-3 right-3 z-50`}
      >
        <KeyboardArrowUpIcon className="dark:text-white " />
      </div>
      <Container className="relative" maxWidth="lg">
        <div className="fixed top-0 left-0 z-50 w-full">
          <Container maxWidth="lg">
            <Header />
          </Container>
        </div>
        <Element name="About">
          <HeroSection />
        </Element>

        <Divider className="!mt-5 dark:!bg-slate-700" />
        <Element name="Skills">
          <Skills />
        </Element>

        <Divider className="!mt-5 dark:!bg-slate-700" />
        <Element name="Projects">
          <Main />
        </Element>

        <Divider className="!mt-5 dark:!bg-slate-700" />
        <Element name="Contact">
          <Contact />
        </Element>

        <Divider className="!mt-5 dark:!bg-slate-700" />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
