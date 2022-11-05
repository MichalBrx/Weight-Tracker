import express from 'express'
import { PrismaClient } from '@prisma/client'
import { Response } from 'express'

import { get_user_by_email } from './crud/user'
import { newUser } from './interfaces'
import { createAccessToken, generateAccessToken, authenticateToken } from './jwt/jwt'


require('dotenv').config()

const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const register = require('./routers/register')
const login = require('./routers/login')
const prisma = new PrismaClient()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



declare global {
    namespace Express {
      interface Request {
        user: newUser;
      }
    }
  }

app.use("/", register)
app.use("/", login)



app.post('/token', (req, res: Response) => {
    const refreshToken = req.headers.authorization
    const token = refreshToken && refreshToken.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    if (!token.includes(token)) return res.sendStatus(403)
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err: any, user:newUser) => {
        console.log(token)
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name})
        res.json({ accessToken: accessToken })
    })
})

app.get('/users',authenticateToken, async (req, res) => {

    const users = await prisma.user.findMany()
    res.json(users.filter(user => user.email === req.user.email))
})





const server = app.listen(3000, () =>
console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)