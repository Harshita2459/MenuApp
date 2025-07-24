// const mongoose = require('mongoose');

// const menuSchema = new mongoose.Schema({
//   day: {
//     type: String,
//     required: true,
//     enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//   },
//   breakfast: String,
//   lunch: String,
//   snacks: String,
//   dinner: String
// }, { timestamps: true });

// module.exports = mongoose.model('Menu', menuSchema);





// const mongoose = require('mongoose');

// const mealSchema = new mongoose.Schema({
//   day: {
//     type: String,
//     required: true,
//     enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//   },
//   breakfast: String,
//   lunch: String,
//   snacks: String,
//   dinner: String
// }, { timestamps: true });


// const menuSchema = new mongoose.Schema({
//   dayWiseMenu: {
//     Sunday: mealSchema,
//     Monday: mealSchema,
//     Tuesday: mealSchema,
//     Wednesday: mealSchema,
//     Thursday: mealSchema,
//     Friday: mealSchema,
//     Saturday: mealSchema,
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Menu', menuSchema);






// server/models/Menu.js
// const mongoose = require('mongoose');

// const menuSchema = new mongoose.Schema({
//   day: { type: String, required: true, unique: true },
//   breakfast: { type: String, default: '' },
//   lunch: { type: String, default: '' },
//   snacks: { type: String, default: '' },
//   dinner: { type: String, default: '' },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Menu', menuSchema);






const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    unique: true
  },
  breakfast: String,
  lunch: String,
  snacks: String,
  dinner: String
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
