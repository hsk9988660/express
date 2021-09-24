const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/technecal',{}).then(()=>console.log('connection successfule')).catch((err)=>console.log(err))


// mongoose shcema defines the structure of document,default values and validater
//2- mongoose schema and model explained create collection using mongoose

// mongoose model provides an interface to the database for creating querying,updating,deleting records

const playlistSchema=new mongoose.Schema({
name:{
    type:String,
required:true,
unique:true,

// unique is use you can write only one name in form 
lowercase:true,
//lowercase is use to lowecase your data
trim:true,
//trim is use when you want no space around string
// it is use to enter phone number 
// email validation
// if someone pass a same name again then it restrict 
minlength:2,
maxlength:33
//you have to write minimum 2 characters in name in form

// enum create a validator that check  if the value is in given array


//minheight,maxheight is just like in VAR CAR how many number of characters in MYSQL
},
member:Number,

//enum is use that like which data should "engg" "front end" that 224433 is must present to login in our system



work:{
type:String,
required:true,
enum:['engg']

}
// type,required,enum are validation use to validate form
//they should in curly bracket


})

//Collection creation 

const Playlist= new mongoose.model("Playlist",playlistSchema)

//playlist should be in singular form
 //create document or insert
 const createDocument= async ()=>{
try{

   const Industry8=new Playlist({
name:" khan  ",
member:22,
work:"enggg"

// it cannot add into our database because
// errors: {
   // work: ValidatorError: `enggg` is not a valid enum value for path `work`.

   })
        
        const result=await Playlist.insertMany([Industry8])
    console.log(result);


}catch(err){
console.log(err);


}


 }
 createDocument()

 // in simple way we can 









