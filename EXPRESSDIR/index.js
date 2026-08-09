// ## first server make with express  

const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app listening : ${port}`);
});

app.use((req,res) => {
    console.log("income requests ");
    res.send({
        name: "Shivam",
        js: "express",
        class:"inherit",
        num: 10
    });
    let code = "<h1> Fruits </h1><ul><li>Apple</li><li>Orange</li></ul>"
    res.send(code)
});

app.get("/",(req, res) => {
    console.log("income request");
    res.send("you are connect to root path");
});

app.get("/search",(req, res) => {
    res.send("you are connect to search path");
});

app.get("/help",(req, res) => {
    res.send("you are connect to help path");
});

app.post("/",(req, res) => {
    res.send("sent a post request");
});

app.get("/:username/:id",(req, res) => {
    console.log(req.params);
    res.send("hii");
});

app.get("/search" , (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("Nothing to search");
    }
    res.send(`search result for ${q}`);
});
