import React, { useContext } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button } from '@mui/material';
import { getImageUrl, limitPokemon } from '../utils/functions';
import AppContext from '../AppContext';


const Carousel = () => {
  const { pokemonId, setPokemonId } = useContext(AppContext)

  return (
    <Box className="pokemon-carousel" style={{ display: 'flex' }}>
      <Button onClick={() => setPokemonId(limitPokemon(pokemonId - 1))}><ArrowBackIosNewIcon color='error'/></Button>
      <Box className="pokemon-wrapper" style={{ display: 'flex' }}>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(pokemonId - 1))} alt={`Pokemon ${pokemonId - 1}`} />
        </Box>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(pokemonId))} alt={`Pokemon ${pokemonId}`} />
        </Box>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(pokemonId + 1))} alt={`Pokemon ${pokemonId + 1}`} />
        </Box>
      </Box>
      <Button onClick={() => setPokemonId(limitPokemon(pokemonId + 1))}><ArrowForwardIosIcon color='error'/></Button>
    </Box>
  );
};

export default React.memo(Carousel);
