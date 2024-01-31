const { pool } = require('../includes/db');

class todoModel {

    constructor() {
    }

    async createTodo(todo) {
        const [rows] = await pool.query('INSERT INTO todos (user_id, todo_title, todo_description, todo_duedate, todo_priority, todo_status) VALUES (?, ?, ?, ?, ?, ?)', [todo.user_id, todo.title, todo.description, todo.duedate, todo.priority, todo.status]);
        return rows;
    }

    async getTodos(todo) {
        const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ?', [todo.user_id]);
        return rows;
    }

    async getTodo(todo) {
        const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ? AND todo_id = ?', [todo.user_id, todo.id]);
        return rows;
    }

    async updateTodo(todo) {
        const [rows] = await pool.query('UPDATE todos SET todo_title = ?, todo_description = ?, todo_duedate = ?, todo_priority = ?, todo_status = ? WHERE user_id = ? AND todo_id = ?', [todo.title, todo.description, todo.duedate, todo.priority, todo.status, todo.user_id, todo.id]);
        return rows;
    }

    async deleteTodo(todo) {
        const [rows] = await pool.query('DELETE FROM todos WHERE user_id = ? AND todo_id = ?', [todo.user_id, todo.id]);
        return rows;
    }

}

module.exports = todoModel;