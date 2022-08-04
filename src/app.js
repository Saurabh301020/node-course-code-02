const path = require('path')
const express = require ('express')
const hbs=require('hbs')
const app = express()

const viewsPath=path.join(__dirname,'../templates/view');
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)

hbs.registerPartials(partialsPath)

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