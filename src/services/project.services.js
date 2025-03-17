const Project = require('../models/project.model'); 
const User = require('../models/user.model'); 

// Crear un nuevo proyecto
exports.createProject = async (nombre, descripcion, administrador_id, admin_from_token) => {
    try {
        // Verificar que el usuario que crea el proyecto es administrador
        if (administrador_id !== admin_from_token) {
            throw new Error('Acceso denegado: solo un administrador puede crear un proyecto');
        }

        // Crear el nuevo proyecto
        const newProject = await Project.create({
            nombre,
            descripcion,
            administrador_id,
        });

        return newProject;
    } catch (err) {
        throw new Error(`Error al crear el proyecto: ${err.message}\n${err.stack}`);
    }
};

// Obtener todos los proyectos de un administrador específico
exports.getAllProjectsByAdministradorId = async (administrador_id) => {
    try {
        const projects = await Project.findAll({ where: { administrador_id } });
        return projects;
    } catch (err) {
        throw new Error(`Error al obtener los proyectos: ${err.message}\n${err.stack}`);
    }
};

// Obtener un proyecto por su ID
exports.getProjectById = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }
        return project;
    } catch (err) {
        throw new Error(`Error al obtener el proyecto: ${err.message}\n${err.stack}`);
    }
};

// Actualizar un proyecto
exports.updateProject = async (id, nombre, descripcion) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }

        // Actualizar solo los campos proporcionados
        await project.update({ nombre, descripcion });

        return project;
    } catch (err) {
        throw new Error(`Error al actualizar el proyecto: ${err.message}\n${err.stack}`);
    }
};

// Eliminar un proyecto
exports.deleteProject = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }

        await project.destroy();
        return { message: 'Proyecto eliminado con éxito' };

    } catch (err) {
        throw new Error(`Error al eliminar el proyecto: ${err.message}\n${err.stack}`);
    }
};
