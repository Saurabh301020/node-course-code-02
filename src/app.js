const express = require ('express')
const app = express()

app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title:'Home',
        name:'saurabh'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        name:'saurabh'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name:'saurabh'
    })
})

app.listen(3000,()=>{
    console.log('server is start ....');
})