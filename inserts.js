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
        videos:151,
        author:"thappa",
        active:true,
        
        
        
         })
    const mongoPlaylist=new Playlist({
        name:"mongo  db",
        
        type:"database",
        videos:99,
        author:"thappa",
        active:true,
        
        
        
         })
    const mongoosePlaylist=new Playlist({
        name:"mongoose",
        
        type:"interface",
        videos:99,
        author:"thappa",
        active:true,
        
        
        
         })
    const cssPlaylist=new Playlist({
        name:"css",
        
        type:"front end",
        videos:99,
        author:"thappa",
        active:true,
        
        
        
         })
        
        const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,cssPlaylist])
        console.log(result);


}catch(err){
console.log(err);


}


 }
 //createDocument()

//  const getDocument=async ()=>{
//     //const resullt=await Playlist.find({type:"front end"})
//     const resullt=await Playlist.find({name:'react js'}).limit(1)
//     console.log(resullt);
    
    
//     }

//getDocument()

// ADVANCED FILTER OPERATOR
//$lte
//$gte
//$in  

//  const getDocument=async ()=>{
//     //const resullt=await Playlist.find({type:"front end"})
//     const resullt=await Playlist.find({name:{$lte:188}}).limit(1)
//     console.log(resullt);
    
    
//     }

// getDocument()

//  const getDocument=async ()=>{
//     //const resullt=await Playlist.find({type:"front end"})
//     const resullt=await Playlist.find({type:{$in:['front end']}})
//     console.log(resullt);
    
    
//     }

// getDocument()

// Aadvance quary operator

//$and
//$not
//$nor

//or or opertor perform a logical OR operation on an array of two or more 
// it select the document that at least staisfy one of expression

//or has following syntax
//{$or:[{<expression>,{<expression>2},....,{<expressionN>}}]}



//  const getDocument=async ()=>{
//     //const resullt=await Playlist.find({type:"front end"})
//     const resullt=await Playlist.find({$or:[{type:'front end'},{videos:151}]})
//     console.log(resullt);
    
 
    
//     }

// getDocument()

//mongoose quary
// sorting and counting

//  how many doccument are present with name:'js'
//it all about counting number of document
//  .count give us number of document

 const getDocument=async ()=>{
    //const resullt=await Playlist.find({type:"front end"})
    const resullt=await Playlist.find({videos:{$gte:188}}).count()
    console.log(resullt);
    
 
    
    }

getDocument()


