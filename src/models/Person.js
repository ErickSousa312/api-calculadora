const mongoose = require('mongoose')

//Cria modelo de person
const Person = mongoose.model('person',{
    nome:{type:String, required:true},
    idade:{type:Number, required:true},
    salario:Number,
})

module.exports=Person