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

    var projection_Aerials2024 = ol.proj.get('EPSG:3857');
    var projectionExtent_Aerials2024 = projection_Aerials2024.getExtent();
    var size_Aerials2024 = ol.extent.getWidth(projectionExtent_Aerials2024) / 256;
    var resolutions_Aerials2024 = new Array(23);
    var matrixIds_Aerials2024 = new Array(23);
    for (var z = 0; z < 23; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Aerials2024[z] = size_Aerials2024 / Math.pow(2, z);
        matrixIds_Aerials2024[z] = z;
    }
    var lyr_Aerials2024 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://gis.mcassessor.maricopa.gov/arcgis/rest/services/Aerials2024/MapServer/WMTS",
    attributions: ' ',
                                "layer": "Aerials2024",
                                "TILED": "true",
                matrixSet: 'default028mm',
                format: 'image/jpgpng',
                projection: projection_Aerials2024,
                tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Aerials2024),
                resolutions: resolutions_Aerials2024,
                matrixIds: matrixIds_Aerials2024
                }),
                style: 'default',
                wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title2: "2024 Maricopa High-Res",
                            opacity: 1.0,
                            
                            
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


        var lyr_VacantIndian_5 = new ol.layer.Tile({
            'title': 'Indian',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Indian/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantFederal_7 = new ol.layer.Tile({
            'title': 'Federal',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Federal/{z}/{x}/{y}.png'
            })
        });

        var lyr_VacantState_9 = new ol.layer.Tile({
            'title': 'State',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant State/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantCounty_11 = new ol.layer.Tile({
            'title': 'County',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant County/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantMunicipal_13 = new ol.layer.Tile({
            'title': 'Municipal',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Municipal/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantIndustrial_15 = new ol.layer.Tile({
            'title': 'Industrial',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Industrial/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantCommercial_17 = new ol.layer.Tile({
            'title': 'Commercial',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Commercial/{z}/{x}/{y}.png'
            })
        });


        var lyr_VacantResidential_19 = new ol.layer.Tile({
            'title': 'Residential',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Vacant Residential/{z}/{x}/{y}.png'
            })
        });


        var lyr_IncompleteSubdivisions_21 = new ol.layer.Tile({
            'title': 'Incomplete Subdivisions',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Incomplete Subdivisions/{z}/{x}/{y}.png'
            })
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


        var lyr_ShoppingCentersSmall_53 = new ol.layer.Tile({
            'title': 'Shopping Centers - Small',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Shopping Centers - Small/{z}/{x}/{y}.png'
            })
        });


        var lyr_ShoppingCentersLarge_55 = new ol.layer.Tile({
            'title': 'Shopping Centers - Large',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Shopping Centers - Large/{z}/{x}/{y}.png'
            })
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


        var lyr_CemeteriesServices_61 = new ol.layer.Tile({
            'title': 'Cemeteries & Services',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Cemeteries & Services/{z}/{x}/{y}.png'
            })
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


        var lyr_ResidentialCommonArea_75 = new ol.layer.Tile({
            'title': 'Residential Common Area',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:2.52824320422621,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'layers/Residential Common Area/{z}/{x}/{y}.png'
            })
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
        



var format_TopLeft = new ol.format.EsriJSON();
var features_TopLeft; // = format_TopLeft.readFeatures(json_ResidentialUnder250k_78, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopLeft = new ol.source.Vector({
    format: format_TopLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopLeft.addFeatures(features_TopLeft);
var lyr_TopLeft = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopLeft,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
                style: style_Parcels,
                popuplayertitle: "Top Left",
                interactive: true,
    // title: 'Residential Under 250k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_0.png" /> 200k - 300k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />'
        });
var format_BottomLeft = new ol.format.EsriJSON();
var features_BottomLeft; // = format_BottomLeft.readFeatures(json_Residential250k400k_79, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomLeft = new ol.source.Vector({
    format: format_BottomLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomLeft.addFeatures(features_BottomLeft);
