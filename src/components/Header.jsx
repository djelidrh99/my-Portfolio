import { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-scroll";

// dialog import
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [links] = useState([
    { linkName: "About"},
    { linkName: "Skills" },
    { linkName: "Projects"},
    { linkName: "Contact" },
  ]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem("mode") === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const linkList = links.map((link, index) => {
    return (
      <Link
        offset={-70}
        key={index}
        to={link.linkName}
        activeClass="!bg-gray-400 dark:!bg-slate-800"
        spy={true}
        smooth={true}
        duration={100}
      >
        <li>
          <Button
            className={`
                 !px-5  !h-10 hover:!bg-gray-400  hover:dark:!bg-slate-800 !text-black dark:!text-white`}
            variant="text"
          >
            {link.linkName}
          </Button>
        </li>
      </Link>
    );
  });

  const linkListMobile = links.map((link, index) => {
    return (
      <Link
        offset={-70}
        key={index}
        to={link.linkName}
        activeClass="!bg-gray-400 dark:!bg-slate-800"
        spy={true}
        smooth={true}
        duration={100}
      >
        <li className="">
          <Button
            onClick={handleClose}
            className={`!px-5  !h-10 hover:!bg-gray-400  hover:dark:!bg-slate-800 !text-black dark:!text-white !w-full !justify-start sm:!justify-center`}
            variant="text"
          >
            {link.linkName}
          </Button>
        </li>
      </Link>
    );
  });

  //DIALOG FUNCTION
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <header>
      {/* Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ul className="flex flex-col pt-3  w-full h-full shadow-2xl  overflow-hidden  bg-gray-200 dark:bg-slate-700 dark:text-white">
          <li className="flex w-full justify-end ">
            <IconButton
              onClick={handleClose}
              className="hover:!bg-gray-400  !mr-3 hover:dark:!bg-slate-800 dark:!text-white"
              aria-label="delete"
            >
              <ClearOutlinedIcon />
            </IconButton>
          </li>
          {linkListMobile}
        </ul>
      </Dialog>
      {/* Dialog */}

      <div className=" pt-3 md:flex md:justify-end">
        <div className="flex justify-between md:w-11/12 lg:w-3/4">
          <Button
            onClick={handleClickOpen}
            className=" md:!hidden !rounded-full !p-0 !w-10 !h-10 !bg-gray-200 hover:!bg-gray-400 dark:!bg-slate-700 hover:dark:!bg-slate-800"
            variant="contained"
          >
            <MenuOutlinedIcon className=" text-black dark:text-white " />
          </Button>
          <ul className="hidden md:flex justify-center w-fit shadow-2xl items-center overflow-hidden  rounded-full bg-gray-200 dark:bg-slate-700 dark:text-white">
            {linkList}
          </ul>
          <Button
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem("mode", !darkMode ? "true" : "false");
            }}
            className=" !rounded-full !p-0 !w-10 !h-10 !bg-gray-200 hover:!bg-gray-400 dark:!bg-slate-700 hover:dark:!bg-slate-800"
            variant="contained"
          >
            {darkMode ? (
              <WbSunnyOutlinedIcon className="text-white" />
            ) : (
              <DarkModeOutlinedIcon className=" text-black " />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
