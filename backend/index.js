// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser')
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
