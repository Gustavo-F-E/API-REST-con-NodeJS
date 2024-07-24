const mongoose = require("mongoose");

const consultaSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        nombre_y_apellido: { type: String, required: true },
        tipo_consulta: { type: String, required: true },
        URL_captura_problema: { type: String, required: true },
        descripcion_problema: { type: String, required: true },
    },
    { collection: "consultas" }
);

module.exports = mongoose.model("Consulta", consultaSchema);
