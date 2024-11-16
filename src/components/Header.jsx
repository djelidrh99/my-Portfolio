import { useState,useEffect, forwardRef } from "react";
import Button from '@mui/material/Button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

// dialog import 
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });
  



export default function Header() {
    const [darkMode,setDarkMode]=useState(false)
    const[links,setActive]=useState([
        {linkName:"About",isAclive:true},
        {linkName:"Articles",isAclive:false},
        {linkName:"Projects",isAclive:false},
        {linkName:"Speaking",isAclive:false},
        {linkName:"Contact",isAclive:false}

    ])
    
    useEffect(()=>{
        if(darkMode) {
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }
    
    },[darkMode])

    function handelActive(i){
        const activeLink = links.map((link,index)=>{
            if(index===i) {
                return {...link,isAclive:true}
            }else {
                return {...link,isAclive:false}
            }
            
        })
        setActive(activeLink)
        setOpen(false)
    }

    const linkList=links.map((link,index)=>{
        return(
            <li key={index}><Button onClick={()=>{handelActive(index)}} className={`${ link.isAclive  ? 'dark:!bg-slate-800':'dark:!bg-slate-700'} ${link.isAclive ? '!bg-gray-400':'!bg-gray-200'}   !px-5  !h-10 hover:!bg-gray-400  hover:dark:!bg-slate-800 !text-black dark:!text-white`} variant="text">{link.linkName}</Button></li>
        )
    })

    const linkListMobile=links.map((link,index)=>{
        return(
            <li className="" key={index}><Button onClick={()=>{handelActive(index)}} className={`${ link.isAclive  ? 'dark:!bg-slate-800':'dark:!bg-slate-700'} ${link.isAclive ? '!bg-gray-400':'!bg-gray-200'}   !px-5  !h-10 hover:!bg-gray-400  hover:dark:!bg-slate-800 !text-black dark:!text-white !w-full !justify-start sm:!justify-center`} variant="text">{link.linkName}</Button></li>
        )
    })

    //DIALOG FUNCTION 
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <>
        {/* Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ul className="flex flex-col pt-3  w-full h-full shadow-2xl  overflow-hidden  bg-gray-200 dark:bg-slate-700 dark:text-white">
        <li className="flex w-full justify-end "><IconButton onClick={handleClose} className="hover:!bg-gray-400 !mr-3 hover:dark:!bg-slate-800 dark:!text-white" aria-label="delete">
        <ClearOutlinedIcon />
      </IconButton>
      </li>
        {linkListMobile}
        </ul>
        
      </Dialog>
        {/* Dialog */}

      <div className=" pt-3 md:flex md:justify-end">
        <div className="flex justify-between md:w-11/12 lg:w-3/4">
            <Button onClick={handleClickOpen} className=" md:!hidden !rounded-full !p-0 !w-10 !h-10 !bg-gray-200 hover:!bg-gray-400 dark:!bg-slate-700 hover:dark:!bg-slate-800" variant="contained"><MenuOutlinedIcon className=" text-black dark:text-white "/></Button>
            <ul className="hidden md:flex justify-center w-fit shadow-2xl items-center overflow-hidden  rounded-full bg-gray-200 dark:bg-slate-700 dark:text-white">
              {linkList}
            </ul>
            <Button onClick={()=>{setDarkMode(!darkMode)}} className=" !rounded-full !p-0 !w-10 !h-10 !bg-gray-200 hover:!bg-gray-400 dark:!bg-slate-700 hover:dark:!bg-slate-800" variant="contained">{darkMode ? <WbSunnyOutlinedIcon className="text-white"/> :<DarkModeOutlinedIcon className=" text-black "/>}</Button>
        </div>




       
     
     </div>
     </>
    )
}