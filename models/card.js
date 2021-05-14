const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// //change this
// const cardSchema = new Schema({
//   name: { type: String, required: true },
//   cmc: { type: Number, required: true },
//   colors: Array,
//   imageUrl: {type: String, required: false},
//   set: { type: String, required: true}
// });

// const Card = mongoose.model("Card", cardSchema);

// module.exports = Card;


//user schema
const userSchema = new Schema({
  displayName : {type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  cards : [
    {
      name: {type: String, required: true },
      cmc: { type: Number, required: true },
      colors: Array,
      imageUrl: {type: String, required: false},
      set: { type: String, required: true }
    }
  ]
})

const User = mongoose.model("User", userSchema);
module.exports = User; 