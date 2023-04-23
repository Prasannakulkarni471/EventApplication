const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  }
});

const Participants = mongoose.model('Participant', participantSchema);

module.exports = Participants;
