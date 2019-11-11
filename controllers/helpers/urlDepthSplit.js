 //Raw split for Crawl Depth
 const urlDepthSplit = (u,d)=>{
    const urlObject = new URL(u);
   let pathString = urlObject.pathname;
   return pathString.split('/').length - 1 <= d  ? pathString : null ;
};

module.exports = urlDepthSplit;
