const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  eventRegion: {
    type: String,
    required: true,
  },
  eventCity: {
    type: String,
    required: true,
  },
  eventdesc: {
    type: String,
    required: true,
  },
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
