const Consulta = require('../db/db_consultas.js');

const getAllConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find();
    res.json(consultas);
  } catch (err) {
    console.error('Error en getAllConsultas:', err);
    res.status(500).json({ message: err.message });
  }
};

const getConsultaById = async (req, res) => {
  try {
    const consulta = await Consulta.findById(req.params.id);
    if (consulta == null) {
      return res.status(404).json({ message: 'No de encuentra la consulta buscada' });
    }
    res.json(consulta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createConsulta = async (req, res) => {
  const consulta = new Consulta({
    _id: req.body._id,
    nombre_y_apellido: req.body.nombre_y_apellido,
    tipo_consulta: req.body.tipo_consulta,
    URL_captura_problema: req.body.URL_captura_problema,
    descripcion_problema: req.body.descripcion_problema
  });

  try {
    const newConsulta = await consulta.save();
    res.status(201).json(newConsulta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findById(req.params.id);

    if (!consulta) {
      return res.status(404).json({ message: 'La consulta que desea editar no se encuentra en la base de datos' });
    }

    if (req.body.nombre_y_apellido != null) {
      consulta.nombre_y_apellido = req.body.nombre_y_apellido;
    }
    if (req.body.tipo_consulta != null) {
      consulta.tipo_consulta = req.body.tipo_consulta;
    }
    if (req.body.URL_captura_problema != null) {
      consulta.URL_captura_problema = req.body.URL_captura_problema;
    }
    if (req.body.descripcion_problema != null) {
      consulta.descripcion_problema = req.body.descripcion_problema;
    }

    const updatedConsulta = await consulta.save();
    res.json(updatedConsulta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findById(req.params.id);
    if (!consulta) {
      return res.status(404).json({ message: 'Consulta no hallada' });
    }
    await Consulta.deleteOne({ _id: req.params.id });
    res.json({ message: 'Consulta borrada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  deleteConsulta,
};

//8- Pasamos a configurar db.js

