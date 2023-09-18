const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.json({msg:'i am from home page'})
})
app.get('/about', (req, res) => {
    res.json({ msg: 'i am from about page' })
})
app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com' })
})


app.listen(5500,()=>{
    console.log(`server is running on localhost:5500`)
})


