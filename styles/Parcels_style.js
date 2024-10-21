var size = 0;
var placement = 'point';
var style;
var colorLine = 'rgba(0,255,0,1.0)';
var colorFill = 'rgba(0,255,0,1.0)';
var value = 0;
var landUseCode = '0000';
var parcelUse = 'Miscellaneous';
var featureDisplayList = [];
var topLeftDisplayList = [];
var bottomLeftDisplayList = [];
var parcelID;

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

String.prototype.like = function(search) {
    if (typeof search !== 'string' || this === null) {return false; }
    // Remove special chars
    search = search.replace(new RegExp("([\\.\\\\\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:\\-])", "g"), "\\$1");
    // Replace % and _ with equivalent regex
    search = search.replace(/%/g, '.*.').replace(/_/g, '.');
    // Check matches
    return RegExp('^' + search + '$', 'gi').test(this);
}

var style_Parcels = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    value = feature.get("FCV");
    parcelID = feature.get('PARCEL');
    landUseCode = feature.get("PARCEL_USE");
    if (typeof landUseCode === 'undefined') {
        parcelID = feature.get('APN');
        var fcvCur = feature.get("FCV_CUR");
        if (fcvCur !== null && typeof fcvCur === 'string') {
            value = Math.round(fcvCur.replace(/,/g, ''));
        } else {
            value = 0;
        }
        landUseCode = feature.get("PUC");
    }
    // console.log(feature);
    // if (topLeftDisplayList.includes(parcelID) && bottomLeftDisplayList.includes(parcelID)) {
    //     return
    // }
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
	
    if (landUseCode !== null) {
        parcelUse = matchesParcelUse(landUseCode);
        if (value !== null && value !== undefined && value > 500) {
            feature.setProperties({'Land Use':parcelUse + ': $' + value.toLocaleString()});
        } else {
            // Handle the case where value is null or undefined (e.g., set a default value or log an error)
            feature.setProperties({'Land Use':parcelUse}); 
        }
        if (parcelUse === 'Residence') {
            if (value >= 2000000.000000) {
                colorLine = 'rgba(255,0,255,1.0)';
                colorFill = 'rgba(230,0,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 1750000.000000 && value < 2000000.000000) {
                colorLine = 'rgba(229,16,255,1.0)';
                colorFill = 'rgba(205,14,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 1500000.000000 && value < 1750000.000000) {
                colorLine = 'rgba(207,33,255,1.0)';
                colorFill = 'rgba(187,30,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 1250000.000000 && value < 1500000.000000) {
                colorLine = 'rgba(188,49,255,1.0)';
                colorFill = 'rgba(168,44,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 1000000.000000 && value < 1250000.000000) {
                colorLine = 'rgba(173,65,255,1.0)';
                colorFill = 'rgba(156,59,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 900000.000000 && value < 1000000.000000) {
                colorLine = 'rgba(161,82,255,1.0)';
                colorFill = 'rgba(144,74,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 800000.000000 && value < 900000.000000) {
                colorLine = 'rgba(153,98,255,1.0)';
                colorFill = 'rgba(138,88,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'
            } else if (value >= 700000.000000 && value < 800000.000000) {
                colorLine = 'rgba(148,114,255,1.0)';
                colorFill = 'rgba(132,103,230,' + transparency(lyr_ResidentialAbove700k_84) + ')'

            } else if (value >= 600000.000000 && value < 700000.000000) {
                colorLine = 'rgba(147,131,255,1.0)';
                colorFill = 'rgba(133,118,230,' + transparency(lyr_Residential400k700k_82) + ')'
            } else if (value >= 500000.000000 && value < 600000.000000) {
                colorLine = 'rgba(150,147,255,1.0)';
                colorFill = 'rgba(134,133,230,' + transparency(lyr_Residential400k700k_82) + ')'
            } else if (value >= 400000.000000 && value < 500000.000000) {
                colorLine = 'rgba(164,171,255,1.0)';
                colorFill = 'rgba(148,155,230,' + transparency(lyr_Residential400k700k_82) + ')'

            } else if (value >= 300000.000000 && value < 400000.000000) {
                colorLine = 'rgba(180,194,255,1.0)';
                colorFill = 'rgba(162,176,230,' + transparency(lyr_ResidentialUnder400k_80) + ')'
            } else if (value >= 200000.000000 && value < 300000.000000) {
                colorLine = 'rgba(196,214,255,1.0)';
                colorFill = 'rgba(177,193,230,' + transparency(lyr_ResidentialUnder400k_80) + ')'
            } else if (value >= 100000.000000 && value < 200000.000000) {
                colorLine = 'rgba(213,230,255,1.0)';
                colorFill = 'rgba(192,208,230,' + transparency(lyr_ResidentialUnder400k_80) + ')'
            } else if (value >= 0.000000 && value < 100000.000000) {
                colorLine = 'rgba(229,242,255,1.0)';
                colorFill = 'rgba(207,219,230,' + transparency(lyr_ResidentialUnder400k_80) + ')'
            }
        }
        
        else if (parcelUse === 'Common Area') {
            colorLine = 'rgba(0,0,255,1.0)';
            colorFill = 'rgba(0,0,204,' + transparency(lyr_ResidentialCommonArea_75) + ')';
        }

        else if (parcelUse === 'Large Apartment') {
            if (value >= 55000000.000000) {
                colorLine = 'rgba(0,255,0,1.0)';
                colorFill = 'rgba(0,230,0,' + transparency(lyr_ApartmentsLarge_73) + ')'
            } else if (value >= 35000000.000000 && value < 55000000.000000) {
                colorLine = 'rgba(38,255,38,1.0)';
                colorFill = 'rgba(34,230,34,' + transparency(lyr_ApartmentsLarge_73) + ')'
            } else if (value >= 20000000.000000 && value < 35000000.000000) {
                colorLine = 'rgba(77,255,77,1.0)';
                colorFill = 'rgba(69,230,69,' + transparency(lyr_ApartmentsLarge_73) + ')'
            } else if (value >= 7000000.000000 && value < 20000000.000000) {
                colorLine = 'rgba(115,255,115,1.0)';
                colorFill = 'rgba(104,230,104,' + transparency(lyr_ApartmentsLarge_73) + ')'
            } else if (value >= 0.000000 && value < 7000000.000000) {
                colorLine = 'rgba(153,255,153,1.0)';
                colorFill = 'rgba(138,230,138,' + transparency(lyr_ApartmentsLarge_73) + ')'
            }
        }

        else if (parcelUse === 'Small Apartment') {
            if (value >= 2000000.000000) {
                colorLine = 'rgba(166,255,166,1.0)';
                colorFill = 'rgba(150,230,150,' + transparency(lyr_ApartmentsSmall_71) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(217,255,217,1.0)';
                colorFill = 'rgba(196,230,196,' + transparency(lyr_ApartmentsSmall_71) + ')'
            }
        }

        else if (parcelUse === 'Manufactured Home') {
            if (value >= 7000000.000000) {
                colorLine = 'rgba(255,0,170,1.0)';
                colorFill = 'rgba(230,0,153,' + transparency(lyr_ManufacturedHomes_77) + ')'
            } else if (value >= 2000000.000000 && value < 7000000.000000) {
                colorLine = 'rgba(255,59,190,1.0)';
                colorFill = 'rgba(230,53,171,' + transparency(lyr_ManufacturedHomes_77) + ')'
            } else if (value >= 500000.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,119,210,1.0)';
                colorFill = 'rgba(230,107,189,' + transparency(lyr_ManufacturedHomes_77) + ')'
            } else if (value >= 0.000000 && value < 500000.000000) {
                colorLine = 'rgba(255,178,229,1.0)';
                colorFill = 'rgba(230,161,207,' + transparency(lyr_ManufacturedHomes_77) + ')'
            }            
        }

        else if (parcelUse === 'Hotel/Motel') {
            if (value >= 8000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_HotelsMotels_69) + ')'
            } else if (value >= 3000000.000000 && value < 8000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_HotelsMotels_69) + ')'
            } else if (value >= 0.000000 && value < 3000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_HotelsMotels_69) + ')'
            }      
        }

        else if (parcelUse === 'Resort') {
            if (value >= 27000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Resorts_67) + ')'
            } else if (value >= 6000000.000000 && value < 27000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_Resorts_67) + ')'
            } else if (value >= 0.000000 && value < 6000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_Resorts_67) + ')'
            } 
        }

        else if (parcelUse === 'Club/Lodge') {
            if (value >= 5000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_ClubsLodges_65) + ')'
            } else if (value >= 1500000.000000 && value < 5000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_ClubsLodges_65) + ')'
            } else if (value >= 0.000000 && value < 1500000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_ClubsLodges_65) + ')'
            } 
        }

        else if (parcelUse === 'Golf Course') {
            if (value >= 3500000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_GolfCourses_63) + ')'
            } else if (value >= 1000000.000000 && value < 3500000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_GolfCourses_63) + ')'
            } else if (value >= 0.000000 && value < 1000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_GolfCourses_63) + ')'
            } 
        }

        else if (parcelUse === 'Cemetery/Service') {
            colorLine = 'rgba(255,128,0,1.0)';
            colorFill = 'rgba(230,115,0,' + transparency(lyr_CemeteriesServices_61) + ')'
        }

        else if (parcelUse === 'Hospital/Care Facility') {
            if (value >= 90000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_HospitalsCareFacilities_59) + ')'
            } else if (value >= 16000000.000000 && value < 90000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_HospitalsCareFacilities_59) + ')'
            } else if (value >= 0.000000 && value < 16000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_HospitalsCareFacilities_59) + ')'
            } 
        }

        else if (parcelUse === 'Strip Mall') {
            if (value >= 7000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_StripMalls_57) + ')'
            } else if (value >= 2000000.000000 && value < 7000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_StripMalls_57) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_StripMalls_57) + ')'
            } 
        }

        else if (parcelUse === 'Large Shopping Center') {
            colorLine = 'rgba(255,128,0,1.0)';
            colorFill = 'rgba(230,115,0,' + transparency(lyr_ShoppingCentersLarge_55) + ')'
        }

        else if (parcelUse === 'Small Shopping Center') {
            colorLine = 'rgba(255,204,153,1.0)';
            colorFill = 'rgba(230,184,138,' + transparency(lyr_ShoppingCentersSmall_53) + ')'
        }

        else if (parcelUse === 'Food/Beverage') {
            if (value >= 1500000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_FoodBeverage_51) + ')'
            } else if (value >= 600000.000000 && value < 1500000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_FoodBeverage_51) + ')'
            } else if (value >= 0.000000 && value < 600000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_FoodBeverage_51) + ')'
            } 
        }

        else if (parcelUse === 'Entertainment') {
            if (value >= 5000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Entertainment_49) + ')'
            } else if (value >= 1500000.000000 && value < 5000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_Entertainment_49) + ')'
            } else if (value >= 0.000000 && value < 1500000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_Entertainment_49) + ')'
            } 
        }

        else if (parcelUse === 'Store') {
            if (value >= 7000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Stores_47) + ')'
            } else if (value >= 1000000.000000 && value < 7000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_Stores_47) + ')'
            } else if (value >= 0.000000 && value < 1000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_Stores_47) + ')'
            } 
        }

        else if (parcelUse === 'Department Store') {
            if (value >= 10000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_DepartmentStores_45) + ')'
            } else if (value >= 2000000.000000 && value < 10000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_DepartmentStores_45) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_DepartmentStores_45) + ')'
            } 
        }

        else if (parcelUse === 'Convenience Market') {
            if (value >= 1500000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_ConvenienceMarkets_43) + ')'
            } else if (value >= 700000.000000 && value < 1500000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_ConvenienceMarkets_43) + ')'
            } else if (value >= 0.000000 && value < 700000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_ConvenienceMarkets_43) + ')'
            } 
        }

        else if (parcelUse === 'Supermarket') {
            if (value >= 6000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Supermarkets_41) + ')'
            } else if (value >= 500000.000000 && value < 6000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_Supermarkets_41) + ')'
            } else if (value >= 0.000000 && value < 500000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_Supermarkets_41) + ')'
            } 
        }

        else if (parcelUse === 'Office/Bank') {
            if (value >= 13000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_OfficesBanks_39) + ')'
            } else if (value >= 3000000.000000 && value < 13000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_OfficesBanks_39) + ')'
            } else if (value >= 0.000000 && value < 3000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_OfficesBanks_39) + ')'
            } 
        }

        else if (parcelUse === 'Vehicle Service/Sales Lot') {
            if (value >= 7000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_VehicleServicesSales_37) + ')'
            } else if (value >= 2000000.000000 && value < 7000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_VehicleServicesSales_37) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_VehicleServicesSales_37) + ')'
            } 
        }

        else if (parcelUse === 'Parking Facility') {
            if (value >= 7000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_ParkingFacilities_35) + ')'
            } else if (value >= 2000000.000000 && value < 7000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_ParkingFacilities_35) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_ParkingFacilities_35) + ')'
            } 
        }

        else if (parcelUse === 'Park/Recreation') {
            if (value >= 6000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_ParksRec_33) + ')'
            } else if (value >= 2000000.000000 && value < 6000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_ParksRec_33) + ')'
            } else if (value >= 0.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_ParksRec_33) + ')'
            } 
        }

        else if (parcelUse === 'School') {
            if (value >= 100000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 55000000.000000 && value < 100000000.000000) {
                colorLine = 'rgba(255,140,24,1.0)';
                colorFill = 'rgba(230,126,22,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 37000000.000000 && value < 55000000.000000) {
                colorLine = 'rgba(255,152,48,1.0)';
                colorFill = 'rgba(230,137,43,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 26000000.000000 && value < 37000000.000000) {
                colorLine = 'rgba(255,164,72,1.0)';
                colorFill = 'rgba(230,147,65,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 18000000.000000 && value < 26000000.000000) {
                colorLine = 'rgba(255,176,96,1.0)';
                colorFill = 'rgba(230,158,87,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 12500000.000000 && value < 18000000.000000) {
                colorLine = 'rgba(255,188,121,1.0)';
                colorFill = 'rgba(230,170,109,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 7500000.000000 && value < 12500000.000000) {
                colorLine = 'rgba(255,200,145,1.0)';
                colorFill = 'rgba(230,180,131,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 3500000.000000 && value < 7500000.000000) {
                colorLine = 'rgba(255,212,169,1.0)';
                colorFill = 'rgba(230,191,152,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 1000000.000000 && value < 3500000.000000) {
                colorLine = 'rgba(255,224,193,1.0)';
                colorFill = 'rgba(230,202,174,' + transparency(lyr_Schools_31) + ')'
            } else if (value >= 0.000000 && value < 1000000.000000) {
                colorLine = 'rgba(255,236,217,1.0)';
                colorFill = 'rgba(230,213,196,' + transparency(lyr_Schools_31) + ')'
            }
        }

        else if (parcelUse === 'Military/Police/Fire') {
            if (value >= 15000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_MilitaryPoliceFire_29) + ')'
            } else if (value >= 3500000.000000 && value < 15000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_MilitaryPoliceFire_29) + ')'
            } else if (value >= 0.000000 && value < 3500000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_MilitaryPoliceFire_29) + ')'
            } 
        }

        else if (parcelUse === 'Industrial Facility') {
            if (value >= 58000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 40000000.000000 && value < 58000000.000000) {
                colorLine = 'rgba(255,140,24,1.0)';
                colorFill = 'rgba(230,126,22,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 25000000.000000 && value < 40000000.000000) {
                colorLine = 'rgba(255,152,48,1.0)';
                colorFill = 'rgba(230,137,43,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 15000000.000000 && value < 25000000.000000) {
                colorLine = 'rgba(255,164,72,1.0)';
                colorFill = 'rgba(230,147,65,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 8000000.000000 && value < 15000000.000000) {
                colorLine = 'rgba(255,176,96,1.0)';
                colorFill = 'rgba(230,158,87,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 5000000.000000 && value < 8000000.000000) {
                colorLine = 'rgba(255,188,121,1.0)';
                colorFill = 'rgba(230,170,109,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 3000000.000000 && value < 5000000.000000) {
                colorLine = 'rgba(255,200,145,1.0)';
                colorFill = 'rgba(230,180,131,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 1500000.000000 && value < 3000000.000000) {
                colorLine = 'rgba(255,212,169,1.0)';
                colorFill = 'rgba(230,191,152,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 500000.000000 && value < 1500000.000000) {
                colorLine = 'rgba(255,224,193,1.0)';
                colorFill = 'rgba(230,202,174,' + transparency(lyr_IndustrialFacilities_27) + ')'
            } else if (value >= 0.000000 && value < 500000.000000) {
                colorLine = 'rgba(255,236,217,1.0)';
                colorFill = 'rgba(230,213,196,' + transparency(lyr_IndustrialFacilities_27) + ')'
            }
        }

        else if (parcelUse === 'Misc. Commercial') {
            if (value >= 97000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 57000000.000000 && value < 97000000.000000) {
                colorLine = 'rgba(255,140,24,1.0)';
                colorFill = 'rgba(230,126,22,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 30000000.000000 && value < 57000000.000000) {
                colorLine = 'rgba(255,152,48,1.0)';
                colorFill = 'rgba(230,137,43,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 21000000.000000 && value < 30000000.000000) {
                colorLine = 'rgba(255,164,72,1.0)';
                colorFill = 'rgba(230,147,65,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 14000000.000000 && value < 21000000.000000) {
                colorLine = 'rgba(255,176,96,1.0)';
                colorFill = 'rgba(230,158,87,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 8000000.000000 && value < 14000000.000000) {
                colorLine = 'rgba(255,188,121,1.0)';
                colorFill = 'rgba(230,170,109,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 4500000.000000 && value < 8000000.000000) {
                colorLine = 'rgba(255,200,145,1.0)';
                colorFill = 'rgba(230,180,131,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 2000000.000000 && value < 4500000.000000) {
                colorLine = 'rgba(255,212,169,1.0)';
                colorFill = 'rgba(230,191,152,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 700000.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,224,193,1.0)';
                colorFill = 'rgba(230,202,174,' + transparency(lyr_MiscCommercial_25) + ')'
            } else if (value >= 0.000000 && value < 700000.000000) {
                colorLine = 'rgba(255,236,217,1.0)';
                colorFill = 'rgba(230,213,196,' + transparency(lyr_MiscCommercial_25) + ')'
            }
        }

        else if (parcelUse === 'Agriculture') {
            if (value >= 2000000.000000) {
                colorLine = 'rgba(255,128,0,1.0)';
                colorFill = 'rgba(230,115,0,' + transparency(lyr_Agriculture_23) + ')'
            } else if (value >= 250000.000000 && value < 2000000.000000) {
                colorLine = 'rgba(255,166,77,1.0)';
                colorFill = 'rgba(230,150,69,' + transparency(lyr_Agriculture_23) + ')'
            } else if (value >= 0.000000 && value < 250000.000000) {
                colorLine = 'rgba(255,204,153,1.0)';
                colorFill = 'rgba(230,184,138,' + transparency(lyr_Agriculture_23) + ')'
            } 
        }

        else if (parcelUse === 'Incomplete Subdivision') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_IncompleteSubdivisions_21) + ')';
        }

        else if (parcelUse === 'Vacant Residence') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantResidential_19) + ')';
        }

        else if (parcelUse === 'Vacant Commercial') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantCommercial_17) + ')';
        }

        else if (parcelUse === 'Vacant Industrial') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantIndustrial_15) + ')';
        }

        else if (parcelUse === 'Vacant Municipal') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantMunicipal_13) + ')';
        }

        else if (parcelUse === 'Vacant County') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantCounty_11) + ')';
        }

        else if (parcelUse === 'Vacant State') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantState_9) + ')';
        }

        else if (parcelUse === 'Vacant Federal') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantFederal_7) + ')';
        }

        else if (parcelUse === 'Vacant Indian') {
            colorLine = 'rgba(153,30,30,1.0)';
            colorFill = 'rgba(128,25,25,' + transparency(lyr_VacantIndian_5) + ')';
        }

        else if (parcelUse === undefined || parcelUse === 'undefined' || typeof parcelUse === undefined || typeof parcelUse === 'undefined' || parcelUse === 'Miscellaneous' || landUseCode === '0000' || landUseCode === '' || landUseCode === ' ' || landUseCode === '  ' || landUseCode === '   ' || landUseCode === '    ' || landUseCode === null || landUseCode === 'null' || landUseCode === undefined || typeof landUseCode === 'undefined') {
            colorLine = 'rgba(204,204,204,1.0)';
            colorFill = 'rgba(255,255,255,0.0)';
        }
        
        else {
            colorLine = 'rgba(204,204,204,1.0)';
            colorFill = 'rgba(255,255,255,0.0)';
        }
    } else {
        parcelUse = 'Miscellaneous'
        if (value !== null && value !== undefined && value > 500) {
            feature.setProperties({'Land Use':parcelUse + ': $' + value.toLocaleString()});
        } else {
            // Handle the case where value is null or undefined (e.g., set a default value or log an error)
            feature.setProperties({'Land Use':parcelUse}); 
        }
        colorLine = 'rgba(204,204,204,1.0)';
        colorFill = 'rgba(255,255,255,0.0)';
    }
    style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: colorLine, lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),fill: new ol.style.Fill({color: colorFill}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                            labelFill, placement, bufferColor,
                            bufferWidth)
        })]
    
    featureDisplayList.push(parcelID);
    return style;
};

