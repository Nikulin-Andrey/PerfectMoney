const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  amount: { type: Number, default: 0 },
  operations: [{ type: Types.ObjectId, ref: 'Operation' }]
});

module.exports = model('User', schema);