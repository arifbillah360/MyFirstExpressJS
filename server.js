const express = require("express");
const app = express();

app.get("/", function(request, response){
    //console.log(request);
    response.send("Hello");
});
app.get("/about", function(request, response){
    response.send("<h1>My Name Is Arif Billa</h>");
});
app.get("/protfolio", function(request, response){
    response.send("Go to the https://arifbillah.com");
});
app.get("/contact", function(request, response){
    response.send("<h1>Number: 01779440297</h>");
});
app.listen(4000 , function(){
    console.log("Server started on the 4000 port");
});