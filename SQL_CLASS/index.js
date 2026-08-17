const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const { error } = require("console");
const methodOverride = require('method-override');
const {v4 : uuidv4} = require('uuid');

app.set("view engine", "ejs");
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

app.get("/user/add", (req, res) => {
    res.render("adduser.ejs");
});

// ADD USER ROUTE
app.post("/user/add",(req,res) => {
    let id = uuidv4();
    console.log(req.body);
    let {username, email, password} = req.body;
    let q = `INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)`;
    try{
         connection.query(q, [id, username, email, password], (err, result) => {
        if(err) throw err;
        res.redirect("/user");
    })
    }catch(err){
        console.log("error",err);
        res.send("error,err");
    }
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM user WHERE id = ?`;

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log("error", err);
            return res.send("some error issues");
        }

        let user = result[0];

        if (!user) {
            return res.send("user not found");
        }

        res.render("delete.ejs", { user });
    });
});

app.delete("/user/:id/delete", (req, res) => {
    let {id} = req.params;
    let {password:formpass,  email:newmail} = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err){
                console.log("error",err);
                return res.send("some error here");
            }
            let user = result[0];
            console.log(user);

            if(!user){
                return res.send("user not found");
            }
            if(formpass != user.password){
                return res.send("wrong password");
            }
            if(newmail != user.email){
                return res.send("wrong email");
            }
            
            let q2 = `DELETE FROM user WHERE id = ?`;

            connection.query(q2, [id], (err, result) => {
                if(err){
                    console.log("error",err);
                    return res.send("error in deleting");
                }
                res.redirect("/user");
            })
        });
    }catch(err){
        console.log("error", err);
        res.send("some error here");
    }
});


app.listen(port, () => {
    console.log(`port listen ${port}`);
});