import * as React from 'react';
import { useTheme, Theme, CSSObject } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import scss from './sidemenu.module.scss'
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NextLink from 'next/link'
import {signOut}  from 'next-auth/react'
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const drawerWidth = 240;


const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
 


  

const SideMenu = () => {

  

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobilecheck = useMediaQuery("(min-width : 600px)")

  const menuRouteList = ["analytics", "profile", "settings", ""]
  const menuListTranslations = ["Data", "Profile", "Settings", "Sign Out"]
  const menuListIcons = [
    <EqualizerIcon/>,
    <PersonIcon/>,
    <SettingsIcon/>,
    <ExitToAppIcon/>
  ]

  

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text : string) => {
    text === "Sign Out"? signOut() : null
    setOpen(false)
  }

    return (
        <Drawer 
        variant="permanent" 
        open={open} 
        anchor='left'
        sx={{
            
            width: drawerWidth,
            [`& .MuiDrawer-paper`] : {
                top: mobilecheck? 64 : 57,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                ...(open && {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                  }),
                  ...(!open && {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                  })
            },
            }}>

        
        <div className={scss.drawerheader}>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <NextLink
            className = {scss.link}
            href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => {handleListItemButtonClick(text)}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ 
                    color : theme.palette.text.primary,
                    opacity: open ? 1 : 0 }} />
              </ListItemButton>
             </NextLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default SideMenu