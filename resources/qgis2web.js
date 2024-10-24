
var map = new ol.Map({
    target: 'map',
    renderer: 'canvas',
    layers: layersList,
    view: new ol.View({
        extent: [-12933412.183648, 3566020.476064, -11977818.911751, 4156358.773794], maxZoom: 22, minZoom: 8, projection: new ol.proj.Projection({
            code: 'EPSG:3857',
            //extent: [-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789],
            units: 'm'}),
            constrainResolution: true
    })
});

//initial view - epsg:3857 coordinates if not "Match project CRS"
map.getView().fit([-12933412.183648, 3566020.476064, -11977818.911751, 4156358.773794], map.getSize());

////small screen definition
    var hasTouchScreen = map.getViewport().classList.contains('ol-touch');
    var isSmallScreen = window.innerWidth < 650;

////controls container

    //top left container
    var topLeftContainer = new ol.control.Control({
        element: (() => {
            var topLeftContainer = document.createElement('div');
            topLeftContainer.id = 'top-left-container';
            return topLeftContainer;
        })(),
    });
    map.addControl(topLeftContainer)

    //bottom left container
    var bottomLeftContainer = new ol.control.Control({
        element: (() => {
            var bottomLeftContainer = document.createElement('div');
            bottomLeftContainer.id = 'bottom-left-container';
            return bottomLeftContainer;
        })(),
    });
    map.addControl(bottomLeftContainer)
  
    //top right container
    var topRightContainer = new ol.control.Control({
        element: (() => {
            var topRightContainer = document.createElement('div');
            topRightContainer.id = 'top-right-container';
            return topRightContainer;
        })(),
    });
    map.addControl(topRightContainer)

    //bottom right container
    var bottomRightContainer = new ol.control.Control({
        element: (() => {
            var bottomRightContainer = document.createElement('div');
            bottomRightContainer.id = 'bottom-right-container';
            return bottomRightContainer;
        })(),
    });
    map.addControl(bottomRightContainer)

//popup
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
var sketch;

closer.onclick = function() {
    if (map.getView().getZoom() < 16) {
        popupContent = '<ul>Zoom in closer to select a parcel.</ul>';
    }
    if (map.getView().getZoom() >= 16) {
        popupContent = '<ul>Select a parcel to view it\'s info.</ul>';
    }
    updatePopup();
    return false;
};
// var overlayPopup = new ol.Overlay({
//     element: 'bottom-left-container'
// });
// map.addOverlay(overlayPopup)

var overlayPopup = new ol.control.Control({
    element: container,
    groupSelectStyle: 'group',
    activationMode: 'click',
	startActive: true,
	tipLabel: "Parcel Info",
    target: 'bottom-left-container',
    label: '»',
	collapseLabel: '«',
	collapseTipLabel: 'Close'
    });
map.addControl(overlayPopup);
if (hasTouchScreen || isSmallScreen) {
	document.addEventListener('DOMContentLoaded', function() {
		setTimeout(function() {
			overlayPopup.hidePanel();
		}, 500);
	});	
}
    
    
var NO_POPUP = 0
var ALL_FIELDS = 1

/**
 * Returns either NO_POPUP, ALL_FIELDS or the name of a single field to use for
 * a given layer
 * @param layerList {Array} List of ol.Layer instances
 * @param layer {ol.Layer} Layer to find field info about
 */
function getPopupFields(layerList, layer) {
    // Determine the index that the layer will have in the popupLayers Array,
    // if the layersList contains more items than popupLayers then we need to
    // adjust the index to take into account the base maps group
    var idx = layersList.indexOf(layer) - (layersList.length - popupLayers.length);
    return popupLayers[idx];
}

//highligth collection
var collection = new ol.Collection();
var featureOverlay = new ol.layer.Vector({
    map: map,
    source: new ol.source.Vector({
        features: collection,
        useSpatialIndex: false // optional, might improve performance
    }),
    style: [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#f00',
            width: 1
        }),
        // fill: new ol.style.Fill({
        //     color: 'rgba(255,0,0,0.1)'
        // }),
    })],
    updateWhileAnimating: true, // optional, for instant visual feedback
    updateWhileInteracting: true // optional, for instant visual feedback
});

var doHighlight = true;
var doHover = false;

function createPopupField(currentFeature, currentFeatureKeys, layer) {
    var popupText = '';
    for (var i = 0; i < currentFeatureKeys.length; i++) {
        if (currentFeatureKeys[i] != 'geometry') {
            var popupField = '';
            if (currentFeatureKeys[i] == 'LAND_SIZE') {
                currentFeature.set(currentFeatureKeys[i], currentFeature.get(currentFeatureKeys[i]) / 43560);
            }
            if (layer.get('fieldLabels')[currentFeatureKeys[i]] == "hidden field") {
                continue;
            } else if (layer.get('fieldLabels')[currentFeatureKeys[i]] == "inline label - visible with data") {
                if (currentFeature.get(currentFeatureKeys[i]) == null) {
                    continue;
                }
            }
            if (layer.get('fieldLabels')[currentFeatureKeys[i]] == "inline label - always visible" ||
                layer.get('fieldLabels')[currentFeatureKeys[i]] == "inline label - visible with data") {
                popupField += '<th>' + layer.get('fieldAliases')[currentFeatureKeys[i]] + '</th><td>';
            } else {
                popupField += '<td colspan="2">';
            }
            if (layer.get('fieldLabels')[currentFeatureKeys[i]] == "header label - visible with data") {
                if (currentFeature.get(currentFeatureKeys[i]) == null) {
                    continue;
                }
            }
            if (layer.get('fieldLabels')[currentFeatureKeys[i]] == "header label - always visible" ||
                layer.get('fieldLabels')[currentFeatureKeys[i]] == "header label - visible with data") {
                popupField += '<strong>' + layer.get('fieldAliases')[currentFeatureKeys[i]] + '</strong><br />';
            }
            if (layer.get('fieldImages')[currentFeatureKeys[i]] != "ExternalResource") {
				popupField += (currentFeature.get(currentFeatureKeys[i]) != null ? autolinker.link(currentFeature.get(currentFeatureKeys[i]).toLocaleString()) + '</td>' : '');
			} else {
				var fieldValue = currentFeature.get(currentFeatureKeys[i]);
				if (/\.(gif|jpg|jpeg|tif|tiff|png|avif|webp|svg)$/i.test(fieldValue)) {
					popupField += (fieldValue != null ? '<img src="images/' + fieldValue.replace(/[\\\/:]/g, '_').trim() + '" /></td>' : '');
				} else if (/\.(mp4|webm|ogg|avi|mov|flv)$/i.test(fieldValue)) {
					popupField += (fieldValue != null ? '<video controls><source src="images/' + fieldValue.replace(/[\\\/:]/g, '_').trim() + '" type="video/mp4">Il tuo browser non supporta il tag video.</video></td>' : '');
				} else {
					popupField += (fieldValue != null ? autolinker.link(fieldValue.toLocaleString()) + '</td>' : '');
				}
			}
            popupText += '<tr>' + popupField + '</tr>';
        }
    }
    return popupText;
}

var highlight;
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

