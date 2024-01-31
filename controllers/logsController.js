const dailyLogModel = require('../models/dailyLogModel');

class DailyLogController {
    
        constructor() {
            this.dailyLogModel = new dailyLogModel();
        }
    
        async create(req, res) {
            const result = await this.dailyLogModel.createLog({
                user_id: req.body.user_id,
                content: req.body.content,
                date: new Date()
            });
            res.json("Log created successfully");
        }
    
        async get(req, res) {
            const result = await this.dailyLogModel.getLog({
                user_id: req.body.user_id
            });
            res.json(result);
        }
    
        async getOne(req, res) {
            const result = await this.dailyLogModel.getDailyLog({
                user_id: req.body.user_id,
                id: req.params.id
            });
            res.json(result);
        }
    
        async update(req, res) {
            const result = await this.dailyLogModel.updateLog({
                user_id: req.body.user_id,
                id: req.params.id,
                content: req.body.content,
                date: new Date()
            });
            res.json("Log updated successfully");
        }
    
        async delete(req, res) {
            const result = await this.dailyLogModel.deleteLog({
                user_id: req.body.user_id,
                id: req.params.id
            });
            res.json("Log deleted successfully");
        }
    
    }

module.exports = DailyLogController;