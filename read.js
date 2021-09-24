const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/technecal',{}).then(()=>console.log('connection successfule')).catch((err)=>console.log(err))


// mongoose shcema defines the structure of document,default values and validater
//2- mongoose schema and model explained create collection using mongoose

// mongoose model provides an interface to the database for creating querying,updating,deleting records

const playlistSchema=new mongoose.Schema({
name:String,
type:String,
videos:Number,
author:String,
active:Boolean,
date:{

    type:Date,

    default:Date.now
}


})

//Collection creation 

const Playlist= new mongoose.model("Playlist",playlistSchema)

//playlist should be in singular form
 //create document or insert
 const createDocument= async ()=>{
try{
    const jsPlaylist=new Playlist({
        name:"  js",
        
        type:"front  end",
        videos:150,
        author:"thappa",
        active:true,
        
        
        
         })
    const mongoPlaylist=new Playlist({
        name:"mongo  db",
        
        type:"database",
        videos:999,
        author:"thappa",
        active:true,
        
        
        
         })
    const mongoosePlaylist=new Playlist({
        name:"mongoose",
        
        type:"interface",
        videos:999,
        author:"thappa",
        active:true,
        
        
        
         })
    const cssPlaylist=new Playlist({
        name:"css",
        
        type:"front end",
        videos:999,
        author:"thappa",
        active:true,
        
        
        
         })
        
        const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,cssPlaylist])
        console.log(result);


}catch(err){
console.log(err);


}


 }
createDocument()
const getDocument=async ()=>{
    const resullt=await Playlist.find()
    console.log(resullt);
    
    
    }

getDocument()




