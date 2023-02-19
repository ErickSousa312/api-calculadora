const mongoose = require('mongoose')

//Cria o modelo do historico de calculos do combustivel
const HistoricoCalc = mongoose.model('historicoCalc',{
    numero1 :  {type:Number, required:true},
    numero2 :  {type:Number, required:true},
    resultado :  {type:Number, required:true}
}) 

module.exports = HistoricoCalc