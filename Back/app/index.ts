import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express from 'express'

const app = express()
require('dotenv').config()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ user:user, accessToken: accessToken })
    }
    catch{
        if( name == '' || email == '' || password == '' ) {
            res.status(500).json({message: 'Fill empty fileds'})
        } else{
            res.status(500).json({message: 'Email already exists'})
        }

    }

})



app.get('/users', async (req, res) => {

    const user = await prisma.user.findMany()
    res.json(user)
})


const server = app.listen(3000, () =>
console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)