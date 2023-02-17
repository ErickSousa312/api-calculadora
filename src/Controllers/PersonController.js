const Person = require('../models/Person')

class PersonController {
    async post(req, res) {
        //req.body
        const { nome, idade, salario } = req.body
        //validação tanto por aqui quando por model
        if (!nome) {
            res.status(442).json({ erro: "Nome é obrigatório" })
        }
        const person = {
            nome,
            idade,
            salario
        }
        try {
            //inserção de uma pessoa
            await Person.create(person)
            res.status(201).json({ message: "pessoa inserida com sucesso" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async get(req, res) {
        console.log("requição realizada")
        try {
            const people = await Person.find()
            res.status(200).json(people)
        } catch (error) {
            res.status(500).json({  error: error.message })
        }
    }

    async getId(req, res) {
        //extrair o dado da requisição, pela url = req.parms
        const id = req.params.id
        try {
            //pesquisa o registro no BD
            const people = await Person.findOne({ _id: id })
            //validação
            if (!people) {
                res.status(422).json({ message: "Id não encontrado!" })
                return
            }
            res.status(200).json(people)
        } catch (error) {
            res.status(500).json({  error: error.message })
        }
    }

    async patch(req, res) {
        const id = req.params.id
        const { nome, idade, salario } = req.body
        const person = {
            nome,
            idade,
            salario
        }
        try {
            //atualiza um registro
            const updatePerson = await Person.updateOne({ _id: id }, person)
            //validação
            if (updatePerson.matchedCount === 0) {
                res.status(422).json({ message: "Id não encontrado!" })
                return
            }
            //pesquisa o registro no BD
            const people = await Person.findOne({ _id: id })
            //retorna o resgistro
            res.status(201).json(people)
        } catch (error) {
            res.status(500).json({  error: error.message })
        }
    }

    async delete(req, res) {
        const id = req.params.id
        //pesquisa o registro no BD
        const people = await Person.findOne({ _id: id })
        //validação
        if (!people) {
            res.status(422).json({ message: "Id não encontrado!" })
            return
        }
        try {
            await Person.deleteOne({ _id: id })
            res.status(201).json({ msg: "Úsuario deletado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }


    }
}

module.exports = new PersonController();