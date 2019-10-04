const User = require("../models/Spot");

module.exports = {
  async store(req, res) {
    return res.json({ ok: true });
  }
};
