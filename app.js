//Import http module by writing require('http')
const http=require('http');

const request=require('./routes');
//Create http server by invoking createServer method of http object
const server=http.createServer(request.request
  // Printing request paramter on console
  //  console.log(req.url,req.method,req.headers);
    //process.exit();
    );

//Listen request from browser on specific port number
server.listen(3000);


