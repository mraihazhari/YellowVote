const express = require("express");
const app = express()

console.log("test");

app.listen("5000", ()=>{
    console.log("Server is running!");
})