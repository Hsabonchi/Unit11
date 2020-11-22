"use strict";
const bodyParser = require('body-parser');
const { Router } = require('express');
const express=require('express');
require('dotenv').config()

// get the express object
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// get the port number from the .env file
let port = process.env.PORT 

app.get("/",(req,res)=>{
    res.send("<h3> Wellcome to the HomePage of the Recipe app </h3>")
});

const recipesRouter=require("./express-recipes")
app.use("/recipes",recipesRouter)



app.listen(port,err=>{
    if(err){
        return console.log("ERROR",err);
    }
    console.log(`http://localhost:${port}`)
})