const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favPlayerSchema = new mongoose.Schema({
  name: String,
  // user: String,
}, {
  timestamps: true
});

favPlayerSchema.pre('save', function(next) {
    return next();
  });

module.exports = mongoose.model('FavPlayer', favPlayerSchema);