ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12694513.865673, 3612101.949855, -12216717.229725, 3907271.098720]);
var wms_layers = [];


        var lyr_CurrentGoogleSatelliteLowRes_0 = new ol.layer.Tile({
            'title2': 'Current Google Satellite Low-Res',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

    var projection_2021TucsonHighRes_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_2021TucsonHighRes_1 = projection_2021TucsonHighRes_1.getExtent();
    var size_2021TucsonHighRes_1 = ol.extent.getWidth(projectionExtent_2021TucsonHighRes_1) / 256;
    var resolutions_2021TucsonHighRes_1 = new Array(23);
    var matrixIds_2021TucsonHighRes_1 = new Array(23);
    for (var z = 0; z < 23; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_2021TucsonHighRes_1[z] = size_2021TucsonHighRes_1 / Math.pow(2, z);
        matrixIds_2021TucsonHighRes_1[z] = z;
    }
    var lyr_2021TucsonHighRes_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://images.tucsonaz.gov/images/rest/services/AerialImagery/ORTHO_2021/ImageServer/WMTS",
    attributions: ' ',
                                "layer": "AerialImagery_ORTHO_2021",
                                "TILED": "true",
             matrixSet: 'default028mm',
             format: 'image/jpgpng',
              projection: projection_2021TucsonHighRes_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_2021TucsonHighRes_1),
                resolutions: resolutions_2021TucsonHighRes_1,
                matrixIds: matrixIds_2021TucsonHighRes_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title2: "2021 Tucson High-Res",
                            opacity: 1.0,
                            
                            
                          });

    var projection_2022TucsonHighRes_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_2022TucsonHighRes_2 = projection_2022TucsonHighRes_2.getExtent();
    var size_2022TucsonHighRes_2 = ol.extent.getWidth(projectionExtent_2022TucsonHighRes_2) / 256;
    var resolutions_2022TucsonHighRes_2 = new Array(23);
    var matrixIds_2022TucsonHighRes_2 = new Array(23);
    for (var z = 0; z < 23; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_2022TucsonHighRes_2[z] = size_2022TucsonHighRes_2 / Math.pow(2, z);
        matrixIds_2022TucsonHighRes_2[z] = z;
    }
    var lyr_2022TucsonHighRes_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://images.tucsonaz.gov/images/rest/services/AerialImagery/ORTHO_2022_New/ImageServer/WMTS",
    attributions: ' ',
                                "layer": "AerialImagery_ORTHO_2022_New",
                                "TILED": "true",
             matrixSet: 'default028mm',
             format: 'image/jpgpng',
              projection: projection_2022TucsonHighRes_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_2022TucsonHighRes_2),
                resolutions: resolutions_2022TucsonHighRes_2,
                matrixIds: matrixIds_2022TucsonHighRes_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title2: "2022 Tucson High-Res",
                            opacity: 1.0,
                            
                            
                          });
var format_RemainingParcels_3 = new ol.format.GeoJSON();
var features_RemainingParcels_3 = format_RemainingParcels_3.readFeatures(json_RemainingParcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RemainingParcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemainingParcels_3.addFeatures(features_RemainingParcels_3);
var lyr_RemainingParcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemainingParcels_3,
                maxResolution:2.52824320422621, 
                style: style_RemainingParcels_3,
                popuplayertitle: "Remaining Parcels",
                interactive: true,
                //title: '<img src="styles/legend/RemainingParcels_3.png" /> Remaining Parcels'
            });
var format_Indian_4 = new ol.format.GeoJSON();
var features_Indian_4 = format_Indian_4.readFeatures(json_Indian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indian_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indian_4.addFeatures(features_Indian_4);
var lyr_Indian_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indian_4,
maxResolution:2.52824320422621,
 
                style: style_Indian_4,
                popuplayertitle: "Indian",
                interactive: true,
                //title: '<img src="styles/legend/Indian_4.png" /> Indian'
            });

        var lyr_VacantIndian_5 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Indian_4.png" /> Indian',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Indian/{z}/{x}/{y}.png'
            })
        });
var format_Federal_6 = new ol.format.GeoJSON();
var features_Federal_6 = format_Federal_6.readFeatures(json_Federal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Federal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Federal_6.addFeatures(features_Federal_6);
var lyr_Federal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Federal_6,
maxResolution:2.52824320422621,
 
                style: style_Federal_6,
                popuplayertitle: "Federal",
                interactive: true,
                //title: '<img src="styles/legend/Federal_6.png" /> Federal'
            });

        var lyr_VacantFederal_7 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Federal_6.png" /> Federal',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Federal/{z}/{x}/{y}.png'
            })
        });
var format_State_8 = new ol.format.GeoJSON();
var features_State_8 = format_State_8.readFeatures(json_State_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_8.addFeatures(features_State_8);
var lyr_State_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_State_8,
maxResolution:2.52824320422621,
 
                style: style_State_8,
                popuplayertitle: "State",
                interactive: true,
                //title: '<img src="styles/legend/State_8.png" /> State'
            });

        var lyr_VacantState_9 = new ol.layer.Tile({
            'title': '<img src="styles/legend/State_8.png" /> State',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant State/{z}/{x}/{y}.png'
            })
        });
var format_County_10 = new ol.format.GeoJSON();
var features_County_10 = format_County_10.readFeatures(json_County_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_10.addFeatures(features_County_10);
var lyr_County_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_10,
maxResolution:2.52824320422621,
 
                style: style_County_10,
                popuplayertitle: "County",
                interactive: true,
                //title: '<img src="styles/legend/County_10.png" /> County'
            });

        var lyr_VacantCounty_11 = new ol.layer.Tile({
            'title': '<img src="styles/legend/County_10.png" /> County',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant County/{z}/{x}/{y}.png'
            })
        });
var format_Municipal_12 = new ol.format.GeoJSON();
var features_Municipal_12 = format_Municipal_12.readFeatures(json_Municipal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_12.addFeatures(features_Municipal_12);
var lyr_Municipal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipal_12,
maxResolution:2.52824320422621,
 
                style: style_Municipal_12,
                popuplayertitle: "Municipal",
                interactive: true,
                //title: '<img src="styles/legend/Municipal_12.png" /> Municipal'
            });

        var lyr_VacantMunicipal_13 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Municipal_12.png" /> Municipal',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Municipal/{z}/{x}/{y}.png'
            })
        });
var format_Industrial_14 = new ol.format.GeoJSON();
var features_Industrial_14 = format_Industrial_14.readFeatures(json_Industrial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_14.addFeatures(features_Industrial_14);
var lyr_Industrial_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrial_14,
maxResolution:2.52824320422621,
 
                style: style_Industrial_14,
                popuplayertitle: "Industrial",
                interactive: true,
                //title: '<img src="styles/legend/Industrial_14.png" /> Industrial'
            });

        var lyr_VacantIndustrial_15 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Industrial_14.png" /> Industrial',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Industrial/{z}/{x}/{y}.png'
            })
        });
var format_Commercial_16 = new ol.format.GeoJSON();
var features_Commercial_16 = format_Commercial_16.readFeatures(json_Commercial_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_16.addFeatures(features_Commercial_16);
var lyr_Commercial_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercial_16,
maxResolution:2.52824320422621,
 
                style: style_Commercial_16,
                popuplayertitle: "Commercial",
                interactive: true,
                //title: '<img src="styles/legend/Commercial_16.png" /> Commercial'
            });

        var lyr_VacantCommercial_17 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Commercial_16.png" /> Commercial',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Commercial/{z}/{x}/{y}.png'
            })
        });
