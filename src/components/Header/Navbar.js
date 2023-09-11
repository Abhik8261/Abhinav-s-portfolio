import React from 'react'
import {AppBar,Toolbar,Typography,Button,Tabs,Tab,useMediaQuery,useTheme} from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DrawerComp from './DrawerComp';
import './Navbar.css'


const Navbar = () => {
  
  const theme= useTheme()
 
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
 // console.log(isMatch)
  return (
<AppBar sx={{background:'rgb(28, 26, 26)'}}  className='nav'>
<Toolbar>
  <LogoDevIcon />
{
  isMatch ? (
    <>
    <Typography>My-Portfolio</Typography>
    <DrawerComp/>
    </>
  ):(
<>
<Typography>
  <strong>My-Portfolio</strong>

</Typography>
<Tabs sx={{marginLeft:'auto'}} textColor="inherit" >
                <Tab label="About" href="#aboutme" />
                <Tab label="Skills" href="#skills" />
                <Tab label="Projects" href="#projects"/>
                <Tab label="Profiles" href="#profile" />
                
</Tabs>
<Button sx={{marginLeft:'auto'}} href='https://drive.google.com/file/d/1PxQt4Eb3Vlko8zLhrh77LkS6_ssTKtix/view?usp=drive_link' variant='contained' target='_blank'>Resume</Button></>
  )
}



</Toolbar>

</AppBar>
  )
}

export default Navbar
