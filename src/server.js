import { authenticate, sync } from './config/database';
import app from './app';
const dotenv = reqire('dotenv');
import './models/associations';

dotenv.config();

const PORT = process.env.PORT || 3000;

//nosconectamos alservidor y verifica conexion con BD usando Orm sequelize
authenticate()
    .then(() => {
        console.log('Conectado a PostgreSQL con Sequalize');
        app.listen(PORT, () => {
            console.log('Servidor corriendo en http://localhost:${PORT}');
        });
    })
    .catch(err => console.error('Error conectando a la base de datos:', err));

sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
}).catch(err => {
    console.error('Error al sincronizar la base de datos', err);
});