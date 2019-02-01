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
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

const Speaker = (module.export = mongoose.model("Speaker", speakerSchema));

// get all Speakers
module.exports.getSpeakers = () => {
  return Speaker.find({});
};

// get specific speakers
module.exports.getSpecificSpeakers = ids => {
  return Speaker.find({ _id: { $in: ids } });
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

// update speaker
module.exports.updateSpeaker = (speakerId, speaker) => {
  return Speaker.findById(speakerId, (err, result) => {
    Object.assign(result, speaker);
    result.save();
  });
};

// add event to speaker events
module.exports.addSpeakerEvents = (id, events) => {
  return Speaker.findById(id)
    .then(speaker => {
      speaker.events.addToSet(...events);
      speaker.save();
      return speaker;
    })
    .catch(err => {
      throw err;
    });
};
