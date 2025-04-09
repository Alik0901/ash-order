import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';

import { WagmiProvider } from 'wagmi';
import { http, createConfig } from 'wagmi';
import { scrollSepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = createConfig({
  chains: [scrollSepolia],
  transports: {
    [scrollSepolia.id]: http(),
  },
  ssr: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
