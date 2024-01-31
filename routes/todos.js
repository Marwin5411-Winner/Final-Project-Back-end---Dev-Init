const express = require('express');
const router = express.Router();

const TodosController = require('../controllers/todosController');

const todosController = new TodosController();

router.post('/', todosController.create.bind(todosController));

router.get('/:id', todosController.getOne.bind(todosController));

router.get('/', todosController.get.bind(todosController));

router.put('/:id', todosController.update.bind(todosController));

router.delete('/:id', todosController.delete.bind(todosController));


module.exports = router;