var lyr_BottomLeft = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomLeft,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Left",
                interactive: true,
    // title: 'Residential 250k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />'
        });



        var format_TopMidLeft = new ol.format.EsriJSON();
var features_TopMidLeft; // = format_TopLeft.readFeatures(json_ResidentialUnder250k_78, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopMidLeft = new ol.source.Vector({
    format: format_TopMidLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopLeft.addFeatures(features_TopLeft);
var lyr_TopMidLeft = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopMidLeft,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Top Mid Left",
                interactive: true,
    // title: 'Residential Under 250k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_0.png" /> 200k - 300k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />'
        });
var format_BottomMidLeft = new ol.format.EsriJSON();
var features_BottomMidLeft; // = format_BottomLeft.readFeatures(json_Residential250k400k_79, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomMidLeft = new ol.source.Vector({
    format: format_BottomMidLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomLeft.addFeatures(features_BottomLeft);
var lyr_BottomMidLeft = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomMidLeft,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Mid Left",
                interactive: true,
    // title: 'Residential 250k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />'
        });


        var format_TopMidRight = new ol.format.EsriJSON();
        var features_TopMidRight; // = format_TopRight.readFeatures(json_Residential400k700k_81, 
                    // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_TopMidRight = new ol.source.Vector({
            format: format_TopMidRight,
            url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
            attributions: ' ',
        });
        // jsonSource_TopRight.addFeatures(features_TopRight);
        var lyr_TopMidRight = new ol.layer.Vector({
                        declutter: false,
                        source:jsonSource_TopMidRight,
        maxResolution:2.52824320422621,
        updateWhileAnimating: false,
        updateWhileInteracting: false,
         
                        style: style_Parcels,
                        popuplayertitle: "Top Mid Right",
                        interactive: true,
            // title: 'Residential 400k - 700k<br />\
            // <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
            // <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
            // <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />'
                });
        var format_BottomMidRight = new ol.format.EsriJSON();
        var features_BottomMidRight; // = format_BottomRight.readFeatures(json_ResidentialAbove700k_83, 
                    // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_BottomMidRight = new ol.source.Vector({
            format: format_BottomMidRight,
            url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
            attributions: ' ',
        });
        // jsonSource_BottomRight.addFeatures(features_BottomRight);
        var lyr_BottomMidRight = new ol.layer.Vector({
                        declutter: false,
                        source:jsonSource_BottomMidRight,
        maxResolution:2.52824320422621,
        updateWhileAnimating: false,
        updateWhileInteracting: false,
         
                        style: style_Parcels,
                        popuplayertitle: "Bottom Mid Right",
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



var format_TopRight = new ol.format.EsriJSON();
var features_TopRight; // = format_TopRight.readFeatures(json_Residential400k700k_81, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopRight = new ol.source.Vector({
    format: format_TopRight,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopRight.addFeatures(features_TopRight);
var lyr_TopRight = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopRight,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Top Right",
                interactive: true,
    // title: 'Residential 400k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
    // <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />'
        });
var format_BottomRight = new ol.format.EsriJSON();
var features_BottomRight; // = format_BottomRight.readFeatures(json_ResidentialAbove700k_83, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomRight = new ol.source.Vector({
    format: format_BottomRight,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomRight.addFeatures(features_BottomRight);
var lyr_BottomRight = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomRight,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Right",
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



        var format_TopLeft_Maricopa = new ol.format.EsriJSON();
var features_TopLeft_Maricopa; // = format_TopLeft_Maricopa.readFeatures(json_ResidentialUnder250k_78, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopLeft_Maricopa = new ol.source.Vector({
    format: format_TopLeft_Maricopa,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopLeft_Maricopa.addFeatures(features_TopLeft_Maricopa);
