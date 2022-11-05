const express = require('express')
const router = express.Router()

import { PrismaClient } from '@prisma/client'
import { createAccessToken } from '../jwt/jwt'
import { Request, Response, NextFunction } from 'express'
import { get_user_by_email } from '../crud/user'

const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

router.post('/login', async (req:any, res: Response) => {

    const user = await get_user_by_email(req.body.email)

    if (user === null) {
        return res.status(400).send('Cannot find user')
      }
      try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            createAccessToken(user,res)
        } else {
          res.send('Not Allowed')
        }
      } catch {
        res.status(500).send()
      }

})

module.exports = router