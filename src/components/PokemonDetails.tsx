import React from "react";
import { Box, Divider, Chip, Typography, Grid } from "@mui/material";
import { boldString, formatHeight, getTypeColor, maskNumberId } from "../utils/functions";
import PokemonStats from "./PokemonStats";

export interface IPokemon {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
  sprites: { front_default: string };
  category: string;
  abilities: { ability: { name: string } }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
    effort: number;
  }[];
}

const PokemonDetails: React.FC<{ pokemon: IPokemon | null }> = ({
  pokemon,
}) => {
  if (pokemon) {
    const { name, id, types, weight, height, sprites } = pokemon;

    return (
      <Box sx={{ display: "flex", margin: "5%", width: "30%", minWidth: 500 }}>
        <Box sx={{ flex: 1 }}>
          <img
            src={sprites.front_default}
            alt={name}
            style={{
              width: "100%",
              minWidth: 200,
              minHeight: 200,
              backgroundColor: "#F2F2F2",
              borderRadius: 15,
            }}
          />
          <Box sx={{ marginTop: "1rem" }}>
            {types.map((type, index) => (
              <Chip
                key={index}
                label={type.type.name}
                variant="outlined"
                style={{
                  marginRight: "0.5rem",
                  marginBottom: "0.5rem",
                  backgroundColor: getTypeColor(type.type.name),
                  borderColor: 'transparent',
                  color: "white",
                  fontWeight: "bold",
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ marginX: "1rem" }} />
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 1
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{name.toUpperCase()}</Typography>
          <Typography variant="body1">Nº {maskNumberId(id)}</Typography>
          <Grid
            container
            spacing={2}
            sx={{
              borderRadius: 3,
              backgroundColor: "#30A7D7",
              marginTop: "1rem",
              marginLeft: "-1px",
              minHeight: 150,
              minWidth: 150,
              justifyContent: "space-between"
            }}
          >
            <Grid item xs={6}>
              <Typography variant="body1">
                {boldString("Altura: ")}
                {formatHeight(height)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                {boldString("Categoria: ")}
                {pokemon?.category}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                {boldString("Peso: ")}
                {weight} kg
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                {boldString("Habilidades ")}
                {pokemon?.abilities
                  ?.map(
                    (ability: { ability: { name: string } }) =>
                      ability.ability.name
                  )
                  .join(", ")}
              </Typography>
            </Grid>
          </Grid>
          <PokemonStats stats={pokemon.stats}/>
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default PokemonDetails;
