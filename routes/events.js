const express = require('express');
const router = express.Router();

const EventsController = require('../controllers/eventsController');

const eventsController = new EventsController();

router.get('/', eventsController.get.bind(eventsController));

router.get('/:id', eventsController.getOne.bind(eventsController));

router.post('/', eventsController.create.bind(eventsController));

router.put('/:id', eventsController.update.bind(eventsController));

router.delete('/:id', eventsController.delete.bind(eventsController));

module.exports = router;