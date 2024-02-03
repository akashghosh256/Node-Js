

// EXPRESS VIDEO 10=----------------------------------------------------------------------------------------

// npm i express

// Express.js is a web application framework for Node.js that simplifies the process 
// of building robust and scalable web applications. While Node.js allows you to handle
//  server-side logic and interact with the file system, it doesn't provide a structured 
//  framework for handling HTTP requests, routing, and middleware out of the box. Express.js 
//  fills this gap and offers several advantages:

// Routing:

// Express simplifies the process of defining routes for different HTTP methods (GET, POST, PUT, DELETE, etc.).



// express is use for simplifying task of get and post automatically 
//rather than doing by us
// cleans code
/// makes handling route easy
// express is just a framework internally it still use http protocol



const http = require('http');
const express = require('express'); /// installing expressssssssssssssssss

const app = express();  // handler function app for us 

// it will even handle request for unavailable page
app.get('/',(req,res) => {
    return res.send("HOMEEE EXPRESSSSSS");
})
// it will accept request for any url= http://localhost:8000/about?page=50
app.get('/about',(req,res) => {
    return res.send("ABOUT EXPRESSSSSS");
});

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server started"));

app.listen(8000, () => console.log("Server started") );



