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



// $('node').each(function(i, element){
//     intersections[`n-${$(this).attr("id")}`] = {
//         "coordinates": [$(this).attr("lat"), $(this).attr("lon")],
//     };
// });

let counter = 0;
console.log(counter);

$('way tag').each(function (i, element) {
    let isRoad = false;
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
        counter++;
    }
});

// console.log(`Counter: ${counter}`);
console.log(roads);
console.log(intersections);