var lyr_TopLeft_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopLeft_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Top Left",
                interactive: true,
    // title: 'Residential Under 250k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_0.png" /> 200k - 300k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />'
        });
var format_BottomLeft_Maricopa = new ol.format.EsriJSON();
var features_BottomLeft_Maricopa; // = format_BottomLeft_Maricopa.readFeatures(json_Residential250k400k_79, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomLeft_Maricopa = new ol.source.Vector({
    format: format_TopLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomLeft_Maricopa.addFeatures(features_BottomLeft_Maricopa);
var lyr_BottomLeft_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomLeft_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Left",
                interactive: true,
    // title: 'Residential 250k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />'
        });


        var format_TopMidLeft_Maricopa = new ol.format.EsriJSON();
var features_TopMidLeft_Maricopa; // = format_TopLeft_Maricopa.readFeatures(json_ResidentialUnder250k_78, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopMidLeft_Maricopa = new ol.source.Vector({
    format: format_TopMidLeft_Maricopa,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopLeft_Maricopa.addFeatures(features_TopLeft_Maricopa);
var lyr_TopMidLeft_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopMidLeft_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Top Mid Left",
                interactive: true,
    // title: 'Residential Under 250k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_0.png" /> 200k - 300k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_1.png" /> 100k - 200k<br />\
    // <img src="styles/legend/ResidentialUnder250k_78_2.png" /> Under 100k<br />'
        });
var format_BottomMidLeft_Maricopa = new ol.format.EsriJSON();
var features_BottomMidLeft_Maricopa; // = format_BottomLeft_Maricopa.readFeatures(json_Residential250k400k_79, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomMidLeft_Maricopa = new ol.source.Vector({
    format: format_TopMidLeft,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomLeft_Maricopa.addFeatures(features_BottomLeft_Maricopa);
var lyr_BottomMidLeft_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomMidLeft_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Mid Left",
                interactive: true,
    // title: 'Residential 250k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_0.png" /> 300k - 400k<br />\
    // <img src="styles/legend/Residential250k400k_79_1.png" /> 200k - 300k<br />'
        });




        var format_TopMidRight_Maricopa = new ol.format.EsriJSON();
        var features_TopMidRight_Maricopa; // = format_TopRight_Maricopa.readFeatures(json_Residential400k700k_81, 
                    // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_TopMidRight_Maricopa = new ol.source.Vector({
            format: format_TopMidRight_Maricopa,
            url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
            attributions: ' ',
        });
        // jsonSource_TopRight_Maricopa.addFeatures(features_TopRight_Maricopa);
        var lyr_TopMidRight_Maricopa = new ol.layer.Vector({
                        declutter: false,
                        source:jsonSource_TopMidRight_Maricopa,
        maxResolution:2.52824320422621,
        updateWhileAnimating: false,
        updateWhileInteracting: false,
         
                        style: style_Parcels,
                        popuplayertitle: "Top Mid Right",
                        interactive: true,
            // title: 'Residential 400k - 700k<br />\
            // <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
            // <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
            // <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />'
                });
        var format_BottomMidRight_Maricopa = new ol.format.EsriJSON();
        var features_BottomMidRight_Maricopa; // = format_BottomRight_Maricopa.readFeatures(json_ResidentialAbove700k_83, 
                    // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_BottomMidRight_Maricopa = new ol.source.Vector({
            format: format_BottomMidRight_Maricopa,
            url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
            attributions: ' ',
        });
        // jsonSource_BottomRight_Maricopa.addFeatures(features_BottomRight_Maricopa);
        var lyr_BottomMidRight_Maricopa = new ol.layer.Vector({
                        declutter: false,
                        source:jsonSource_BottomMidRight_Maricopa,
        maxResolution:2.52824320422621,
        updateWhileAnimating: false,
        updateWhileInteracting: false,
         
                        style: style_Parcels,
                        popuplayertitle: "Bottom Mid Right",
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



var format_TopRight_Maricopa = new ol.format.EsriJSON();
var features_TopRight_Maricopa; // = format_TopRight_Maricopa.readFeatures(json_Residential400k700k_81, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopRight_Maricopa = new ol.source.Vector({
    format: format_TopRight_Maricopa,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_TopRight_Maricopa.addFeatures(features_TopRight_Maricopa);
var lyr_TopRight_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopRight_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Top Right",
                interactive: true,
    // title: 'Residential 400k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_0.png" /> 600k - 700k<br />\
    // <img src="styles/legend/Residential400k700k_81_1.png" /> 500k - 600k<br />\
    // <img src="styles/legend/Residential400k700k_81_2.png" /> 400k - 500k<br />'
        });
