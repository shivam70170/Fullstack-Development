const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// let Chat1 = new Chat({
//     from : "neha",
//     to : "rohan",
//     msg : "hi neha this side.",
//     created_at : new Date()
// });


// Chat1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


app.get("/",(req,res) => {
    res.send("working port is fine.")
});

app.listen(port,() => {
    console.log("port is listening");
});