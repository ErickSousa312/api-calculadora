const cors = require('cors')
const routes = require('express').Router()
const Person = require ('../Controllers/PersonController')
const Associado = require ('../Controllers/AssociadoController')
const Plano = require('../Controllers/PlanoController')
const Atletica = require('../Controllers/AtleticaController')
const Historico = require('../Controllers/HistoricoCalcController')

routes.use(cors())

//rotas person
routes.get('/person',Person.get)
routes.get('/person/:id',Person.getId)
routes.patch('/person/:id',Person.patch)
routes.post('/person',Person.post)
routes.delete('/person/:id',Person.delete)

//Rota Associados
routes.post('/associado',Associado.post)
routes.get('/associado',Associado.get)
routes.get('/associado/:id',Associado.getId)

//Rota Planos
routes.post('/plano', Plano.post)

//Rota Atletica
routes.post('/atletica', Atletica.post)

//Rota historico
routes.post('/historico', Historico.post)
routes.get('/historico', Historico.get)
routes.delete('/historico/:id', Historico.delete)


module.exports = routes