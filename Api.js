const express=require('express')
const app=express()
//express.json() is inbuilt method in express to recognized incomming request object as a json object  
// this method is called middleware in your application using code 
//app.use(express.json())

// we do not need express.json and express.urlencoded() for Get or Delete 
// we only need for post and put request
//
app.use(express.json())
require('./conn')
const students=require("./students")

const port=process.env.PORT || 1014
app.get("/",(req,res)=>{
res.send('i am express')

})
app.post("/students",async(req,res)=>{
    try{
        const user=new students(req.body)
        const createuser  = await user.save()
      res.status(201).send(createuser)

    }catch(e){

res.status(400).send(e)
    }})



 
//or

// this is promises method

// app.post("/students",(req,res)=>{
// const user=new students(req.body)
// user.save().then(()=>{
// res.status(201).send(user)

// }).catch((e)=>{
// res.send(e)

// })



//reading data from database we use http request that is Get



// app.get("/students",async(req,res)=>{
//     try{
       
//         const ourstudent  = await students.find()
//       res.status(201).send(ourstudent)

//     }catch(e){

// res.status(400).send(e)
//     }})
// app.get("/students/:phone",async(req,res)=>{
//     try{
//        const id=req.params.phone
//         const ourstudentname  = await students.findByNumber({id})
//         console.log(ourstudentname);
//       res.status(201).send(ourstudentname)

//     }catch(e){

// res.status(400).send(e)
//     // }})

    //Put or patch request
    //mean update a quarry

     app.patch("/students/:id",async(req,res)=>{
        try{
           const id=req.params.id
            const updatestudent  = await students.findByIdAndUpdate(id,req.body)
            console.log(updatestudent);
          res.status(201).send(updatestudent)

    
        }catch(e){
    
    res.status(400).send(updatestudent)
        }})


    // delete data by id


    // app.delete("/students/:id",async(req,res)=>{
    //     try{
    //        const id=req.params.id
    //         const deletestudent  = await students.findByIdAndDelete(id)
    //         //console.log(deletestudent);
    //       res.status(201).send(deletestudent)

    
    //     }catch(e){
    
    // res.status(400).send(updatestudent)
    //     }})




app.listen(port,()=>{
console.log('system is setup');


})