function onPointerMove(evt) {
    if (!doHover && !doHighlight) {
        return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var coord = evt.coordinate;
    var popupField;
    var currentFeature;
    var currentLayer;
    var currentFeatureKeys;
    var clusteredFeatures;
    var clusterLength;
    var popupText = '<ul>';
    var parcelID = '';

    if (doHover) {
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
            if (parcelID !== feature.get('APN') && parcelID !== feature.get('PARCEL') && layer && feature instanceof ol.Feature && (layer.get("interactive") || layer.get("interactive") == undefined)) {
                var doPopup = false;
                var centroid = ol.proj.toLonLat(ol.extent.getCenter(feature.getGeometry().getExtent()));
                feature.set('HighRes 5D Map', 'HTTPS://GIS.PIMA.GOV/PICTOMETRY/IPA/LLVIEWER.ASPX?LAT=' + centroid[1] + '&LON=' + centroid[0]);
                parcelID = feature.get('PARCEL');
                if (parcelID === undefined) {
                    parcelID = feature.get('APN');
                    feature.set('HighRes 5D Map', 'HTTPS://MAPS.MCASSESSOR.MARICOPA.GOV/IPA.ASPX?1=' + centroid[1] + '&2=' + centroid[0]);
                } else {
                    feature.set('HighRes 5D Map', 'HTTPS://GIS.PIMA.GOV/PICTOMETRY/IPA/LLVIEWER.ASPX?LAT=' + centroid[1] + '&LON=' + centroid[0]);
                }
                for (k in layer.get('fieldImages')) {
                    if (layer.get('fieldImages')[k] != "Hidden") {
                        doPopup = true;
                    }
                }
                currentFeature = feature;
                currentLayer = layer;
                clusteredFeatures = feature.get("features");
                if (clusteredFeatures) {
                    clusterLength = clusteredFeatures.length;
                }
                var clusterFeature;
                if (typeof clusteredFeatures !== "undefined") {
                    if (doPopup) {
                        for(var n=0; n<clusteredFeatures.length; n++) {
                            currentFeature = clusteredFeatures[n];
                            currentFeatureKeys = currentFeature.getKeys();
                            popupText += '<li><table>';
                            popupText += '<a>' + '<b>' + feature.get('Land Use') + '</b>' + '</a>';
                            popupText += createPopupField(currentFeature, currentFeatureKeys, layer);
                            popupText += '</table></li>';    
                        }
                    }
                } else {
                    currentFeatureKeys = currentFeature.getKeys();
                    if (doPopup) {
                        popupText += '<li><table>';
                        popupText += '<a>' + '<b>' + feature.get('Land Use') + '</b>' + '</a>';
                        popupText += createPopupField(currentFeature, currentFeatureKeys, layer);
                        popupText += '</table></li>';
                    }
                }
            }
        });
    }
    if (popupText == '<ul>') {
        popupText = '';
    } else {
        popupText += '</ul>';
    }
    
	if (doHighlight) {
        if (currentFeature !== highlight) {
            if (highlight) {
                featureOverlay.getSource().removeFeature(highlight);
            }
            if (currentFeature) {
                var featureStyle
                if (typeof clusteredFeatures == "undefined") {
					var style = currentLayer.getStyle();
					var styleFunction = typeof style === 'function' ? style : function() { return style; };
					featureStyle = styleFunction(currentFeature)[0];
				} else {
					featureStyle = currentLayer.getStyle().toString();
				}

                if (currentFeature.getGeometry().getType() == 'Point' || currentFeature.getGeometry().getType() == 'MultiPoint') {
                    var radius
					// if (typeof clusteredFeatures == "undefined") {
					// 	radius = featureStyle.getImage().getRadius();
					// } else {
					// 	radius = parseFloat(featureStyle.split('radius')[1].split(' ')[1]) + clusterLength;
					// }

                    highlightStyle = new ol.style.Style({
                        // image: new ol.style.Circle({
                        //     stroke: new ol.style.Stroke({
                        //         color: '#00ffff',
                        //         lineDash: null,
                        //         width: 5
                        //     }),
                        //     // fill: new ol.style.Fill({
                        //     //     color: "#00ffff"
                        //     // }),
                        //     radius: radius
                        // })
                    })
                } else if (currentFeature.getGeometry().getType() == 'LineString' || currentFeature.getGeometry().getType() == 'MultiLineString') {

                    var featureWidth = featureStyle.getStroke().getWidth();

                    highlightStyle = new ol.style.Style({
                        // stroke: new ol.style.Stroke({
                        //     color: '#00ffff',
                        //     lineDash: null,
                        //     width: 5
                        // })
                    });

                } else {
                    highlightStyle = new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: '#00ffff',
                            lineDash: null,
                            width: 5
                        }),
                        // fill: new ol.style.Fill({
                        //     color: '#00ffff'
                        // })
                    })
                }
                featureOverlay.getSource().addFeature(currentFeature);
                featureOverlay.setStyle(highlightStyle);
            }
            highlight = currentFeature;
        }
    }

    if (doHover) {
        if (popupText) {
            overlayPopup.setPosition(coord);
            content.innerHTML = popupText;
            container.style.display = 'block';        
        } else {
            container.style.display = 'none';
            closer.blur(); 
        }
    }
};

map.on('pointermove', onPointerMove);

// const myWorker = new Worker('./resources/vectorWorker.js'); // , { type: "module" });
// myWorker.onerror = function(event){
//     throw new Error(event.message + " (" + event.filename + ":" + event.lineno + ")");
// };


// map.on('rendercomplete', function() {
//     featureDisplayList = [];
// });

// map.on('loadstart', function() {
//     featureDisplayList = [];
// });

// map.on('loadend', function() {
//     featureDisplayList = [];
// });

// map.on('movestart', function() {
//     featureDisplayList = [];
// });

// map.on('precompose', function() {
//     featureDisplayList = [];
// });

// map.on('postcompose', function() {
//     featureDisplayList = [];
// });

// map.on('rendercomplete', function() {
//     console.log(featureDisplayList);
//     featureDisplayList = [];

//                 jsonSource_TopLeft.clear();
//                 jsonSource_TopLeft.refresh();
//                 jsonSource_BottomLeft.clear();
//                 jsonSource_BottomLeft.refresh();
                
//                 jsonSource_TopMidLeft.clear();
//                 jsonSource_TopMidLeft.refresh();
//                 jsonSource_BottomMidLeft.clear();
//                 jsonSource_BottomMidLeft.refresh();

//                 jsonSource_TopMidRight.clear();
//                 jsonSource_TopMidRight.refresh();
//                 jsonSource_BottomMidRight.clear();
//                 jsonSource_BottomMidRight.refresh();

//                 jsonSource_TopRight.clear();
//                 jsonSource_TopRight.refresh();
//                 jsonSource_BottomRight.clear();
//                 jsonSource_BottomRight.refresh();

//                 jsonSource_TopLeft_Maricopa.clear();
//                 jsonSource_TopLeft_Maricopa.refresh();
//                 jsonSource_BottomLeft_Maricopa.clear();
//                 jsonSource_BottomLeft_Maricopa.refresh();

//                 jsonSource_TopMidLeft_Maricopa.clear();
//                 jsonSource_TopMidLeft_Maricopa.refresh();
//                 jsonSource_BottomMidLeft_Maricopa.clear();
//                 jsonSource_BottomMidLeft_Maricopa.refresh();

//                 jsonSource_TopMidRight_Maricopa.clear();
//                 jsonSource_TopMidRight_Maricopa.refresh();
//                 jsonSource_BottomMidRight_Maricopa.clear();
//                 jsonSource_BottomMidRight_Maricopa.refresh();

//                 jsonSource_TopRight_Maricopa.clear();
//                 jsonSource_TopRight_Maricopa.refresh();
//                 jsonSource_BottomRight_Maricopa.clear();
//                 jsonSource_BottomRight_Maricopa.refresh();
// });

// map.on('moveend', function() {
//     map.getLayers().forEach(function (layer) {
//         if (layer instanceof ol.layer.Group) {
//             layer.getLayers().forEach (function (groupLayer) {
//                 if(groupLayer instanceof ol.layer.Vector && groupLayer.get('popuplayertitle') === 'Bottom Right') {
//                     var features = groupLayer.getSource().getFeatures();
//                     console.log(groupLayer);
//                     console.log(features);
//                 }
//             })
//         }
//     });
// });

