const mongoose=require('mongoose')

const validator=require('validator.js')

const createdocument=new mongoose.Schema({
name:{
type:String,
required:true,
unique:true,
minlength:3
},
email:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
        throw new Error('email should be in valid  form')
}}

        
        


},
phone:{
type:Number,
required:true,
min:10,
unique:true


},





})
const models=new mongoose.model('Student',createdocument)




module.exports=models