var format_Residential_18 = new ol.format.GeoJSON();
var features_Residential_18 = format_Residential_18.readFeatures(json_Residential_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential_18.addFeatures(features_Residential_18);
var lyr_Residential_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residential_18,
maxResolution:2.52824320422621,
 
                style: style_Residential_18,
                popuplayertitle: "Residential",
                interactive: true,
                //title: '<img src="styles/legend/Residential_18.png" /> Residential'
            });

        var lyr_VacantResidential_19 = new ol.layer.Tile({
            'title': '<img src="styles/legend/Residential_18.png" /> Residential',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Residential/{z}/{x}/{y}.png'
            })
        });
var format_IncompleteSubdivisions_20 = new ol.format.GeoJSON();
var features_IncompleteSubdivisions_20 = format_IncompleteSubdivisions_20.readFeatures(json_IncompleteSubdivisions_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncompleteSubdivisions_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncompleteSubdivisions_20.addFeatures(features_IncompleteSubdivisions_20);
var lyr_IncompleteSubdivisions_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncompleteSubdivisions_20,
maxResolution:2.52824320422621,
 
                style: style_IncompleteSubdivisions_20,
                popuplayertitle: "Incomplete Subdivisions",
                interactive: true,
                //title: '<img src="styles/legend/IncompleteSubdivisions_20.png" /> Incomplete Subdivisions'
            });

        var lyr_IncompleteSubdivisions_21 = new ol.layer.Tile({
            'title': '<img src="styles/legend/IncompleteSubdivisions_20.png" /> Incomplete Subdivisions',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Incomplete Subdivisions/{z}/{x}/{y}.png'
            })
        });
var format_Agriculture_22 = new ol.format.GeoJSON();
var features_Agriculture_22 = format_Agriculture_22.readFeatures(json_Agriculture_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agriculture_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agriculture_22.addFeatures(features_Agriculture_22);
var lyr_Agriculture_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agriculture_22,
maxResolution:2.52824320422621,
 
                style: style_Agriculture_22,
                popuplayertitle: "Agriculture",
                interactive: true,
    // title: 'Agriculture<br />\
    // <img src="styles/legend/Agriculture_22_0.png" /> Above 2m<br />\
    // <img src="styles/legend/Agriculture_22_1.png" /> 250k - 2m<br />\
    // <img src="styles/legend/Agriculture_22_2.png" /> Under 250k<br />'
        });

        var lyr_Agriculture_23 = new ol.layer.Tile({
            'title': 'Agriculture',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Agriculture/{z}/{x}/{y}.png'
            })
        });
var format_MiscCommercial_24 = new ol.format.GeoJSON();
var features_MiscCommercial_24 = format_MiscCommercial_24.readFeatures(json_MiscCommercial_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiscCommercial_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiscCommercial_24.addFeatures(features_MiscCommercial_24);
var lyr_MiscCommercial_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiscCommercial_24,
maxResolution:2.52824320422621,
 
                style: style_MiscCommercial_24,
                popuplayertitle: "Misc. Commercial",
                interactive: true,
    // title: 'Misc. Commercial<br />\
    // <img src="styles/legend/MiscCommercial_24_0.png" /> Above 97m<br />\
    // <img src="styles/legend/MiscCommercial_24_1.png" /> 57m - 97m<br />\
    // <img src="styles/legend/MiscCommercial_24_2.png" /> 30m - 57m<br />\
    // <img src="styles/legend/MiscCommercial_24_3.png" /> 21m - 30m<br />\
    // <img src="styles/legend/MiscCommercial_24_4.png" /> 14m - 21m<br />\
    // <img src="styles/legend/MiscCommercial_24_5.png" /> 8m - 14m<br />\
    // <img src="styles/legend/MiscCommercial_24_6.png" /> 4.5m - 8m<br />\
    // <img src="styles/legend/MiscCommercial_24_7.png" /> 2m - 4.5m<br />\
    // <img src="styles/legend/MiscCommercial_24_8.png" /> 700k - 2m<br />\
    // <img src="styles/legend/MiscCommercial_24_9.png" /> Under 700k<br />'
        });

        var lyr_MiscCommercial_25 = new ol.layer.Tile({
            'title': 'Misc. Commercial',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Misc. Commercial/{z}/{x}/{y}.png'
            })
        });
var format_IndustrialFacilities_26 = new ol.format.GeoJSON();
var features_IndustrialFacilities_26 = format_IndustrialFacilities_26.readFeatures(json_IndustrialFacilities_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustrialFacilities_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustrialFacilities_26.addFeatures(features_IndustrialFacilities_26);
var lyr_IndustrialFacilities_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustrialFacilities_26,
maxResolution:2.52824320422621,
 
                style: style_IndustrialFacilities_26,
                popuplayertitle: "Industrial Facilities",
                interactive: true,
    // title: 'Industrial Facilities<br />\
    // <img src="styles/legend/IndustrialFacilities_26_0.png" /> Above 58m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_1.png" /> 40m - 58m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_2.png" /> 25m - 40m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_3.png" /> 15m - 25m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_4.png" /> 8m - 15m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_5.png" /> 5m - 8m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_6.png" /> 3m - 5m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_7.png" /> 1.5m - 3m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_8.png" /> 500k - 1.5m<br />\
    // <img src="styles/legend/IndustrialFacilities_26_9.png" /> Under 500k<br />'
        });

        var lyr_IndustrialFacilities_27 = new ol.layer.Tile({
            'title': 'Industrial Facilities',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Industrial Facilities/{z}/{x}/{y}.png'
            })
        });
var format_MilitaryPoliceFire_28 = new ol.format.GeoJSON();
var features_MilitaryPoliceFire_28 = format_MilitaryPoliceFire_28.readFeatures(json_MilitaryPoliceFire_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitaryPoliceFire_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryPoliceFire_28.addFeatures(features_MilitaryPoliceFire_28);
var lyr_MilitaryPoliceFire_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryPoliceFire_28,
maxResolution:2.52824320422621,
 
                style: style_MilitaryPoliceFire_28,
                popuplayertitle: "Military, Police, & Fire",
                interactive: true,
    // title: 'Military, Police, & Fire<br />\
    // <img src="styles/legend/MilitaryPoliceFire_28_0.png" /> Above 15m<br />\
    // <img src="styles/legend/MilitaryPoliceFire_28_1.png" /> 3.5m - 15m<br />\
    // <img src="styles/legend/MilitaryPoliceFire_28_2.png" /> Under 3.5m<br />'
        });

        var lyr_MilitaryPoliceFire_29 = new ol.layer.Tile({
            'title': 'Military, Police, & Fire',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Military, Police, & Fire/{z}/{x}/{y}.png'
            })
        });
var format_Schools_30 = new ol.format.GeoJSON();
var features_Schools_30 = format_Schools_30.readFeatures(json_Schools_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_30.addFeatures(features_Schools_30);
var lyr_Schools_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_30,
maxResolution:2.52824320422621,
 
                style: style_Schools_30,
                popuplayertitle: "Schools",
                interactive: true,
    // title: 'Schools<br />\
    // <img src="styles/legend/Schools_30_0.png" /> Above 100m<br />\
    // <img src="styles/legend/Schools_30_1.png" /> 55m - 100m<br />\
    // <img src="styles/legend/Schools_30_2.png" /> 37m - 55m<br />\
    // <img src="styles/legend/Schools_30_3.png" /> 26m - 37m<br />\
    // <img src="styles/legend/Schools_30_4.png" /> 18m - 26m<br />\
    // <img src="styles/legend/Schools_30_5.png" /> 12.5m - 18m<br />\
    // <img src="styles/legend/Schools_30_6.png" /> 7.5m - 12.5m<br />\
    // <img src="styles/legend/Schools_30_7.png" /> 3.5m - 7.5m<br />\
    // <img src="styles/legend/Schools_30_8.png" /> 1m - 3.5m<br />\
    // <img src="styles/legend/Schools_30_9.png" /> Under 1m<br />'
        });

        var lyr_Schools_31 = new ol.layer.Tile({
            'title': 'Schools',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Schools/{z}/{x}/{y}.png'
            })
        });
