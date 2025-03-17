// importamos el servicio de auntenticacion
const authService = require('../services/auth.service');

// Controlador para el Inicio sesión
exports.login = async (req, res) => {  // "req" contiene la solicitud del cliente con sus datos y "res" es la respuesta de esa solicitud
    const { email, password } = req.body; 
    try{ //intenta ejecutar lo que esté dentro de este bloque, si da error entra al catch y responde 400 con un mensaje del catch
        const token = await authService.loginUser(email, password);
        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

