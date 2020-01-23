const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  password: String
}, {
  timestamps: true
});

playerSchema.pre('save', function(next) {
    return next();
  });

module.exports = mongoose.model('Player', userSchema);