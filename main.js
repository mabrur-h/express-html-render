const express = require('express')
const ejs = require('ejs')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send('working')
})

const users = []

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log (`Your project started at ${PORT} port`)
})

