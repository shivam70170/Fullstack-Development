const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register",(req, res) => {
    let {user,password} = req.query;
    res.send(`Standard Get accepted : ${user} `);
});

app.post("/register",(req, res) => {
    let {user,password} = req.body;
    res.send(`post accepted : ${user}`);
});

app.listen(port, (req, res) => {
    console.log(`listen port : ${port}`);
});