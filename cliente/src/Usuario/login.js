import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Importar Link y useNavigate

const Login = () => {
  // Establecer valores por defecto para simular el inicio de sesión
  const [correo, setCorreo] = useState('maria@example.com'); // Cambié email por correo y añadí valor por defecto
  const [password, setPassword] = useState('password123');    // Valor por defecto para la contraseña
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate(); // Hook para redirigir

  function handleSubmit(event) {
    event.preventDefault();
    
    // Validación básica de entrada
    if (!correo || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    
    axios.post('http://localhost:8081/login', { correo, password }) // Cambié email por correo en la petición
      .then(response => {
        console.log(response.data);
        setError(''); // Limpiar el error en caso de éxito

        // Redirigir a la página de inicio o dashboard después del login exitoso
        navigate('/dashboard'); // Cambia '/dashboard' por la ruta que desees
      })
      .catch(error => {
        console.error('Error durante el inicio de sesión', error);
        setError('Usuario o contraseña incorrectos.');
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input 
              type="email" 
              className="form-control" 
              value={correo} // Valor por defecto: maria@example.com
              onChange={e => setCorreo(e.target.value)} // Cambié setEmail por setCorreo
              id="correo" 
              placeholder="maria@example.com" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} // Valor por defecto: password123
              onChange={e => setPassword(e.target.value)}
              id="password" 
              placeholder="*******" 
              required 
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
        {/* Enlace para redirigir a la página de registro */}
        <div className="mt-3">
          <span>¿No tienes una cuenta? </span>
          <Link to="/cliente/src/Usuario/registro.js" className="btn btn-link">Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

