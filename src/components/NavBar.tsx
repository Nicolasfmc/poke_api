import { Box, Tab, Tabs } from "@mui/material";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Copyright from "./Copyright";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate()

  // const [value, setValue] = useState<number>(0)
  // const handleChange = (route: string, newValue: number) => {
  //   setValue(newValue)
  //   navigate(route)
  // }

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
        <Box sx={{ paddingRight: 20 }}>
          {/* <Tabs value={0} onChange={(e) => handleChange(e.target.name, e.target.value)} sx={{ height: 60 }} textColor="inherit">
            <Tab label="Item One" sx={{ height: 60 }}/>
            <Tab label="Item Two" sx={{ height: 60 }}/>
          </Tabs> */}
        </Box>
      </Box>
      <Copyright />
    </>
  )
}