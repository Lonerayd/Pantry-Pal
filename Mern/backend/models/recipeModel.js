const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required:true
  }
});

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: [ingredientSchema],
  directions: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
