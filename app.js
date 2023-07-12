const express= require('express');
const app=express();

// script.js

// Output the modified HTM

app.use(express.static("/public"));
let path=require('path');
app.use(express.static('style'));
app.use(express.static('img'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
