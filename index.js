const express = require('express')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('./config/db.config')
const mongoose = require('mongoose')
const jwt_secret = require('dotenv').config()
const JWT_SECRET = process.env.jwt
const port = process.env.port || 3000

const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
db.connect(process.env.db, { useUnifiedTopology: true, useNewUrlParser: true })

app.listen(port, () => {
    console.log("Connected to port ${port}")
})