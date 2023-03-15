// import mongoose
const mongoose = require('mongoose');

// create schema for subsciptions
const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    }
}, {
    // set collection name
    collection: 'subscriptions',
});

// export model
module.exports = mongoose.model('Subscriptions', subscriptionSchema);