var format_ParksRec_32 = new ol.format.GeoJSON();
var features_ParksRec_32 = format_ParksRec_32.readFeatures(json_ParksRec_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParksRec_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParksRec_32.addFeatures(features_ParksRec_32);
var lyr_ParksRec_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParksRec_32,
maxResolution:2.52824320422621,
 
                style: style_ParksRec_32,
                popuplayertitle: "Parks & Rec.",
                interactive: true,
    // title: 'Parks & Rec.<br />\
    // <img src="styles/legend/ParksRec_32_0.png" /> Above 6m<br />\
    // <img src="styles/legend/ParksRec_32_1.png" /> 2m - 6m<br />\
    // <img src="styles/legend/ParksRec_32_2.png" /> Under 2m<br />'
        });

        var lyr_ParksRec_33 = new ol.layer.Tile({
            'title': 'Parks & Rec.',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Parks & Rec/{z}/{x}/{y}.png'
            })
        });
var format_ParkingFacilities_34 = new ol.format.GeoJSON();
var features_ParkingFacilities_34 = format_ParkingFacilities_34.readFeatures(json_ParkingFacilities_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingFacilities_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingFacilities_34.addFeatures(features_ParkingFacilities_34);
var lyr_ParkingFacilities_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingFacilities_34,
maxResolution:2.52824320422621,
 
                style: style_ParkingFacilities_34,
                popuplayertitle: "Parking Facilities",
                interactive: true,
    // title: 'Parking Facilities<br />\
    // <img src="styles/legend/ParkingFacilities_34_0.png" /> Above 7m<br />\
    // <img src="styles/legend/ParkingFacilities_34_1.png" /> 2m - 7m<br />\
    // <img src="styles/legend/ParkingFacilities_34_2.png" /> Under 2m<br />'
        });

        var lyr_ParkingFacilities_35 = new ol.layer.Tile({
            'title': 'Parking Facilities',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Parking Facilities/{z}/{x}/{y}.png'
            })
        });
var format_VehicleServicesSales_36 = new ol.format.GeoJSON();
var features_VehicleServicesSales_36 = format_VehicleServicesSales_36.readFeatures(json_VehicleServicesSales_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VehicleServicesSales_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VehicleServicesSales_36.addFeatures(features_VehicleServicesSales_36);
var lyr_VehicleServicesSales_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VehicleServicesSales_36,
maxResolution:2.52824320422621,
 
                style: style_VehicleServicesSales_36,
                popuplayertitle: "Vehicle Services & Sales",
                interactive: true,
    // title: 'Vehicle Services & Sales<br />\
    // <img src="styles/legend/VehicleServicesSales_36_0.png" /> Above 7m<br />\
    // <img src="styles/legend/VehicleServicesSales_36_1.png" /> 2m - 7m<br />\
    // <img src="styles/legend/VehicleServicesSales_36_2.png" /> Under 2m<br />'
        });

        var lyr_VehicleServicesSales_37 = new ol.layer.Tile({
            'title': 'Vehicle Services & Sales',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vehicle Services & Sales/{z}/{x}/{y}.png'
            })
        });
var format_OfficesBanks_38 = new ol.format.GeoJSON();
var features_OfficesBanks_38 = format_OfficesBanks_38.readFeatures(json_OfficesBanks_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OfficesBanks_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OfficesBanks_38.addFeatures(features_OfficesBanks_38);
var lyr_OfficesBanks_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OfficesBanks_38,
maxResolution:2.52824320422621,
 
                style: style_OfficesBanks_38,
                popuplayertitle: "Offices & Banks",
                interactive: true,
    // title: 'Offices & Banks<br />\
    // <img src="styles/legend/OfficesBanks_38_0.png" /> Above 13m<br />\
    // <img src="styles/legend/OfficesBanks_38_1.png" /> 3m - 13m<br />\
    // <img src="styles/legend/OfficesBanks_38_2.png" /> Under 3m<br />'
        });

        var lyr_OfficesBanks_39 = new ol.layer.Tile({
            'title': 'Offices & Banks',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Offices & Banks/{z}/{x}/{y}.png'
            })
        });
var format_Supermarkets_40 = new ol.format.GeoJSON();
var features_Supermarkets_40 = format_Supermarkets_40.readFeatures(json_Supermarkets_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkets_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkets_40.addFeatures(features_Supermarkets_40);
var lyr_Supermarkets_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkets_40,
maxResolution:2.52824320422621,
 
                style: style_Supermarkets_40,
                popuplayertitle: "Supermarkets",
                interactive: true,
    // title: 'Supermarkets<br />\
    // <img src="styles/legend/Supermarkets_40_0.png" /> Above 6m<br />\
    // <img src="styles/legend/Supermarkets_40_1.png" /> 500k - 6m<br />\
    // <img src="styles/legend/Supermarkets_40_2.png" /> Under 500k<br />'
        });

        var lyr_Supermarkets_41 = new ol.layer.Tile({
            'title': 'Supermarkets',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Supermarkets/{z}/{x}/{y}.png'
            })
        });
var format_ConvenienceMarkets_42 = new ol.format.GeoJSON();
var features_ConvenienceMarkets_42 = format_ConvenienceMarkets_42.readFeatures(json_ConvenienceMarkets_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConvenienceMarkets_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConvenienceMarkets_42.addFeatures(features_ConvenienceMarkets_42);
var lyr_ConvenienceMarkets_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConvenienceMarkets_42,
maxResolution:2.52824320422621,
 
                style: style_ConvenienceMarkets_42,
                popuplayertitle: "Convenience Markets",
                interactive: true,
    // title: 'Convenience Markets<br />\
    // <img src="styles/legend/ConvenienceMarkets_42_0.png" /> Above 1.5m<br />\
    // <img src="styles/legend/ConvenienceMarkets_42_1.png" /> 700k - 1.5m<br />\
    // <img src="styles/legend/ConvenienceMarkets_42_2.png" /> Under 700k<br />'
        });

        var lyr_ConvenienceMarkets_43 = new ol.layer.Tile({
            'title': 'Convenience Markets',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Convenience Markets/{z}/{x}/{y}.png'
            })
        });
var format_DepartmentStores_44 = new ol.format.GeoJSON();
var features_DepartmentStores_44 = format_DepartmentStores_44.readFeatures(json_DepartmentStores_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartmentStores_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartmentStores_44.addFeatures(features_DepartmentStores_44);
var lyr_DepartmentStores_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartmentStores_44,
maxResolution:2.52824320422621,
 
                style: style_DepartmentStores_44,
                popuplayertitle: "Department Stores",
                interactive: true,
    // title: 'Department Stores<br />\
    // <img src="styles/legend/DepartmentStores_44_0.png" /> Above 10m<br />\
    // <img src="styles/legend/DepartmentStores_44_1.png" /> 2m - 10m<br />\
    // <img src="styles/legend/DepartmentStores_44_2.png" /> Under 2m<br />'
        });

        var lyr_DepartmentStores_45 = new ol.layer.Tile({
            'title': 'Department Stores',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Department Stores/{z}/{x}/{y}.png'
            })
        });
