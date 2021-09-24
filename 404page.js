const express=require('express')
// this page is all about partail




const path=require('path')
const hbs=require('hbs')
const app=express()
  const ppath=path.join(__dirname,'templates/mypartail')
  
  //partail is use to pass a file on multiple other file
  
//partail is just like  component in react
// we create only one partail ( the efile which repeate again and again we create its partail  and call it in another ) and call it into another place


app.set('view engine','hbs')
 const templatepathh=path.join(__dirname,'templates/views')
//  const templatepathhh=path.join(__dirname,'about')

 hbs.registerPartials(ppath)
 app.set('views',templatepathh)
//  app.set('about',templatepathhh)
app.get('/',(req,res)=>{
res.render("index.hbs")

})
app.get('/about',(req,res)=>{
res.render('about')

})
app.get('/about*',(req,res)=>{
    res.render('404.hbs')


})




app.listen(600,()=>{

  console.log('this is done');  
})