const Associado = require('../models/Associado')

class AssociadoController{
    async post(req,res){
        try {
            const {nome, cpf, matricula, email, plano, curso, idade, atletica_associado}= req.body
            const associado={nome, cpf, matricula, email, plano, curso, idade, atletica_associado}
            await Associado.create(associado)
            res.status(201).json({ message: "Associado inserida com sucesso" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async get (req,res){
        try {
            const associado = await Associado.find().populate({path:'atleticas',strictPopulate:false})
            console.log(associado.nome)
            res.status(201).json(associado)
            
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getId(req,res){
        try {
            const id = req.params.id
            const associado = await Associado.findOne({_id: id}).populate('atletica_associado').populate('plano')
            if (!associado) {
                res.status(422).json({ message: "Id não encontrado!" })
                return
            }
            res.status(200).json(post)  
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        const id = req.params.id
        //pesquisa o registro no BD
        const associado = await Associado.findOne({ _id: id })
        //validação
        if (!people) {
            res.status(422).json({ message: "Id não encontrado!" })
            return
        }
        try {
            await Associado.deleteOne({ _id: id })
            res.status(201).json({ msg: "Associado deletado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }

    }

    async patch(req, res) {
        const id = req.params.id
        const {nome, cpf, matricula, email, plano, curso, idade, atletica_associado}= req.body
        const associadoDados ={nome, cpf, matricula, email, plano, curso, idade, atletica_associado}
        try {
            //atualiza um registro
            const updateAssociado = await Associado.updateOne({ _id: id }, associadoDados)
            //validação
            if (updateAssociado.matchedCount === 0) {
                res.status(422).json({ message: "Id não encontrado!" })
                return
            }
            //pesquisa o registro no BD
            const associado = await Associado.findOne({ _id: id })
            //retorna o resgistro
            res.status(201).json(associado)
        } catch (error) {
            res.status(500).json({  error: error.message })
        }
    }

}

module.exports = new AssociadoController();