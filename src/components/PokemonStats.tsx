import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import Gauge from './Gauge';

interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
  effort: number;
}

interface PokemonStatsProps {
  stats: Stat[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: "#A4A4A4",
        marginTop: "1rem",
        marginLeft: "-1px",
        minHeight: 150,
        width: '100%',
        minWidth: 150,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '0.5rem',
      }}
    >
      <Box sx={{
        height: '35px',
      }}>
        <Typography variant='subtitle1'>Estatísticas</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        marginLeft: "-1px",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
        {stats.map(stat => (
          <Box sx={{
            padding: '2px',
          }}>
            <Gauge name={stat.stat.name} value={(stat.base_stat / 255)}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PokemonStats;
