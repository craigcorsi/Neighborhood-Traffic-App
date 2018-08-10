var text, parser, xmlDoc;
var fs = require("fs");
const cheerio = require('cheerio');

var StreetNetwork = require("../math/streetNetwork.js");
var SandpileCore = require("../math/sandpileCore.js");

text = fs.readFileSync("../temp_db/lombardStreet.osm");
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

$('way').each(function(i, element){
    let isRoad = false;

    $('tag').each(function(j, elt){
        if ($(this).attr('k') == 'highway') {
            counter++;
        }
    });
});

console.log(counter);

// console.log(intersections);