import React, { useState } from 'react';
import './registro.css';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImagen(URL.createObjectURL(file));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        console.log({ nombre, correo, contraseña, telefono, direccion });
    };

    return (
        <div className="container">
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Subir Imagen</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imagen && (
                        <div className="image-preview">
                            <img src={imagen} alt="Preview" style={{ width: '100%', borderRadius: '4px' }} />
                        </div>
                    )}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Registro;
