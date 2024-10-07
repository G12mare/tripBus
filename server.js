const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middleware para manejar las solicitudes y respuestas
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',       // Cambia si estás usando un servidor remoto
    user: 'root',            // Tu usuario de MySQL
    password: '',            // Tu contraseña de MySQL (vacía si no tienes)
    database: 'tripbus',     // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Ruta para manejar el registro
app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    // Validaciones básicas
    if (!nombre || !correo || !contraseña) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Validar que el correo no exista ya en la base de datos
    const checkSql = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(checkSql, [correo], (err, results) => {
        if (err) {
            console.error('Error verificando el correo:', err);
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        // Insertar datos en la base de datos
        const sql = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
        db.query(sql, [nombre, correo, contraseña], (err, result) => {
            if (err) {
                console.error('Error insertando los datos:', err);
                return res.status(500).json({ message: 'Error en el servidor' });
            }
            res.status(200).json({ message: 'Registro exitoso' });
        });
    });
});

// Iniciar el servidor
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
