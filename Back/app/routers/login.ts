const express = require("express");
const router = express.Router();

import { createAccessToken } from "../jwt/jwt";
import { Response } from "express";

import { LogginIn } from "../models/user";

router.post("/login", async (req: any, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await LogginIn(email, password);

    createAccessToken(user, res);
  } catch (err) {
    if (email == "" || password == "") {
      res.status(406).json({ message: "Please fill empty fileds" });
    } else if (err) {
      res.status(406).json({ message: "Invalid Crednetials" });
    } else {
      res.status(404).json({ message: "Not known error" });
    }
  }
});

module.exports = router;
