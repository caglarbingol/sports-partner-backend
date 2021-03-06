const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
})