var format_BottomRight_Maricopa = new ol.format.EsriJSON();
var features_BottomRight_Maricopa; // = format_BottomRight_Maricopa.readFeatures(json_ResidentialAbove700k_83, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomRight_Maricopa = new ol.source.Vector({
    format: format_BottomRight_Maricopa,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/LandRecords/MapServer/12/query?where=1%3D2&f=json',
    attributions: ' ',
});
// jsonSource_BottomRight_Maricopa.addFeatures(features_BottomRight_Maricopa);
var lyr_BottomRight_Maricopa = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BottomRight_Maricopa,
maxResolution:2.52824320422621,
updateWhileAnimating: false,
updateWhileInteracting: false,
 
                style: style_Parcels,
                popuplayertitle: "Bottom Right",
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

var format_Addresses1_88 = new ol.format.EsriJSON();
var features_Addresses1_88; // = format_Addresses1_88.readFeatures(json_Addresses1_88, 
            // {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Addresses1_88 = new ol.source.Vector({
    format: format_Addresses1_88,
    url: 'https://gisdata.pima.gov/arcgis1/rest/services/GISOpenData/Addresses/MapServer/3/query?where=1%3D2&outFields=STREET_NO,ADDRESS,ZIPCODE,ZIPCITY,LON,LAT&outSR=4326&f=json',
    attributions: ' ',
});
// jsonSource_Addresses1_88.addFeatures(features_Addresses1_88);
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
                                layers: [lyr_Highways_1,lyr_StreetsMajor_85,lyr_Streets_86,lyr_CityNames_2,lyr_Addresses1_88,],
                                fold: "close",
                                title2: "Streets & Addresses"});
var group_Vectors = new ol.layer.Group({
                                layers: [lyr_TopLeft,lyr_BottomLeft,lyr_TopMidLeft,lyr_BottomMidLeft,lyr_TopMidRight,lyr_BottomMidRight,lyr_TopRight,lyr_BottomRight,lyr_TopLeft_Maricopa,lyr_BottomLeft_Maricopa,lyr_TopMidLeft_Maricopa,lyr_BottomMidLeft_Maricopa,lyr_TopMidRight_Maricopa,lyr_BottomMidRight_Maricopa,lyr_TopRight_Maricopa,lyr_BottomRight_Maricopa],
                                fold: "close",
                                //title: "Apartments"
                                });
var group_ResidentialHomesbyValue = new ol.layer.Group({
                                layers: [lyr_ResidentialCommonArea_75,lyr_ManufacturedHomes_77,lyr_ResidentialUnder400k_80,lyr_Residential400k700k_82,lyr_ResidentialAbove700k_84,],
                                fold: "close",
                                title: "Residential Homes by Value"});
var group_Apartments = new ol.layer.Group({
                                layers: [lyr_ApartmentsSmall_71,lyr_ApartmentsLarge_73,],
                                fold: "close",
                                title: "Apartments"});
