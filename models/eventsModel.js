const { pool } = require('../includes/db');

class EventsModel {
    
        constructor(event) {
            
        }
    
        async createEvent(event) {
            const [rows] = await pool.query('INSERT INTO events (user_id, event_title, event_description, event_start, event_end) VALUES (?, ?, ?, ?, ?)', [event.user_id, event.title, event.description, event.start, event.end]);
            return rows;
        }
    
        async getEvents(event) {
            const [rows] = await pool.query('SELECT * FROM events WHERE user_id = ?', [event.user_id]);
            return rows;
        }
    
        async getEvent(event) {
            const [rows] = await pool.query('SELECT * FROM events WHERE user_id = ? AND event_id = ?', [event.user_id, event.id]);
            return rows;
        }
    
        async updateEvent(event) {
            const [rows] = await pool.query('UPDATE events SET event_title = ?, event_description = ?, event_start = ?, event_end = ? WHERE user_id = ? AND event_id = ?', [event.title, event.description, event.start, event.end, event.user_id, event.id]);
            return rows;
        }
    
        async deleteEvent(event) {
            const [rows] = await pool.query('DELETE FROM events WHERE user_id = ? AND event_id = ?', [event.user_id, event.id]);
            return rows;
        }
    
}

module.exports = EventsModel;