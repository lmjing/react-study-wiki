import AppForm from 'AppForm';
import AppProducts from 'AppProducts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AppProducts />
    </QueryClientProvider>
  </React.StrictMode>
);
