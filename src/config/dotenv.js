const dotenv = require('dotenv'); // importar variables de entorno

dotenv.config(); // Cargar variables de entorno

// exportamos el objeto con vasriables de entorno
module.exports = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    JWT_SECRET: process.env.JWT_SECRET
};