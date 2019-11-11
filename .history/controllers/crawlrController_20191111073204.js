
module.exports = {
  getCrawlr(req, res) {
    return res.render('music', { data: 'reached /genres index route!' });
  },

  postCrawlr(req, res) {
    return res.render('music', { data: 'reached /genres index route!' });
  },
};