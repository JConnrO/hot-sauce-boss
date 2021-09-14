const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    }