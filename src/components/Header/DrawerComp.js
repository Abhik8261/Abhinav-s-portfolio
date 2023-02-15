import React, { Fragment, useState } from 'react'
import {Drawer,List, ListItemButton, ListItemIcon, ListItemText,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Fragment>
<Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
<List>
<ListItemButton  href='#aboutme'>
  <ListItemIcon>
    <ListItemText>
      About
    </ListItemText>
  </ListItemIcon>
</ListItemButton>
<ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#skills"
          >
            <ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#projects"
          >
            <ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#profile"
          >
            <ListItemIcon>
              <ListItemText>Profiles</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="https://drive.google.com/file/d/1CRRhgHs_DgcSHe7yNOnzUaoU2A3AzvGs/view?usp=share_link"
          >
            <ListItemIcon>
              <ListItemText>Resume</ListItemText>
            </ListItemIcon>
          </ListItemButton>
</List>


</Drawer>
<IconButton onClick={()=>setOpenDrawer(!openDrawer)} sx={{color:'white',marginLeft:'auto'}}>
  <MenuIcon/>
</IconButton>

    </Fragment>
  )
}

export default DrawerComp