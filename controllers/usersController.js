const UsersModel = require('../models/usersModel');

class UsersController {

    constructor() {
        this.usersModel = new UsersModel();
    }

    async register(req, res) {
        const result = await this.usersModel.createUser(req.body);
        if (result === false) {
            res.status(401).json({ error: 'Error due to existing username' });
        }
        res.status(201).json('User is registered successfully');
    }

    async login(req, res) {
        const result = await this.usersModel.comparePassword(req.body);
        if (result === true) {
        res.status(200).json('User is logged in successfully');
        } else {
            res.status(401).json({ error: 'Error due to incorrect credentials' });
        }
    }

}

module.exports = UsersController;