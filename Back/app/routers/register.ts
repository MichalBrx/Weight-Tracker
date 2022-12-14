const express = require("express");
const router = express.Router();

import { PrismaClient } from "@prisma/client";
import { createAccessToken } from "../jwt/jwt";
import { Request, Response, NextFunction } from "express";
import { get_user_by_email } from "../crud/user";

const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

router.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    createAccessToken(user, res);
  } catch {
    if (name == "" || email == "" || password == "") {
      res.status(406).json({ message: "Please fill empty fileds" });
    } else if (await get_user_by_email(email)) {
      res.status(422).json({ message: "User with this email already exists" });
    } else {
      res.sendStatus(500);
    }
  }
});

module.exports = router;
