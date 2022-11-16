import express from "express";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";

import { newUser } from "./interfaces";
import { generateAccessToken, authenticateToken } from "./jwt/jwt";

require("dotenv").config();

const app = express();
// const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const register = require("./routers/register");
const login = require("./routers/login");
const currentUser = require("./routers/currentUser");

const prisma = new PrismaClient();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

declare global {
  namespace Express {
    interface Request {
      user: newUser;
    }
  }
}

app.use("/", register);
app.use("/", login);
app.use("/", currentUser);

// nie dziala
app.post("/token", (req, res: Response) => {
  const { cookies } = req;
  const refreshToken = req.body.token;

  console.log(
    refreshToken,
    "=============================",
    cookies.refreshToken
  );

  if (refreshToken == null) return res.sendStatus(401);
  if (cookies.refreshToken !== refreshToken) return res.sendStatus(403);
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err: any, user: newUser) => {
      if (err) return res.status(403).send({ error: err });
      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken: accessToken });
    }
  );
});

app.get("/users", authenticateToken, async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
  // res.json(users.filter(user => user.email === req.user.email)) returns current logged user'a
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
