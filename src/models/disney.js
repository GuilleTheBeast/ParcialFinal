const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const disneySchema = new Schema({
    nombre: String,
    estreno: Date,
    taquilla: Number,
    director: String
})

module.exports = mongoose.model('pelicula',disneySchema);