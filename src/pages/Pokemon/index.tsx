import { memo, useContext, useEffect, useState } from "react"
import { Box } from "@mui/material"
import NavBar from "../../components/NavBar"
import Carousel from "../../components/Carousel"
import PokemonDetails, { IPokemon } from "../../components/PokemonDetails"
import AppContext, { AppContextType } from '../../AppContext'
import { getPokemon } from '../../services/pokemon'
import { useMutation } from 'react-query'

const Pokemon = () => {
  const { pokemonId, setPokemonId } = useContext<AppContextType>(AppContext)

  const [pokemonTmp, setPokemonTmp] = useState<IPokemon | null>(null)

  const getPokemonObj = useMutation((id: number) => getPokemon(id), {
    onSuccess: (r) => {
      setPokemonId(r.data.id)
      setPokemonTmp(r.data)
    },
  })
  
  useEffect(() => {
    getPokemonObj.mutateAsync(pokemonId)
  }, [getPokemonObj, pokemonId])

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
      <Box sx={{ height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <PokemonDetails pokemon={pokemonTmp} key='pokemonDetails'/>
      </Box>
      <Box sx={{
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Carousel />
      </Box>
    </Box>
  )
}

export default memo(Pokemon)