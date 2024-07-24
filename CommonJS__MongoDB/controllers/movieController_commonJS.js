const Peliculas = require('../db/db_peliculas.js');

const getAllMovies = async (req, res) => {
  try {
    const peliculas = await Peliculas.find();
    res.json(peliculas);
  } catch (err) {
    console.error('Error en getAllMovies:', err);
    res.status(500).json({ message: err.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const peliculas = await Peliculas.findById(req.params.id);
    if (peliculas == null) {
      return res.status(404).json({ message: 'No de encuentra la pelicula buscada' });
    }
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMovie = async (req, res) => {
      const peliculas = new Peliculas({
        _id: req.body._id,
        ruta_img_peliculas: req.body.ruta_img_peliculas,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        link: req.body.link,
        categoria: req.body.categoria,
        apto_menores: req.body.apto_menores
      });
    
      try {
        const newPeliculas = await peliculas.save();
        res.status(201).json(newPeliculas);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

const updateMovie = async (req, res) => {
  try {
    const peliculas = await Peliculas.findById(req.params.id);

    if (!peliculas) {
      return res.status(404).json({ message: 'La pelicula que desea editar no se encuentra en la base de datos' });
    }

    if (req.body.ruta_img_peliculas != null) {
      peliculas.ruta_img_peliculas = req.body.ruta_img_peliculas;
    }
    if (req.body.titulo != null) {
      peliculas.titulo = req.body.titulo;
    }
    if (req.body.descripcion != null) {
      peliculas.descripcion = req.body.descripcion;
    }
    if (req.body.link != null) {
      peliculas.link = req.body.link;
    }
    if (req.body.categoria != null) {
      peliculas.categoria = req.body.categoria;
    }
    if (req.body.apto_menores != null) {
      peliculas.apto_menores = req.body.apto_menores;
    }

    const updatedPelicula = await peliculas.save();
    res.json(updatedPelicula);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const peliculas = await Peliculas.findById(req.params.id);
    if (!peliculas) {
      return res.status(404).json({ message: 'Pelicula no hallada' });
    }
    await Peliculas.deleteOne({ _id: req.params.id });
    res.json({ message: 'Pelicula borrada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//7- Exportamos los módulos que serán utilizados en moviesRouter.js
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

//8- Pasamos a configurar db.js

