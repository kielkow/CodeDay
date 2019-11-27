const api = require('../service');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find();
    
    return res.json(users);
  },

  async store(req, res) {
    const user = req.params;

    await api.post(`/signup`, user);

    return res.json(user);
  },
};