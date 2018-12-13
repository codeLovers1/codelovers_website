const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  }
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

// create event
module.exports.createEvent = event => {
  const result = new Event(event);
  result.save();
  return result;
};
