import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import 'react-multi-carousel/lib/styles.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ProSidebarProvider>
    <QueryClientProvider client={queryClient}>
       <App />
      </QueryClientProvider>
    </ProSidebarProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
