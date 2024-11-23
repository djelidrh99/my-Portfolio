import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme} from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { motion, AnimatePresence } from "framer-motion";
// card import
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

// image Import
import img2 from "../../public/img/React portfolio website/2.jpg";
import img3 from "../../public/img/React portfolio website/3.jpg";
import img4 from "../../public/img/React portfolio website/4.jpg";
import img5 from "../../public/img/React portfolio website/5.jpg";
import img6 from "../../public/img/React portfolio website/6.jpg";
import img7 from "../../public/img/React portfolio website/7.jpg";
import img8 from "../../public/img/React portfolio website/8.jpg";
import img9 from "../../public/img/React portfolio website/9.jpg";

const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          // Styles de base pour chaque bouton
          color: "black",
          border: "1px solid rgb(59 7 100) !important",

          "&:hover": {
            backgroundColor: "#e0e0e0 !important", // Couleur au survol
            color: "black",
          },
          "&:active": {
            color: "black", // Texte blanc quand actif
            backgroundColor: "rgb(59 7 100)", // Couleur de fond quand actif
          },
          "&.Mui-selected": {
            color: "white", // Texte blanc quand sélectionné
            backgroundColor: "rgb(107 33 168) !important", // Couleur de fond quand sélectionné
            "&:hover": {
              backgroundColor: "rgb(88 28 135) !important", // Variante pour survol actif
            },
          },
        },
      },
    },
  },
});

export default function Main() {
  const [alignment, setAlignment] = useState("allprojects");
  const [allProject] = useState([
    {
      imgSrc: img8,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "REACT&MUI",
    },
    {
      imgSrc: img3,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "html&css",
    },
    {
      imgSrc: img4,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "js",
    },
   
    {
      imgSrc: img6,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "js",
    },
    {
      imgSrc: img7,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "REACT&MUI",
    },
    {
      imgSrc: img5,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "js",
    },
  
    {
      imgSrc: img9,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "REACT&MUI",
    },
    {
      imgSrc: img2,
      subTitle:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      gtithub:
        "https://github.com/djelidrh99/CRUDS-using-react-with-useReducer.git",
      projectLink: "https://peaceful-sawine-97ea01.netlify.app",
      category: "html&css",
    }
  ]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  let allprojects = allProject;

  const htmlCssProject = useMemo(
    () =>
      allProject.filter((project) => {
        return project.category === "html&css";
      }),
    [allProject]
  );

  const javaScriptProject = useMemo(
    () =>
      allProject.filter((project) => {
        return project.category === "js";
      }),
    [allProject]
  );

  const reactProject = useMemo(
    () =>
      allProject.filter((project) => {
        return project.category === "REACT&MUI";
      }),
    [allProject]
  );

  if (alignment === "html&css") {
    allprojects = htmlCssProject;
  } else if (alignment === "js") {
    allprojects = javaScriptProject;
  } else if (alignment === "REACT&MUI") {
    allprojects = reactProject;
  }

  const ProjectList =  allprojects.map((project, index) => {
    return (
      
       
      <Grid   key={index}   size={{ xs: 12, md: 6, lg: 4 }}>
        <motion.div
        layout
        initial={{transform:"scale(0)"}}
        animate={{transform:"scale(1)"}}
        transition={{type:"spring",damping:8,stiffness:50}}
        >

        
        <Card layout className="dark:bg-slate-700 !w-full border-purple-800 border  hover:rotate-1 hover:scale-105 cursor-pointer !transition-all hover:border-2">
          <CardMedia
            component="img"
            height="194"
            image={project.imgSrc}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              className="text-slate-400 dark:text-gray-50 hover:dark:text-white"
              variant="body2"
            >
              {project.subTitle}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <a href={project.gtithub} target="_blank">
                <GitHubIcon className="dark:text-gray-400 hover:dark:text-gray-500" />
              </a>
            </IconButton>
            <IconButton aria-label="share">
              <a href={project.projectLink} target="_blank">
                <LinkIcon className="dark:text-gray-400 hover:dark:text-gray-500" />
              </a>
            </IconButton>
          </CardActions>
        </Card>
        </motion.div>
      </Grid>
      
     
    );
  });

  



  return (
    <ThemeProvider theme={theme}>
      <div id="Projects" className="py-28 flex">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 2 }}>
            <div className="btn">
              <ToggleButtonGroup
                className="flex  max-[899px]:!flex-row flex-wrap max-[425px]:!justify-center max-[425px]:!w-full    gap-2"
                value={alignment}
                sx={{ ":active": { color: "white" } }}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton
                  className=" !font-bold  dark:text-white !transition min-[900px]:w-full !bg-gray-200 dark:!bg-slate-700"
                  value="allprojects"
                >
                  All Projects
                </ToggleButton>
                <ToggleButton
                  className=" !font-bold  dark:text-white !transition min-[900px]:w-full !bg-gray-200 dark:!bg-slate-700"
                  value="html&css"
                >
                  HTML & CSS
                </ToggleButton>
                <ToggleButton
                  className=" !font-bold  dark:text-white !transition min-[900px]:w-full !bg-gray-200 dark:!bg-slate-700"
                  value="js"
                >
                  JavaScript
                </ToggleButton>
                <ToggleButton
                  className=" !font-bold  dark:text-white !transition min-[900px]:w-full !bg-gray-200 dark:!bg-slate-700"
                  value="REACT&MUI"
                >
                  React & MUI
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
          <AnimatePresence>
            <Grid container spacing={2}>
              
           
            {ProjectList}
            

            </Grid>
            </AnimatePresence>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
