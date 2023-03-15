// import subscription model
const subscription = require('../models/subscription_model');

// export functions
// get all subscriptions
exports.getAllSubscriptions = async (req, res) => {
    try {
        // find all subscriptions
        const subscriptions = await subscription.find();

        // send response
        res.status(200).json(subscriptions);
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error retrieving subscriptions' });
    }
};

// get subscription by id
exports.getSubscriptionById = async (req, res) => {
    try {
        // find by id
        const subscriptionById = await subscription.findById(req.params.id);

        // send response
        res.status(200).json(subscriptionById);
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error retrieving subscription' });
    }
};

// create subscription
exports.createSubscription = async (req, res) => {
    try {
        // check if subscription exists
        const subscribed = await subscription.findOne({ email: req.body.email });
        if (subscribed) {
            return res.status(400).json({ message: 'Subscription already exists' });
        } 

        // create subscription
        const newSubscription = new subscription({
            email: req.body.email,
        });

        // save subscription
        await newSubscription.save();

        // send response
        res.status(201).json({ message: 'Subscription created' });
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error creating subscription' });
    }
};

// delete subscription
exports.deleteSubscription = async (req, res) => {
    try {
        // find by id
        const subscribed = await subscription.findById(req.params.id);

        // check if subscription exists
        if (!subscribed) {
            return res.status(400).json({ message: 'Subscription does not exist' });
        }

        // delete subscription
        await subscription.findByIdAndDelete(req.params.id);

        // send response
        res.status(200).json({ message: 'Subscription deleted' });
    } catch (err) {
        // error handling
        console.error(err);
        res.status(500).json({ message: 'Error deleting subscription' });
    }
};