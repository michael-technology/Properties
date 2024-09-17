var size = 0;
var placement = 'point';

var style_Supermarkets_40 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("FCV");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
	
	//My Insert
	var alpha, val1, val2;
	var zoom = map.getView().getZoom();
	if (lyr_Supermarkets_41.getVisible() && zoom < 19) {
		alpha = fnc_clamp(val1 = [(1/fnc_clamp(val2 = [zoom - 15, 1, 99])), 0.0, 1.0]);
	} else {
		alpha = 0.0;
	}
	//End Insert

    if (value >= 6000000.000000 && value <= 1071027200.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,128,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(230,115,0,' + alpha + ')'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500000.000000 && value <= 6000000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,166,77,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(230,150,69,' + alpha + ')'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.000000 && value <= 500000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,204,153,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: 'rgba(230,184,138,' + alpha + ')'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
