import Usuarios from'../db/db_usuarios.js';

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
  } catch (err) {
    console.error('Error en getAllUsuarios:', err);
    res.status(500).json({ message: err.message });
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: 'No de encuentra el usuario buscada' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUsuario = async (req, res) => {
  const usuario = new Usuarios({
    _id: req.body._id,
    email: req.body.email,
    password: req.body.password,
    create_time: req.body.create_time,
    apto_menores: req.body.apto_menores
  });

  try {
    const newUsuario = await usuario.save();
    res.status(201).json(newUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({ message: 'La usuario que desea editar no se encuentra en la base de datos' });
    }

    if (req.body.email != null) {
      usuario.email = req.body.email;
    }
    if (req.body.password != null) {
      usuario.password = req.body.password;
    }
    if (req.body.create_time != null) {
      usuario.create_time = req.body.create_time;
    }
    if (req.body.apto_menores != null) {
      usuario.apto_menores = req.body.apto_menores;
    }

    const updatedUsuario = await usuario.save();
    res.json(updatedUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no hallado' });
    }
    await Usuarios.deleteOne({ _id: req.params.id });
    res.json({ message: 'Usuario borrado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
export default {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};

//8- Pasamos a configurar db.js

