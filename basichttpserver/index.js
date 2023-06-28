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
 
     res.end(JSON.stringify({
         message: '404 Page Not Found'
     }))
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


