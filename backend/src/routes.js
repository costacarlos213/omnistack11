const express = require('express')
const ongsController = require('./controllers/ongsController')
const incidentController = require('./controllers/incidentController')
const sessionController = require('./controllers/sessionController')
const profileController = require('./controllers/profileController')
const routes = express.Router()

routes.get('/ongs', ongsController.list)
routes.post('/ongs', ongsController.create)

routes.get('/incidents', incidentController.list)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile/', profileController.list)

routes.post('/session', sessionController.create)

module.exports = routes 