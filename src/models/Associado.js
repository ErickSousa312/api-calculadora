const mongoose = require('mongoose')

const Associado = mongoose.model('Associado',{
        nome: {type:String, required: true},
        cpf: {type: String, required: true},
        matricula: {type: String, required: true},
        email: { type: String, required: true},
        plano: { type: mongoose.Schema.Types.ObjectId,ref:'Plano', required: true},
        curso: { type: String, required: true},
        idade: Number,
        atletica_associado: { type: mongoose.Schema.Types.ObjectId,ref:'Atletica', required: true},
    }
)

module.exports = Associado