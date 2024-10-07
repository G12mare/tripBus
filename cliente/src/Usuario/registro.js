import React, { useState } from 'react';

const Registro = () => {
    // Estados para almacenar los datos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que se recargue la página

        // Validaciones básicas (se pueden agregar más)
        if (nombre === '' || email === '' || contraseña === '') {
            setMensaje('Por favor, completa todos los campos.');
            return;
        }

        // Simulación de envío de datos a un servidor
        try {
            // Aquí iría la lógica para enviar los datos a un servidor.
            const response = await fetch('http://localhost:8081/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, contraseña }),
            });

            // Verifica la respuesta del servidor
            if (response.ok) {
                const data = await response.json();
                setMensaje(data.message || 'Registro exitoso');
                // Limpiar los campos
                setNombre('');
                setEmail('');
                setContraseña('');
            } else {
                const errorData = await response.json();
                setMensaje(errorData.message || 'Error en el registro');
            }
        } catch (error) {
            setMensaje('Error en la conexión con el servidor.');
        }
    };

    return (
        <div className="registro-container">
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                {/* Campo de Nombre */}
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                {/* Campo de Correo */}
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Campo de Contraseña */}
                <div>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input
                        type="password"
                        id="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                </div>

                {/* Botón de registro */}
                <button type="submit">Registrarse</button>
            </form>

            {/* Mostrar mensaje de éxito o error */}
            {mensaje && <div className="mensaje">{mensaje}</div>}
        </div>
    );
};

export default Registro;
