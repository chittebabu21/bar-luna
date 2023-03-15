// import modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// configure dotenv
dotenv.config();

// declare uri
const uri = process.env.MONGODB_URI;

// set optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// connect to database
mongoose.connect(uri, options)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error(`Error connecting to database: ${err.message}`)
    });

// export mongoose
module.exports = mongoose;