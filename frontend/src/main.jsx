import React from 'react'; // Keep this only once at the top
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ArticleList from './components/ArticleList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function Main({ theme }) {
  return (
    <div>
      <ArticleList theme={theme} />
    </div>
  );
}

export default Main;