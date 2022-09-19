const mongoose = require('mongoose');

const ListingAndReviewSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  listing_url: {
    type: String,
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model(
  '',
  ListingAndReviewSchema,
  'listingsAndReviews'
);
