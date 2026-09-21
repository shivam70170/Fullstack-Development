const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

};


Chat.insertMany([
    {
        from : "neha",
        to : "rohan",
        msg : "hi neha this side.",
        created_at : new Date()
    },
    {
        from : "raghav",
        to : "preeti",
        msg : "teach me something",
        created_at : new Date()
    },
    {
        from : "kartik",
        to : "shivam",
        msg : " hi bro today i am ",
        created_at : new Date()
    },
    {
        from : "omu",
        to : "kartik",
        msg : "smj m aara kuch",
        created_at : new Date()
    },
    {
        from : "rashmika",
        to : "rahul",
        msg : "teach me js",
        created_at : new Date()
    },
    {
        from : "rehimi",
        to : "jdsf",
        msg : "s ifhn",
        created_at : new Date()
    },
]);