const path = require('path')
const express = require('express')
// console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname,'../public'));

const app=express()

app.use(express.static(path.join(__dirname,'../public')))
// app.get('',(req,res)=>{
//     res.send('hello express!')
// })
// app.get('/help',(req,res)=>{
//     res.send('<h1>help</h1>')
// })
// app.get('/about',(req,res)=>{
//     res.send({
//         name:'saurabh',
//         age:22
//     })
// })


app.listen(3000,()=>{
    console.log('server is start .....');
})
