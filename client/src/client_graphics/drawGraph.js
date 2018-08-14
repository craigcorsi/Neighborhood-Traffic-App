const fs = require("fs");

// returns a window with a document and an svg root node
const window   = require('svgdom');
const SVG      = require('svg.js')(window);
const document = window.document;



var StreetNetwork = require("../math/streetNetwork.js");
var SandpileCore = require("../math/sandpileCore.js");
var sandpile = require("./parseToGraph.js");

const intersections = {
    "CM1": { "coordinates": [150, 150] },
    "CM2": { "coordinates": [150, 250] },
    "CM3": { "coordinates": [150, 350] },
    "CM4": { "coordinates": [150, 450] },
    "M181_2": { "coordinates": [50, 250] },
    "M181_4": { "coordinates": [450, 250] },
    "M90_2": { "coordinates": [50, 350] },
    "M90_4": { "coordinates": [350, 350] },
};

const roads = {
    "ChudyN1": { "source": "CM1", "sink": "CM2" },
    "ChudyN2": { "source": "CM2", "sink": "CM3" },
    "ChudyN3": { "source": "CM3", "sink": "CM4" },
    "MainE1": { "source": "CM2", "sink": "M181_2" },
    "MainW1": { "source": "M181_2", "sink": "CM2" },
    "MainW2": { "source": "CM2", "sink": "M181_4" },
    "MainE2": { "source": "M181_4", "sink": "CM2" },
    "StateE1": { "source": "CM3", "sink": "M90_2" },
    "StateW1": { "source": "M90_2", "sink": "CM3" },
    "StateW2": { "source": "CM3", "sink": "M90_4" },
    "StateE2": { "source": "M90_4", "sink": "CM3" },
    "ColbyNW1": { "source": "CM1", "sink": "M181_4" }
};

// generate population
var person = {
    index: 0,
    position: null,
    chanceOfMoving: .1,
};
function generatePopulation(n) {
    var group = [];
    for (let i = 0; i < n; i++) {
        group.push({...person, index: i});
    }
    return group;
}
const people = generatePopulation(30);





// create sandpile core
// var net1 = new StreetNetwork(intersections, roads);
// var sandpile1 = new SandpileCore(net1, people);

// console.log(JSON.stringify(sandpile1, null, 2));







/**
 * 
 * 
 * SVG generation
 * 
 * 
 */

 // create svg.js instance
const draw = SVG(document.documentElement);

// use svg.js as normal
draw.rect(500,500).fill('#ddd');

// load network from sandpile object
var ways = sandpile.network.edges;
var nodes = sandpile.network.vertices;

// draw roads

for (let so in ways) {
    for (let si in ways[so]) {
        // var source = ways[e].source;
        // var sink = ways[e].sink;
        var coords1 = nodes[so].coordinates;
        var coords2 = nodes[si].coordinates;
        var line = draw.line(coords1[0] + 10, coords1[1] + 10, coords2[0] + 10, coords2[1] + 10)
            .fill("black")
            .stroke({ width: 5 });
    }
}

// draw intersections on top of roads

for (let v in nodes) {
    var symbol = draw.symbol();
    symbol.rect(20,20).fill("#f09");
    var coords = nodes[v].coordinates;
    var use = draw.use(symbol).move(coords[0], coords[1]);
}

//print svg
console.log(draw.svg());
fs.writeFile("../temp_images/nicolletIsland.svg", draw.svg(), function(error){
    if (error) return console.log(error);
    console.log("file written!");
});

// console.log(sandpile);