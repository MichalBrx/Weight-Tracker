const knex = require('knex')
const config = require('../db/knexfile')
const db = knex(config.development)

async function add(users) {
    const [id] = await db('users').insert(users)
    return id
}

function find() {
    return db('users')
}

module.exports = {
    add,
    find
}