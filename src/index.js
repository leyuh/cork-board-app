import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <div id="background-div">
      <Welcome/>
    </div>
  </React.StrictMode>
);
