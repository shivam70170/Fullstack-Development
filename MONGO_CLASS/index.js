const mongoose = require("mongoose");

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email : String,
  age : Number
});

const User = mongoose.model("User",userSchema);

// ##update

// User.findOneAndUpdate({name : "Tony"},{age : 42},{new:true}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// ## find methods

// User.find( {age : {$gt : 47 }}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.findOne({age : {$gt : 47}})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.findById("6aa5435046d46017f9e36a50")
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// ## insert method


// const user2 = new User({
//   name : "Eve",
//   email : "eve@yahoo.com",
//   age : 48,
// });

// user2.save().then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   {
//     name:"Tony",
//     email:"tony@gmail.com",
//     age:50
//   },
//   {
//     name:"Bruce",
//     email:"bruce@gmail.com",
//     age:47
//   },
//   {
//     name:"Peter",
//     email:"peter@gmail.com",
//     age:30
//   }
// ]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// # # deleteOne 

// User.deleteOne({name : "Bruce"}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// deleteMany 

// User.deleteMany({age : 48}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// delete findByIdAndDelete

User.findByIdAndDelete("6aa5435046d46017f9e36a52").then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});