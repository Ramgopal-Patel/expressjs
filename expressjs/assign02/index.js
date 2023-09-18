const express = require('express');

const app = express()
const port = 8080;
const hostname = 'localhost'
let counter = 5;


app.get('/', (req, res) => {
    res.send({
        counter: counter
    })
})
app.get('/increment', (req, res) => {
    res.send({
        counter: increment()
    })
})
app.get('/decrement', (req, res) => {
    res.send({
        counter: decrement()
    })
})
app.listen(port, () => {
    console.log(`server is running at ${hostname}:${port}`)
})

const increment =()=>{
    return ++counter
}
const decrement = () => {
    return --counter
}