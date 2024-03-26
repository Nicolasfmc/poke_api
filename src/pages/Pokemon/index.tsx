import { memo, useEffect, useState } from "react"
import { getPokemon } from "../../services/pokemon"
import { useMutation } from "react-query"
import { Box } from "@mui/material"
import NavBar from "../../components/NavBar"
import Carousel from "../../components/Carousel"
import { limitPokemon } from "../../utils/functions"
import PokemonDetails, { IPokemon } from "../../components/PokemonDetails"

const Pokemon = () => {
  const [pokemonId, setPokemonId] = useState<number>(1)
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)

  const getPokemonObj = useMutation((id: number) => getPokemon(id), { // TODO: passar req pro index e usar useEffect
    onSuccess: (r) => {
      setPokemonId(r.data.id)
      setPokemon(r.data)
    },
  })
  
  useEffect(() => {
    getPokemonObj.mutateAsync(pokemonId)
    // eslint-disable-next-line
  }, [])

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
        <PokemonDetails pokemon={pokemon} key='pokemonDetails'/>
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