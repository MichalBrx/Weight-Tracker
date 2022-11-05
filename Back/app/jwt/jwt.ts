import { Request, Response, NextFunction } from 'express'
import { newUser } from '../interfaces'

const jwt = require('jsonwebtoken')


//    IT should be saved in Cookies or localStorage
let refreshTokens = [] 

function generateAccessToken(user: any) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3000s'})
}
function createAccessToken(user: any, res: Response){
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.status(200).json({ user:user, accessToken: accessToken, refreshToken: refreshToken })
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

export { createAccessToken, generateAccessToken, authenticateToken }