console.log("💡 server.js se está ejecutando...");
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 3000;

// Conexión a la base de datos
const db = new sqlite3.Database("./database/cursos.db");

// Middleware
app.use(express.json());
app.use(express.static(".")); // Sirve los archivos HTML/CSS/JS

// Ejemplo de endpoint: obtener cursos
app.get("/api/cursos", (req, res) => {
  db.all("SELECT * FROM cursos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
