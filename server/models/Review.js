const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat")

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      maxlength: 1000,
    },
   email: {
    type: String,
    required: true
   },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reviewSchema;
