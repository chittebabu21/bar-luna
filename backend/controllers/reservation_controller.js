// import reservation model
const reservation = require('../models/reservation_model');

// export functions
// get all reservations
exports.getAllReservations = async (req, res) => {
    try {
        // find all reservations
        const reservations = await reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error retrieving reservations' });
    }
};

// get reservation by id
exports.getReservationById = async (req, res) => {
    try {
        // find by id
        const reservationById = await reservation.findById(req.params.id);
        res.status(200).json(reservationById);
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error retrieving reservation' });
    }
};

// create reservation
exports.createReservation = async (req, res) => {
    try {
        // check if reservation exists
        let reserved = await reservation.findOne({ date: req.body.date, time: req.body.time });
        if (reserved) {
            return res.status(400).json({ message: 'Reservation already exists' });
        }

        // create reservation
        reserved = new reservation({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            date: req.body.date,
            time: req.body.time,
            pax: req.body.pax,
        });

        // save reservation
        await reserved.save();

        // send response
        res.status(201).json({ message: 'Reservation created' });
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error creating reservation' });
    }
};

// update reservation
exports.updateReservation = async (req, res) => {
    try {
        // find by id
        const reserved = await reservation.findById(req.params.id);

        // check if reservation exists
        if (!reserved) {
            return res.status(404).json({ message: 'Reservation not found' });
        } else {
            // update reservation
            reserved.name = req.body.name;
            reserved.email = req.body.email;
            reserved.phone = req.body.phone;
            reserved.date = req.body.date;
            reserved.time = req.body.time;
            reserved.pax = req.body.pax;
            
            // save reservation
            await reserved.save();

            // send response
            res.status(200).json({ message: 'Reservation updated' });
        }
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error updating reservation' });
    }
};

// delete reservation
exports.deleteReservation = async (req, res) => {
    try {
        // find by id
        const reserved = await reservation.findById(req.params.id);

        // check if reservation exists
        if (!reserved) {
            return res.status(404).json({ message: 'Reservation not found' });
        } else {
            // delete reservation
            await reservation.findByIdAndDelete(req.params.id);

            // send response
            res.status(200).json({ message: 'Reservation deleted' });
        }
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error deleting reservation' });
    }
};