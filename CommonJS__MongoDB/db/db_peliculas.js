const mongoose = require("mongoose");

const peliculasSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        ruta_img_peliculas: { type: String, required: true },
        titulo: { type: String, required: true },
        descripcion: { type: String, required: true },
        link: { type: String, required: true },
        categoria: { type: String, required: true },
        apto_menores: { type: String, required: true },
    },
    { collection: "peliculas" }
);

module.exports = mongoose.model("Peliculas", peliculasSchema);
