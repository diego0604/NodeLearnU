// Se importa  la clase Sequelize del modulo de 'sequelize' para generar instancia de la BD
const {Sequelize} = require('sequelize');
const dotenv = require('dotenv'); 

dotenv.config();

// Se instancia Sequelize pasando parametros necesarios para la conexión a la BD
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
    timezona: '-05:00'

});

module.exports = sequelize;