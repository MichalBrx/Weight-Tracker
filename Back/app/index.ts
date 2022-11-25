import express from "express";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import { newUser } from "./interfaces";
import { generateAccessToken, authenticateToken } from "./jwt/jwt";

const jwt = require("jsonwebtoken");

require("dotenv").config();

// middleware
const cookieParser = require("cookie-parser");
const cors = require("cors");

const register = require("./routers/register");
const login = require("./routers/login");
const currentUser = require("./routers/currentUser");

const prisma = new PrismaClient();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    optionsSuccesStatus: 200,
    origin: ["http://0.0.0.0:5173", "http://192.168.0.17:5173"],
    preflightContinue: false,
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  })
);

app.use("/", register);
app.use("/", login);
app.use("/", currentUser);

declare global {
  namespace Express {
    interface Request {
      user: newUser;
    }
  }
}

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
