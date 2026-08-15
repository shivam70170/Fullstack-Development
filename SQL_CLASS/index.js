const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const { error } = require("console");
const methodOverride = require('method-override');

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: "shivam@70170"
});


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// home route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    } catch (err) {
        console.log(err);
        res.send("some err here",err);
    }
});

app.get("/user", (req,res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            
            res.render("show.ejs",{users});
        });
    }catch(err){
        console.log("error", err);
        res.send("some error here");
    }
});

// get Edit username ROUTE
app.get("/user/:id/edit",(req, res)=> {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log("error", err);
        res.send("some error here");
    }
});

// UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password:formpass, username:newusername} = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("wrong password");
            }else{
                let q2 = `UPDATE user SET username ='${newusername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        });
    }catch(err){
        console.log("error", err);
        res.send("some error here");
    }
});

app.listen(port, () => {
    console.log(`port listen ${port}`);
});