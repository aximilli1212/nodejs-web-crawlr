 // Remove Duplicates from returned links
 const getUniqueLinks = (arrayObj)=>{
  return arrayObj.filter((link, index) => {
     const _link = JSON.stringify(link);
     return index === arrayObj.findIndex(obj => {
       return JSON.stringify(obj) === _link;
     });
   });
}

module.exports =  getUniqueLinks;