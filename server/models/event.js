const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const SpeakerModel = require("./speaker.js");

const eventSchema = new Schema({
  start_time: {
    type: String
  },
  end_time: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  speakers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Speaker"
    }
  ]
});

const Event = (module.export = mongoose.model("Event", eventSchema));

// get all events
module.exports.getEvents = () => {
  return Event.find({});
};

// get specific event by id
module.exports.getEvent = (id, callback) => {
  return Event.findById(id);
};

// get specific speakers
module.exports.getSpecificEvents = ids => {
  return Event.find({ _id: { $in: ids } });
};

// create event
module.exports.createEvent = event => {
  const result = new Event(event);
  result.save();
  return result;
};

// update event
module.exports.updateEvent = (eventId, event) => {
  return Event.findById(eventId, (err, result) => {
    Object.assign(result, event);
    result.save();
  });
};

// add speaker to event speakers
module.exports.addEventSpeakers = (id, speakers) => {
  return Event.findById(id)
    .then(event => {
      event.speakers.addToSet(...speakers);
      event.save();
      return event;
    })
    .catch(err => {
      throw err;
    });
};
