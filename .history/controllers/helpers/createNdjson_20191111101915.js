const ndjson = require( "ndjson" );
const fs = require('fs');
 
 // Save response into a ndjson.json file
 const createNdjson = (data)=>{
    var transformStream = ndjson.stringify();
    var outputStream = transformStream.pipe( fs.createWriteStream("/crawlData.ndjson",{flags:"a"} ) );
    // Iterate over the records and write EACH ONE to the TRANSFORM stream individually.
            transformStream.write( record );
        }
    );
     //close stream
    transformStream.end();
}

module.exports = createNdjson;