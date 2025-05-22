import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';
import WebApp from '@twa-dev/sdk';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

WebApp.ready();
WebApp.expand(); // расширяет Telegram WebView

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
