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

 hbs.registerPartials(ppath)
 app.set('views',templatepathh)
app.get('/',(req,res)=>{
res.render("index.hbs")

})




app.listen(5000,()=>{

  console.log('this is done');  
})