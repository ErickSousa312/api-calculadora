const Plano = require('../models/Plano')

class PlanoController {
    async post(req, res) {
        try {
            const { nome, valor, panorama } = req.body
            const plano = {nome, valor, panorama}
            await Plano.create(plano)
            res.status(201).json({ message: "Plano inserido com sucesso" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = new PlanoController();