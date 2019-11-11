const events = require('events');
const fetchLinks = require('../helpers/fullFetch');
const urlDepthSplit = require('../helpers/urlDepthSplit');
const getUniqueLinks = require('../helpers/getUniqueLinks');
const createNdjson = require('../helpers/createNdjson');

// Init Event Emitter
const em = new events.EventEmitter();

  // Recursive Crawl webpages
  em.on('crawlHere',(dset)=>{
    const DOMAIN = new URL(dset.url).origin;
    let dataSet = [];
    fetchLinks(dset).then(response =>{
        for(let i = 0; i <= dset.depth; i++){ //getting depth links
            for(let singleLink of response){
                let newLevel = urlDepthSplit(singleLink,dset.depth); // raw split with slash as delimiter
                if(newLevel && newLevel.match(dset.rex)){ //check for lin
                    dataSet.push({url:DOMAIN+newLevel});
                }
            }
        }
       let slimSet = getUniqueLinks(dataSet);
       createNdjson([{regex:`"${dset.rex}"`,links:slimSet}]);
        console.log(slimSet);
        console.log({count:slimSet.length});
        // Crawl retrieved links 
        for(let clink of slimSet){
           em.emit('crawlHere',{url:clink,rex:dset.rex,depth:dset.depth});
        }
    }).catch(err=>{
        console.log(err);
    });
});


module.exports = {
  getCrawlr(req, res) {
    // const url = "http://google.com";
  
    return res.send({ data: 'Generated Matched Strings Download' });
  },

  postCrawlr(req, res) {

    let reqData = req.body;
  

    // let reqData = {url:url,rex:[/a/i,/as/i,/al/i,/ai/],depth:3};
    console.log(reqData);
       
    let regX = reqData.rex;
    for(let r of regX){
      em.emit('crawlHere',{url:reqData.url,rex:r,depth:reqData.depth});  
   }
  
    return res.send({ msg: 'Crawl Complete',data:reqData });
  },
};
