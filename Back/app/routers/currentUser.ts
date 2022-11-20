const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
import { Response, Request } from "express";

router.get("/user", (req: Request, res: Response) => {
  const token = req.cookies.accessToken;

  console.log(req.cookies);
  if (!token) {
    return res.status(401).end();
  }
  var payload;
  try {
    payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }

  res.send(payload);
});

module.exports = router;
