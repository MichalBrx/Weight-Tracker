import { Request } from "express";
import { get_user_by_email } from "../crud/user";
const bcrypt = require("bcrypt");

async function LogginIn(email: string, password: string) {
  const user = await get_user_by_email(email);

  if (user) {
    var auth = bcrypt.compare(password, user.password);

    if (await auth) {
      return user;
    } else {
      throw Error("Invalid Credentials");
    }
  } else {
    throw Error("Invalid Credentials");
  }
}

export { LogginIn };
