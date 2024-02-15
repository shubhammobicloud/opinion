const authController = require('../../controllers/auth/main.auth.controller')

const authRoute = require('express').Router()

authRoute.post('/login',authController.login)

module.exports = authRoute