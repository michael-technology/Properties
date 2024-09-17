var size = 0;
var placement = 'point';

var style_Addresses2_87 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    size = 0;
    var labelFont = "bold 10.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("STREET_NO") !== null) {
        labelText = String(feature.get("STREET_NO"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
