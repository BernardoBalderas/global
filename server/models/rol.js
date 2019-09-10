const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolesSchema  = new Schema({
    perfil_name: { type: String, required: true }
});

module.exports = mongoose.model('Rol', RolesSchema);
