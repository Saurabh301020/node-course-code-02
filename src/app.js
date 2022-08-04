const path = require('path')
const express = require('express')
// console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname,'../public'));

const app=express()

// app.use(express.static(path.join(__dirname,'../public')))

// handelbars ------
app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title:'saurabh',
        age:'22'
    })
    // res.render('index')
})





app.listen(3000,()=>{
    console.log('server is start .....');
})
