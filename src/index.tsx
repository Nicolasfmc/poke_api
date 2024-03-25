import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import AppContext from './AppContext';

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

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{}}>
        <RouterProvider router={router}/>
      </AppContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
