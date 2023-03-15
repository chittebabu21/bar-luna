// import mongoose
const mongoose = require('mongoose');

// import moment
const moment = require('moment');

// declare schema
const reservationSchema = new mongoose.Schema({
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
    date: {
        type: String,
        required: true,
        set: function(date) {
            // format date
            const formattedDate = moment(date).format('DD-MMMM-YYYY');

            // check if date is valid
            if (!moment(formattedDate).isValid()) {
                throw new Error('Invalid date');
            } else {
                // return formatted date
                return formattedDate;
            }
        }
    },
    time: {
        type: String,
        required: true,
    },
    pax: {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' }),
    }
}, {
    // set collection name
    collection: 'reservations',
});

// export model
module.exports = mongoose.model('Reservations', reservationSchema);