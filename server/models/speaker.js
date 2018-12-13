const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
  name: {
    type: String
  },
  title: {
    type: String
  },
  bio: {
    type: String,
    required: true
  },
  events: []
});

const Speaker = (module.export = mongoose.model("Speaker", speakerSchema));

// get all Speakers
module.exports.getSpeakers = () => {
  return Speaker.find({});
};

// get specific Speaker by id
module.exports.getSpeaker = (id, callback) => {
  return Speaker.findById(id);
};

// create Speaker
module.exports.createSpeaker = speaker => {
  const result = new Speaker(speaker);
  result.save();
  return result;
};
