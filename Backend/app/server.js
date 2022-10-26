const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())

const users = []

app.get('/users', (req,res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)

        const user ={ name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }


})

app.post('/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if ( user == null) {
        return res.status(400).send("Not Found")
    }
    try {
        // using `.compare` is more safety for user, password is harder to decode for hackers
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Logged In')
        } else {
            res.send('Login Failed')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)