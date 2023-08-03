/*
Make A Server
Create header and API body
Create an API with Static Data
put Data in another File.

*/
const http =require('http')
const data = require('./data')
http.createServer((req,res)=>{

 res.writeHead(200,{'Content-Type':'application\json'});
 res.write(JSON.stringify({data})); // converst Js value to JSON Object Notation
res.end();
}).listen(3500);

// 200 - status sucessful code returned when request and processed by server.
// 300 - redirection codes -- this codes are used to tell browser or server that some other action needs to take place to complete the previous request
// 400 - client errors -- errors on the requesters behalf
// 500 - server errors --  servers behalf error

// Set input from command line
// Create File with input 
// Delete the File with Input
