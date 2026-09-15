import http from 'http'
const server=http.createServer((req,res))=>{
    //req method -> GET,POST,PUT(ALL DATA CHANGE),DELETE(),PATCH(SINGLE DATA) 
    console.log("Method:",req.method);
    console.log("URL",req.url);


// browser can send only GET request to the server
//post/put/patch/delete -> can be chcked by api tester
////API Tester :  postman,echo api,thunder client
});