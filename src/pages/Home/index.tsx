import { Box, Button } from "@mui/material"
import { memo } from "react"
import NavBar from "../../components/NavBar"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{
      margin: -1,
      width: window.innerWidth,
      height: window.innerHeight,
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
    }}>
      <NavBar />
      <Box>
        <Button onClick={() => navigate('/pokemon/info')}>Navigate</Button>
      </Box>
    </Box>
  )
}

export default memo(Home)