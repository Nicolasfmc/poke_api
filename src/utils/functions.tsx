import { Typography } from "@mui/material";

export const getImageUrl = (pokemonId: number) => {
  
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

export const limitPokemon = (pokemonId: number) => {
  if (pokemonId < 1) {
    return 151
  } else if (pokemonId > 151) {
    return 1
  } else {
    return pokemonId
  }
}

export function getTypeColor(typeName: string): string {
  const typeColors: { [key: string]: string } = {
      grass: '#78C850',
      normal: '#A8A878',
      poison: '#A040A0',
      ghost: '#705898',
      fire: '#F08030',
      water: '#6890F0',
      bug: '#A8B820',
      flying: '#A890F0',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      ground: '#E0C068',
      psychic: '#F85888',
      rock: '#B8A038',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
      dragon: '#7038F8'
  };

  const normalizedTypeName = typeName.toLowerCase();
  return typeColors[normalizedTypeName] || '#A8A878';
}

export function formatHeight(heightInDecimeters: number): string {
  const heightInMeters = heightInDecimeters / 10;
  return heightInMeters.toFixed(1) + " m";
}

export function maskNumberId(n: number | string): string {
  const value = n.toString().replace('/\D/g', '')

  
  
  return value.padStart(4, '0')
}

export function boldString(s: string): React.ReactNode {
  return <Typography sx={{ fontWeight: 'bold' }}>{s}</Typography>
}

export function extractIdPokemonFromUrl(url: string): number | null {
  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);

  if (match && match[1]) {
      return parseInt(match[1]);
  } else {
      return null;
  }
}

export function formatStatsTitle(s: string): string {
  if (s.toLowerCase() === 'special-attack') {
    return 'Sp. Attack'
  } else if (s.toLocaleLowerCase() === 'special-defense') {
    return 'Sp. Defense'
  } else {
    return toTitleCase(s)
  }
}

export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    }
  );
}