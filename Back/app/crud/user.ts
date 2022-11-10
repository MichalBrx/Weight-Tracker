import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function get_user_by_email(user_email: string) {
  const users = await prisma.user.findMany();
  const user = users.filter((user) => user.email === user_email);
  return user[0];
}

export { get_user_by_email };
