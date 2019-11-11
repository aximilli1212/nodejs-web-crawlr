  const getCrawlr = async (req, res) =>{
    return res.send({ data: 'Are you with me??' });
  },

  postCrawlr(req, res) {
    return res.send({ data: 'Just Come with me...' });
  },

export default {
  getCrawlr,
  postCrawlr,
}