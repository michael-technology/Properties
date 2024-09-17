var size = 0;
var placement = 'point';

var style_CityNames_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    size = 0;
    var labelFont = "bold 12.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("City Name") !== null) {
        labelText = String(feature.get("City Name"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