var format_Stores_46 = new ol.format.GeoJSON();
var features_Stores_46 = format_Stores_46.readFeatures(json_Stores_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stores_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stores_46.addFeatures(features_Stores_46);
var lyr_Stores_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stores_46,
maxResolution:2.52824320422621,
 
                style: style_Stores_46,
                popuplayertitle: "Stores",
                interactive: true,
    // title: 'Stores<br />\
    // <img src="styles/legend/Stores_46_0.png" /> Above 7m<br />\
    // <img src="styles/legend/Stores_46_1.png" /> 1m - 7m<br />\
    // <img src="styles/legend/Stores_46_2.png" /> Under 1m<br />'
        });

        var lyr_Stores_47 = new ol.layer.Tile({
            'title': 'Stores',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Stores/{z}/{x}/{y}.png'
            })
        });
var format_Entertainment_48 = new ol.format.GeoJSON();
var features_Entertainment_48 = format_Entertainment_48.readFeatures(json_Entertainment_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entertainment_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entertainment_48.addFeatures(features_Entertainment_48);
var lyr_Entertainment_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entertainment_48,
maxResolution:2.52824320422621,
 
                style: style_Entertainment_48,
                popuplayertitle: "Entertainment",
                interactive: true,
    // title: 'Entertainment<br />\
    // <img src="styles/legend/Entertainment_48_0.png" /> Above 5m<br />\
    // <img src="styles/legend/Entertainment_48_1.png" /> 1.5m - 5m<br />\
    // <img src="styles/legend/Entertainment_48_2.png" /> Under 1.5m<br />'
        });

        var lyr_Entertainment_49 = new ol.layer.Tile({
            'title': 'Entertainment',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Entertainment/{z}/{x}/{y}.png'
            })
        });
var format_FoodBeverage_50 = new ol.format.GeoJSON();
var features_FoodBeverage_50 = format_FoodBeverage_50.readFeatures(json_FoodBeverage_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodBeverage_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodBeverage_50.addFeatures(features_FoodBeverage_50);
var lyr_FoodBeverage_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodBeverage_50,
maxResolution:2.52824320422621,
 
                style: style_FoodBeverage_50,
                popuplayertitle: "Food & Beverage",
                interactive: true,
    // title: 'Food & Beverage<br />\
    // <img src="styles/legend/FoodBeverage_50_0.png" /> Above 1.5m<br />\
    // <img src="styles/legend/FoodBeverage_50_1.png" /> 600k - 1.5m<br />\
    // <img src="styles/legend/FoodBeverage_50_2.png" /> Under 600k<br />'
        });

        var lyr_FoodBeverage_51 = new ol.layer.Tile({
            'title': 'Food & Beverage',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Food & Beverage/{z}/{x}/{y}.png'
            })
        });
var format_ShoppingCentersSmall_52 = new ol.format.GeoJSON();
var features_ShoppingCentersSmall_52 = format_ShoppingCentersSmall_52.readFeatures(json_ShoppingCentersSmall_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShoppingCentersSmall_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShoppingCentersSmall_52.addFeatures(features_ShoppingCentersSmall_52);
var lyr_ShoppingCentersSmall_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShoppingCentersSmall_52,
maxResolution:2.52824320422621,
 
                style: style_ShoppingCentersSmall_52,
                popuplayertitle: "Shopping Centers - Small",
                interactive: true,
                // title: '<img src="styles/legend/ShoppingCentersSmall_52.png" /> Shopping Centers - Small'
            });

        var lyr_ShoppingCentersSmall_53 = new ol.layer.Tile({
            'title': '<img src="styles/legend/ShoppingCentersSmall_52.png" /> Shopping Centers - Small',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Shopping Centers - Small/{z}/{x}/{y}.png'
            })
        });
var format_ShoppingCentersLarge_54 = new ol.format.GeoJSON();
var features_ShoppingCentersLarge_54 = format_ShoppingCentersLarge_54.readFeatures(json_ShoppingCentersLarge_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShoppingCentersLarge_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShoppingCentersLarge_54.addFeatures(features_ShoppingCentersLarge_54);
var lyr_ShoppingCentersLarge_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShoppingCentersLarge_54,
maxResolution:2.52824320422621,
 
                style: style_ShoppingCentersLarge_54,
                popuplayertitle: "Shopping Centers - Large",
                interactive: true,
                // title: '<img src="styles/legend/ShoppingCentersLarge_54.png" /> Shopping Centers - Large'
            });

        var lyr_ShoppingCentersLarge_55 = new ol.layer.Tile({
            'title': '<img src="styles/legend/ShoppingCentersLarge_54.png" /> Shopping Centers - Large',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Shopping Centers - Large/{z}/{x}/{y}.png'
            })
        });
var format_StripMalls_56 = new ol.format.GeoJSON();
var features_StripMalls_56 = format_StripMalls_56.readFeatures(json_StripMalls_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StripMalls_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StripMalls_56.addFeatures(features_StripMalls_56);
var lyr_StripMalls_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StripMalls_56,
maxResolution:2.52824320422621,
 
                style: style_StripMalls_56,
                popuplayertitle: "Strip Malls",
                interactive: true,
    // title: 'Strip Malls<br />\
    // <img src="styles/legend/StripMalls_56_0.png" /> Above 7m<br />\
    // <img src="styles/legend/StripMalls_56_1.png" /> 2m - 7m<br />\
    // <img src="styles/legend/StripMalls_56_2.png" /> Under 2m<br />'
        });

        var lyr_StripMalls_57 = new ol.layer.Tile({
            'title': 'Strip Malls',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Strip Malls/{z}/{x}/{y}.png'
            })
        });
var format_HospitalsCareFacilities_58 = new ol.format.GeoJSON();
var features_HospitalsCareFacilities_58 = format_HospitalsCareFacilities_58.readFeatures(json_HospitalsCareFacilities_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HospitalsCareFacilities_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalsCareFacilities_58.addFeatures(features_HospitalsCareFacilities_58);
var lyr_HospitalsCareFacilities_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitalsCareFacilities_58,
maxResolution:2.52824320422621,
 
                style: style_HospitalsCareFacilities_58,
                popuplayertitle: "Hospitals & Care Facilities",
                interactive: true,
    // title: 'Hospitals & Care Facilities<br />\
    // <img src="styles/legend/HospitalsCareFacilities_58_0.png" /> Above 90m<br />\
    // <img src="styles/legend/HospitalsCareFacilities_58_1.png" /> 16m - 90m<br />\
    // <img src="styles/legend/HospitalsCareFacilities_58_2.png" /> Under 16m<br />'
        });

        var lyr_HospitalsCareFacilities_59 = new ol.layer.Tile({
            'title': 'Hospitals & Care Facilities',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Hospitals & Care Facilities/{z}/{x}/{y}.png'
            })
        });
var format_CemeteriesServices_60 = new ol.format.GeoJSON();
var features_CemeteriesServices_60 = format_CemeteriesServices_60.readFeatures(json_CemeteriesServices_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CemeteriesServices_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CemeteriesServices_60.addFeatures(features_CemeteriesServices_60);
var lyr_CemeteriesServices_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CemeteriesServices_60,
maxResolution:2.52824320422621,
 
                style: style_CemeteriesServices_60,
                popuplayertitle: "Cemeteries & Services",
                interactive: true,
                // title: '<img src="styles/legend/CemeteriesServices_60.png" /> Cemeteries & Services'
            });

        var lyr_CemeteriesServices_61 = new ol.layer.Tile({
            'title': '<img src="styles/legend/CemeteriesServices_60.png" /> Cemeteries & Services',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Cemeteries & Services/{z}/{x}/{y}.png'
            })
        });
