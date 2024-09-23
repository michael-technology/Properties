onmessage = (e) => {

    var jsonSource = e.data[0];
    var features = e.data[1];
    var format = e.data[2];
    var jsonFile = e.data[3];
    var layer = e.data[4];
    var map = e.data[5];

    console.log("Message received from main script");
    jsonSource.clear();
    features = format.readFeatures(jsonFile, 
        {dataProjection: 'EPSG:4326', extent: map.getView().calculateExtent(), featureProjection: 'EPSG:3857'});
        jsonSource.addFeatures(features);
    layer.changed();
    console.log("Posting message back to main script");
    
    // postMessage(workerResult);
};

async function loadVectors2(jsonSource, features, format, jsonFile, layer) {
    
    await jsonSource.clear();
    features = await format.readFeatures(jsonFile, 
        {dataProjection: 'EPSG:4326', extent: map.getView().calculateExtent(), featureProjection: 'EPSG:3857'});
    await jsonSource.addFeatures(features);
    await layer.changed();

    return new Promise(res => setTimeout(res, 10000));
}
