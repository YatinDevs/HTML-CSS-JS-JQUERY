/*

Make File
Read File
Update File
Rename  File
Delete File

*/
/*

// pretend that this response is coming from the server
const data=[
    {name:"Yatin Chaudhari",email_Id:"c.yatin727@gmail.com"},
    {name:"Aditya Chaudhari",email_Id:"c.yatin727@gmail.com"},

    {name:"Satush Chaudhari",email_Id:"c.yatin727@gmail.com"},

    {name:"Pankaj Chaudhari",email_Id:"c.yatin727@gmail.com"},

    {name:"Shruti Chaudhari",email_Id:"c.yatin727@gmail.com"}

]

Call Back Function
const students = [

]

Function within Function is call back function
*/
const fs =require('fs');
const { dirname } = require('path');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/textFile.txt`;

//fs.writeFileSync(filepath,"This is Text File ");
// What is buffer and stream in node JS?
//Buffers in Streams
//In Node Js, buffers are used to store raw binary data. 
//A buffer represents a chunk of memory that is allocated on our computer. The size of the buffer, once set, cannot be changed.
// A buffer is used to store bytes.
/*

fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})

fs.appendFile(filepath,'and file name is textFile.txt',(err)=>{
    if(!err){
        console.log("file is Updated!!")
    }
})

fs.rename(filepath,`${dirPath}/ChangeName.txt`,(err)=>{
    if(!err){
        console.log("file Name is Updated!!")
    }

})
*/

fs.unlinkSync(`${dirPath}/ChangeName.txt`)

console.log(dirPath);

// what is BUffer while using fs?
// buffer is temorary memory location required by node to perform operation