const EventsModel = require('../models/eventsModel');

class EventsController {

    constructor() {
        this.eventsModel = new EventsModel();
    }

    async create(req, res) {
        const result = await this.eventsModel.createEvent({
            user_id: req.body.user_id,
            title: req.body.title,
            description: req.body.description,
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        });
        res.json("Event created successfully");
    }

    async get(req, res) {
        const result = await this.eventsModel.getEvents({
            user_id: req.body.user_id
        });
        res.json(result);
    }

    async getOne(req, res) {
        const result = await this.eventsModel.getEvent({
            user_id: req.body.user_id,
            id: req.body.id
        });
        res.json(result);
    }

    async update(req, res) {
        const result = await this.eventsModel.updateEvent({
            user_id: req.body.user_id,
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            start: new Date(req.body.start),
            end: new Date(req.body.end)
        });
        res.json("Event updated successfully");
    }

    async delete(req, res) {
        const result = await this.eventsModel.deleteEvent({
            user_id: req.body.user_id,
            id: req.params.id
        });
        res.json("Event deleted successfully");
    }

}

module.exports = EventsController;