// Controller for all /genres routes

module.exports = {
  get(req, res) {
    return res.render('music', { data: 'reached /genres index route!' });
  },
};