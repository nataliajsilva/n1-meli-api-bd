const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: String},
    nasceuEmSp: {type: String},
    livros: [{
    titulo: String,
    leu: String,
    }]
})

const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas;

 //var sampleSchema = new Schema ({name: {type: String, required: true}});
 
