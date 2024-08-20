import React from 'react';// Keep this only once at the top
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ArticleList from './ArticleList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const Main = () => {
  return (
    <div>
        <ArticleList/>
    </div>
  );
};

export default Main;