import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button } from '@mui/material';
import { getImageUrl, limitPokemon } from '../utils/functions';

interface props {
  currentPokemonId: number;
  onPrev: () => void;
  onNext: () => void;
}

const Carousel = ({ currentPokemonId, onPrev, onNext }: props) => {
  return (
    <Box className="pokemon-carousel" style={{ display: 'flex' }}>
      <Button onClick={onPrev}><ArrowBackIosNewIcon color='error'/></Button>
      <Box className="pokemon-wrapper" style={{ display: 'flex' }}>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(currentPokemonId - 1))} alt={`Pokemon ${currentPokemonId - 1}`} />
        </Box>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(currentPokemonId))} alt={`Pokemon ${currentPokemonId}`} />
        </Box>
        <Box className="pokemon">
          <img src={getImageUrl(limitPokemon(currentPokemonId + 1))} alt={`Pokemon ${currentPokemonId + 1}`} />
        </Box>
      </Box>
      <Button onClick={onNext}><ArrowForwardIosIcon color='error'/></Button>
    </Box>
  );
};

export default React.memo(Carousel);
