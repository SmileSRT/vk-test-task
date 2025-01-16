import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import StoreProvider from './app/store-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
