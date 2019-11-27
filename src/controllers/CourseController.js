const api = require('../service');

module.exports = {
  async index(req, res) {
    const courses = await api.get(`/courses`);

    return res.json(courses);
  },
};