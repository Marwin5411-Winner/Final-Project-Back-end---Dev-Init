const express = require('express');
const router = express.Router();

const LogsController = require('../controllers/logsController');

const logsController = new LogsController();

router.get('/', logsController.get.bind(logsController));

router.get('/:id', logsController.getOne.bind(logsController));

router.post('/', logsController.create.bind(logsController));

router.put('/:id', logsController.update.bind(logsController));

router.delete('/:id', logsController.delete.bind(logsController));

module.exports = router;