var group_Commercial = new ol.layer.Group({
                                layers: [lyr_Agriculture_23,lyr_MiscCommercial_25,lyr_IndustrialFacilities_27,lyr_MilitaryPoliceFire_29,lyr_Schools_31,lyr_ParksRec_33,lyr_ParkingFacilities_35,lyr_VehicleServicesSales_37,lyr_OfficesBanks_39,lyr_Supermarkets_41,lyr_ConvenienceMarkets_43,lyr_DepartmentStores_45,lyr_Stores_47,lyr_Entertainment_49,lyr_FoodBeverage_51,lyr_ShoppingCentersSmall_53,lyr_ShoppingCentersLarge_55,lyr_StripMalls_57,lyr_HospitalsCareFacilities_59,lyr_CemeteriesServices_61,lyr_GolfCourses_63,lyr_ClubsLodges_65,lyr_Resorts_67,lyr_HotelsMotels_69,],
                                fold: "close",
                                title: "Commercial"});
var group_VacantLand = new ol.layer.Group({
                                layers: [lyr_VacantIndian_5,lyr_VacantFederal_7,lyr_VacantState_9,lyr_VacantCounty_11,lyr_VacantMunicipal_13,lyr_VacantIndustrial_15,lyr_VacantCommercial_17,lyr_VacantResidential_19,lyr_IncompleteSubdivisions_21,],
                                fold: "close",
                                title: "Vacant Land"});
var group_Mapstopoverlaysbottom = new ol.layer.Group({
                                layers: [lyr_CurrentGoogleSatelliteLowRes_0,lyr_Aerials2024,lyr_2021TucsonHighRes_1,lyr_2022TucsonHighRes_2,],
                                fold: "open",
                                title2: "Maps (top overlays bottom)"});

lyr_CurrentGoogleSatelliteLowRes_0.setVisible(true);lyr_Aerials2024.setVisible(true);lyr_2021TucsonHighRes_1.setVisible(true);lyr_2022TucsonHighRes_2.setVisible(true);lyr_VacantIndian_5.setVisible(false);lyr_VacantFederal_7.setVisible(false);lyr_VacantState_9.setVisible(false);lyr_VacantCounty_11.setVisible(false);lyr_VacantMunicipal_13.setVisible(false);lyr_VacantIndustrial_15.setVisible(false);lyr_VacantCommercial_17.setVisible(false);lyr_VacantResidential_19.setVisible(false);lyr_IncompleteSubdivisions_21.setVisible(false);lyr_Agriculture_23.setVisible(false);lyr_MiscCommercial_25.setVisible(false);lyr_IndustrialFacilities_27.setVisible(false);lyr_MilitaryPoliceFire_29.setVisible(false);lyr_Schools_31.setVisible(false);lyr_ParksRec_33.setVisible(false);lyr_ParkingFacilities_35.setVisible(false);lyr_VehicleServicesSales_37.setVisible(false);lyr_OfficesBanks_39.setVisible(false);lyr_Supermarkets_41.setVisible(false);lyr_ConvenienceMarkets_43.setVisible(false);lyr_DepartmentStores_45.setVisible(false);lyr_Stores_47.setVisible(false);lyr_Entertainment_49.setVisible(false);lyr_FoodBeverage_51.setVisible(false);lyr_ShoppingCentersSmall_53.setVisible(false);lyr_ShoppingCentersLarge_55.setVisible(false);lyr_StripMalls_57.setVisible(false);lyr_HospitalsCareFacilities_59.setVisible(false);lyr_CemeteriesServices_61.setVisible(false);lyr_GolfCourses_63.setVisible(false);lyr_ClubsLodges_65.setVisible(false);lyr_Resorts_67.setVisible(false);lyr_HotelsMotels_69.setVisible(false);lyr_ApartmentsSmall_71.setVisible(false);lyr_ApartmentsLarge_73.setVisible(false);lyr_ResidentialCommonArea_75.setVisible(false);lyr_ManufacturedHomes_77.setVisible(false);lyr_TopLeft.setVisible(true);lyr_BottomLeft.setVisible(true);lyr_ResidentialUnder400k_80.setVisible(false);lyr_TopRight.setVisible(true);lyr_Residential400k700k_82.setVisible(false);lyr_BottomRight.setVisible(true);lyr_ResidentialAbove700k_84.setVisible(false);lyr_StreetsMajor_85.setVisible(true);lyr_Streets_86.setVisible(true);lyr_Addresses1_88.setVisible(true);lyr_Highways_1.setVisible(true);lyr_CityNames_2.setVisible(true);
var layersList = [group_Mapstopoverlaysbottom,group_VacantLand,group_Commercial,group_Apartments,group_ResidentialHomesbyValue,group_Vectors,group_Streets];

