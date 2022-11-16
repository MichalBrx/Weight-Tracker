import { Request, Response, NextFunction } from "express";
import { newUser } from "../interfaces";

const jwt = require("jsonwebtoken");

function generateAccessToken(user: any) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "3000s",
  });
}
function createAccessToken(user: any, res: Response) {
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.cookie("accessToken", accessToken);
  res.status(200).json({ user: user });
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const { cookies } = req;
  if ("refreshToken" in cookies) {
    jwt.verify(
      cookies.refreshToken,
      process.env.ACCESS_TOKEN_SECRET,
      (err: any, user: newUser) => {
        if (err) return res.status(403);
        req.user = user;
        next();
      }
    );
  }
}

export { createAccessToken, generateAccessToken, authenticateToken };
