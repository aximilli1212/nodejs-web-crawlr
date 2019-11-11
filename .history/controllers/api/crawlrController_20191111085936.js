const fetchLinks = require('./fullFetch');
const urlDepthSplit = require('./urlDepthSplit');
const getUniqueLinks = require('./getUniqueLinks');
const createNdjson = require('./createNdjson');
const events = require('events');
const em = new events.EventEmitter();

  // Recursive Crawl webpages
  em.on('crawlHere',(dset)=>{
    let dataSet = [];
    fetchLinks(dset).then(response =>{
        for(let i = 0; i <= dset.depth; i++){ //getting depth links
            for(let singleLink of response){
                let newLevel = urlDepthSplit(singleLink,dset.depth); // raw split with slash as delimiter
                if(newLevel && newLevel.match(dset.rex)){ //check for lin
                    dataSet.push({url:domain+newLevel});
                }
            }
        }

       let slimSet = getUniqueLinks(dataSet);

       createNdjson([{regex:`"${dset.rex}"`,links:slimSet}]);
        console.log(slimSet);
        console.log({count:slimSet.length});

        for(let clink of slimSet){
           em.emit('crawlHere',{url:clink,rex:dset.rex,depth:dset.depth});
        }
       
    }).catch(err=>{
        console.log(err);
    });
});


module.exports = {
  getCrawlr(req, res) {
    return res.send({ data: 'Are you with me??' });
  },

  postCrawlr(req, res) {
    return res.send({ data: 'Just Come with me...' });
  },
};