var format_GolfCourses_62 = new ol.format.GeoJSON();
var features_GolfCourses_62 = format_GolfCourses_62.readFeatures(json_GolfCourses_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GolfCourses_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GolfCourses_62.addFeatures(features_GolfCourses_62);
var lyr_GolfCourses_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GolfCourses_62,
maxResolution:2.52824320422621,
 
                style: style_GolfCourses_62,
                popuplayertitle: "Golf Courses",
                interactive: true,
    // title: 'Golf Courses<br />\
    // <img src="styles/legend/GolfCourses_62_0.png" /> Above 3.5m<br />\
    // <img src="styles/legend/GolfCourses_62_1.png" /> 1m - 3.5m<br />\
    // <img src="styles/legend/GolfCourses_62_2.png" /> Under 1m<br />'
        });

        var lyr_GolfCourses_63 = new ol.layer.Tile({
            'title': 'Golf Courses',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Golf Courses/{z}/{x}/{y}.png'
            })
        });
var format_ClubsLodges_64 = new ol.format.GeoJSON();
var features_ClubsLodges_64 = format_ClubsLodges_64.readFeatures(json_ClubsLodges_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClubsLodges_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClubsLodges_64.addFeatures(features_ClubsLodges_64);
var lyr_ClubsLodges_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClubsLodges_64,
maxResolution:2.52824320422621,
 
                style: style_ClubsLodges_64,
                popuplayertitle: "Clubs & Lodges",
                interactive: true,
    // title: 'Clubs & Lodges<br />\
    // <img src="styles/legend/ClubsLodges_64_0.png" /> Above 5m<br />\
    // <img src="styles/legend/ClubsLodges_64_1.png" /> 1.5m - 5m<br />\
    // <img src="styles/legend/ClubsLodges_64_2.png" /> Under 1.5m<br />'
        });

        var lyr_ClubsLodges_65 = new ol.layer.Tile({
            'title': 'Clubs & Lodges',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Clubs & Lodges/{z}/{x}/{y}.png'
            })
        });
var format_Resorts_66 = new ol.format.GeoJSON();
var features_Resorts_66 = format_Resorts_66.readFeatures(json_Resorts_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resorts_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resorts_66.addFeatures(features_Resorts_66);
var lyr_Resorts_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resorts_66,
maxResolution:2.52824320422621,
 
                style: style_Resorts_66,
                popuplayertitle: "Resorts",
                interactive: true,
    // title: 'Resorts<br />\
    // <img src="styles/legend/Resorts_66_0.png" /> Above 27m<br />\
    // <img src="styles/legend/Resorts_66_1.png" /> 6m - 27m<br />\
    // <img src="styles/legend/Resorts_66_2.png" /> Under 6m<br />'
        });

        var lyr_Resorts_67 = new ol.layer.Tile({
            'title': 'Resorts',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Resorts/{z}/{x}/{y}.png'
            })
        });
var format_HotelsMotels_68 = new ol.format.GeoJSON();
var features_HotelsMotels_68 = format_HotelsMotels_68.readFeatures(json_HotelsMotels_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsMotels_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelsMotels_68.addFeatures(features_HotelsMotels_68);
var lyr_HotelsMotels_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotelsMotels_68,
maxResolution:2.52824320422621,
 
                style: style_HotelsMotels_68,
                popuplayertitle: "Hotels & Motels",
                interactive: true,
    // title: 'Hotels & Motels<br />\
    // <img src="styles/legend/HotelsMotels_68_0.png" /> Above 8m<br />\
    // <img src="styles/legend/HotelsMotels_68_1.png" /> 3m - 8m<br />\
    // <img src="styles/legend/HotelsMotels_68_2.png" /> Under 3m<br />'
        });

        var lyr_HotelsMotels_69 = new ol.layer.Tile({
            'title': 'Hotels & Motels',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Hotels & Motels/{z}/{x}/{y}.png'
            })
        });
var format_ApartmentsSmall_70 = new ol.format.GeoJSON();
var features_ApartmentsSmall_70 = format_ApartmentsSmall_70.readFeatures(json_ApartmentsSmall_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsSmall_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsSmall_70.addFeatures(features_ApartmentsSmall_70);
var lyr_ApartmentsSmall_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsSmall_70,
maxResolution:2.52824320422621,
 
                style: style_ApartmentsSmall_70,
                popuplayertitle: "Apartments - Small",
                interactive: true,
    // title: 'Apartments - Small<br />\
    // <img src="styles/legend/ApartmentsSmall_70_0.png" /> Above 2m<br />\
    // <img src="styles/legend/ApartmentsSmall_70_1.png" /> Under 2m<br />'
        });

        var lyr_ApartmentsSmall_71 = new ol.layer.Tile({
            'title': 'Apartments - Small',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Apartments - Small/{z}/{x}/{y}.png'
            })
        });
var format_ApartmentsLarge_72 = new ol.format.GeoJSON();
var features_ApartmentsLarge_72 = format_ApartmentsLarge_72.readFeatures(json_ApartmentsLarge_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApartmentsLarge_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApartmentsLarge_72.addFeatures(features_ApartmentsLarge_72);
var lyr_ApartmentsLarge_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApartmentsLarge_72,
maxResolution:2.52824320422621,
 
                style: style_ApartmentsLarge_72,
                popuplayertitle: "Apartments - Large",
                interactive: true,
    // title: 'Apartments - Large<br />\
    // <img src="styles/legend/ApartmentsLarge_72_0.png" /> Above 55m<br />\
    // <img src="styles/legend/ApartmentsLarge_72_1.png" /> 35m - 55m<br />\
    // <img src="styles/legend/ApartmentsLarge_72_2.png" /> 20m - 35m<br />\
    // <img src="styles/legend/ApartmentsLarge_72_3.png" /> 7m - 20m<br />\
    // <img src="styles/legend/ApartmentsLarge_72_4.png" /> Under 7m<br />'
        });

        var lyr_ApartmentsLarge_73 = new ol.layer.Tile({
            'title': 'Apartments - Large',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Apartments - Large/{z}/{x}/{y}.png'
            })
        });
var format_ResidentialCommonArea_74 = new ol.format.GeoJSON();
var features_ResidentialCommonArea_74 = format_ResidentialCommonArea_74.readFeatures(json_ResidentialCommonArea_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialCommonArea_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialCommonArea_74.addFeatures(features_ResidentialCommonArea_74);
var lyr_ResidentialCommonArea_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialCommonArea_74,
maxResolution:2.52824320422621,
 
                style: style_ResidentialCommonArea_74,
                popuplayertitle: "Residential Common Area",
                interactive: true,
                // title: '<img src="styles/legend/ResidentialCommonArea_74.png" /> Residential Common Area'
            });

        var lyr_ResidentialCommonArea_75 = new ol.layer.Tile({
            'title': '<img src="styles/legend/ResidentialCommonArea_74.png" /> Residential Common Area',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Common Area/{z}/{x}/{y}.png'
            })
        });
var format_ManufacturedHomes_76 = new ol.format.GeoJSON();
var features_ManufacturedHomes_76 = format_ManufacturedHomes_76.readFeatures(json_ManufacturedHomes_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturedHomes_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturedHomes_76.addFeatures(features_ManufacturedHomes_76);
var lyr_ManufacturedHomes_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturedHomes_76,
maxResolution:2.52824320422621,
 
                style: style_ManufacturedHomes_76,
                popuplayertitle: "Manufactured Homes",
                interactive: true,
    // title: 'Manufactured Homes<br />\
    // <img src="styles/legend/ManufacturedHomes_76_0.png" /> Above 7m<br />\
    // <img src="styles/legend/ManufacturedHomes_76_1.png" /> 2m - 7m<br />\
    // <img src="styles/legend/ManufacturedHomes_76_2.png" /> 500k - 2m<br />\
    // <img src="styles/legend/ManufacturedHomes_76_3.png" /> Under 500k<br />'
        });

        var lyr_ManufacturedHomes_77 = new ol.layer.Tile({
            'title': 'Manufactured Homes',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Manufactured Homes/{z}/{x}/{y}.png'
            })
        });
