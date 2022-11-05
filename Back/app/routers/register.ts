const express = require('express')
const router = express.Router()

import { PrismaClient } from '@prisma/client'
import { createAccessToken } from '../jwt/jwt'
import { Request, Response, NextFunction } from 'express'

const bcrypt = require('bcrypt')

const prisma = new PrismaClient()


router.post('/register', async (req: Request, res: Response) => {

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
        createAccessToken(user,res)
    }
    catch{
        if( name == '' || email == '' || password == '' ) {
            res.status(500).json({message: 'Fill empty fileds'})
        } else{
            res.status(500).json({message: 'Email already exists'})
        }

    }
})


module.exports = router