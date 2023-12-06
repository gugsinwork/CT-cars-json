require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.get('/', (req,res) =>{
    res.status(200).json({
        msg : 'bem vindo a nossa API'
    })
})





const DbUser = process.env.DB_USER
const DbPassword = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DbUser}:${DbPassword}@cluster0.g4yzsmh.mongodb.net/`).then(()=>{
    app.listen(3000)
    console.log('Conectou-se ao Banco')
}).catch((err) => console.log(err))

