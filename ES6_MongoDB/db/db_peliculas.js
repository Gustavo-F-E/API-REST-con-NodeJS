import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        nombre_y_apellido: { type: String, required: true },
        tipo_consulta: { type: String, required: true },
        URL_captura_problema: { type: String, required: true },
        descripcion_problema: { type: String, required: true },
    },
    { collection: "consultass" }
);

const Consulta = mongoose.model('Consulta', consultaSchema);
const Pelicula = mongoose.model("Consulta", consultaSchema);
const Serie = mongoose.model("Consulta", consultaSchema);
const Usuario = mongoose.model("Consulta", consultaSchema);

export default mongoose.model('Consulta', consultaSchema);


//export default {
//  Consulta,
//  Pelicula,
//  Serie,
//  Usuario
//};