function transparency(toggleLayer) {
	var alpha, val1, val2;
	var zoom = map.getView().getZoom();
	if (toggleLayer.getVisible() && zoom < 19) {
		alpha = fnc_clamp(val1 = [(1/fnc_clamp(val2 = [zoom - 15, 1, 99])), 0.0, 1.0]);
	} else {
		alpha = 0.0;
	}
    return alpha;
}

function matchesParcelUse(parcelUse) {
    if (parcelUse === null || parcelUse === 'null') {
        return 'Miscellaneous'
    }

    if (
        parcelUse.like('01%') ||
        (parcelUse.like('071%') && (typeof value !== 'undefined' && value > 500)) ||
        (parcelUse.like('072%') && (typeof value !== 'undefined' && value > 500)) ||
        (parcelUse.like('073%') && (typeof value !== 'undefined' && value > 500)) ||
        (parcelUse.like('074%') && (typeof value !== 'undefined' && value > 500)) ||
        (parcelUse.like('075%') && (typeof value !== 'undefined' && value > 500)) ||
        (parcelUse.like('076%') && (typeof value !== 'undefined' && value > 500)) ||
        parcelUse.like('091%') ||
        parcelUse === '2801' ||
        parcelUse === '2807' ||
        parcelUse === '2887' ||
        parcelUse.like('85%') ||
        parcelUse.like('871%') ||
        parcelUse.like('921%') ||
        parcelUse.like('941%') ||
        parcelUse.like('951%') ||
        parcelUse.like('961%') ||
        parcelUse.like('971%') ||
        parcelUse.like('981%')
    ){ return 'Residence'; }

    if (
        parcelUse.like('02%') ||
        parcelUse.like('078%') ||
        parcelUse.like('079%') ||
        parcelUse.like('077%') ||
        (parcelUse.like('07%5') && (typeof value === 'undefined' || value <= 500))  ||
        (parcelUse.like('07%6') && (typeof value === 'undefined' || value <= 500))
    ){ return 'Common Area'; }

    if (
        parcelUse.like('037%') ||
        parcelUse.like('039%') ||
        parcelUse.like('036%')
    ){ return 'Large Apartment'; }

    if (
        parcelUse.like('031%') ||
        parcelUse.like('032%') ||
        parcelUse.like('033%') ||
        parcelUse.like('034%') ||
        parcelUse.like('038%')
    ){ return 'Small Apartment'; }

    if (
        parcelUse.like('08%') ||
        parcelUse.like('2808') ||
        parcelUse.like('7200') ||
        parcelUse.like('7210') ||
        parcelUse.like('7230') ||
        parcelUse.like('7231') ||
        parcelUse.like('7240') ||
        parcelUse.like('873%') ||
        parcelUse.like('874%') ||
        parcelUse.like('875%') ||
        parcelUse.like('878%')
    ){ return 'Manufactured Home'; }

    if (
        parcelUse.like('04%') ||
        parcelUse.like('05%') ||
        parcelUse.like('2804') ||
        parcelUse.like('2805')
    ){ return 'Hotel/Motel'; }

    if (
        parcelUse.like('06%') ||
        parcelUse.like('2806')
    ){ return 'Resort'; }

    if (
        parcelUse.like('27%') ||
        parcelUse.like('2827') ||
        parcelUse.like('916%')
    ){ return 'Club/Lodge'; }

    if (
        parcelUse.like('24%') ||
        parcelUse.like('2824')
    ){ return 'Golf Course'; }

    if (
        parcelUse.like('23%') ||
        parcelUse.like('903%') ||
        parcelUse.like('904%') ||
        parcelUse.like('2823')
    ){ return 'Cemetery/Service'; }

    if (
        parcelUse.like('21%') ||
        parcelUse.like('19%') ||
        parcelUse.like('900%') ||
        parcelUse.like('901%') ||
        parcelUse.like('902%') ||
        parcelUse.like('2819%') ||
        parcelUse.like('2821%') ||
        parcelUse.like('2833%') ||
        parcelUse.like('89%6')
    ){ return 'Hospital/Care Facility'; }

    if (
        parcelUse.like('113%')
    ){ return 'Strip Mall'; }

    if (
        parcelUse.like('148%') ||
        parcelUse.like('144%') ||
        parcelUse.like('145%') ||
        parcelUse.like('146%') ||
        parcelUse.like('147%') ||
        parcelUse.like('2814')
    ){ return 'Large Shopping Center'; }

    if (
        parcelUse.like('141%') ||
        parcelUse.like('142%') ||
        parcelUse.like('143%')
    ){ return 'Small Shopping Center'; }

    if (
        parcelUse.like('20%') ||
        parcelUse.like('2820') ||
        parcelUse.like('89%3')
    ){ return 'Food/Beverage'; }

    if (
        parcelUse.like('25%') ||
        parcelUse.like('911%') ||
        parcelUse.like('2825')
    ){ return 'Entertainment'; }

    if (
        parcelUse.like('112%') ||
        parcelUse.like('12%') ||
        parcelUse.like('2812') ||
        parcelUse.like('89%2')
    ){ return 'Store'; }

    if (
        parcelUse.like('115%') ||
        parcelUse.like('13%') ||
        parcelUse.like('2813')
    ){ return 'Department Store'; }

    if (
        parcelUse.like('111%')
    ){ return 'Convenience Market'; }

    if (
        parcelUse.like('114%')
    ){ return 'Supermarket'; }

    if (
        parcelUse.like('15%') ||
        parcelUse.like('16%') ||
        parcelUse.like('2815') ||
        parcelUse.like('7220') ||
        parcelUse.like('7221') ||
        parcelUse.like('89%1') ||
        parcelUse.like('925%')
    ){ return 'Office/Bank'; }

    if (
        parcelUse.like('17%') ||
        parcelUse.like('18%') ||
        parcelUse.like('59%') ||
        parcelUse.like('2817') ||
        parcelUse.like('2818')
    ){ return 'Vehicle Service/Sales Lot'; }

    if (
        parcelUse.like('26%')
    ){ return 'Parking Facility'; }

    if (
        parcelUse.like('945%') ||
        parcelUse.like('955%') ||
        parcelUse.like('965%') ||
        parcelUse.like('975%') ||
        parcelUse.like('985%')
    ){ return 'Park/Recreation'; }

    if (
        parcelUse.like('29%') ||
        parcelUse.like('2829') ||
        parcelUse.like('89%5') ||
        parcelUse.like('912%') ||
        parcelUse.like('929%') ||
        parcelUse.like('949%') ||
        parcelUse.like('959%') ||
        parcelUse.like('969%') ||
        parcelUse.like('979%') ||
        parcelUse.like('989%')
    ){ return 'School'; }

    if (
        parcelUse.like('105%') ||
        parcelUse.like('914%') ||
        parcelUse.like('929%') ||
        parcelUse.like('947%') ||
        parcelUse.like('957%') ||
        parcelUse.like('967%') ||
        parcelUse.like('977%') ||
        parcelUse.like('897%')
    ){ return 'Military/Police/Fire'; }

    if (
        parcelUse.like('30%') ||
        parcelUse.like('37%') ||
        parcelUse.like('093%') ||
        parcelUse.like('2830') ||
        parcelUse.like('2831%') ||
        parcelUse.like('2833%') ||
        parcelUse.like('2837') ||
        parcelUse.like('74%') ||
        parcelUse.like('923%') ||
        parcelUse.like('943%') ||
        parcelUse.like('953%') ||
        parcelUse.like('963%') ||
        parcelUse.like('973%') ||
        parcelUse.like('983%')
    ){ return 'Industrial Facility'; }

    if (
        (parcelUse.like('10%') && !parcelUse.like('105%')) ||
        parcelUse.like('22%') ||
        parcelUse.like('922%') ||
        parcelUse.like('942%') ||
        parcelUse.like('952%') ||
        parcelUse.like('962%') ||
        parcelUse.like('972%') ||
        parcelUse.like('982%') ||
        parcelUse.like('77%') ||
        parcelUse.like('73%') ||
        parcelUse.like('65%') ||
        parcelUse.like('64%') ||
        parcelUse.like('60%') ||
        parcelUse.like('56%') ||
        parcelUse.like('55%') ||
        parcelUse.like('54%') ||
        parcelUse.like('092%') ||
        parcelUse.like('227%') ||
        parcelUse.like('221%') ||
        parcelUse.like('222%') ||
        parcelUse.like('223%') ||
        parcelUse.like('2810') ||
        parcelUse.like('89%7') ||
        parcelUse.like('224%') ||
        parcelUse.like('225%') ||
        parcelUse.like('226%') ||
        parcelUse.like('58%') ||
        parcelUse.like('158%') ||
        parcelUse.like('378%')
    ){ return 'Misc. Commercial'; }

    if (
        parcelUse.like('4%') ||
        parcelUse.like('76%') ||
        parcelUse.like('78%') ||
        parcelUse.like('79%') ||
        parcelUse.like('80%') ||
        parcelUse.like('81%') ||
        parcelUse.like('82%') ||
        parcelUse.like('83%') ||
        parcelUse.like('84%') ||
        parcelUse.like('913%') ||
        parcelUse.like('924%') ||
        parcelUse.like('944%') ||
        parcelUse.like('954%') ||
        parcelUse.like('964%') ||
        parcelUse.like('974%') ||
        parcelUse.like('984%') ||
        parcelUse.like('094%') ||
        parcelUse.like('284%')
    ){ return 'Agriculture'; }

    if (
        parcelUse.like('007%')
    ){ return 'Incomplete Subdivision'; }

    if (
        parcelUse.like('001%') ||
        parcelUse.like('004%') ||
        parcelUse.like('008%')
    ){ return 'Vacant Residence'; }

    if (
        parcelUse.like('002%')
    ){ return 'Vacant Commercial'; }

    if (
        parcelUse.like('003%')
    ){ return 'Vacant Industrial'; }

    if (
        parcelUse.like('970%')
    ){ return 'Vacant Municipal'; }

    if (
        parcelUse.like('960%')
    ){ return 'Vacant County'; }

    if (
        parcelUse.like('950%')
    ){ return 'Vacant State'; }

    if (
        parcelUse.like('940%')
    ){ return 'Vacant Federal'; }

    if (
        parcelUse.like('980%')
    ){ return 'Vacant Indian'; }

    return 'Miscellaneous'
}
