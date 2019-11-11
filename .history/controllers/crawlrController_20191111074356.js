module.exports = {
  getCrawlr(req, res) {
    return res.send({ data: 'reached /genres index route!' });
  },

  postCrawlr(req, res) {
    return res.send('music', { data: 'reached /genres index route!' });
  },
};