lyr_TopLeft.setVisible(true);
lyr_BottomLeft.setVisible(true);

lyr_TopMidLeft.setVisible(true);
lyr_BottomMidLeft.setVisible(true);

lyr_TopMidRight.setVisible(true);
lyr_BottomMidRight.setVisible(true);

lyr_TopRight.setVisible(true);
lyr_BottomRight.setVisible(true);



lyr_TopLeft_Maricopa.setVisible(true);
lyr_BottomLeft_Maricopa.setVisible(true);

lyr_TopMidLeft_Maricopa.setVisible(true);
lyr_BottomMidLeft_Maricopa.setVisible(true);

lyr_TopMidRight_Maricopa.setVisible(true);
lyr_BottomMidRight_Maricopa.setVisible(true);

lyr_TopRight_Maricopa.setVisible(true);
lyr_BottomRight_Maricopa.setVisible(true);



lyr_TopLeft.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomLeft.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopMidLeft.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomMidLeft.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopMidRight.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomMidRight.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopRight.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomRight.setProperties({'Land Use':'', 'HighRes 5D Map':''});



lyr_TopLeft_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomLeft_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopMidLeft_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomMidLeft_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopMidRight_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomMidRight_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});

lyr_TopRight_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});
lyr_BottomRight_Maricopa.setProperties({'Land Use':'', 'HighRes 5D Map':''});




lyr_TopLeft_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });
lyr_BottomLeft_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });

lyr_TopMidLeft_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });
lyr_BottomMidLeft_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });

lyr_TopMidRight_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });
lyr_BottomMidRight_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });

lyr_TopRight_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });
lyr_BottomRight_Maricopa.set('fieldAliases', {'LPV_PREV': 'Limited Property Value Previous', 'FCV_PREV': 'Full Cash Value Previous', 'TAX_YR_PREV': 'Tax Year Previous', 'SALE_PRICE': 'Sale Price', 'SALE_DATE': 'Date Sold', 'CONST_YEAR': 'Year Constructed', 'LIVING_SPACE': 'Building Square Footage', 'INCAREOF': 'In Care Of', 'OWNER_NAME': 'Owner Name', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', 'APN': 'Parcel', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'LAND_SIZE': 'Acres', 'LINK': 'Info Link', 'PHYSICAL_ADDRESS': 'Address', 'PUC': 'Parcel Use Code', 'LOT_NUM': 'Lot #', 'MAIL_ADDRESS': 'Mail Address', 'MAIL_ADDR1': 'Mail Line 1', 'MAIL_ADDR2': 'Mail Line 2', 'MAIL_CITY': 'Mail City', 'MAIL_STATE': 'Mail State', 'TAXAREA': 'Tax Area', 'MAIL_ZIP': 'Mail Zip Code', 'TAX_YR_CUR': 'Tax Year Current', 'LPV_CUR': 'Limited Property Value Current', 'FCV_CUR': 'Full Cash Value Current', });



lyr_TopLeft_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });
lyr_BottomLeft_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });

lyr_TopMidLeft_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });
lyr_BottomMidLeft_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });

lyr_TopMidRight_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });
lyr_BottomMidRight_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });

