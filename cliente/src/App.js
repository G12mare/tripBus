import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './inicio';
import Login from './Usuario/login';
import Registro from './Usuario/registro';
import './App.css'; 
import './inicio.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cliente/src/Usuario/login.js" element={<Login />} />
          <Route path="/cliente/src/Usuario/registro.js" element={<Registro />} />
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;



