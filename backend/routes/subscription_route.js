// import modules
const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription_controller');

// get all subscriptions
router.get('/', subscriptionController.getAllSubscriptions);

// get subscription by id
router.get('/:id', subscriptionController.getSubscriptionById);

// create subscription
router.post('/', subscriptionController.createSubscription);

// delete subscription
router.delete('/:id', subscriptionController.deleteSubscription);

// export router
module.exports = router;