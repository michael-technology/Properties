// import GeoJSON from 'https://cdn.jsdelivr.net/npm/ol@10.2.1/format/GeoJSON.js';
// import * as Vector from 'https://cdn.jsdelivr.net/npm/ol@10.2.1/source/Vector.js';

// import GeoJSON from 'ol/format/GeoJSON.js';
// import json_Residential250k400k_79 from './layers/Residential250k400k_79';

importScripts("./resources/ol.js");

console.log('worker started');
self.onmessage = function(e) {
    
    console.log('were in the worker');

    var format = new ol.format.GeoJSON();
    var jsonFile = JSON.parse(e.data[0]);
    var jsonSource = JSON.parse(e.data[1]);
    var extent = e.data[2];
    var features;

    // for (var feature in jsonFile.features) {
        // for (var geometry in feature.geometry) {
        //     console.log('geometry');
        //     for (var coordinates in geometry.coordinates) {
        //         console.log('coordinates[0]');
        //     }
        // }
    // };
    // console.log(jsonFile);

    // for (var i = 0; i < jsonFile.get('features').length; i++) {
    //     for (var n = 0; n < jsonFile.get('features')[i].get('geometry').get('coordinates').length; n++) {
    //         for (var j = 0; j < jsonFile.get('features')[i].get('geometry').get('coordinates')[n].length; j++) {
    //             var x = jsonFile.get('features')[i].get('geometry').get('coordinates')[n][j][0];
    //             var y = jsonFile.get('features')[i].get('geometry').get('coordinates')[n][j][1];
    //             if (x >= extent[0] && x <= extent[2] && y >= extent[1] && y <= extent[3]) {
    //                     features += jsonFile.get('features')[i];
    //                     break;
    //             }
    //         }
    //     }
    // }
    // console.log(extent);
    console.log('This is the JSON file as read within the worker:');
    console.log(jsonFile);

    var features = format.readFeatures(jsonFile, 
        {dataProjection: 'EPSG:4326', extent: extent, featureProjection: 'EPSG:3857'});
    
    // jsonSource.clear();
    // jsonSource.addFeatures(features);

    console.log('This is the JSON source as read within the worker:');
    console.log(jsonSource);
    
    self.postMessage([JSON.stringify(features)]);
};