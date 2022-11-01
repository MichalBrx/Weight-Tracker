import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface newUser {
    name: string,
    email: string,
    password: string
    
}

async function main (newUser: newUser) {
    const user = await prisma.user.findMany()
    console.log(user)

}

// main()
// .catch(e => {
//     console.error(e.message)
// })
// .finally(async () => {
//     await prisma.$disconnect()
// })
module.exports = {
    main
}