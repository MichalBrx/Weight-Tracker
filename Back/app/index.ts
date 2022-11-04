import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express from 'express'
import {Request, Response, NextFunction, Errback} from 'express'

const app = express()
require('dotenv').config()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


interface newUser {
    name: string,
    email: string,
    password: string
    
}

declare global {
    namespace Express {
      interface Request {
        user: newUser;
      }
    }
  }

//    IT should be saved in Cookies or localStorage
  let refreshTokens = [] 

app.post('/register', async (req,res) => {

    const { name, email, password } = req.body

    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash( password, salt )
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.status(200).json({ user:user, accessToken: accessToken, refreshToken: refreshToken })
    }
    catch{
        if( name == '' || email == '' || password == '' ) {
            res.status(500).json({message: 'Fill empty fileds'})
        } else{
            res.status(500).json({message: 'Email already exists'})
        }

    }
})

app.post('/login', async (req:any, res: Response) => {
    const user = await get_user_by_email(req.body.email)
    // const password = await bcrypt.compare(req.user.password, isUser.password)

    console.log( user)
    if (user === null) {
        console.log("test1")
        return res.status(400).send('Cannot find user')
      }

      try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            console.log("test2")
            const accessToken = generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            res.status(200).json({ user:user, accessToken: accessToken, refreshToken: refreshToken })
        } else {
            console.log("test3")
          res.send('Not Allowed')
        }
      } catch {
        console.log("test4")
        res.status(500).send()
      }

})

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

async function get_user_by_email(user_email:string){
    const users = await prisma.user.findMany()
    const user = users.filter(user => user.email === user_email)
    return user[0]
}
// async function validatePassword(user_password:string) {

// }

function generateAccessToken(user: any) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3000s'})
}

function authenticateToken(req:Request, res:Response, next:NextFunction) {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null)
    return res.status(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err:any, user:newUser) => {
        if (err) return res.status(403)
        req.user = user
        next()
    })
}


const server = app.listen(3000, () =>
console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)