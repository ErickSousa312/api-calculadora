const Atletica = require('../models/Atletica')

class AtleticaController{
    async post(req, res) {
        try {
            const { nome, curso, presidente, cpf_presidente } = req.body
            const atletica = { nome, curso, presidente, cpf_presidente }
            await Atletica.create(atletica)
            res.status(201).json({ message: "Atletica inserida com sucesso" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = new AtleticaController();