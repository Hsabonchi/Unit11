// load express module using the require function
const express = require('express');

let users = [
    {
        id: 1,
        name: "John",
        email: "john@localhost",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@localhost",
    },
];


// By convention we call this object App
const app = express();
// enable parsing json object
app.use(express.json());


// app has a bunch of usefull methods like app.get () 

// call back function should have two arguments req,res
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

// Another route
app.get('/api/users', (req, res) => {
    res.send(users)
})

//:id is a param
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id))
    console.log(user)
    if (!user) res.status(404).send('The user with the given ID was not found')
    res.send(user)
    console.log(user)
})

app.post('/api/users', (req, res) => {
    if (!req.body.name || req.name.length < 3) {
        res.status(4000).send('Name is required')
    }
    // read user 
    const user = {
        id: users.length + 1,
        name: req.body.name,

    }
    users.push(user)
    res.send(user);

})
app.delete('/api/users/:id', (req, res) => {
    //look up
    const user = users.find(u => u.id === Number(req.params.id))

    if (!user) res.status(404).send('The user with the given ID was not found')
    const index = users.indexOf(user);
   
    // go this index and remove one object
    users.splice(index,1)
    res.send(user);


})


// its need to listen on port
app.listen(333, () => console.log('Listening on port 333 ....'))
