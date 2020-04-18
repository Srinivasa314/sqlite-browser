const sqlite3=require('sqlite3').verbose()
const db = new sqlite3.Database('./data.db')

const app = require('express')()
app.use(require('cors')())
app.use(require('multer')().array())

app.post('/', (req, res) => {
    db.all(req.body.command, [], (err, rows) => {
        if (err) {
            res.send(err.message)
        }
        else
            res.send(rows)
    })
})

app.listen(3000)

process.on('SIGINT', () => {
    db.close()
    console.log('Stopped server')
    process.exit(0)
})
console.log('Press Ctrl-C to exit')