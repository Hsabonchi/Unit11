require('dotenv').config()

const MongoClient = require("mongodb").MongoClient;
let dbHost = process.env.DB_HOST ;
let dbPort = process.env.DB_PORT ;
let dbUsername = process.env.DB_USERNAME ;
let dbPassword = process.env.DB_PASSWORD;

let dbUrl = `mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbUsername}`;



async function run() {
    let client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    let db = client.db("cs5220stu01");
    
    await client.close();
}

run();