import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LangProvider } from './context/langContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
      <App />
  </LangProvider>
)
