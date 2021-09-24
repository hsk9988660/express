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
 //create document or insert
 const reactPlaylist=new Playlist({
name:"react js",

type:"front end",
videos:999,
author:"hashim",
active:true,



 })

 reactPlaylist.save()



