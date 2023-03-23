let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, required: true },
  srno: { type: Number, required: true },
});

let Relation = mongoose.model("relations", schema);

module.exports = Relation;
