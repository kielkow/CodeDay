const Entherprise = require('../models/Entherprise');

module.exports = {
  async index(req, res) {
    const { id } = req.query;

    const entherprise = await Entherprise.find({ id });

    return res.json(entherprise);
  },

  async store(req, res) {
    const { name, email } = req.params;

    const entherprise = await Entherprise.create({
      name,
      email
    });

    return res.json(entherprise);
  }
};