var format_ResidentialUnder250k_78 = new ol.format.GeoJSON();
var features_ResidentialUnder250k_78; // = format_ResidentialUnder250k_78.readFeatures(json_ResidentialUnder250k_78, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialUnder250k_78 = new ol.source.Vector({
    attributions: ' ',
});
// jsonSource_ResidentialUnder250k_78.addFeatures(features_ResidentialUnder250k_78);
var lyr_ResidentialUnder250k_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialUnder250k_78,
maxResolution:2.52824320422621,
 
                style: style_ResidentialUnder250k_78,
                popuplayertitle: "Residential Under 250k",
                interactive: true,
    // title: 'Residential Under 250k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_0.png" /> 200k - 300k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />'
        });
var format_Residential250k400k_79 = new ol.format.GeoJSON();
var features_Residential250k400k_79; // = format_Residential250k400k_79.readFeatures(json_Residential250k400k_79, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential250k400k_79 = new ol.source.Vector({
    attributions: ' ',
});
// jsonSource_Residential250k400k_79.addFeatures(features_Residential250k400k_79);
var lyr_Residential250k400k_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residential250k400k_79,
maxResolution:2.52824320422621,
 
                style: style_Residential250k400k_79,
                popuplayertitle: "Residential 250k - 400k",
                interactive: true,
    // title: 'Residential 250k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />'
        });

        var lyr_ResidentialUnder400k_80 = new ol.layer.Tile({
            'title': 'Residential Under 400k',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Under 400k/{z}/{x}/{y}.png'
            })
        });
var format_Residential400k700k_81 = new ol.format.GeoJSON();
var features_Residential400k700k_81 = format_Residential400k700k_81.readFeatures(json_Residential400k700k_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential400k700k_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential400k700k_81.addFeatures(features_Residential400k700k_81);
var lyr_Residential400k700k_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residential400k700k_81,
maxResolution:2.52824320422621,
 
                style: style_Residential400k700k_81,
                popuplayertitle: "Residential 400k - 700k",
                interactive: true,
    // title: 'Residential 400k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
    // <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />'
        });

        var lyr_Residential400k700k_82 = new ol.layer.Tile({
            'title': 'Residential 400k - 700k',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential 400k - 700k/{z}/{x}/{y}.png'
            })
        });
var format_ResidentialAbove700k_83 = new ol.format.GeoJSON();
var features_ResidentialAbove700k_83 = format_ResidentialAbove700k_83.readFeatures(json_ResidentialAbove700k_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialAbove700k_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialAbove700k_83.addFeatures(features_ResidentialAbove700k_83);
var lyr_ResidentialAbove700k_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialAbove700k_83,
maxResolution:2.52824320422621,
 
                style: style_ResidentialAbove700k_83,
                popuplayertitle: "Residential Above 700k",
                interactive: true,
    // title: 'Residential Above 700k<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_0.png" /> Above 2m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_1.png" /> 1.75m - 2m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_2.png" /> 1.5m - 1.75m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_3.png" /> 1.25m - 1.5m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_4.png" /> 1m - 1.25m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_5.png" /> 900k - 1m<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_6.png" /> 800k - 900k<br />\
    // <img src="styles/legend/ResidentialAbove700k_83_7.png" /> 700k - 800k<br />'
        });

        var lyr_ResidentialAbove700k_84 = new ol.layer.Tile({
            'title': 'Residential Above 700k',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Above 700k/{z}/{x}/{y}.png'
            })
        });
var format_CityNames_2 = new ol.format.GeoJSON();
var features_CityNames_2 = format_CityNames_2.readFeatures(json_CityNames_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityNames_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityNames_2.addFeatures(features_CityNames_2);
var lyr_CityNames_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityNames_2,
maxResolution:28004.466152261964,
 minResolution:40.45189126761936,

                style: style_CityNames_2,
                popuplayertitle: "City Names",
                interactive: true,
                // title: 'City Names'
            });
            var format_Highways_1 = new ol.format.GeoJSON();
var features_Highways_1 = format_Highways_1.readFeatures(json_Highways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highways_1.addFeatures(features_Highways_1);
var lyr_Highways_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Highways_1,
maxResolution:28004.466152261964,
 minResolution:40.45189126761936,

                style: style_Highways_1,
                popuplayertitle: "Highways",
                interactive: true,
                // title: '<img src="styles/legend/Highways_1.png" /> Highways'
            });
var format_StreetsMajor_85 = new ol.format.GeoJSON();
var features_StreetsMajor_85 = format_StreetsMajor_85.readFeatures(json_StreetsMajor_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreetsMajor_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreetsMajor_85.addFeatures(features_StreetsMajor_85);
var lyr_StreetsMajor_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StreetsMajor_85,
maxResolution:40.45189126761936,
 minResolution:2.52824320422621,

                style: style_StreetsMajor_85,
                popuplayertitle: "Streets",
                interactive: true,
                // title: 'Streets Major'
            });
var format_Streets_86 = new ol.format.GeoJSON();
var features_Streets_86 = format_Streets_86.readFeatures(json_Streets_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streets_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streets_86.addFeatures(features_Streets_86);
var lyr_Streets_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streets_86,
maxResolution:2.52824320422621,
 
                style: style_Streets_86,
                popuplayertitle: "Streets",
                interactive: true,
                // title: 'Streets & Addresses'
            });
var format_Addresses2_87 = new ol.format.GeoJSON();
var features_Addresses2_87 = format_Addresses2_87.readFeatures(json_Addresses2_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Addresses2_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Addresses2_87.addFeatures(features_Addresses2_87);
var lyr_Addresses2_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Addresses2_87,
maxResolution:0.6320608010565525,
 
                style: style_Addresses2_87,
                popuplayertitle: "Addresses",
                interactive: true,
                // title: 'Addresses 2'
            });
var format_Addresses1_88 = new ol.format.GeoJSON();
var features_Addresses1_88 = format_Addresses1_88.readFeatures(json_Addresses1_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Addresses1_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Addresses1_88.addFeatures(features_Addresses1_88);
var lyr_Addresses1_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Addresses1_88,
maxResolution:0.6320608010565525,
 
                style: style_Addresses1_88,
                popuplayertitle: "Addresses",
                interactive: true,
                // title: 'Addresses'
            });
var group_Streets = new ol.layer.Group({
                                layers: [lyr_Highways_1,lyr_StreetsMajor_85,lyr_Streets_86,lyr_CityNames_2,lyr_Addresses2_87,lyr_Addresses1_88,],
                                fold: "close",
                                title2: "Streets & Addresses"});
var group_ResidentialHomesbyValue = new ol.layer.Group({
                                layers: [lyr_ResidentialCommonArea_75,lyr_ManufacturedHomes_77,lyr_ResidentialUnder400k_80,lyr_Residential400k700k_82,lyr_ResidentialAbove700k_84,],
                                fold: "close",
                                title: "Residential Homes by Value"});
var group_ResidentialHomesbyValueVectors = new ol.layer.Group({
                                layers: [lyr_ResidentialCommonArea_74,lyr_ManufacturedHomes_76,lyr_ResidentialUnder250k_78,lyr_Residential250k400k_79,lyr_Residential400k700k_81,lyr_ResidentialAbove700k_83,],
                                fold: "close",
                                //title: "Residential Homes by Value"
                                });
var group_Apartments = new ol.layer.Group({
                                layers: [lyr_ApartmentsSmall_71,lyr_ApartmentsLarge_73,],
                                fold: "close",
                                title: "Apartments"});
var group_ApartmentsVectors = new ol.layer.Group({
                                layers: [lyr_ApartmentsSmall_70,lyr_ApartmentsLarge_72,],
                                fold: "close",
                                // title: "Apartments"
                                });
