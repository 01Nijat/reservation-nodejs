const Reservation = require('../models/reservation');
const Venue = require('../models/venue');
const User = require('../models/user');

exports.createReservation = async (req, res) => {
  const { userId, venueId, reservationDate, numberOfPeople } = req.body;
  try {
    const reservation = await Reservation.create({ userId, venueId, reservationDate, numberOfPeople });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({ include: [User, Venue] });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
