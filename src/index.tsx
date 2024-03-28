import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import AppContext from './AppContext';
import { getPokemon } from './services/pokemon';
import { IPokemon } from './components/PokemonDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/info',
    element: <Pokemon />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  const [pokemonId, setPokemonId] = useState<number>(1)
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)

  return (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ pokemonId, setPokemonId, pokemon, setPokemon }}>
        <RouterProvider router={router}/>
      </AppContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
  )
}

root.render(<App />);