lyr_TopRight_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });
lyr_BottomRight_Maricopa.set('fieldImages', {'LPV_PREV': 'TextEdit', 'FCV_PREV': 'TextEdit', 'TAX_YR_PREV': 'TextEdit', 'SALE_PRICE': 'TextEdit', 'SALE_DATE': 'Date', 'CONST_YEAR': 'TextEdit', 'LIVING_SPACE': 'TextEdit', 'INCAREOF': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'LONGITUDE': 'Range', 'LATITUDE': 'Range', 'APN': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'LAND_SIZE': 'Range', 'LINK': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'PUC': 'TextEdit', 'LOT_NUM': 'TextEdit', 'MAIL_ADDRESS': 'TextEdit', 'MAIL_ADDR1': 'TextEdit', 'MAIL_ADDR2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STATE': 'TextEdit', 'TAXAREA': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'TAX_YR_CUR': 'TextEdit', 'LPV_CUR': 'TextEdit', 'FCV_CUR': 'TextEdit', });



lyr_TopLeft_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });
lyr_BottomLeft_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });

lyr_TopMidLeft_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });
lyr_BottomMidLeft_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });

lyr_TopMidRight_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });
lyr_BottomMidRight_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });

lyr_TopRight_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });
lyr_BottomRight_Maricopa.set('fieldLabels', {'LPV_PREV': 'inline label - always visible', 'FCV_PREV': 'inline label - always visible', 'TAX_YR_PREV': 'inline label - always visible', 'SALE_PRICE': 'inline label - always visible', 'SALE_DATE': 'inline label - always visible', 'CONST_YEAR': 'inline label - always visible', 'LIVING_SPACE': 'inline label - always visible', 'INCAREOF': 'inline label - always visible', 'OWNER_NAME': 'inline label - always visible', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'APN': 'inline label - always visible', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'LAND_SIZE': 'inline label - always visible', 'LINK': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'PUC': 'inline label - always visible', 'LOT_NUM': 'inline label - always visible', 'MAIL_ADDRESS': 'inline label - always visible', 'MAIL_ADDR1': 'inline label - always visible', 'MAIL_ADDR2': 'inline label - always visible', 'MAIL_CITY': 'inline label - always visible', 'MAIL_STATE': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'MAIL_ZIP': 'inline label - always visible', 'TAX_YR_CUR': 'inline label - always visible', 'LPV_CUR': 'inline label - always visible', 'FCV_CUR': 'inline label - always visible', });




lyr_TopLeft.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_BottomLeft.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });

lyr_TopMidLeft.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_BottomMidLeft.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });

lyr_TopMidRight.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_BottomMidRight.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });

lyr_TopRight.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });
lyr_BottomRight.set('fieldAliases', {'LON': 'Longitude', 'LAT': 'Latitude', 'Land Use': 'Land Use', 'HighRes 5D Map':'HighRes 5D Map', 'PARCEL': 'Parcel ID', 'GISACRES': 'Acres', 'LINK': 'Info Link', 'ADDRESS_OL': 'Address', 'PARCEL_USE': 'Parcel Use Code', 'LOT': 'Lot #', 'MAIL1': 'Mail 1', 'MAIL2': 'Mail 2', 'MAIL3': 'Mail 3', 'MAIL4': 'Mail 4', 'MAIL5': 'Mail 5', 'TAXAREA': 'Tax Area', 'ZIP': 'Zip Code', 'ZIP4': 'Zip+4', 'TAXYR': 'Tax Year', 'LIMNET': 'Limited Net Value', 'FCV': 'Full Cash Value', });



lyr_TopLeft.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_BottomLeft.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });

lyr_TopMidLeft.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_BottomMidLeft.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });

lyr_TopMidRight.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_BottomMidRight.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });

