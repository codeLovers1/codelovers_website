const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Meetup = require('./meetup');

const attendeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  meetups: [ Meetup ]
});

modules.export = mongoose.model('Attendee', attendeeSchema);