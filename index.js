const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 7000
const app = express()
const db = require('./connection')
const {TableRouters}=require('./routers')


db.connect(err => {
    if (err) throw err
    console.log('Server Intiation Success')
})

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/table',TableRouters)


app.listen(PORT, console.log(`Welcome to port ${PORT}`))