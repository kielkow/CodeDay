const Conect = require('../models/Conect');

module.exports = {
  async index(req, res) {
    const { id } = req.query;

    const conect = await Conect.find({ id });

    return res.json(conect);
  },


  async store(req, res) {
    const { school_id, entherprise_id } = req.params;

    const conect = await Conect.create({
      school: school_id,
      entherprise: entherprise_id,
    });

    return res.json(conect);
  }
};