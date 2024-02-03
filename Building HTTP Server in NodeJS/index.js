// first create  package.json,  cmd- npm init (all enter)

// const http = require("http");  ----use for creating http server



// link = http://localhost:8000/

// const myServer = http.createServer();
// for myServer we need a handler function that handles incoming request for us

// const myServer = http.createServer((req, res) => {
//   console.log("recevied a  request ");
//   //console.log(req);
//   res.end("hello from server");
// });

// myServer.listen(8000, () => console.log("Server started"));



// const http = require("http");
// const fs = require("fs");  //fs = file system

// const myServer = http.createServer((req, res) => {
//   console.log("recevied a  request ");
//   const log = `${Date.now()}: ${req.url} New Req recieved \n`;  //text

// // we are here using non-blocking request ( means async ) to
// // avoid thread blockage = (err,data) => {}
// fs.appendFile('log.txt', log, (err,data) => {
// //res.end("hello from  backend server -- refresh to send request ");
// if(err){ 
//     console.log("Erroooooor: ", err);
// }
// else{

// switch(req.url){
//     case '/' : res.end("homePage visit-http://localhost:8000/about");
//     break;
//     case'/about' : res.end("Akash");
//     break;
//     default: res.end("404 not found");
// }
// }
// });
 
// });

// myServer.listen(8000, () => console.log("Server started"));



// Handling URLS-----------------------------------------------------------------------------------------------------------


//url = uniform resource locator

// https://xhamster.com/ -- path
// https://xhamster.com/milf-hardcore --  nested path have /name
// https://xhamster.com/milf-hardcore?page=1&a=2-- query parameter have ?

// https = protocol - way of communication
// url = domain name = which points to the ip addrsess (eg: 123.43.56) of the website


                                             


// const http = require("http");
// const fs = require("fs");  //fs = file system
// const url = require("url");

// const myServer = http.createServer((req, res) => {

//   if( req.url === '/favicon.ico') return res.end();

//   console.log("recevied a request ");
//   const log = `${Date.now()}: ${req.method} ${req.url} New Req recieved \n`;  //text



// const myUrl = url.parse(req.url);
// //http://localhost:8000/about?page=2
// console.log("Parsing the queried url : ",myUrl);

// fs.appendFile('log.txt', log, (err,data) => {

// switch(req.url){
//     case '/': res.end("homePage visit-http://localhost:8000/about");
//     break;
//     case'/about' : res.end("Akash bhaiiiiiiiiiii");
//     break;
//     case '/signup':
//       if( req.method === 'GET') res.end('This is signup form');
//       else if( req.method === 'POST') res.end(" getting info.... from DB query");
//       break;
//     default: res.end("404 page not found");
// }

// });
// });

// myServer.listen(8000, () => console.log("Server started"));




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











































































