import React from "react";
import { IPokemon } from './components/PokemonDetails';

export interface AppContextType {
  pokemonId: number;
  setPokemonId: React.Dispatch<React.SetStateAction<number>>;
  pokemon: IPokemon | null;
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon | null>>;
}

const AppContext = React.createContext<AppContextType | any>({});

export default AppContext