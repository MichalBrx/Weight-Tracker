const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const createUser = require('./models/users')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const users = []

app.get('/users', (req,res) => {
    createUser.find()
        .then(users => {res.status(200).json(users)})
        .catch(error => {
            res.status(500).json({message: 'unable to display'})
        })
})


app.post('/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    console.log(user)
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

app.post('/register', async (req,res) => {


    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = {name: req.body.name, password: hashedPassword, email: req.body.email} 

        createUser.add(newUser).then(user => { res.status(200).json(user)})

    }
    catch {
        res.status(500).json({message: "cannot add new User"})
    }
    

})

app.listen(3000)