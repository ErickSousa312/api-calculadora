const { findById } = require('../models/HistoricoCalc')
const Historico = require('../models/HistoricoCalc')

const soma = (a,b)=>{
    const resultado = a + b
    return resultado
}

class HistoricoCalcController{
    async post (req, res){
        try {
            const {numero1, numero2, resultado} = req.body

            const historico = {
                numero1,
                numero2,
                resultado
            }

            await Historico.create(historico)
            res.status(201).json({msg:"Valores inseridos com sucesso!"})

        } catch (error) {
            res.status(500).json({msg:"Valores não foram inseridos!"})
        }
    }

    async get (req, res){
        try {
            const historico = await Historico.find()
            res.status(200).json(historico) 
        } catch (error) {
            res.status(500).json({msg:"Algo deu errado!"})
        }
    }

    async delete (req, res){
            const id = req.params.id
            const historico = await Historico.findOne({_id: id})

            console.log("-------------------------------\n"+historico.resultado+"\n-------------------------------")
            historico.resultado = soma(historico.numero1, historico.resultado)
            
            console.log("-------------------------------\n"+historico+"-------------------------------")
            if(!historico){
                 res.status(402).json({msg:"id não encontrado"})
                 return
            }
            try {
                res.status(422).json({msg:"historico deletado com sucesso"})
            } catch (error) {
                res.status(500).json({error: error.message})
            }   
    }
}

module.exports = new HistoricoCalcController();