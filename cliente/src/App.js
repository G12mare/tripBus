import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './inicio';
import Login from './Usuario/login';
import './App.css'; 
import './inicio.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cliente/src/Usuario/login.js" element={<Login />} />
          <Route path="/cliente/src/Recomenciones/Recomendaciones.js" element={<Recomendaciones />} />
          {/* Otras rutas pueden agregarse aquí */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;


