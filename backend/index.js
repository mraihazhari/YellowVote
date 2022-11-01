const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const app = express()
const cors = require("cors");

console.log("test");

app.use(cookieSession({
    name:"session",
    keys:["yellowvote"],
    maxAge: 24 * 60 * 60 * 100
}
))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.listen("5000", ()=>{
    console.log("Server is running!");
})