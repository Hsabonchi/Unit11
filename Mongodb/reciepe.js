"use strict";

const MongoClient = require("mongodb").MongoClient;


let recipes = [
        {
            name: "Mashed Potatoes",
            Yield: 6,
            Ingredients: 
            [
              {Name:"golden creamer potato",Measurement:"4 pound"}
            
            ]
        },
        {
            name: "Steak Potatoes",
            Yield: 6,
            Ingredients: 
            [
              {Name:"golden creamer potato",Measurement:"4 pound"}, 
              {Name:" beef",Measurement:"8 medium"}
            
            ]
        }, {
            name: "Italian Steak",
            Yield: 6,
            Ingredients: 
            [
              {Name:"golden creamer ",Measurement:"4 pound"}, 
              {Name:" beef",Measurement:"8 medium"}
            
            ]
        },
        {
            name: "Steak",
            Yield: 6,
            Ingredients: 
            [
              {Name:"golden creamer potato",Measurement:"4 pound"}
            
            ]
        }

    ]
// let recipes = [
//     {
//         name: "Mashed Potatoes",
//         Yield: 6,
//         Ingredients: 
//         [
//           {Name:"golden creamer potatoes",Measurement:"4 pound"}, 
//           {Name:" Roma tomatoes",Measurement:"8 medium"}
        
//         ],
//         Directions: ["mash the garlic and 1/2 teaspoon of the salt", "toss in the parsley and bay leaves. Cover the pan tightly with aluminum foil and transfer to the oven. Bake for about 3 to 4 hours, basting every 30 minutes with the pan juices, until the beef is fork tender.", "Remove the brisket to a cutting board and let it rest for 15 minutes. Scoop the vegetables out of the roasting pan and onto a platter, cover to keep warm."]
//     },
//     {
//         name: "Beef Kebabs",
//         Yield: 4,
//         Ingredients: ["2 pounds sirloin steak", "1 medium white onion, roughly chopped", "8 medium Roma tomatoes"],
//         Directions: ["Trim any excess fat from the steaks, cut into 1-inch cubes, and place in a large nonreactive bow", "Place onion, garlic, lime juice, salt, pepper, and saffron or cumin, in a food processor and process until smooth. Pour mixture over meat, toss to coat, cover and marinate 30 minutes at room temperature, or up to 12 hours in the refrigerator", "heat grill to medium heat (350 degrees F) and oil well. Thread meat on skewers, leaving at least 1/2-inch space between each piece of meat. In a small bowl and the tomatoes, drizzle with oil, season with salt and pepper, and toss to coat thoroughly. Place meat and tomatoes on grill. Cook meat, turning once, until charred and medium-rare, about 7 to 10 minutes"]
//     }, {
//         name: "Beef Steak",
//         Yield: 10,
//         Ingredients: ["4 large garlic cloves, smashed", "1 (4 pound) beef brisket, first-cut", "4 large carrots, cut in 3-inch chunks", "4 large red onions, halved", "1 (16-ounce) can whole tomatoes, hand-crushed", "4 pounds golden creamer potato"],
//         Directions: ["mash the garlic and 1/2 teaspoon of the salt", "toss in the parsley and bay leaves. Cover the pan tightly with aluminum foil and transfer to the oven. Bake for about 3 to 4 hours, basting every 30 minutes with the pan juices, until the beef is fork tender.", "Remove the brisket to a cutting board and let it rest for 15 minutes. Scoop the vegetables out of the roasting pan and onto a platter, cover to keep warm."]

//     },
//     {
//         name: "Steak",
//         Yield: 1,
//         Ingredients: ["4 large garlic cloves, smashed", "1 (4 pound) beef brisket, first-cut", "4 large carrots, cut in 3-inch chunks", "4 large red onions, halved", "1 (16-ounce) can whole tomatoes, hand-crushed"],
//         Directions: ["mash the garlic and 1/2 teaspoon of the salt", "toss in the parsley and bay leaves. Cover the pan tightly with aluminum foil and transfer to the oven. Bake for about 3 to 4 hours, basting every 30 minutes with the pan juices, until the beef is fork tender.", "Remove the brisket to a cutting board and let it rest for 15 minutes. Scoop the vegetables out of the roasting pan and onto a platter, cover to keep warm."]

//     }
// ];

let dbUsername = "cs5220stu01";
let dbPassword = "d1vhqzJfb6Ed";
let dbUrl = `mongodb://${dbUsername}:${dbPassword}@cs3.calstatela.edu:4042/${dbUsername}`;
let db;
let client;
async function drop() {
    // connect to mongodb 
    client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    // selece a DB
    db = client.db("cs5220stu01");
    //drop the recipes collection
    await db.collection("recipes").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });
}

async function run() {

    let collection = await db.collection("recipes");
    await collection.insertMany(recipes);
    // create a text index on the name field
    //
    //  \"beef potato  potato $text: { $search: '"beef" "potato"' }  
    //{"$text": { "$search": "beef , potato" }

    //1)await collection.find( {"$text": { "$search": "beef ,potato$" }})


    await collection.createIndex({ name: "text","Ingredients.Name":"text"} );
    const cursor = await  collection.find({"$text": { "$search": ' "beef"  "potato" '}},{_id:1,name:1})
        cursor.count(function(err, count){
            console.log("Total matches: "+count);
        });

        await cursor.forEach(function (myDoc) {
           
                console.log("id    " + myDoc._id + "  Name:  " + myDoc.name);
       
        })



     const cursor2 = await collection.find({ $text: { $search: "Steak"}},{_id:true,name:1});
     await cursor2.forEach(function (myDoc) {   
                console.log("id    " + myDoc._id + "  Name:  " + myDoc.name);

    })

    await client.close();
}



// main method that drop first then add collection
async function init() {

    await drop()
    await run();
}

// call the init method 
init()
// await cursor.forEach(function (myDoc) {
    //     // myDoc.forEach(function (item) {
    //     //     if (item.includes("beef")) {
    //     //         //Print out the id and name of the recipes found.
    //            console.log("myDoc    " + myDoc );
    //     //     }
    //     // })
    // })