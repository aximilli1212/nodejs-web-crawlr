const createNdjson = (data)=>{
    var transformStream = ndjson.stringify();
    var outputStream = transformStream.pipe( fs.createWriteStream( __dirname + "/ndata.ndjson",{flags:"a"} ) );
    // Iterate over the records and write EACH ONE to the TRANSFORM stream individually.
    data.forEach(
        function iterator( record ) {
            transformStream.write( record );
        }
    );
     //close stream
    transformStream.end();
}
