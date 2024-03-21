import React, { StrictMode } from 'react';
import App from './App';
import { RecoilRoot } from 'recoil';
import 'react-app-polyfill/stable';
import { GlobalStyle } from './styles';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>,
);
