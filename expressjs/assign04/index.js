const express = require('express');

const app = express()
const port = 8080;
const hostname = 'localhost'

const random = Math.ceil(Math.random() * 1000);

app.get('/', (req, res) => {
    res.send({
        random: random
    })
})
app.listen(port, () => {
    console.log(`server is running at ${hostname}:${port}`)
})