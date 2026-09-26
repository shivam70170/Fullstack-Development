const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("../MAJOR_PROJECT/models/listing");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err)=> {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

// INDEX ROUTE 

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings});
});

app.get("/", (req, res) => {
    res.send("hi everyone.");
});

// app.get("/testListing",async (req, res) => {
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         descreiption : "By the Beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         country : "India",
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("successfully testing")
// });

app.listen(port, () => {
    console.log("working");
});