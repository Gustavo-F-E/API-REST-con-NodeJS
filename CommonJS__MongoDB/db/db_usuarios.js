const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        create_time: { type: Date, default: Date.now },
        apto_menores: { type: String, required: true },
    },
    { collection: "usuarios" }
);

module.exports = mongoose.model('Usuarios', usuariosSchema);