var popupContent = '<ul>Zoom in closer to select a parcel.</ul>';
var popupCoord = null;
var featuresPopupActive = true;
map.on('moveend', function() {
        if ((popupContent === '<ul>' || popupContent === '<ul>Select a parcel to view it\'s info.</ul>') && map.getView().getZoom() < 16) {
            popupContent = '<ul>Zoom in closer to select a parcel.</ul>';
        }
        if ((popupContent === '<ul>' || popupContent === '<ul>Zoom in closer to select a parcel.</ul>') && map.getView().getZoom() >= 16) { 
            popupContent = '<ul>Select a parcel to view it\'s info.</ul>';
        } 

        if (map.getView().getZoom() >= 16) {
            //if (window.Worker) {
                var extent = ol.proj.transformExtent(map.getView().calculateExtent(), 'EPSG:3857','EPSG:4326');
                var left = extent[0];
                var bottom = extent[1];
                var right = extent[2];
                var top = extent[3];
                var horizontalMid = (right + ((left - right) / 2));
                var verticalMid = (bottom + ((top - bottom) / 2));
                var horizontalMidLeft = (horizontalMid + ((left - horizontalMid) / 2));
                var horizontalMidRight = (right + ((horizontalMid - right) / 2));

                var extentTopLeft = left + '%2C' + top + '%2C' + horizontalMidLeft + '%2C' + verticalMid;
                var extentBottomLeft = left + '%2C' + verticalMid + '%2C' + horizontalMidLeft + '%2C' + bottom;

                var extentTopMidLeft = horizontalMidLeft + '%2C' + top + '%2C' + horizontalMid + '%2C' + verticalMid;
                var extentBottomMidLeft = horizontalMidLeft + '%2C' + verticalMid + '%2C' + horizontalMid + '%2C' + bottom;

                var extentTopMidRight = horizontalMid + '%2C' + top + '%2C' + horizontalMidRight + '%2C' + verticalMid;
                var extentBottomMidRight = horizontalMid + '%2C' + verticalMid + '%2C' + horizontalMidRight + '%2C' + bottom;

                var extentTopRight = horizontalMidRight + '%2C' + top + '%2C' + right + '%2C' + verticalMid;
                var extentBottomRight = horizontalMidRight + '%2C' + verticalMid + '%2C' + right + '%2C' + bottom;


                // console.log(featureDisplayList);
                featureDisplayList = [];
                topLeftDisplayList = [];
                bottomLeftDisplayList = [];
            

                // jsonSource_TopLeft.clear();
                jsonSource_TopLeft.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentTopLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopLeft.refresh();
                // jsonSource_BottomLeft.clear();
                jsonSource_BottomLeft.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentBottomLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomLeft.refresh();
                
                // jsonSource_TopMidLeft.clear();
                jsonSource_TopMidLeft.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentTopMidLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopMidLeft.refresh();
                // jsonSource_BottomMidLeft.clear();
                jsonSource_BottomMidLeft.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentBottomMidLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomMidLeft.refresh();

                // jsonSource_TopMidRight.clear();
                jsonSource_TopMidRight.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentTopMidRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopMidRight.refresh();
                // jsonSource_BottomMidRight.clear();
                jsonSource_BottomMidRight.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentBottomMidRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomMidRight.refresh();

                // jsonSource_TopRight.clear();
                jsonSource_TopRight.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentTopRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopRight.refresh();
                // jsonSource_BottomRight.clear();
                jsonSource_BottomRight.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D1&outFields=PARCEL,ADDRESS_OL,ZIP,ZIP4,LOT,MAIL1,MAIL2,MAIL3,MAIL4,MAIL5,PARCEL_USE,GISACRES,TAXAREA,TAXYR,LIMNET,FCV,LON,LAT,LINK&geometry=' + extentBottomRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomRight.refresh();


                jsonSource_Addresses1_88.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/Addresses/MapServer/3/query?where=1%3D1&outFields=STREET_NO,ADDRESS,ZIPCODE,ZIPCITY,LON,LAT&geometry=' + extent[0] + '%2C' + extent[1] + '%2C' + extent[2] + '%2C' + extent[3] + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_Addresses1_88.refresh();

                // jsonSource_TopLeft_Maricopa.clear();
                jsonSource_TopLeft_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentTopLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopLeft_Maricopa.refresh();
                // jsonSource_BottomLeft_Maricopa.clear();
                jsonSource_BottomLeft_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentBottomLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomLeft_Maricopa.refresh();

                // jsonSource_TopMidLeft_Maricopa.clear();
                jsonSource_TopMidLeft_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentTopMidLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopMidLeft_Maricopa.refresh();
                // jsonSource_BottomMidLeft_Maricopa.clear();
                jsonSource_BottomMidLeft_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentBottomMidLeft + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomMidLeft_Maricopa.refresh();

                // jsonSource_TopMidRight_Maricopa.clear();
                jsonSource_TopMidRight_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentTopMidRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopMidRight_Maricopa.refresh();
                // jsonSource_BottomMidRight_Maricopa.clear();
                jsonSource_BottomMidRight_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentBottomMidRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomMidRight_Maricopa.refresh();

                // jsonSource_TopRight_Maricopa.clear();
                jsonSource_TopRight_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentTopRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_TopRight_Maricopa.refresh();
                // jsonSource_BottomRight_Maricopa.clear();
                jsonSource_BottomRight_Maricopa.setUrl('https://gis.mcassessor.maricopa.gov/arcgis/rest/services/MaricopaDynamicQueryService/MapServer/3/query?where=1%3D1&outFields=APN,PHYSICAL_ADDRESS,LOT_NUM,OWNER_NAME,INCAREOF,MAIL_ADDRESS,MAIL_ADDR1,MAIL_ADDR2,MAIL_CITY,MAIL_STATE,MAIL_ZIP,PUC,LAND_SIZE,LIVING_SPACE,CONST_YEAR,SALE_DATE,SALE_PRICE,TAX_YR_CUR,FCV_CUR,LPV_CUR,TAX_YR_PREV,FCV_PREV,LPV_PREV,LONGITUDE,LATITUDE&geometry=' + extentBottomRight + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                jsonSource_BottomRight_Maricopa.refresh();


                // map.getLayers().forEach(function (layer) {
                //     if (layer instanceof ol.layer.Group) {
                //         layer.getLayers().forEach (function (groupLayer) {
                //             if (groupLayer instanceof ol.layer.Vector) {
                //                 if (groupLayer.get('popuplayertitle') === 'Top Left') {
                //                     var features = groupLayer.getSource().getFeatures();
                //                     topLeftDisplayList.push(features);
                //                 } else if (groupLayer.get('popuplayertitle') === 'Bottom Left') {
                //                     var features = groupLayer.getSource().getFeatures();
                //                     bottomLeftDisplayList.push(features);
                //                 }
                //             }
                //         })
                //     }
                // });
                // console.log(bottomLeftDisplayList);

                // featureDisplayList = [];



                // jsonSource_Addresses1_88.setUrl('https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/Addresses/MapServer/3/query?where=1%3D1&outFields=STREET_NO,ADDRESS,ZIPCODE,ZIPCITY,LON,LAT&geometry=' + extent[0] + '%2C' + extent[1] + '%2C' + extent[2] + '%2C' + extent[3] + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
                // jsonSource_Addresses1_88.refresh();

                // var format = new ol.format.GeoJSON();
                // var features = format.readFeatures(json_Residential250k400k_79, 
                    // {dataProjection: 'EPSG:4326', extent: extent, featureProjection: 'EPSG:3857'});
                // console.log(features); 
                // myWorker.postMessage([JSON.stringify(json_Residential250k400k_79), JSON.stringify(jsonSource_Residential250k400k_79), extent]);
                // console.log('should have triggered worker'); 
                // jsonSource_Residential250k400k_79.clear();
                // myWorker.postMessage([extent, 33, "this"]);
                // jsonSource_Residential250k400k_79.addFeatures(features_Residential250k400k_79);
                // lyr_Residential250k400k_79.changed();
                //myWorker.postMessage([extent]);
            //}
        }
        updatePopup();
});

// myWorker.onmessage = function(e) {
//     var message = JSON.parse(e.data);
//     console.log('This is the JSON parsed features sent from the worker:');
//     console.log(message);
//     // features_Residential250k400k_79 = format_Residential250k400k_79.writeFeaturesObject(e.data);
//     jsonSource_Residential250k400k_79.clear();
//     jsonSource_Residential250k400k_79.addFeatures(message);
//     console.log('This is the JSON source after adding the features:');
//     console.log(jsonSource_Residential250k400k_79);
//     // jsonSource_Residential250k400k_79 = message;
//     jsonSource_Residential250k400k_79.changed();
//     lyr_Residential250k400k_79.changed();
// };

function updatePopup() {
    if (popupContent) {
        //overlayPopup.setPosition(popupCoord);
        content.innerHTML = popupContent;
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
        closer.blur();
    }
} 

function onSingleClickFeatures(evt) {
    if (doHover || sketch) {
        return;
    }
    if (!featuresPopupActive) {
        featuresPopupActive = true;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var coord = evt.coordinate;
    var popupField;
    var currentFeature;
    var currentFeatureKeys;
    var clusteredFeatures;
    var popupText = '<ul>';
    var parcelID = '';
    
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        if (parcelID !== feature.get('APN') && parcelID !== feature.get('PARCEL') && layer && feature instanceof ol.Feature && (layer.get("interactive") || layer.get("interactive") === undefined)) {
            var doPopup = false;
            var centroid = ol.proj.toLonLat(ol.extent.getCenter(feature.getGeometry().getExtent()));
            parcelID = feature.get('PARCEL');
            if (parcelID === undefined) {
                parcelID = feature.get('APN');
                feature.set('LINK', 'HTTPS://MCASSESSOR.MARICOPA.GOV/MCS/?q=' + feature.get('APN'));
                feature.set('HighRes 5D Map', 'HTTPS://MAPS.MCASSESSOR.MARICOPA.GOV/IPA.ASPX?1=' + feature.get('LATITUDE') + '&2=' + feature.get('LONGITUDE'));
            } else {
                feature.set('HighRes 5D Map', 'HTTPS://GIS.PIMA.GOV/PICTOMETRY/IPA/LLVIEWER.ASPX?LAT=' + feature.get('LAT') + '&LON=' + feature.get('LON'));
            }
            for (var k in layer.get('fieldImages')) {
                if (layer.get('fieldImages')[k] !== "Hidden") {
                    doPopup = true;
                }
            }
            currentFeature = feature;
            clusteredFeatures = feature.get("features");
            if (typeof clusteredFeatures !== "undefined") {
                if (doPopup) {
                    for(var n = 0; n < clusteredFeatures.length; n++) {
                        currentFeature = clusteredFeatures[n];
                        currentFeatureKeys = currentFeature.getKeys();
                        popupText += '<li><table>';
                        popupText += '<a><b>' + feature.get('Land Use') + '</b></a>';
                        popupText += createPopupField(currentFeature, currentFeatureKeys, layer);
                        popupText += '</table></li>';
                    }
                }
            } else {
                currentFeatureKeys = currentFeature.getKeys();
                if (doPopup) {
                    popupText += '<li><table>';
                    popupText += '<a><b>' + feature.get('Land Use') + '</b></a>';
                    popupText += createPopupField(currentFeature, currentFeatureKeys, layer);
                    popupText += '</table></li>';  
                }
            }
        }
    });
    if ((popupText === '<ul>' || popupText === '<ul>Select a parcel to view it\'s info.</ul>') && map.getView().getZoom() < 16) {
        popupText = '<ul>Zoom in closer to select a parcel.</ul>';
    }
    if ((popupText === '<ul>' || popupText === '<ul>Zoom in closer to select a parcel.</ul>') && map.getView().getZoom() >= 16) {
        popupText = '<ul>Select a parcel to view it\'s info.</ul>';
    }
    if (popupText !== '<ul>' && popupText !== '<ul>Zoom in closer to select a parcel.</ul>' && popupText !== '<ul>Select a parcel to view it\'s info.</ul>') {
        popupText += '</ul>';
    }
	
	popupContent = popupText;
    popupCoord = coord;
    updatePopup();
}

