const authRoute = require('./auth/auth.route');
const userRoute = require('./user/user.route')

const mainRoute = require('express').Router()

mainRoute.use('/user', userRoute)
mainRoute.use('/auth',authRoute)

module.exports = mainRoute;