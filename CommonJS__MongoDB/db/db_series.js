const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    ruta_img_series: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    link: { type: String, required: true },
    categoria: { type: String, required: true },
    apto_menores: { type: String, required: true },
},
{ collection: "series" }
);

module.exports = mongoose.model('Series', seriesSchema);