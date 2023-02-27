const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
  category: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: 'User' }
});

module.exports = model('Operation', schema);