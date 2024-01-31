const todoModel = require('../models/todoModel');

class TodosController {

    constructor() {
        this.todoModel = new todoModel();
    }

    async create(req, res) {
        const result = await this.todoModel.createTodo({
            user_id: parseInt(req.body.user_id),
            title: req.body.title,
            description: req.body.description,
            duedate: new Date(req.body.duedate),
            priority: req.body.priority,
            status: req.body.status
        });
        res.json("Todo created successfully");
    }

    async get(req, res) {
        const result = await this.todoModel.getTodos({
            user_id: parseInt(req.body.user_id)
        });
        res.json(result);
    }

    async getOne(req, res) {
        const result = await this.todoModel.getTodo({
            user_id: req.body.user_id,
            id: req.params.id
        });
        res.json(result);
    }

    async update(req, res) {
        const result = await this.todoModel.updateTodo({
            user_id: parseInt(req.body.user_id),
            id: parseInt(req.params.id),
            title: req.body.title,
            description: req.body.description,
            duedate: new Date(req.body.duedate),
            priority: req.body.priority,
            status: req.body.status
        });
        res.json("Todo updated successfully");
    }

    async delete(req, res) {
        const result = await this.todoModel.deleteTodo({
            user_id: parseInt(req.body.user_id),
            id: req.params.id
        });
        res.json("Todo deleted successfully");
    }


}

module.exports = TodosController;