function onSingleClickWMS(evt) {
    if (doHover || sketch) {
        return;
    }
	if (!featuresPopupActive) {
		popupContent = '';
	}
    var coord = evt.coordinate;
    var viewProjection = map.getView().getProjection();
    var viewResolution = map.getView().getResolution();

    for (var i = 0; i < wms_layers.length; i++) {
        if (wms_layers[i][1] && wms_layers[i][0].getVisible()) {
            var url = wms_layers[i][0].getSource().getFeatureInfoUrl(
                evt.coordinate, viewResolution, viewProjection, {
                    'INFO_FORMAT': 'text/html',
                });
            if (url) {				
                const wmsTitle = wms_layers[i][0].get('popuplayertitle');					
                var ldsRoller = '<div id="lds-roller"><img class="lds-roller-img" style="height: 25px; width: 25px;"></img></div>';
				
                popupCoord = coord;
				popupContent += ldsRoller;
                updatePopup();

                var timeoutPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(new Error('Timeout exceeded'));
                    }, 5000); // (5 second)
                });

                Promise.race([
                    fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(url)),
                    timeoutPromise
                ])
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    }
                })
                .then((html) => {
                    if (html.indexOf('<table') !== -1) {
                        popupContent += '<a><b>' + wmsTitle + '</b></a>';
                        popupContent += html + '<p></p>';
                        updatePopup();
                    }
                })
                // .catch((error) => {
				// })
                .finally(() => {
                    setTimeout(() => {
                        var loaderIcon = document.querySelector('#lds-roller');
						loaderIcon.remove();
                    }, 500); // (0.5 second)	
                });
            }
        }
    }
}

map.on('singleclick', onSingleClickFeatures);
map.on('singleclick', onSingleClickWMS);

//get container
var topLeftContainerDiv = document.getElementById('top-left-container')
var bottomLeftContainerDiv = document.getElementById('bottom-left-container')
var bottomRightContainerDiv = document.getElementById('bottom-right-container')

//title

//abstract


//geolocate

isTracking = false;
var geolocateControl = (function (Control) {
    geolocateControl = function(opt_options) {
        var options = opt_options || {};
        var button = document.createElement('button');
        button.className += ' fa fa-map-marker';
        var handleGeolocate = function() {
            if (isTracking) {
                map.removeLayer(geolocateOverlay);
                isTracking = false;
          } else if (geolocation.getTracking()) {
                map.addLayer(geolocateOverlay);
                // map.getView().setCenter(geolocation.getPosition());
                map.getView().animate({
                  zoom: 18,
                  center: geolocation.getPosition()
                });
                isTracking = true;
          }
        };
        button.addEventListener('click', handleGeolocate, false);
        button.addEventListener('touchstart', handleGeolocate, false);
        var element = document.createElement('div');
        element.className = 'geolocate ol-unselectable ol-control';
        element.appendChild(button);
        ol.control.Control.call(this, {
            element: element,
            target: options.target
        });
    };
    if (Control) geolocateControl.__proto__ = Control;
    geolocateControl.prototype = Object.create(Control && Control.prototype);
    geolocateControl.prototype.constructor = geolocateControl;
    return geolocateControl;
}(ol.control.Control));
map.addControl(new geolocateControl())

      var geolocation = new ol.Geolocation({
  projection: map.getView().getProjection()
});


var accuracyFeature = new ol.Feature();
geolocation.on('change:accuracyGeometry', function() {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

var positionFeature = new ol.Feature();
positionFeature.setStyle(new ol.style.Style({
  image: new ol.style.Circle({
    radius: 6,
    fill: new ol.style.Fill({
      color: '#3399CC'
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: 2
    })
  })
}));

geolocation.on('change:position', function() {
  var coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ?
      new ol.geom.Point(coordinates) : null);
});

var geolocateOverlay = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  })
});

geolocation.setTracking(true);


//measurement

var measuring = false;
var measureControl = (function (Control) {
    measureControl = function(opt_options) {

      var options = opt_options || {};

      var measurebutton = document.createElement('button');
      measurebutton.className += ' fas fa-ruler ';

      var this_ = this;
      var handleMeasure = function(e) {
        if (!measuring) {
            selectLabel.style.display = "";
            this_.getMap().addInteraction(draw);
            createHelpTooltip();
            createMeasureTooltip();
            measuring = true;
        } else {
            selectLabel.style.display = "none";
            this_.getMap().removeInteraction(draw);
            measuring = false;
            this_.getMap().removeOverlay(helpTooltip);
            this_.getMap().removeOverlay(measureTooltip);
            var staticTooltip = document.getElementsByClassName("tooltip-static");
                while (staticTooltip.length > 0) {
                  staticTooltip[0].parentNode.removeChild(staticTooltip[0]);
                }
            measureLayer.getSource().clear();
            sketch = null;
        }
      };

      measurebutton.addEventListener('click', handleMeasure, false);
      measurebutton.addEventListener('touchstart', handleMeasure, false);

      measurebutton.addEventListener("click", () => {
          measurebutton.classList.toggle("clicked");
        });

      var element = document.createElement('div');
      element.className = 'measure-control ol-unselectable ol-control';
      element.appendChild(measurebutton);

      ol.control.Control.call(this, {
        element: element,
        target: options.target
      });

    };
    if (Control) measureControl.__proto__ = Control;
    measureControl.prototype = Object.create(Control && Control.prototype);
    measureControl.prototype.constructor = measureControl;
    return measureControl;
    }(ol.control.Control));
    map.addControl(new measureControl())

    map.on('pointermove', function(evt) {
        if (evt.dragging) {
            return;
        }
        if (measuring) {
            /** @type {string} */
            var helpMsg = 'Click to start drawing';
            if (sketch) {
                var geom = (sketch.getGeometry());
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg;
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg;
                }
            }
            helpTooltipElement.innerHTML = helpMsg;
            helpTooltip.setPosition(evt.coordinate);
        }
    });
    

    var measureControl = document.querySelector(".measure-control");

    var selectLabel = document.createElement("label");
    selectLabel.innerHTML = "&nbsp;Measure:&nbsp;";

    var typeSelect = document.createElement("select");
    typeSelect.id = "type";

    var measurementOption = [
        { value: "LineString", description: "Length" },
        { value: "Polygon", description: "Area" }
        ];
    measurementOption.forEach(function (option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.text = option.description;
        typeSelect.appendChild(optionElement);
    });

    selectLabel.appendChild(typeSelect);
    measureControl.appendChild(selectLabel);

    selectLabel.style.display = "none";
/**
 * Currently drawn feature.
 * @type {ol.Feature}
 */

/**
 * The help tooltip element.
 * @type {Element}
 */
var helpTooltipElement;


/**
 * Overlay to show the help messages.
 * @type {ol.Overlay}
 */
var helpTooltip;


/**
 * The measure tooltip element.
 * @type {Element}
 */
var measureTooltipElement;


/**
 * Overlay to show the measurement.
 * @type {ol.Overlay}
 */
var measureTooltip;


/**
 * Message to show when the user is drawing a line.
 * @type {string}
 */
var continueLineMsg = 'Click to continue drawing the line';



/**
 * Message to show when the user is drawing a polygon.
 * @type {string}
 */
var continuePolygonMsg = "1click continue, 2click close";


var typeSelect = document.getElementById("type");
var typeSelectForm = document.getElementById("form_measure");

typeSelect.onchange = function (e) {		  
  map.removeInteraction(draw);
  addInteraction();
  map.addInteraction(draw);		  
};

var measureLineStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({ 
	color: "rgba(0, 0, 255)", //blu
	lineDash: [10, 10],
	width: 4
  }),
  image: new ol.style.Circle({
	radius: 6,
	stroke: new ol.style.Stroke({
	  color: "rgba(255, 255, 255)", 
	  width: 1
	}),
  })
});

var measureLineStyle2 = new ol.style.Style({	  
	stroke: new ol.style.Stroke({
		color: "rgba(255, 255, 255)", 
		lineDash: [10, 10],
		width: 2
	  }),
  image: new ol.style.Circle({
	radius: 5,
	stroke: new ol.style.Stroke({
	  color: "rgba(0, 0, 255)", 
	  width: 1
	}),
		  fill: new ol.style.Fill({
	  color: "rgba(255, 204, 51, 0.4)", 
	}),
	  })
});

