// Importamos los modelos de usuario, proyecto y la tabla intermedia usuarios-proyectos
const User = require('./user.model');
const Proyect = require('./proyect.model');
const UserProyect = require('./userProyect.model');

// Definimos las relaciones de muchos a muchos entre Usuarios y Proyectos
User.belongsToMany(Proyect, { through: UserProyect, foreignKey : 'usuario_id', as: 'proyectos'});
Proyect.belongsToMany(User, { through: UserProyect, foreignKey : 'proyecto_id', as: 'usuarios'});

// Relación de un Proyecto con su Administrador (Usuario)
Proyect.belongsTo(User, { foreignKey : 'administrador_id', as: 'administrador'});

module.exports = { User, Proyect, UserProyect };
