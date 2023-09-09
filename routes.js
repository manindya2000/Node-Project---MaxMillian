const fs= require('fs');

const requestHandler= (req,res)=>{
    if(req.url==="/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Message</title></head>')
        res.write('<body><form action="/message"method="POST"><input type="text" name="message"><button type="Submit">Send</button><form></body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url==="/message"){
      const body=[]; 
      req.on('data',(chunk)=>{
        body.push(chunk);
       });

       return req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split("=")[1];
        fs.writeFile("message.txt",message,(err)=>{
          res.statusCode=302;
          res.setHeader("Location","/");
          return res.end();
        });
       });
       //fs.writeFileSync("message.txt","Anindya");
      // res.statusCode=302;
      // res.setHeader("Location","/");
      // return res.end();
    }
    //Printing response object 
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>')
    res.write('<body><h1>Hii from Node JS server :)</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports={
    request:requestHandler,
    text:'Some hard coded text'
};