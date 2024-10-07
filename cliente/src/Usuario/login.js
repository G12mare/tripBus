import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importar los íconos

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('cliente');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!correo || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    const url = tipoUsuario === 'cliente' 
      ? 'http://localhost:8081/login/usuario' // Endpoint para la tabla usuarios
      : 'http://localhost:8081/login/agencias'; // Endpoint para la tabla agencias

    try {
      const response = await axios.post(url, { correo, password });
      console.log(response.data);
      setError(''); 

      const redirectPath = tipoUsuario === 'cliente' ? '/cliente/dashboard' : '/agencia/dashboard'; 
      navigate(redirectPath);
    } catch (error) {
      console.error('Error durante el inicio de sesión', error);
      setError('Usuario o contraseña incorrectos.'); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input 
              type="email" 
              className="form-control" 
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              id="correo" 
              placeholder="maria@example.com" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <div className="input-group">
              <input 
                type={showPassword ? 'text' : 'password'} // Cambia el tipo basado en el estado
                className="form-control" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                id="password" 
                placeholder="*******" 
                required 
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowPassword(!showPassword)} // Alterna el estado
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Muestra el ícono según el estado */}
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tipoUsuario" className="form-label">Tipo de usuario</label>
            <select 
              id="tipoUsuario" 
              className="form-select" 
              value={tipoUsuario} 
              onChange={e => setTipoUsuario(e.target.value)} 
              required
            >
              <option value="cliente">Cliente</option>
              <option value="agencia">Agencia</option>
            </select>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
        <div className="mt-3">
          <span>¿No tienes una cuenta? </span>
          <Link to="/cliente/usuario/registro" className="btn btn-link">Crear cuenta</Link> {/* Ajusta la ruta según sea necesario */}
        </div>
      </div>
    </div>
  );
};


export default Login;
