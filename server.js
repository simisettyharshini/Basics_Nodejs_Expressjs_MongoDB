const http = require("http");

const port = 8081; // local port num

//HTTP methods

//GET MEthod : to get some data from server
//POST Method : Sending data to server
//DELETE :deleting the data from database
//PATCH :updating certain feilds
//PUT : full update 

const toDolist = ["learn","apply","succed"];


http
  .createServer((req, res) => { // call back func
    const {method,url} = req
   // console.log(method,url);
   if(url === "/todos"){
     if(method === "GET"){
       res.writeHead(200,{"content-Type" : text/html});
       res.write(toDoList.toString());

     }
     else{
      res.writeHead(501);
     }
    }else{
       res.writeHead(404);
     } 
     
    
    res.end();
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h2>hey server started n u can procced :-) 123456 oh.....:))</h2>");
    // res.end();
  })
  .listen(port, () => { // call back func
    console.log(`NodeJs Server Started Running on Port: ${port}`);
  });
//https://localhost:8081/signin
//https://localhost:8081/signup
//https://localhost:8081/aboutus
//https://localhost:8081/contactus
//https://localhost:8081/home