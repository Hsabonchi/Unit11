const express = require('express');
const router = express.Router();
let collection;
require('dotenv').config()
const MongoClient = require("mongodb").MongoClient;
let dbUsername = "cs5220stu01";
let dbPassword = "d1vhqzJfb6Ed";
let dbUrl = `mongodb://${dbUsername}:${dbPassword}@cs3.calstatela.edu:4042/${dbUsername}`;
let db;
let client;




/* Connect to MongoDB Server*/
async function ConnectDB() {

    // connect to mongodb 
    client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    // Switch to DB
    db = client.db("cs5220stu01");
    console.log("Connected correctly to server");
    collection = await db.collection("recipes");
  
}

async function getAllRecpies() {
    console.log("List all recipes")
    // List all recipes.
    const cursor = await collection.find({}).toArray()
    return cursor
}
// Search recipe by names e.g seak
async function SearchBynames(name) {

    const cursor = await collection.find(
        { $text: { $search: name[0] } }).toArray();
    return cursor
}

async function SearchByingredients(arraParam) {
    // an array that contains elem for $and array
   let  Queryarray=[];
    for(let i=0;i< arraParam.length;i++){
        if(i!==(arraParam.length-1)){
            Queryarray.push({ Ingredients:{$elemMatch:{IngrName:arraParam[i]} } },)
        }else{
            Queryarray.push({ Ingredients:{$elemMatch:{IngrName:arraParam[i]} } } )
        }   
     }
     
   
    const query={
                $and:Queryarray
            }

     console.log( query )
     const cursor= await collection.find( query ).toArray()
    return cursor
}

// main method 
async function init() {
    // connect to the DB first
    await ConnectDB()

     //  List all recipes endpoints
    router.get("/", async (req, res) => {
        // have to add await ootherwise get an empty list 
        // Call getAllRecpies() function
        let Listrecp = await getAllRecpies()
        //sends a JSON response
        res.json(Listrecp);
    })
   
    // Search recipes that use certain ingredients Endpoint
    router.post("/searchByingred", async (req, res) => {
        // get all body key and value pairs
        let objParam=req.body;
        const arraParam=[];
        // We are concerning about the value e.g staek,onions.... ,then add them to arraParam array
        for (const property in objParam) {
            console.log(`${property}: ${objParam[property]}`);
            arraParam.push(objParam[property])
          }
        //   console.log(arraParam.length);
          let recpName = await SearchByingredients(arraParam)
          res.json(recpName);
    })

    // Search recipe names Endpoint
    router.post("/searchByname", async (req, res) => {
       
        let objParam=req.body;
        const recpName=[];

        // console.log(objParam);
        for (const property in objParam) {
            console.log(`${property}: ${objParam[property]}`);
            recpName.push(objParam[property])
          }
          
          if (recpName.length===0) {
            res.status(404).send('Name is required').end()
        }

        let recpJson = await SearchBynames(recpName)
        res.json(recpJson);

    })
    // add a reciepe
    // add a staus code
    router.post("/", async (req, res) => {
        
         // Create a JSON Obj then inserted into DB
          const item = { 
            IngrName: req.body.Name,
            Yield:req.body.Yield,
            Ingredients:req.body.Ingredients,
            Directions:req.body.Directions
         }
         await collection.insertOne(item);
         res.status(201).send(item) 
    })
}

// Program start from here
init()



module.exports = router;