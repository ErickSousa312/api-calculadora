const mongoose = require('mongoose')

const Plano = mongoose.model('Plano', {
        nome: {type: String, required:true},
        valor: {type: String, required:true},
        panorama: {type: String, required:true}
    }
)

module.exports = Plano