import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';

import {
  WagmiProvider,
  createConfig,
  configureChains,
} from 'wagmi';
import { scrollSepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [scrollSepolia],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </WagmiProvider>
  </React.StrictMode>
);
