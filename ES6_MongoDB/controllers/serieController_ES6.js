import Series from '../db/db_series.js';

const getAllSeries = async (req, res) => {
  try {
    const series = await Series.find();
    res.json(series);
  } catch (err) {
    console.error('Error en getAllSeries:', err);
    res.status(500).json({ message: err.message });
  }
};

const getSerieById = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);
    if (series == null) {
      return res.status(404).json({ message: 'No de encuentra la serie buscada' });
    }
    res.json(series);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSerie = async (req, res) => {
      const series = new Series({
        _id: req.body._id,
        ruta_img_series: req.body.ruta_img_series,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        link: req.body.link,
        categoria: req.body.categoria,
        apto_menores: req.body.apto_menores
      });
    
      try {
        const newSeries = await series.save();
        res.status(201).json(newSeries);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

const updateSerie = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);

    if (!series) {
      return res.status(404).json({ message: 'La serie que desea editar no se encuentra en la base de datos' });
    }

    if (req.body.ruta_img_series != null) {
      series.ruta_img_series = req.body.ruta_img_series;
    }
    if (req.body.titulo != null) {
      series.titulo = req.body.titulo;
    }
    if (req.body.descripcion != null) {
      series.descripcion = req.body.descripcion;
    }
    if (req.body.link != null) {
      series.link = req.body.link;
    }
    if (req.body.categoria != null) {
      series.categoria = req.body.categoria;
    }
    if (req.body.apto_menores != null) {
      series.apto_menores = req.body.apto_menores;
    }

    const updatedSerie = await series.save();
    res.json(updatedSerie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteSerie = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);
    if (!series) {
      return res.status(404).json({ message: 'Serie no hallada' });
    }
    await Series.deleteOne({ _id: req.params.id });
    res.json({ message: 'Serie borrada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//7- Exportamos los módulos que serán utilizados en seriesRouter.js
export default {
    getAllSeries,
    getSerieById,
    createSerie,
    updateSerie,
    deleteSerie
};

//8- Pasamos a configurar db.js

