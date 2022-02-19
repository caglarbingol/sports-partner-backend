const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { required } = require('joi')
const config = require('./src/config')
const { sequelize } = require('./src/models')


const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

const routes = require('./src/routes')(app)
sequelize.sync().then(() => {
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
    })
})