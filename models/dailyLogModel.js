const { pool } = require('../includes/db');

class DailyLogModel {

    constructor(log) {
        this.log = log;
    }

    async createLog(log) {
        const [rows] = await pool.query('INSERT INTO daily_logs (user_id, date, content) VALUES (?, ?, ?)', [log.user_id, log.date, log.content]);
        return rows;
    }

    async getLog(log) {
        const [rows] = await pool.query('SELECT * FROM daily_logs WHERE user_id = ?', [log.user_id]);
        return rows;
    }

    async updateLog(log) {
        const [rows] = await pool.query('UPDATE daily_logs SET content = ? WHERE user_id = ? AND log_id = ?', [log.content, log.user_id, log.id]);
        return rows;
    }

    async deleteLog(log) {
        const [rows] = await pool.query('DELETE FROM daily_logs WHERE user_id = ? AND log_id = ?', [log.user_id, log.id]);
        return rows;
    }

}

module.exports = DailyLogModel;