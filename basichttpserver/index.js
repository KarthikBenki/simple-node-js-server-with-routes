const http = require('http')
const fs = require('fs')


//usique address of server
const port = 8000;

const server = http.createServer((req,res)=>{
    //request handler function
    console.log(req.url);

    if (req.url==="/login") {
        res.writeHead(200,{'content-type':"text/html"})
        fs.readFile('./login.html',(err,data)=>{
            if (err) {
                console.log(err);
                res.end('<h1>Error!</h1>')
            }
            res.end(data)
        })
         
         return
    }

    if (req.url==="/home" || req.url==="/") {
        res.writeHead(200,{'content-type':"text/html"})
        fs.readFile('./home.html',(err,data)=>{
            if (err) {
                console.log(err);
                res.end('<h1>Error!</h1>')
            }
            res.end(data)
        })
         
         return
    }
 
   fs.readFile('./_404.html',(err,data)=>{
    if (!err && req.method=="GET"){
            res.end(data)
            return
    }
    res.end('<h1>Error! Server busy with some other task</h1>')
   })
})

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is up and running on port ${port}`);
})

/**
 * localhost or 127.0.0.1 both are same
 */


