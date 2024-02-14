const userRoute = require('./user/user.route')

const mainRoute = require('express').Router()

mainRoute.use('/user', userRoute)

module.exports = mainRoute;