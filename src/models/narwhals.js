'use strict';

const mongoose = require('mongoose');

const narwhalSchema = mongoose.Schema({
  name: { type: String, required: true },
  horns: { type: Number, required: true },
});

const narwhalModel = mongoose.model('narwhal', narwhalSchema);

module.exports = narwhalModel;
