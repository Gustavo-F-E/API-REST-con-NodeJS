import express from 'express';
//import Subscriber  from '../db/db.js';
import controllers from '../controllers/controller.js';

const router = express.Router();

// Getting all subscribers
router.get('/', controllers.getAllSubscribers);

// Getting one subscriber
router.get('/:id', controllers.getSubscriberById);

// Creating one subscriber
router.post('/', controllers.createSubscriber);

// Updating one subscriber
router.patch('/:id', controllers.updateSubscriber);

// Deleting one subscriber
router.delete('/:id', controllers.deleteSubscriber);

export default { router };
