const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Add the 3 new properties below
  user: {
    // A user property that references the user's ObjectId that created the review.
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Adding a userName property
  userName: String,
  // Adding a userAvatar property
  userAvatar: String
}, {
  timestamps: true
});

const movieSchema = new Schema({
  title: { type: String, required: true },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Performer'
  }],
  nowShowing: { type: Boolean, default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);