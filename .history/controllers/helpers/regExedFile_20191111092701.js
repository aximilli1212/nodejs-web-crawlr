const fetchLinks = require('./fullFetch');
const getUniqueLinks = require('./getUniqueLinks').default;
const createNdjson = require('./createNdjson').default;
const events = require('events');
const fs = require('fs');
const ndjson = require( "ndjson" );
const em = new events.EventEmitter();

// const url = "https://www.meltwater.org";
// const url = "http://www.facebook.com/";
const url = "http://google.com";
// const url = "http://dff.qbelimited.com";
const domain = new URL(url).origin;
let reqData = {url:url,rex:[/a/i,/as/i,/al/i,/ai/i],depth:3};

    // Save response into a ndjson.json file

    //Raw split for Crawl Depth
const urlPath = (u,d)=>{
     const urlObject = new URL(u);
    let pathString = urlObject.pathname;
    return pathString.split('/').length - 1 <= d  ? pathString : null ;
};

    // Recursive Crawl webpages
em.on('crawlHere',(dset)=>{
    let dataSet = [];
    fetchLinks(dset).then(response =>{
        for(let i = 0; i <= dset.depth; i++){ //getting depth links
            for(let singleLink of response){
                let newLevel = urlPath(singleLink,dset.depth); // raw split with slash as delimiter
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

let regX = reqData.rex;
for(let r of regX){
    em.emit('crawlHere',{url:reqData.url,rex:r,depth:reqData.depth});  
}