lyr_TopRight.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });
lyr_BottomRight.set('fieldImages', {'LON': 'TextEdit', 'LAT': 'TextEdit', 'Land Use': 'TextEdit', 'HighRes 5D Map':'TextEdit', 'PARCEL': 'TextEdit', 'GISACRES': 'TextEdit', 'LINK': 'TextEdit', 'ADDRESS_OL': 'TextEdit', 'PARCEL_USE': 'TextEdit', 'LOT': 'TextEdit', 'MAIL1': 'TextEdit', 'MAIL2': 'TextEdit', 'MAIL3': 'TextEdit', 'MAIL4': 'TextEdit', 'MAIL5': 'TextEdit', 'TAXAREA': 'TextEdit', 'ZIP': 'TextEdit', 'ZIP4': 'TextEdit', 'TAXYR': 'TextEdit', 'LIMNET': 'Range', 'FCV': 'Range', });



lyr_TopLeft.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });
lyr_BottomLeft.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });

lyr_TopMidLeft.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });
lyr_BottomMidLeft.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });

lyr_TopMidRight.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });
lyr_BottomMidRight.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });

lyr_TopRight.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });
lyr_BottomRight.set('fieldLabels', {'LON': 'hidden field', 'LAT': 'hidden field', 'Land Use': 'hidden field', 'HighRes 5D Map':'inline label - always visible', 'PARCEL': 'inline label - always visible', 'GISACRES': 'inline label - always visible', 'LINK': 'inline label - always visible', 'ADDRESS_OL': 'inline label - always visible', 'PARCEL_USE': 'inline label - always visible', 'LOT': 'inline label - always visible', 'MAIL1': 'inline label - always visible', 'MAIL2': 'inline label - always visible', 'MAIL3': 'inline label - always visible', 'MAIL4': 'inline label - always visible', 'MAIL5': 'inline label - always visible', 'TAXAREA': 'inline label - always visible', 'ZIP': 'inline label - always visible', 'ZIP4': 'inline label - always visible', 'TAXYR': 'inline label - always visible', 'LIMNET': 'inline label - always visible', 'FCV': 'inline label - always visible', });




lyr_StreetsMajor_85.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Streets_86.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ROADCAT_DS': 'ROADCAT_DS', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Addresses1_88.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESS': 'ADDRESS', 'STREET_NO': 'STREET_NO', 'ZIPCODE': 'ZIPCODE', 'ZIPCITY': 'ZIPCITY', 'LON': 'LON', 'LAT': 'LAT', });

lyr_StreetsMajor_85.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Streets_86.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ROADCAT_DS': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Addresses1_88.set('fieldImages', {'OBJECTID': '', 'ADDRESS': '', 'STREET_NO': '', 'ZIPCODE': '', 'ZIPCITY': '', 'LON': '', 'LAT': '', });

lyr_StreetsMajor_85.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'STREET': 'inline label - always visible', 'ShapeSTLen': 'inline label - always visible', });
lyr_Streets_86.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'STREET': 'inline label - always visible', 'ROADCAT_DS': 'inline label - always visible', 'ShapeSTLen': 'inline label - always visible', });
lyr_Addresses1_88.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ADDRESS': 'inline label - always visible', 'STREET_NO': 'inline label - always visible', 'ZIPCODE': 'inline label - always visible', 'ZIPCITY': 'inline label - always visible', 'LON': 'inline label - always visible', 'LAT': 'inline label - always visible', });
lyr_Addresses1_88.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_Highways_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ShapeSTLen': 'ShapeSTLen', });
lyr_CityNames_2.set('fieldAliases', {'id': 'id', 'City Name': 'City Name', });
lyr_Highways_1.set('fieldImages', {'OBJECTID': 'Range', 'STREET': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_CityNames_2.set('fieldImages', {'id': 'TextEdit', 'City Name': 'TextEdit', });
lyr_Highways_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'STREET': 'inline label - always visible', 'ShapeSTLen': 'inline label - always visible', });
lyr_CityNames_2.set('fieldLabels', {'id': 'inline label - always visible', 'City Name': 'inline label - always visible', });
lyr_CityNames_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});