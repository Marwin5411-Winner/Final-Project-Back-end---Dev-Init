const { pool } = require('../includes/db');
const bcrypt = require('bcrypt');
const DailyLogModel = require('./dailyLogModel');

class UsersModel {

    constructor(user) {
        this.user = user;
        this.dailyLogModel = new DailyLogModel();
    }

    async createUser(user) {
        const result = await pool.query('SELECT * FROM users WHERE username = ?', [user.username]);
        if (result[0].length > 0) {
            return false;
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        const [rows] = await pool.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [user.username, user.password, user.email]);
        this.dailyLogModel.createLog({ user_id: rows.insertId, date: new Date(), content: 'user_created' });
        return rows;
    }

    async comparePassword(user) {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [user.username]);
        if (rows.length > 0) {
            const userResult = rows[0];
            const result = await bcrypt.compare(user.password, userResult.password);
            this.dailyLogModel.createLog({ user_id: userResult.user_id, date: new Date(), content: 'user_loggedIn_success' });
            return result;
        }
        this.dailyLogModel.createLog({ user_id: userResult.user_id, date: new Date(), content: 'user_loggedIn_failed' });
        return false;
    }

}

module.exports = UsersModel;