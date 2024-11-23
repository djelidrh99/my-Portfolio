import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import heroAnimation from "../../public/img/aboutAnimation.json";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import Lottie from "lottie-react";

export default function HeroSection() {
  const [isSecondTypedVisible, setSecondTypedVisible] = useState(false);

  const handleFirstTypingComplete = () => {
    setSecondTypedVisible(true); // Affiche le deuxième ReactTyped après le premier
  };
  return (
    <div
      id="About"
      className="flex justify-between mt-14 items-center flex-wrap md:flex-nowrap py-28"
    >
      <div className="flex flex-col gap-10 transition-all">
        <Typography
          className="dark:text-white !font-extrabold !text-5xl"
          variant="h1"
          gutterBottom
        >
          {/* <ReactTyped strings={["I am <span className='!text-purple-900'>Djelid Rh</span>,<br/>Frontend Developer"]} typeSpeed={40} /> */}
          <ReactTyped
            className="text-purple-950 "
            strings={["I am Djelid Rh,"]}
            typeSpeed={50}
            onComplete={handleFirstTypingComplete} // Callback lorsque le premier est terminé
          />
          <br />
          {isSecondTypedVisible && (
            <ReactTyped strings={["Frontend Developer."]} typeSpeed={50} />
          )}
        </Typography>

        <Typography
          className="text-slate-800 dark:text-slate-400"
          variant="body1"
          gutterBottom
        >
          Frontend Developer skilled in React.js and Tailwind CSS,
          <br /> focused on creating modern, responsive, and user-friendly web
          applications.
        </Typography>

        <ul className="flex gap-5  items-center">
          <li>
            <GitHubIcon className="dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black" />
          </li>
          <li>
            <XIcon className="dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black" />
          </li>
          <li>
            <EmailIcon className="dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black" />
          </li>
          <li>
            <LinkedInIcon className="dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black" />
          </li>
        </ul>
      </div>
      <div className="justify-center items-center basis-2/3 hidden md:!flex">
        <Lottie className="!h-96" animationData={heroAnimation} />
      </div>
    </div>
  );
}