var group_Commercial = new ol.layer.Group({
                                layers: [lyr_Agriculture_23,lyr_MiscCommercial_25,lyr_IndustrialFacilities_27,lyr_MilitaryPoliceFire_29,lyr_Schools_31,lyr_ParksRec_33,lyr_ParkingFacilities_35,lyr_VehicleServicesSales_37,lyr_OfficesBanks_39,lyr_Supermarkets_41,lyr_ConvenienceMarkets_43,lyr_DepartmentStores_45,lyr_Stores_47,lyr_Entertainment_49,lyr_FoodBeverage_51,lyr_ShoppingCentersSmall_53,lyr_ShoppingCentersLarge_55,lyr_StripMalls_57,lyr_HospitalsCareFacilities_59,lyr_CemeteriesServices_61,lyr_GolfCourses_63,lyr_ClubsLodges_65,lyr_Resorts_67,lyr_HotelsMotels_69,],
                                fold: "close",
                                title: "Commercial"});
var group_CommercialVectors = new ol.layer.Group({
                                layers: [lyr_Agriculture_22,lyr_MiscCommercial_24,lyr_IndustrialFacilities_26,lyr_MilitaryPoliceFire_28,lyr_Schools_30,lyr_ParksRec_32,lyr_ParkingFacilities_34,lyr_VehicleServicesSales_36,lyr_OfficesBanks_38,lyr_Supermarkets_40,lyr_ConvenienceMarkets_42,lyr_DepartmentStores_44,lyr_Stores_46,lyr_Entertainment_48,lyr_FoodBeverage_50,lyr_ShoppingCentersSmall_52,lyr_ShoppingCentersLarge_54,lyr_StripMalls_56,lyr_HospitalsCareFacilities_58,lyr_CemeteriesServices_60,lyr_GolfCourses_62,lyr_ClubsLodges_64,lyr_Resorts_66,lyr_HotelsMotels_68,],
                                fold: "close",
                                // title: "Commercial"
                                });
var group_VacantLand = new ol.layer.Group({
                                layers: [lyr_VacantIndian_5,lyr_VacantFederal_7,lyr_VacantState_9,lyr_VacantCounty_11,lyr_VacantMunicipal_13,lyr_VacantIndustrial_15,lyr_VacantCommercial_17,lyr_VacantResidential_19,lyr_IncompleteSubdivisions_21,],
                                fold: "close",
                                title: "Vacant Land"});
var group_VacantLandVectors = new ol.layer.Group({
                                layers: [lyr_Indian_4,lyr_Federal_6,lyr_State_8,lyr_County_10,lyr_Municipal_12,lyr_Industrial_14,lyr_Commercial_16,lyr_Residential_18,lyr_IncompleteSubdivisions_20,],
                                fold: "close",
                                // title: "Vacant Land"
                                });
var group_Parcels = new ol.layer.Group({
                                layers: [lyr_RemainingParcels_3,],
                                fold: "close",
                                // title: "Parcels"
                                });
var group_Mapstopoverlaysbottom = new ol.layer.Group({
                                layers: [lyr_CurrentGoogleSatelliteLowRes_0,lyr_2021TucsonHighRes_1,lyr_2022TucsonHighRes_2,],
                                fold: "open",
                                title2: "Maps (top overlays bottom)"});

