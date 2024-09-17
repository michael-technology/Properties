var fontSize = 0;
var placement = 'point';

var style_StreetsMajor_85 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    fontSize = 12.0;
    var labelFont = "bold " + fontSize + "px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("STREET") !== null) {
        labelText = String(feature.get("STREET"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.9}),
        // text: createTextStyle(feature, resolution, labelText, labelFont,
        //                       labelFill, placement, bufferColor,
        //                       bufferWidth)
    })];

    var interval = 500;
	var geometry = feature.getGeometry();
 	if (geometry.getType() === 'MultiLineString') {
		geometry.getLineStrings().forEach(function (line) {
			var length = 0.8*line.getLength();
            var streetLabelLength = fontSize*(8/13)*labelText.length;
			var intervals1 = Math.ceil(length / ((interval) * resolution));
            if (length / ((streetLabelLength) * resolution) >= 1) {
                for (let i = 0; i < intervals1; i++) {   
                    var point1 = line.getCoordinateAt((i / (intervals1)) + 0.1);
                    var point2 = line.getCoordinateAt((i / (intervals1)) + 0.1 + (streetLabelLength*resolution/length)); 
                    var styletext = new ol.style.Style({
                        text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
                    });
                    styletext.setGeometry(new ol.geom.LineString([point1, point2]));
                    style.push(styletext);
                }
            }
		});
	} 

    return style;
};
