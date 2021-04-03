const express = require('express')
const ejs = require('ejs')

const GetController = require('./controllers/GetController')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.set("view engine", "ejs")

app.get('/', GetController)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log (`You are working at port ${PORT}`)
})

