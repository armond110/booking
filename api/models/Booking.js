const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  user: { type: mongoose.Schema.Types.ObjectId },
  checkIn: { type: Date },
  checkOut: { type: Date },
  numberOfGuests: { type: Number },
  name: { type: String },
  phone: { type: String },
  price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
