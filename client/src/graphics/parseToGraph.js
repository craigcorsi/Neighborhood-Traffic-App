var text, parser, xmlDoc;
var fs = require("fs");
const cheerio = require('cheerio');

var StreetNetwork = require("../math/streetNetwork.js");
var SandpileCore = require("../math/sandpileCore.js");

text = fs.readFileSync("../temp_db/lynlake.osm");
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
    console.log(coords["x"], coords["y"], bounds["minlat"], bounds["maxlat"], bounds["minlon"], bounds["maxlon"]);
    let newx = 1000 * ((coords["x"] - bounds["minlat"]) / (bounds["maxlat"] - bounds["minlat"]));
    newx = Math.max(0, Math.min(1000, newx));
    let newy = 1000 * ((coords["y"] - bounds["minlon"]) / (bounds["maxlon"] - bounds["minlon"]));
    newy = Math.max(0, Math.min(1000, newy));
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
        minlat: parseFloat($(this).attr("minlat")),
        minlon: parseFloat($(this).attr("minlon")),
        maxlat: parseFloat($(this).attr("maxlat")),
        maxlon: parseFloat($(this).attr("maxlon"))
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


            // console.log($(this).next());
            // console.log(`This node of the way has id ${$(this).attr("ref")}`);


            if (j == $(this).parent().find("nd").length - 1) {
                console.log("Heyo");
            } else {
                var w = $(this).next().attr("ref");
                if (!(v in roads)) {
                    roads[v] = {};
                }
                roads[v][w] = {
                    "source": v,
                    "sink": w
                };
            }

        });
    }

});

$('node').each(function(i, element){
    const id = $(this).attr("id");
    if (id in intersections) {
        var coords = {
            "x": parseFloat($(this).attr("lat")),
            "y": parseFloat($(this).attr("lon"))
        }
        var scaledCoords = rescaleCoordinates(bounds, coords);
        intersections[id].coordinates = [scaledCoords[0], scaledCoords[1]];
    }
});

console.log(roads);
console.log(intersections);
// var network = new StreetNetwork(intersections, roads);
// var sandpile = new SandpileCore(network, population);
// console.log(JSON.stringify(sandpile, null, 2));

// module.exports = sandpile;