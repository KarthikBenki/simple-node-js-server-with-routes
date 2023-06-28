const http = require('http')


//usique address of server
const port = 8000;

const server = http.createServer((req,res)=>{
    //request handler function
    console.log(req.url);

    if (req.url==="/login") {
        res.writeHead(200,{'content-type':"text/html"})
         res.end('<h1>Hello World</h1>')
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