var labelStyle = new ol.style.Style({
  text: new ol.style.Text({
	font: "14px Calibri,sans-serif",
	fill: new ol.style.Fill({
	  color: "rgba(0, 0, 0, 1)"
	}),
	stroke: new ol.style.Stroke({
	  color: "rgba(255, 255, 255, 1)",
	  width: 3
	})
  })
});

var labelStyleCache = [];

var styleFunction = function (feature, type) {
  var styles = [measureLineStyle, measureLineStyle2];
  var geometry = feature.getGeometry();
  var type = geometry.getType();
  var lineString;
  if (!type || type === type) {
	if (type === "Polygon") {
	  lineString = new ol.geom.LineString(geometry.getCoordinates()[0]);
	} else if (type === "LineString") {
	  lineString = geometry;
	}
  }
  if (lineString) {
	var count = 0;
	lineString.forEachSegment(function (a, b) {
	  var segment = new ol.geom.LineString([a, b]);
	  var label = formatLength(segment);
	  if (labelStyleCache.length - 1 < count) {
		labelStyleCache.push(labelStyle.clone());
	  }
	  labelStyleCache[count].setGeometry(segment);
	  labelStyleCache[count].getText().setText(label);
	  styles.push(labelStyleCache[count]);
	  count++;
	});
  }
  return styles;
};
var source = new ol.source.Vector();

var measureLayer = new ol.layer.Vector({
  source: source,
  displayInLayerSwitcher: false,
  style: function (feature) {
	labelStyleCache = [];
	return styleFunction(feature);
  }
});

map.addLayer(measureLayer);

