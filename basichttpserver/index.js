const http = require('http')


//usique address of server
const port = 8000;

const server = http.createServer()

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


