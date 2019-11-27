const School = require('../models/School');
const Entherprise = require('../models/Entherprise');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let userSchool = await School.findOne({ email });

    if (!userSchool) {
      school = await School.create({ email });
      return res.json(school);
    }

    let userEntherprise = await School.findOne({ email });

    if (!userEntherprise) {
      entherprise = await Entherprise.create({ email });
      return res.json(entherprise);
    }
  }
};
