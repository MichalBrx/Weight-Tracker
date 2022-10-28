


const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./DB.db3', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message)
})

db.serialize(() => {
  //  --> Create Table <--
  // db.run('CREATE TABLE users(id INTEGER PRIMARY KEY, name, password, email)')
  // const stmt = db.prepare('INSERT INTO users VALUES (?)')

  // --> Don't know what's doing <--
  // stmt.run("users")
  // stmt.finalize()

  // sql =  `INSERT INTO users(name, password, email) VALUES (?,?,?)`
  // db.run(sql,["Marcel","rurek", "kurek@gmail.com"], (err) => {
  //     if (err) return console.error(err.message)
  // })


  //  --> query the data <--
    sql = `SELECT * FROM users`
    db.all(sql,[],(err, rows) => {
        if (err) return console.error(err.message)
        rows.forEach(row => {
            console.log(row)
        })
    })
})

db.close()