import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import StoreProvider from './app/store-provider';
import RootLayout from './shared/ui/root-layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <RootLayout>
        <App />
      </RootLayout>
    </StoreProvider>
  </StrictMode>,
);
