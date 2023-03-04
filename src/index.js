import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/index';
import Content from './components/Content/index';
import Footer from './components/Footer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>
);
