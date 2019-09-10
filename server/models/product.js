const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductoSchema  = new Schema({
    codigo: {type: String, required: true},
    title: {type: String, required: true},
    descripcion: {type: String, require: true},
    categoria: { type: String, require: true },
    precio: {type: Number, require: true},
    filename : {type: String, required: false},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
});

module.exports = mongoose.model('Product', ProductoSchema);