const mongoose = require('mongoose')

const Atletica = mongoose.model('Atletica',{
        nome: {type: String, require:true},
        curso: {type: String, require:true},
        Presidente: {type:String, require:true},
        cpf_presidente: String,
    }
)

module.exports = Atletica