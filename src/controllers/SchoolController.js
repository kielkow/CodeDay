const School = require('../models/School');

module.exports = {
  async index(req, res) {
    const { id } = req.query;

    const school = await School.find({ id });

    return res.json(school);
  },

  async store(req, res) {
    const { name, email } = req.params;

    const school = await School.create({
      name,
      email
    });

    return res.json(school);
  }
};