var draw; // global so we can remove it later
function addInteraction() {
  var type = typeSelect.value;
  draw = new ol.interaction.Draw({
    source: source,
    type: /** @type {ol.geom.GeometryType} */ (type),
	style: function (feature) {
			  return styleFunction(feature, type);
			}
  });

  var listener;
  draw.on('drawstart',
      function(evt) {
        // set sketch
        sketch = evt.feature;

        /** @type {ol.Coordinate|undefined} */
        var tooltipCoord = evt.coordinate;

        listener = sketch.getGeometry().on('change', function(evt) {
          var geom = evt.target;
          var output;
          if (geom instanceof ol.geom.Polygon) {
				  output = formatArea(/** @type {ol.geom.Polygon} */ (geom));
				  tooltipCoord = geom.getInteriorPoint().getCoordinates();
				} else if (geom instanceof ol.geom.LineString) {
				  output = formatLength(/** @type {ol.geom.LineString} */ (geom));
				  tooltipCoord = geom.getLastCoordinate();
				}
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      }, this);

  draw.on('drawend',
      function(evt) {
        measureTooltipElement.className = 'tooltip tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      }, this);
}


/**
 * Creates a new help tooltip
 */
function createHelpTooltip() {
  if (helpTooltipElement) {
    helpTooltipElement.parentNode.removeChild(helpTooltipElement);
  }
  helpTooltipElement = document.createElement('div');
  helpTooltipElement.className = 'tooltip hidden';
  helpTooltip = new ol.Overlay({
    element: helpTooltipElement,
    offset: [15, 0],
    positioning: 'center-left'
  });
  map.addOverlay(helpTooltip);
}


/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip() {
  if (measureTooltipElement) {
    measureTooltipElement.parentNode.removeChild(measureTooltipElement);
  }
  measureTooltipElement = document.createElement('div');
  measureTooltipElement.className = 'tooltip tooltip-measure';
  measureTooltip = new ol.Overlay({
    element: measureTooltipElement,
    offset: [0, -15],
    positioning: 'bottom-center'
  });
  map.addOverlay(measureTooltip);
}


function convertToFeet(length) {
    feet_length = length * 3.2808;
    return feet_length
}

/**
 * format length output
 * @param {ol.geom.LineString} line
 * @return {string}
 */
var formatLength = function(line) {
  var length;
  var coordinates = line.getCoordinates();
  length = 0;
  var sourceProj = map.getView().getProjection();
  for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
      var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
      var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
      length += ol.sphere.getDistance(c1, c2);
    }
    feet_length = convertToFeet(length)

    var output;
    if (feet_length > 5280) {
        output = (Math.round(feet_length / 5280 * 100) / 100) + ' miles';
    } else {
        output = (Math.round(feet_length * 100) / 100) + ' ft';
    }
    return output;
};

/**
 * Format area output.
 * @param {ol.geom.Polygon} polygon The polygon.
 * @return {string} Formatted area.
 */
var formatArea = function (polygon) {
  var area = polygon.getArea();
  var output;
  if (area > 107639) {  // Converte 1 km^2 in piedi quadrati
    output = (Math.round((area / 107639) * 1000) / 1000) + ' sq mi';
	} else {
		output = (Math.round(area * 10.7639 * 100) / 100) + ' sq ft';
	}
  return output;
};

addInteraction();

var parentElement = document.querySelector(".measure-control");
var elementToMove = document.getElementById("form_measure");
if (elementToMove && parentElement) {
  parentElement.insertBefore(elementToMove, parentElement.firstChild);
}


//geocoder

//var geocoder = new Geocoder('nominatim', {
//  provider: 'osm',
//  lang: 'en-US',
//  placeholder: 'Search place or address ...',
//  limit: 5,
//  keepOpen: true,
//});
//map.addControl(geocoder);
//document.getElementsByClassName('gcd-gl-btn')[0].className += ' fa fa-search';

  // Create an instance of the custom provider, passing any options that are
  // required
  const provider = OsOpenNamesSearch({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
  });

  const geocoder = new Geocoder('nominatim', {
    // Specify the custom provider instance as the "provider" value
    provider: provider,
	key: 'AIzaSyD92jIWlbMT9evZ1elwzBqOTJa6l8lULC4', //'66d227bf81580588195416ehj985538',
    //targetType: 'text-input',
	placeholder: 'Search place or address ...',
    limit: 5,
    lang: 'en',
    keepOpen: true,
    preventMarker: true,
  });
  map.addControl(geocoder);
  document.getElementsByClassName('gcd-gl-btn')[0].className += ' fa fa-search';

  geocoder.on('addresschosen', (evt) => {
	console.log("address chosen")
    if (evt.bbox) {
      map.getView().fit(evt.bbox, {
        duration: 500
      });
    } else {
      map.getView().animate({
        zoom: 21,
        center: evt.coordinate
      });
    }
  });

  /**
   * Custom provider for OS OpenNames search covering Great Britian.
   * Factory function which returns an object with the methods getParameters
   * and handleResponse called by the Geocoder
   */
  function OsOpenNamesSearch(options) {
    const {
      url
    } = options;
	console.log("OsOpenNamesSearch")

    return {
      /**
       * Get the url, query string parameters and optional JSONP callback
       * name to be used to perform a search.
       * @param {object} options Options object with query, key, lang,
       * countrycodes and limit properties.
       * @return {object} Parameters for search request
       */
      getParameters(opt) {
		console.log(url)
        return {
          url,
          //callbackName: 'callback',

          params: {
            address: opt.query,
			key: opt.key,
			format: "geojson"
          },
        };
      },

      /**
       * Given the results of performing a search return an array of results
       * @param {object} data returned following a search request
       * @return {Array} Array of search results
       */
      handleResponse(results) {
        // The API returns a GeoJSON FeatureCollection
		console.log("handleResponse")
        if (results && results.length !== 0) {
		  console.log(results)
		  var bbox1 = []
          return results.results.map((feature) => {
		  bbox1 = [feature.geometry.viewport.southwest.lng, feature.geometry.viewport.southwest.lat, feature.geometry.viewport.northeast.lng, feature.geometry.viewport.northeast.lat]
		  console.log(feature.formatted_address + ", " + feature.geometry.location.lng + ", " + feature.geometry.location.lat + ", " + bbox1)
            return {
              lon: feature.geometry.location.lng,
              lat: feature.geometry.location.lat,

              address: {
                // Simply return a name in this case, could also return road,
                // building, house_number, city, town, village, state,
                // country
                name: feature.formatted_address,
              },

              //bbox: bbox1,
            };
          });
        }
        return [];
      },
    };
  }


//layer search


//scalebar


//layerswitcher

var layerSwitcher2 = new ol.control.LayerSwitcher2({
    groupSelectStyle: 'group',
    activationMode: 'click',
	startActive: true,
	tipLabel: "Layers",
    target: 'bottom-right-container',
    label: '»',
	collapseLabel: '«',
	collapseTipLabel: 'Close'
    });
map.addControl(layerSwitcher2);
if (hasTouchScreen || isSmallScreen) {
	document.addEventListener('DOMContentLoaded', function() {
		setTimeout(function() {
			layerSwitcher2.hidePanel();
		}, 500);
	});	
}

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
	startActive: true,
	tipLabel: "Layers",
    target: 'top-right-container',
	collapseLabel: '»',
	collapseTipLabel: 'Close'
    });
map.addControl(layerSwitcher);
if (hasTouchScreen || isSmallScreen) {
	document.addEventListener('DOMContentLoaded', function() {
		setTimeout(function() {
			layerSwitcher.hidePanel();
		}, 500);
	});	
}






//attribution
var bottomAttribution = new ol.control.Attribution({
  collapsible: false,
  collapsed: false,
  className: 'bottom-attribution'
});
map.addControl(bottomAttribution);

var attributionList = document.createElement('li');
attributionList.innerHTML = `
	<a href="https://github.com/tomchadwin/qgis2web">qgis2web</a> &middot;
	<a href="https://openlayers.org/">OpenLayers</a> &middot;
	<a href="https://qgis.org/">QGIS</a>	
`;
bottomAttribution.element.appendChild(attributionList);


// Disable "popup on hover" or "highlight on hover" if ol-control mouseover
document.addEventListener('DOMContentLoaded', function() {
    var preDoHover = doHover;
	var preDoHighlight = doHighlight;
	if (doHover || doHighlight) {
		var controlElements = document.getElementsByClassName('ol-control');
		for (var i = 0; i < controlElements.length; i++) {
			controlElements[i].addEventListener('mouseover', function() {
				if (doHover) { doHover = false; }
				if (doHighlight) { doHighlight = false; }
			});
			controlElements[i].addEventListener('mouseout', function() {
				doHover = preDoHover;
				doHighlight = preDoHighlight;
			});
		}
	}
});

//My Stuff

function layersChanged() {
    lyr_TopLeft.changed();
    lyr_BottomLeft.changed();
    lyr_TopMidLeft.changed();
    lyr_BottomMidLeft.changed();
    lyr_TopMidRight.changed();
    lyr_BottomMidRight.changed();
    lyr_TopRight.changed();
    lyr_BottomRight.changed();
    lyr_TopLeft_Maricopa.changed();
    lyr_BottomLeft_Maricopa.changed();
    lyr_TopMidLeft_Maricopa.changed();
    lyr_BottomMidLeft_Maricopa.changed();
    lyr_TopMidRight_Maricopa.changed();
    lyr_BottomMidRight_Maricopa.changed();
    lyr_TopRight_Maricopa.changed();
    lyr_BottomRight_Maricopa.changed();
}

    lyr_ResidentialUnder400k_80.on('propertychange', function() {
        layersChanged();
        if (lyr_ResidentialUnder400k_80.getVisible()) {
            lyr_ResidentialUnder400k_80.set('title', 'Residential Under 400k<br />\
                <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
                <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />\
                <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
                <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />')
        } else {
            lyr_ResidentialUnder400k_80.set('title', 'Residential Under 400k')
        }
    })
    lyr_Residential400k700k_82.on('propertychange', function() {
        layersChanged();
        if (lyr_Residential400k700k_82.getVisible()) {
            lyr_Residential400k700k_82.set('title', 'Residential 400k - 700k<br />\
    <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
    <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
    <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />')
        } else {
            lyr_Residential400k700k_82.set('title', 'Residential 400k - 700k')
        }
    })
    lyr_ResidentialAbove700k_84.on('propertychange', function() {
        layersChanged();
        if (lyr_ResidentialAbove700k_84.getVisible()) {
            lyr_ResidentialAbove700k_84.set('title', 'Residential Above 700k<br />\
    <img src="styles/legend/ResidentialAbove700k_83_0.png" /> Above 2m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_1.png" /> 1.75m - 2m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_2.png" /> 1.5m - 1.75m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_3.png" /> 1.25m - 1.5m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_4.png" /> 1m - 1.25m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_5.png" /> 900k - 1m<br />\
    <img src="styles/legend/ResidentialAbove700k_83_6.png" /> 800k - 900k<br />\
    <img src="styles/legend/ResidentialAbove700k_83_7.png" /> 700k - 800k<br />')
        } else {
            lyr_ResidentialAbove700k_84.set('title', 'Residential Above 700k')
        }
    })
    lyr_ResidentialCommonArea_75.on('propertychange', function() {
        layersChanged();
        if (lyr_ResidentialCommonArea_75.getVisible()) {
            lyr_ResidentialCommonArea_75.set('title', '<img src="styles/legend/ResidentialCommonArea_74.png" /> Residential Common Area<br />')
        } else {
            lyr_ResidentialCommonArea_75.set('title', 'Residential Common Area')
        }
    })
    lyr_ManufacturedHomes_77.on('propertychange', function() {
        layersChanged();
        if (lyr_ManufacturedHomes_77.getVisible()) {
            lyr_ManufacturedHomes_77.set('title', 'Manufactured Homes<br />\
    <img src="styles/legend/ManufacturedHomes_76_0.png" /> Above 7m<br />\
    <img src="styles/legend/ManufacturedHomes_76_1.png" /> 2m - 7m<br />\
    <img src="styles/legend/ManufacturedHomes_76_2.png" /> 500k - 2m<br />\
    <img src="styles/legend/ManufacturedHomes_76_3.png" /> Under 500k<br />')
        } else {
            lyr_ManufacturedHomes_77.set('title', 'Manufactured Homes')
        }
    })
    lyr_ApartmentsSmall_71.on('propertychange', function() {
        layersChanged();
        if (lyr_ApartmentsSmall_71.getVisible()) {
            lyr_ApartmentsSmall_71.set('title', 'Apartments - Small<br />\
    <img src="styles/legend/ApartmentsSmall_70_0.png" /> Above 2m<br />\
    <img src="styles/legend/ApartmentsSmall_70_1.png" /> Under 2m<br />')
        } else {
            lyr_ApartmentsSmall_71.set('title', 'Apartments - Small')
        }
    })
    lyr_ApartmentsLarge_73.on('propertychange', function() {
        layersChanged();
        if (lyr_ApartmentsLarge_73.getVisible()) {
            lyr_ApartmentsLarge_73.set('title', 'Apartments - Large<br />\
    <img src="styles/legend/ApartmentsLarge_72_0.png" /> Above 55m<br />\
    <img src="styles/legend/ApartmentsLarge_72_1.png" /> 35m - 55m<br />\
    <img src="styles/legend/ApartmentsLarge_72_2.png" /> 20m - 35m<br />\
    <img src="styles/legend/ApartmentsLarge_72_3.png" /> 7m - 20m<br />\
    <img src="styles/legend/ApartmentsLarge_72_4.png" /> Under 7m<br />')
        } else {
            lyr_ApartmentsLarge_73.set('title', 'Apartments - Large')
        }
    })
    lyr_Agriculture_23.on('propertychange', function() {
        layersChanged();
        if (lyr_Agriculture_23.getVisible()) {
            lyr_Agriculture_23.set('title', 'Agriculture<br />\
    <img src="styles/legend/Agriculture_22_0.png" /> Above 2m<br />\
    <img src="styles/legend/Agriculture_22_1.png" /> 250k - 2m<br />\
    <img src="styles/legend/Agriculture_22_2.png" /> Under 250k<br />')
        } else {
            lyr_Agriculture_23.set('title', 'Agriculture')
        }
    })
    lyr_MiscCommercial_25.on('propertychange', function() {
        layersChanged();
        if (lyr_MiscCommercial_25.getVisible()) {
            lyr_MiscCommercial_25.set('title', 'Misc. Commercial<br />\
    <img src="styles/legend/MiscCommercial_24_0.png" /> Above 97m<br />\
    <img src="styles/legend/MiscCommercial_24_1.png" /> 57m - 97m<br />\
    <img src="styles/legend/MiscCommercial_24_2.png" /> 30m - 57m<br />\
    <img src="styles/legend/MiscCommercial_24_3.png" /> 21m - 30m<br />\
    <img src="styles/legend/MiscCommercial_24_4.png" /> 14m - 21m<br />\
    <img src="styles/legend/MiscCommercial_24_5.png" /> 8m - 14m<br />\
    <img src="styles/legend/MiscCommercial_24_6.png" /> 4.5m - 8m<br />\
    <img src="styles/legend/MiscCommercial_24_7.png" /> 2m - 4.5m<br />\
    <img src="styles/legend/MiscCommercial_24_8.png" /> 700k - 2m<br />\
    <img src="styles/legend/MiscCommercial_24_9.png" /> Under 700k<br />')
        } else {
            lyr_MiscCommercial_25.set('title', 'Misc. Commercial')
        }
    })
    lyr_IndustrialFacilities_27.on('propertychange', function() {
        layersChanged();
        if (lyr_IndustrialFacilities_27.getVisible()) {
            lyr_IndustrialFacilities_27.set('title', 'Industrial Facilities<br />\
    <img src="styles/legend/IndustrialFacilities_26_0.png" /> Above 58m<br />\
    <img src="styles/legend/IndustrialFacilities_26_1.png" /> 40m - 58m<br />\
    <img src="styles/legend/IndustrialFacilities_26_2.png" /> 25m - 40m<br />\
    <img src="styles/legend/IndustrialFacilities_26_3.png" /> 15m - 25m<br />\
    <img src="styles/legend/IndustrialFacilities_26_4.png" /> 8m - 15m<br />\
    <img src="styles/legend/IndustrialFacilities_26_5.png" /> 5m - 8m<br />\
    <img src="styles/legend/IndustrialFacilities_26_6.png" /> 3m - 5m<br />\
    <img src="styles/legend/IndustrialFacilities_26_7.png" /> 1.5m - 3m<br />\
    <img src="styles/legend/IndustrialFacilities_26_8.png" /> 500k - 1.5m<br />\
    <img src="styles/legend/IndustrialFacilities_26_9.png" /> Under 500k<br />')
        } else {
            lyr_IndustrialFacilities_27.set('title', 'Industrial Facilities')
        }
    })
    lyr_MilitaryPoliceFire_29.on('propertychange', function() {
        layersChanged();
        if (lyr_MilitaryPoliceFire_29.getVisible()) {
            lyr_MilitaryPoliceFire_29.set('title', 'Military, Police, & Fire<br />\
    <img src="styles/legend/MilitaryPoliceFire_28_0.png" /> Above 15m<br />\
    <img src="styles/legend/MilitaryPoliceFire_28_1.png" /> 3.5m - 15m<br />\
    <img src="styles/legend/MilitaryPoliceFire_28_2.png" /> Under 3.5m<br />')
        } else {
            lyr_MilitaryPoliceFire_29.set('title', 'Military, Police, & Fire')
        }
    })
    lyr_Schools_31.on('propertychange', function() {
        layersChanged();
        if (lyr_Schools_31.getVisible()) {
            lyr_Schools_31.set('title', 'Schools<br />\
    <img src="styles/legend/Schools_30_0.png" /> Above 100m<br />\
    <img src="styles/legend/Schools_30_1.png" /> 55m - 100m<br />\
    <img src="styles/legend/Schools_30_2.png" /> 37m - 55m<br />\
    <img src="styles/legend/Schools_30_3.png" /> 26m - 37m<br />\
    <img src="styles/legend/Schools_30_4.png" /> 18m - 26m<br />\
    <img src="styles/legend/Schools_30_5.png" /> 12.5m - 18m<br />\
    <img src="styles/legend/Schools_30_6.png" /> 7.5m - 12.5m<br />\
    <img src="styles/legend/Schools_30_7.png" /> 3.5m - 7.5m<br />\
    <img src="styles/legend/Schools_30_8.png" /> 1m - 3.5m<br />\
    <img src="styles/legend/Schools_30_9.png" /> Under 1m<br />')
        } else {
            lyr_Schools_31.set('title', 'Schools')
        }
    })
    lyr_ParksRec_33.on('propertychange', function() {
        layersChanged();
        if (lyr_ParksRec_33.getVisible()) {
            lyr_ParksRec_33.set('title', 'Parks & Rec.<br />\
    <img src="styles/legend/ParksRec_32_0.png" /> Above 6m<br />\
    <img src="styles/legend/ParksRec_32_1.png" /> 2m - 6m<br />\
    <img src="styles/legend/ParksRec_32_2.png" /> Under 2m<br />')
        } else {
            lyr_ParksRec_33.set('title', 'Parks & Rec.')
        }
    })
    lyr_ParkingFacilities_35.on('propertychange', function() {
        layersChanged();
        if (lyr_ParkingFacilities_35.getVisible()) {
            lyr_ParkingFacilities_35.set('title', 'Parking Facilities<br />\
    <img src="styles/legend/ParkingFacilities_34_0.png" /> Above 7m<br />\
    <img src="styles/legend/ParkingFacilities_34_1.png" /> 2m - 7m<br />\
    <img src="styles/legend/ParkingFacilities_34_2.png" /> Under 2m<br />')
        } else {
            lyr_ParkingFacilities_35.set('title', 'Parking Facilities')
        }
    })
    lyr_VehicleServicesSales_37.on('propertychange', function() {
        layersChanged();
        if (lyr_VehicleServicesSales_37.getVisible()) {
            lyr_VehicleServicesSales_37.set('title', 'Vehicle Services & Sales<br />\
    <img src="styles/legend/VehicleServicesSales_36_0.png" /> Above 7m<br />\
    <img src="styles/legend/VehicleServicesSales_36_1.png" /> 2m - 7m<br />\
    <img src="styles/legend/VehicleServicesSales_36_2.png" /> Under 2m<br />')
        } else {
            lyr_VehicleServicesSales_37.set('title', 'Vehicle Services & Sales')
        }
    })
    lyr_OfficesBanks_39.on('propertychange', function() {
        layersChanged();
        if (lyr_OfficesBanks_39.getVisible()) {
            lyr_OfficesBanks_39.set('title', 'Offices & Banks<br />\
    <img src="styles/legend/OfficesBanks_38_0.png" /> Above 13m<br />\
    <img src="styles/legend/OfficesBanks_38_1.png" /> 3m - 13m<br />\
    <img src="styles/legend/OfficesBanks_38_2.png" /> Under 3m<br />')
        } else {
            lyr_OfficesBanks_39.set('title', 'Offices & Banks')
        }
    })
    lyr_Supermarkets_41.on('propertychange', function() {
        layersChanged();
        if (lyr_Supermarkets_41.getVisible()) {
            lyr_Supermarkets_41.set('title', 'Supermarkets<br />\
    <img src="styles/legend/Supermarkets_40_0.png" /> Above 6m<br />\
    <img src="styles/legend/Supermarkets_40_1.png" /> 500k - 6m<br />\
    <img src="styles/legend/Supermarkets_40_2.png" /> Under 500k<br />')
        } else {
            lyr_Supermarkets_41.set('title', 'Supermarkets')
        }
    })
    lyr_ConvenienceMarkets_43.on('propertychange', function() {
        layersChanged();
        if (lyr_ConvenienceMarkets_43.getVisible()) {
            lyr_ConvenienceMarkets_43.set('title', 'Convenience Markets<br />\
    <img src="styles/legend/ConvenienceMarkets_42_0.png" /> Above 1.5m<br />\
    <img src="styles/legend/ConvenienceMarkets_42_1.png" /> 700k - 1.5m<br />\
    <img src="styles/legend/ConvenienceMarkets_42_2.png" /> Under 700k<br />')
        } else {
            lyr_ConvenienceMarkets_43.set('title', 'Convenience Markets')
        }
    })
    lyr_DepartmentStores_45.on('propertychange', function() {
        layersChanged();
        if (lyr_DepartmentStores_45.getVisible()) {
            lyr_DepartmentStores_45.set('title', 'Department Stores<br />\
    <img src="styles/legend/DepartmentStores_44_0.png" /> Above 10m<br />\
    <img src="styles/legend/DepartmentStores_44_1.png" /> 2m - 10m<br />\
    <img src="styles/legend/DepartmentStores_44_2.png" /> Under 2m<br />')
        } else {
            lyr_DepartmentStores_45.set('title', 'Department Stores')
        }
    })
    lyr_Stores_47.on('propertychange', function() {
        layersChanged();
        if (lyr_Stores_47.getVisible()) {
            lyr_Stores_47.set('title', 'Stores<br />\
    <img src="styles/legend/Stores_46_0.png" /> Above 7m<br />\
    <img src="styles/legend/Stores_46_1.png" /> 1m - 7m<br />\
    <img src="styles/legend/Stores_46_2.png" /> Under 1m<br />')
        } else {
            lyr_Stores_47.set('title', 'Stores')
        }
    })
    lyr_Entertainment_49.on('propertychange', function() {
        layersChanged();
        if (lyr_Entertainment_49.getVisible()) {
            lyr_Entertainment_49.set('title', 'Entertainment<br />\
    <img src="styles/legend/Entertainment_48_0.png" /> Above 5m<br />\
    <img src="styles/legend/Entertainment_48_1.png" /> 1.5m - 5m<br />\
    <img src="styles/legend/Entertainment_48_2.png" /> Under 1.5m<br />')
        } else {
            lyr_Entertainment_49.set('title', 'Entertainment')
        }
    })
    lyr_FoodBeverage_51.on('propertychange', function() {
        layersChanged();
        if (lyr_FoodBeverage_51.getVisible()) {
            lyr_FoodBeverage_51.set('title', 'Food & Beverage<br />\
    <img src="styles/legend/FoodBeverage_50_0.png" /> Above 1.5m<br />\
    <img src="styles/legend/FoodBeverage_50_1.png" /> 600k - 1.5m<br />\
    <img src="styles/legend/FoodBeverage_50_2.png" /> Under 600k<br />')
        } else {
            lyr_FoodBeverage_51.set('title', 'Food & Beverage')
        }
    })
    lyr_ShoppingCentersSmall_53.on('propertychange', function() {
        layersChanged();
        if (lyr_ShoppingCentersSmall_53.getVisible()) {
            lyr_ShoppingCentersSmall_53.set('title', '<img src="styles/legend/ShoppingCentersSmall_52.png" /> Shopping Centers - Small')
        } else {
            lyr_ShoppingCentersSmall_53.set('title', 'Shopping Centers - Small')
        }
    })
    lyr_ShoppingCentersLarge_55.on('propertychange', function() {
        layersChanged();
        if (lyr_ShoppingCentersLarge_55.getVisible()) {
            lyr_ShoppingCentersLarge_55.set('title', '<img src="styles/legend/ShoppingCentersLarge_54.png" /> Shopping Centers - Large')
        } else {
            lyr_ShoppingCentersLarge_55.set('title', 'Shopping Centers - Large')
        }
    })
    lyr_StripMalls_57.on('propertychange', function() {
        layersChanged();
        if (lyr_StripMalls_57.getVisible()) {
            lyr_StripMalls_57.set('title', 'Strip Malls<br />\
    <img src="styles/legend/StripMalls_56_0.png" /> Above 7m<br />\
    <img src="styles/legend/StripMalls_56_1.png" /> 2m - 7m<br />\
    <img src="styles/legend/StripMalls_56_2.png" /> Under 2m<br />')
        } else {
            lyr_StripMalls_57.set('title', 'Strip Malls')
        }
    })
    lyr_HospitalsCareFacilities_59.on('propertychange', function() {
        layersChanged();
        if (lyr_HospitalsCareFacilities_59.getVisible()) {
            lyr_HospitalsCareFacilities_59.set('title', 'Hospitals & Care Facilities<br />\
    <img src="styles/legend/HospitalsCareFacilities_58_0.png" /> Above 90m<br />\
    <img src="styles/legend/HospitalsCareFacilities_58_1.png" /> 16m - 90m<br />\
    <img src="styles/legend/HospitalsCareFacilities_58_2.png" /> Under 16m<br />')
        } else {
            lyr_HospitalsCareFacilities_59.set('title', 'Hospitals & Care Facilities')
        }
    })
    lyr_CemeteriesServices_61.on('propertychange', function() {
        layersChanged();
        if (lyr_CemeteriesServices_61.getVisible()) {
            lyr_CemeteriesServices_61.set('title', '<img src="styles/legend/CemeteriesServices_60.png" /> Cemeteries & Services')
        } else {
            lyr_CemeteriesServices_61.set('title', 'Cemeteries & Services')
        }
    })
    lyr_GolfCourses_63.on('propertychange', function() {
        layersChanged();
        if (lyr_GolfCourses_63.getVisible()) {
            lyr_GolfCourses_63.set('title', 'Golf Courses<br />\
    <img src="styles/legend/GolfCourses_62_0.png" /> Above 3.5m<br />\
    <img src="styles/legend/GolfCourses_62_1.png" /> 1m - 3.5m<br />\
    <img src="styles/legend/GolfCourses_62_2.png" /> Under 1m<br />')
        } else {
            lyr_GolfCourses_63.set('title', 'Golf Courses')
        }
    })
    lyr_ClubsLodges_65.on('propertychange', function() {
        layersChanged();
        if (lyr_ClubsLodges_65.getVisible()) {
            lyr_ClubsLodges_65.set('title', 'Clubs & Lodges<br />\
    <img src="styles/legend/ClubsLodges_64_0.png" /> Above 5m<br />\
    <img src="styles/legend/ClubsLodges_64_1.png" /> 1.5m - 5m<br />\
    <img src="styles/legend/ClubsLodges_64_2.png" /> Under 1.5m<br />')
        } else {
            lyr_ClubsLodges_65.set('title', 'Clubs & Lodges')
        }
    })
    lyr_Resorts_67.on('propertychange', function() {
        layersChanged();
        if (lyr_Resorts_67.getVisible()) {
            lyr_Resorts_67.set('title', 'Resorts<br />\
    <img src="styles/legend/Resorts_66_0.png" /> Above 27m<br />\
    <img src="styles/legend/Resorts_66_1.png" /> 6m - 27m<br />\
    <img src="styles/legend/Resorts_66_2.png" /> Under 6m<br />')
        } else {
            lyr_Resorts_67.set('title', 'Resorts')
        }
    })
    lyr_HotelsMotels_69.on('propertychange', function() {
        layersChanged();
        if (lyr_HotelsMotels_69.getVisible()) {
            lyr_HotelsMotels_69.set('title', 'Hotels & Motels<br />\
    <img src="styles/legend/HotelsMotels_68_0.png" /> Above 8m<br />\
    <img src="styles/legend/HotelsMotels_68_1.png" /> 3m - 8m<br />\
    <img src="styles/legend/HotelsMotels_68_2.png" /> Under 3m<br />')
        } else {
            lyr_HotelsMotels_69.set('title', 'Hotels & Motels')
        }
    })
    lyr_VacantIndian_5.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantIndian_5.getVisible()) {
            lyr_VacantIndian_5.set('title', '<img src="styles/legend/Indian_4.png" /> Indian')
        } else {
            lyr_VacantIndian_5.set('title', 'Indian')
        }
    })
    lyr_VacantFederal_7.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantFederal_7.getVisible()) {
            lyr_VacantFederal_7.set('title', '<img src="styles/legend/Federal_6.png" /> Federal')
        } else {
            lyr_VacantFederal_7.set('title', 'Federal')
        }
    })
    lyr_VacantState_9.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantState_9.getVisible()) {
            lyr_VacantState_9.set('title', '<img src="styles/legend/State_8.png" /> State')
        } else {
            lyr_VacantState_9.set('title', 'State')
        }
    })
    lyr_VacantCounty_11.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantCounty_11.getVisible()) {
            lyr_VacantCounty_11.set('title', '<img src="styles/legend/County_10.png" /> County')
        } else {
            lyr_VacantCounty_11.set('title', 'County')
        }
    })
    lyr_VacantMunicipal_13.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantMunicipal_13.getVisible()) {
            lyr_VacantMunicipal_13.set('title', '<img src="styles/legend/Municipal_12.png" /> Municipal')
        } else {
            lyr_VacantMunicipal_13.set('title', 'Municipal')
        }
    })
    lyr_VacantIndustrial_15.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantIndustrial_15.getVisible()) {
            lyr_VacantIndustrial_15.set('title', '<img src="styles/legend/Industrial_14.png" /> Industrial')
        } else {
            lyr_VacantIndustrial_15.set('title', 'Industrial')
        }
    })
    lyr_VacantCommercial_17.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantCommercial_17.getVisible()) {
            lyr_VacantCommercial_17.set('title', '<img src="styles/legend/Commercial_16.png" /> Commercial')
        } else {
            lyr_VacantCommercial_17.set('title', 'Commercial')
        }
    })
    lyr_VacantResidential_19.on('propertychange', function() {
        layersChanged();
        if (lyr_VacantResidential_19.getVisible()) {
            lyr_VacantResidential_19.set('title', '<img src="styles/legend/Residential_18.png" /> Residential')
        } else {
            lyr_VacantResidential_19.set('title', 'Residential')
        }
    })
    lyr_IncompleteSubdivisions_21.on('propertychange', function() {
        layersChanged();
        if (lyr_IncompleteSubdivisions_21.getVisible()) {
            lyr_IncompleteSubdivisions_21.set('title', '<img src="styles/legend/IncompleteSubdivisions_20.png" /> Incomplete Subdivisions')
        } else {
            lyr_IncompleteSubdivisions_21.set('title', 'Incomplete Subdivisions')
        }
    })
