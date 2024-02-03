// fs = file system
// very imp for interview sync and async func()

// async needs error handling not sync, means it always expects a callback function for himlself
// for handling errors and output------------------- NON-BLOCKING OPERATION

// sync are good -------------- BLOCKING OPERATION

const fs = require('fs');

// create file with string---------------------------------------------------
// sync...
// fs.writeFileSync('./test.txt','Hey there');


// async for same...........
// fs.writeFile('./test.txt','Hey there asyncccccccccc', (err) => {});

// sync and async functions matter a lot otherwise it can also crash tghe whole server


// read  file------------------------------------------------------------
//sync.............
// const result = fs.readFileSync('./File Handling/contact.txt',"utf-8");

// console.log(result);


// async....
// fs.readFile("./File Handling/contact.txt","utf-8",(err,result) =>{
//     if(err){
//         console.log("erorr ::", err);
//     }
//     else{
//         console.log(result);
//     }
// })


// appending data on same data file--------------------------------------------------------
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString()); //adds current date at end of file


//and there many other functions.....
















