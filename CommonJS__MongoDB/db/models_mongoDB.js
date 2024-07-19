// models/Consulta.js
import mongoose from 'mongoose';

const consultaSchema = new mongoose.Schema({
  id: { type: String, required:true },
  nombre_y_apellido: { type: String, required:true },
  tipo_consulta: { type: String, required:true },
  URL_captura_problema: { type: String, required:true },
  descripcion_problema: { type: String, required:true }
});

const Consulta = mongoose.model('Consulta', consultaSchema);

export default Consulta;
