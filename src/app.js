const express = require('express')

const app=express()

app.get('',(req,res)=>{
    res.send('hello express!')
})
app.get('/help',(req,res)=>{
    res.send('<h1>help</h1>')
})
app.get('/about',(req,res)=>{
    res.send({
        name:'saurabh',
        age:22
    })
})

// app.get('/page',(req,res)=>{
//     res.send(index.html)
// })
app.listen(3000,()=>{
    console.log('server is start .....');
})