//End of My Stuff


//move controls inside containers, in order
    //zoom
    var zoomControl = document.getElementsByClassName('ol-zoom')[0];
    if (zoomControl) {
        topLeftContainerDiv.appendChild(zoomControl);
    }
    //geolocate
    var geolocateControl = document.getElementsByClassName('geolocate')[0];
    if (geolocateControl) {
        topLeftContainerDiv.appendChild(geolocateControl);
    }
    //measure
    var measureControl = document.getElementsByClassName('measure-control')[0];
    if (measureControl) {
        topLeftContainerDiv.appendChild(measureControl);
    }
    //geocoder
    var geocoderControl = document.getElementsByClassName('ol-geocoder')[0];
    if (geocoderControl) {
        topLeftContainerDiv.appendChild(geocoderControl);
    }
    //search layer
    var searchLayerControl = document.getElementsByClassName('search-layer')[0];
    if (searchLayerControl) {
        topLeftContainerDiv.appendChild(searchLayerControl);
    }
    //scale line
    var scaleLineControl = document.getElementsByClassName('ol-scale-line')[0];
    if (scaleLineControl) {
        scaleLineControl.className += ' ol-control';
        bottomLeftContainerDiv.appendChild(scaleLineControl);
    }
    //attribution
    var attributionControl = document.getElementsByClassName('bottom-attribution')[0];
    if (attributionControl) {
        bottomRightContainerDiv.appendChild(attributionControl);
    }