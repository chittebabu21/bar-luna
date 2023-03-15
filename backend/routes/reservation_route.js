// import modules
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation_controller');

// get all reservations
router.get('/', reservationController.getAllReservations);

// get reservation by id
router.get('/:id', reservationController.getReservationById);

// create reservation
router.post('/', reservationController.createReservation);

// update reservation
router.put('/:id', reservationController.updateReservation);

// delete reservation
router.delete('/:id', reservationController.deleteReservation);

// export router
module.exports = router;