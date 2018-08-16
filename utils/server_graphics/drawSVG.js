const fs = require("fs");

// returns a window with a document and an svg root node
const window = require('svgdom');
const SVG = require('svg.js')(window);
const document = window.document;



// var StreetNetwork = require("../server_math/streetNetwork.js");
var SandpileCore = require("../server_math/sandpileCore.js");

function drawSVG(network) {
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
    const people = generatePopulation(30);

    var sandpile = new SandpileCore(network, people);

    console.log("how about this far?");

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
    draw.rect(500, 500).fill('#ddd');

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
            var line = draw.line(coords1[0] + 5, coords1[1] + 5, coords2[0] + 5, coords2[1] + 5)
                .fill("black")
                .stroke({ width: 2 });
        }
    }

    // draw intersections on top of roads

    for (let v in nodes) {
        var symbol = draw.symbol();
        symbol.rect(10,10).fill("#c81");
        var coords = nodes[v].coordinates;
        var use = draw.use(symbol).move(coords[0], coords[1]);
    }

    //print svg
    var image = draw.svg();
    // console.log(image);
    return image;
}

module.exports = drawSVG;



/**
 * 
 * 
 * SVG generation
 * 
 * 
 */

// // create svg.js instance
// const draw = SVG(document.documentElement);

// // use svg.js as normal
// draw.rect(500, 500).fill('#ddd');

// // load network from sandpile object
// var ways = sandpile.network.edges;
// var nodes = sandpile.network.vertices;

// // draw roads

// for (let so in ways) {
//     for (let si in ways[so]) {
//         // var source = ways[e].source;
//         // var sink = ways[e].sink;
//         var coords1 = nodes[so].coordinates;
//         var coords2 = nodes[si].coordinates;
//         var line = draw.line(coords1[0] + 10, coords1[1] + 10, coords2[0] + 10, coords2[1] + 10)
//             .fill("black")
//             .stroke({ width: 5 });
//     }
// }

// // draw intersections on top of roads

// for (let v in nodes) {
//     var symbol = draw.symbol();
//     symbol.rect(20, 20).fill("#f09");
//     var coords = nodes[v].coordinates;
//     var use = draw.use(symbol).move(coords[0], coords[1]);
// }

// //print svg
// console.log(draw.svg());
// fs.writeFile("../temp_images/nicolletIsland.svg", draw.svg(), function (error) {
//     if (error) return console.log(error);
//     console.log("file written!");
// });