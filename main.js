const express = require('express')
const ejs = require('ejs')

const GetController = require('./controllers/GetController')
const PostController = require('./controllers/PostController')
const DeleteController = require('./controllers/DeleteController')
const FilterController = require('./controllers/FilterController')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.set("view engine", "ejs")

app.get('/', GetController)
app.get('/filter', FilterController)
app.get('/delete/:id', DeleteController)

app.post('/', PostController)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log (`You are working at port ${PORT}`)
})

