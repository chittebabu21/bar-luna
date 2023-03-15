// import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./dao/db');
const reservationRoute = require('./routes/reservation_route');
const subscriptionRoute = require('./routes/subscription_route');


// configure dotenv
dotenv.config();

// create express app
const app = express();

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// set port
const port = process.env.PORT || 3000;

// set routes for reservations
app.use('/reservations', reservationRoute);

// set routes for subscriptions
app.use('/subscriptions', subscriptionRoute);

// start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});