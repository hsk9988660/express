const mongoose=require('mongoose')


mongoose.connect("mongodb://localhost:27017/students" ,{}).then(()=>{
console.log('connection is successful');
}).catch((e)=>{
    console.log('connnection is not');
})
