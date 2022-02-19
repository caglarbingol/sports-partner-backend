// const fs = require ('fs')
// const path = require('path')
const User = require('./User')
const Sequelize = require('sequelize')
const config = require('../config')
const db = {
}

const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

const model = {
    User: User(sequelize, Sequelize.DataTypes)
}

db["model"] = model
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db