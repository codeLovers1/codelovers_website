const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetupSchema = new Schema({
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  }
});

const Meetup = module.export = mongoose.model('Meetup', meetupSchema);

// get all meetups
module.exports.getMeetups = () => {
  return Meetup.find({});
};

// get specific meetup by id
module.exports.getMeetup = (id, callback) => {
  return Meetup.findById(id);
};

// create meetup
module.exports.createMeetup = (meetup) => {
  const result = new Meetup(meetup);
  result.save();
  return result;
};