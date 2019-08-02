const path = require('path')
const express = require('express')
const app = express()

console.log('App started...')
app.use(express.json())

app.get('/api', (req, res) => {
    res.send({ message: 'Hello world from API!'})
})

app.post('/api', (req, res) => {
    console.info('req.body:', req.body)
    const name = req.body.name
    res.send({ message: `Hi ${name}!` })
})

// app.get('/', (request, response) => {
//     const homePath = path.join(__dirname, 'public', 'index.html')
//     response.sendFile(homePath)
// })

// app.get('/img/wizeline-logo.png', function (request, response) {
//     const logoPath = path.join(__dirname, 'public', 'img', 'wizeline-logo.png')
//     response.sendFile(logoPath)
// })

app.use(express.static('public'))

function onServerStart() {
    const port = server.address().port
    console.info(`Server running at http://localhost:${port}`)
}

const server = app.listen(3000, onServerStart)
