const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

///////////////////////////////
//----CHANGE DB ---
//////////////////////////////////
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mycards"
  );
  
  const cardSeed = [
    {
      name:"Archangel Avacyn",
      cmc: 5,
      colors:"White",
      imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" ,
      set: "SOI"
    }
  ];
  
  db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });