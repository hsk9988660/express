const express=require('express')

const path=require('path')

const app=express()
app.set('view engine','hbs')
// we can change by default behavior by using 



// by giving path to a folder

// we have to use res.render() in template engine not use res.send
// app.set('views',templatepath)
// app.set('views',templatepath)
app.get('/',(req,res)=>{

res.render("index.hbs")

})
const templatepath =path.join(__dirname,"public")
app.set('views',templatepath)
app.get('/about',(req,res)=>{

res.render("about.hbs")

})
// app.use( '/' , express.static(path.join(__dirname,"public.html")))
// app.get('',(req,res)=>{
// res.send(
// 'nknknkjnj'


// )


// })

// for a template engine we must  views folder 
// in this folder we make our template engine

// template engine is use to make dynamic data



app.listen(3000,()=>{

  console.log('this is done');  
})