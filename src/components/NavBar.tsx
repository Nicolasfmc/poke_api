import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Copyright from "./Copyright";
import { useState } from 'react';
import { Home, Menu } from '@mui/icons-material';

export default function NavBar() {
  const navigate = useNavigate()

  const [open, setOpen] = useState<boolean>(false)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(!open)}>
      <List>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Pokemons | Info'} disablePadding>
          <ListItemButton onClick={() => navigate('/pokemon/info')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={'Pokemons | Info'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{
        width: '100%',
        height: 60,

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'red'
      }}>
        <img
          src={Logo}
          style={{
            width: '12%',
            paddingLeft: 20,
            cursor: 'pointer'
          }}
          alt="LogoPokedex"
          onClick={() => navigate('/')}
        />
        <Button sx={{ paddingRight: 20 }} onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </Box>
      <Copyright />
      <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </>
  )
}