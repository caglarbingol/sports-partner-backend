const {model} = require('../models')

module.exports = {
    status: function (req,res) {
        res.send({
            message: "Hello World!"
        })
    },
    register: async function (req,res) {
        // sequelize.sync().then(function () {
        //     return User.create(req.body);
        // }).then(function (user) {
        //     res.sendStatus(user);
        // });
        try {
            console.log("Check here")
            console.log(req.body)
            const user = await model.User.create(req.body)
            res.send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send({
                message: 'Error while writing databse.'
            })
        }
    }
}