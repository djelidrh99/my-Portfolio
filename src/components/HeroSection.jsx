import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myImg from '/css/react-project/PORTFOLIO/portfolio/public/img/pagina-web.png'

export default function HeroSection() {
    return(
        <div className='flex justify-between items-center flex-wrap md:flex-nowrap py-28'>
        <div className='flex flex-col gap-10'>
        <Typography className='dark:text-white' variant="h3" gutterBottom>
         I am Djelid Rh,<br/>Frontend Developer
        </Typography>

        <Typography className='text-slate-800 dark:text-slate-400' variant="body1" gutterBottom>
        Frontend Developer skilled in React.js and Tailwind CSS,<br/> focused on creating modern, responsive, and user-friendly web applications.
      </Typography>

      <ul className='flex gap-5  items-center'>
        <li><GitHubIcon className='dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black'/></li>
        <li><XIcon className='dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black'/></li>
        <li><EmailIcon className='dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black'/></li>
        <li><LinkedInIcon className='dark:text-white hover:dark:text-gray-300 cursor-pointer text-slate-900 hover:text-black'/></li>
      </ul>

        </div>
        <div className='flex justify-center items-center basis-2/3'>
            <img className='w-64 h-64 animate-bounce' src={myImg} alt="" />
        </div>
        </div>
    )
}