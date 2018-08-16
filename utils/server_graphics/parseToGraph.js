var text, parser, xmlDoc;
var fs = require("fs");
const cheerio = require('cheerio');

var StreetNetwork = require("../server_math/streetNetwork.js");
var SandpileCore = require("../server_math/sandpileCore.js");

const neighborhoodList = [
    'bostonFinancialDistrict',
    'calhounSquare',
    'centralPark',
    'granvilleIsland',
    'landmarkCenterStPaul',
    'lombardStreet',
    'lunaParkConeyIsland',
    'lynlake',
    'nicolletIsland',
    'nottingHill',
    'timesSquare'
];

for (let i=0; i < neighborhoodList.length; i++) {
    text = fs.readFileSync(`../../server_db/osm/${neighborhoodList[i]}.osm`);
    const $ = cheerio.load(text, {
        withDomLvl1: true,
        normalizeWhitespace: true,
        xmlMode: true,
        decodeEntities: true
    });

    var intersections = {};
    var roads = {};

    // generate population
    var person = {
        index: 0,
        position: null,
        chanceOfMoving: .1,
    };
    function generatePopulation(n) {
        var group = [];
        for (let i = 0; i < n; i++) {
            group.push({ ...person, index: i });
        }
        return group;
    }
    const population = generatePopulation(20);

    const rescaleCoordinates = function(bounds, coords) {
        // console.log(coords["x"], coords["y"], bounds["minlon"], bounds["maxlon"], bounds["minlat"], bounds["maxlat"]);
        let newx = 500 * ((coords["x"] - bounds["minlon"]) / (bounds["maxlon"] - bounds["minlon"]));
        newx = Math.max(0, Math.min(500, newx));
        let newy = 500 * ((coords["y"] - bounds["minlat"]) / (bounds["maxlat"] - bounds["minlat"]));
        newy = Math.max(0, Math.min(500, newy));
        newy = 500 - newy;
        return [newx, newy];
    }

    // $('node').each(function(i, element){
    //     intersections[`n-${$(this).attr("id")}`] = {
    //         "coordinates": [$(this).attr("lat"), $(this).attr("lon")],
    //     };
    // });

    var bounds;

    $('bounds').each(function(i, element){
        bounds = {
            minlon: parseFloat($(this).attr("minlon")),
            minlat: parseFloat($(this).attr("minlat")),
            maxlon: parseFloat($(this).attr("maxlon")),
            maxlat: parseFloat($(this).attr("maxlat"))
        }

        // for each coordinate pair (x,y) we have   minlat < x < maxlat   and    minlon < y < maxlon
        // the corresponding point when minlat = minlon = 0 and maxlat = maxlon = 1000 is
        // newx = 1000*((x - minlat)/(maxlat - minlat)
        // newy = 1000*((y - minlon)/(maxlon - minlon)
    });

    $('way tag').each(function (i, element) {
        if ($(this).attr("k") == "highway") {
            // console.log($(this).parent().find("nd"));
            $(this).parent().find("nd").each(function(j, elt){
                var v = $(this).attr("ref");
                intersections[v] = {}

                if (j == $(this).parent().find("nd").length - 1) {
                } else {
                    var w = $(this).next().attr("ref");

                    var edgeName = $(this).parent().attr("id") + "-" + j;
                    if (!(edgeName in roads)) {
                        roads[edgeName] = {
                            "source": v,
                            "sink": w
                        };
                    }

                    var reverseEdge = $(this).parent().attr("id") + "-" + j + "-r";
                    if (!(reverseEdge in roads)) {
                        roads[reverseEdge] = {
                            "source": w,
                            "sink": v
                        };
                    }
                }

            });
        }

    });

    $('node').each(function(i, element){
        const id = $(this).attr("id");
        if (id in intersections) {
            var coords = {
                "x": parseFloat($(this).attr("lon")),
                "y": parseFloat($(this).attr("lat"))
            }
            var scaledCoords = rescaleCoordinates(bounds, coords);
            intersections[id].coordinates = [scaledCoords[0], scaledCoords[1]];
        }
    });

    var network = new StreetNetwork(intersections, roads);
    // var sandpile = new SandpileCore(network, population);

    // The network is the least information needed to recreate the svg file
    let nbdData = JSON.stringify(network);

    const target = fs.writeFileSync(`../../server_db/json/${neighborhoodList[i]}.json`, nbdData, function(error){
        console.log(error);
    });

    console.log(`json ${i + 1} of ${neighborhoodList.length} written!`)
}

console.log("json written!");