lyr_CurrentGoogleSatelliteLowRes_0.setVisible(true);lyr_2021TucsonHighRes_1.setVisible(true);lyr_2022TucsonHighRes_2.setVisible(true);lyr_RemainingParcels_3.setVisible(true);lyr_Indian_4.setVisible(true);lyr_VacantIndian_5.setVisible(false);lyr_Federal_6.setVisible(true);lyr_VacantFederal_7.setVisible(false);lyr_State_8.setVisible(true);lyr_VacantState_9.setVisible(false);lyr_County_10.setVisible(true);lyr_VacantCounty_11.setVisible(false);lyr_Municipal_12.setVisible(true);lyr_VacantMunicipal_13.setVisible(false);lyr_Industrial_14.setVisible(true);lyr_VacantIndustrial_15.setVisible(false);lyr_Commercial_16.setVisible(true);lyr_VacantCommercial_17.setVisible(false);lyr_Residential_18.setVisible(true);lyr_VacantResidential_19.setVisible(false);lyr_IncompleteSubdivisions_20.setVisible(true);lyr_IncompleteSubdivisions_21.setVisible(false);lyr_Agriculture_22.setVisible(true);lyr_Agriculture_23.setVisible(false);lyr_MiscCommercial_24.setVisible(true);lyr_MiscCommercial_25.setVisible(false);lyr_IndustrialFacilities_26.setVisible(true);lyr_IndustrialFacilities_27.setVisible(false);lyr_MilitaryPoliceFire_28.setVisible(true);lyr_MilitaryPoliceFire_29.setVisible(false);lyr_Schools_30.setVisible(true);lyr_Schools_31.setVisible(false);lyr_ParksRec_32.setVisible(true);lyr_ParksRec_33.setVisible(false);lyr_ParkingFacilities_34.setVisible(true);lyr_ParkingFacilities_35.setVisible(false);lyr_VehicleServicesSales_36.setVisible(true);lyr_VehicleServicesSales_37.setVisible(false);lyr_OfficesBanks_38.setVisible(true);lyr_OfficesBanks_39.setVisible(false);lyr_Supermarkets_40.setVisible(true);lyr_Supermarkets_41.setVisible(false);lyr_ConvenienceMarkets_42.setVisible(true);lyr_ConvenienceMarkets_43.setVisible(false);lyr_DepartmentStores_44.setVisible(true);lyr_DepartmentStores_45.setVisible(false);lyr_Stores_46.setVisible(true);lyr_Stores_47.setVisible(false);lyr_Entertainment_48.setVisible(true);lyr_Entertainment_49.setVisible(false);lyr_FoodBeverage_50.setVisible(true);lyr_FoodBeverage_51.setVisible(false);lyr_ShoppingCentersSmall_52.setVisible(true);lyr_ShoppingCentersSmall_53.setVisible(false);lyr_ShoppingCentersLarge_54.setVisible(true);lyr_ShoppingCentersLarge_55.setVisible(false);lyr_StripMalls_56.setVisible(true);lyr_StripMalls_57.setVisible(false);lyr_HospitalsCareFacilities_58.setVisible(true);lyr_HospitalsCareFacilities_59.setVisible(false);lyr_CemeteriesServices_60.setVisible(true);lyr_CemeteriesServices_61.setVisible(false);lyr_GolfCourses_62.setVisible(true);lyr_GolfCourses_63.setVisible(false);lyr_ClubsLodges_64.setVisible(true);lyr_ClubsLodges_65.setVisible(false);lyr_Resorts_66.setVisible(true);lyr_Resorts_67.setVisible(false);lyr_HotelsMotels_68.setVisible(true);lyr_HotelsMotels_69.setVisible(false);lyr_ApartmentsSmall_70.setVisible(true);lyr_ApartmentsSmall_71.setVisible(false);lyr_ApartmentsLarge_72.setVisible(true);lyr_ApartmentsLarge_73.setVisible(false);lyr_ResidentialCommonArea_74.setVisible(true);lyr_ResidentialCommonArea_75.setVisible(false);lyr_ManufacturedHomes_76.setVisible(true);lyr_ManufacturedHomes_77.setVisible(false);lyr_ResidentialUnder250k_78.setVisible(true);lyr_Residential250k400k_79.setVisible(true);lyr_ResidentialUnder400k_80.setVisible(false);lyr_Residential400k700k_81.setVisible(true);lyr_Residential400k700k_82.setVisible(false);lyr_ResidentialAbove700k_83.setVisible(true);lyr_ResidentialAbove700k_84.setVisible(false);lyr_StreetsMajor_85.setVisible(true);lyr_Streets_86.setVisible(true);lyr_Addresses2_87.setVisible(true);lyr_Addresses1_88.setVisible(true);lyr_Highways_1.setVisible(true);lyr_CityNames_2.setVisible(true);
var layersList = [group_Mapstopoverlaysbottom,group_Parcels,group_VacantLand,group_VacantLandVectors,group_Commercial,group_CommercialVectors,group_Apartments,group_ApartmentsVectors,group_ResidentialHomesbyValue,group_ResidentialHomesbyValueVectors,group_Streets];
lyr_RemainingParcels_3.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Indian_4.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Federal_6.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_State_8.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_County_10.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Municipal_12.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Industrial_14.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Commercial_16.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Residential_18.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_IncompleteSubdivisions_20.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Agriculture_22.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_MiscCommercial_24.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_IndustrialFacilities_26.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_MilitaryPoliceFire_28.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Schools_30.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ParksRec_32.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ParkingFacilities_34.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_VehicleServicesSales_36.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_OfficesBanks_38.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Supermarkets_40.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ConvenienceMarkets_42.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_DepartmentStores_44.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Stores_46.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Entertainment_48.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_FoodBeverage_50.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ShoppingCentersSmall_52.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ShoppingCentersLarge_54.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_StripMalls_56.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_HospitalsCareFacilities_58.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_CemeteriesServices_60.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_GolfCourses_62.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ClubsLodges_64.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Resorts_66.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_HotelsMotels_68.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ApartmentsSmall_70.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ApartmentsLarge_72.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ResidentialCommonArea_74.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ManufacturedHomes_76.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ResidentialUnder250k_78.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Residential250k400k_79.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_Residential400k700k_81.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_ResidentialAbove700k_83.set('fieldAliases', {'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_StreetsMajor_85.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Streets_86.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ROADCAT_DS': 'ROADCAT_DS', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Addresses2_87.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESS': 'ADDRESS', 'STREET_NO': 'STREET_NO', 'ZIPCODE': 'ZIPCODE', 'ZIPCITY': 'ZIPCITY', 'LON': 'LON', 'LAT': 'LAT', });
lyr_Addresses1_88.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESS': 'ADDRESS', 'STREET_NO': 'STREET_NO', 'ZIPCODE': 'ZIPCODE', 'ZIPCITY': 'ZIPCITY', 'LON': 'LON', 'LAT': 'LAT', });
lyr_RemainingParcels_3.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Indian_4.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Federal_6.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_State_8.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_County_10.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Municipal_12.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Industrial_14.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Commercial_16.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Residential_18.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_IncompleteSubdivisions_20.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Agriculture_22.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_MiscCommercial_24.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_IndustrialFacilities_26.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_MilitaryPoliceFire_28.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Schools_30.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ParksRec_32.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ParkingFacilities_34.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_VehicleServicesSales_36.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_OfficesBanks_38.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Supermarkets_40.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ConvenienceMarkets_42.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_DepartmentStores_44.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Stores_46.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Entertainment_48.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_FoodBeverage_50.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ShoppingCentersSmall_52.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ShoppingCentersLarge_54.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_StripMalls_56.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_HospitalsCareFacilities_58.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_CemeteriesServices_60.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_GolfCourses_62.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ClubsLodges_64.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Resorts_66.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_HotelsMotels_68.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ApartmentsSmall_70.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ApartmentsLarge_72.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ResidentialCommonArea_74.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ManufacturedHomes_76.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ResidentialUnder250k_78.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Residential250k400k_79.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_Residential400k700k_81.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_ResidentialAbove700k_83.set('fieldImages', {'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_StreetsMajor_85.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Streets_86.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ROADCAT_DS': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Addresses2_87.set('fieldImages', {'OBJECTID': '', 'ADDRESS': '', 'STREET_NO': '', 'ZIPCODE': '', 'ZIPCITY': '', 'LON': '', 'LAT': '', });
lyr_Addresses1_88.set('fieldImages', {'OBJECTID': '', 'ADDRESS': '', 'STREET_NO': '', 'ZIPCODE': '', 'ZIPCITY': '', 'LON': '', 'LAT': '', });
lyr_RemainingParcels_3.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Indian_4.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Federal_6.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_State_8.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_County_10.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Municipal_12.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Industrial_14.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Commercial_16.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Residential_18.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_IncompleteSubdivisions_20.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Agriculture_22.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_MiscCommercial_24.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_IndustrialFacilities_26.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_MilitaryPoliceFire_28.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Schools_30.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ParksRec_32.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ParkingFacilities_34.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_VehicleServicesSales_36.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_OfficesBanks_38.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Supermarkets_40.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ConvenienceMarkets_42.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_DepartmentStores_44.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Stores_46.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Entertainment_48.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_FoodBeverage_50.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ShoppingCentersSmall_52.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ShoppingCentersLarge_54.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_StripMalls_56.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_HospitalsCareFacilities_58.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_CemeteriesServices_60.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_GolfCourses_62.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ClubsLodges_64.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Resorts_66.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_HotelsMotels_68.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ApartmentsSmall_70.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ApartmentsLarge_72.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ResidentialCommonArea_74.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ManufacturedHomes_76.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ResidentialUnder250k_78.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Residential250k400k_79.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_Residential400k700k_81.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_ResidentialAbove700k_83.set('fieldLabels', {'PARCEL': 'inline label - visible with data', 'GISACRES': 'inline label - visible with data', 'LINK': 'inline label - visible with data', 'ADDRESS_OL': 'inline label - visible with data', 'PARCEL_USE': 'inline label - visible with data', 'LOT': 'inline label - visible with data', 'MAIL1': 'inline label - visible with data', 'MAIL2': 'inline label - visible with data', 'MAIL3': 'inline label - visible with data', 'MAIL4': 'inline label - visible with data', 'MAIL5': 'inline label - visible with data', 'TAXAREA': 'inline label - visible with data', 'ZIP': 'inline label - visible with data', 'ZIP4': 'inline label - visible with data', 'TAXYR': 'inline label - visible with data', 'LIMNET': 'inline label - visible with data', 'FCV': 'inline label - visible with data', });
lyr_StreetsMajor_85.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'STREET': 'inline label - visible with data', 'ShapeSTLen': 'inline label - visible with data', });
lyr_Streets_86.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'STREET': 'inline label - visible with data', 'ROADCAT_DS': 'inline label - visible with data', 'ShapeSTLen': 'inline label - visible with data', });
lyr_Addresses2_87.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'ADDRESS': 'inline label - visible with data', 'STREET_NO': 'inline label - visible with data', 'ZIPCODE': 'inline label - visible with data', 'ZIPCITY': 'inline label - visible with data', 'LON': 'inline label - visible with data', 'LAT': 'inline label - visible with data', });
lyr_Addresses1_88.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'ADDRESS': 'inline label - visible with data', 'STREET_NO': 'inline label - visible with data', 'ZIPCODE': 'inline label - visible with data', 'ZIPCITY': 'inline label - visible with data', 'LON': 'inline label - visible with data', 'LAT': 'inline label - visible with data', });
lyr_Addresses1_88.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_Highways_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ShapeSTLen': 'ShapeSTLen', });
lyr_CityNames_2.set('fieldAliases', {'id': 'id', 'City Name': 'City Name', });
lyr_Highways_1.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_CityNames_2.set('fieldImages', {'id': 'TextEdit', 'City Name': 'TextEdit', });
lyr_Highways_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'STREET': 'inline label - visible with data', 'ShapeSTLen': 'inline label - visible with data', });
lyr_CityNames_2.set('fieldLabels', {'id': 'inline label - visible with data', 'City Name': 'inline label - visible with data', });
lyr_CityNames_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});