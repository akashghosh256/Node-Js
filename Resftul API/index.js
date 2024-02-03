
// What is JSON short for?

// JavaScript Object Notation 

// folow https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/

/*
 points:
 1 Server client architecture


server ok
client - laptop,browser, mobile ,alexa etc

html page = sever side rendering
Gives data to client in raw format like json or XML

2 always respect all http methods
like get , post, put,patch, delete methods when asked by client

patch - updates the user

for browser client always  html data not json

res.send()    res.json(object) - client side rendering
res.render() - html

*/

//Building REST API's using Node and Express.js--------------------------------------------------

// npm i express  every new project

const  express = require("express");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json")   //https://www.mockaroo.com/


// Routes
//http://localhost:8000/users

// two types of server

//json
//http://localhost:8000/api/users
app.get("/api/users", (req,res) =>{
    return res.json(users);
});

// html
app.get("/users", (req,res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
    </ul>
    `;
 return   res.send(html);
});

// dynamic param-eters in url-------------------------


// http://localhost:8000/api/users/88
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id); 
    const  user = users.find((user) => user.id === id);
 return res.json(user);
});

// using one route ----------------------

app.route("/api/users/:id")
.get((req,res) => {
    const id = Number(req.params.id); 
    const  user = users.find((user) => user.id === id);
 return res.json(user);
})
.put((req,res) => {
    // edit user with id
    return res.json({status :"Pending"});
})
.post((req,res) => {
    return res.json({status :"Pending"});

})























app.listen(PORT, () => console.log("server start"));













