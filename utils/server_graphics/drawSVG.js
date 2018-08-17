const fs = require("fs");

// returns a window with a document and an svg root node
const window = require('svgdom');
const SVG = require('svg.js')(window);
const document = window.document;


// var StreetNetwork = require("../server_math/streetNetwork.js");
var SandpileCore = require("../server_math/sandpileCore.js");

function drawSVG(network) {
    var sandpile = new SandpileCore(network);

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
    draw.rect(600, 600).fill('#ddd');

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
            var od = nodes[v]["out-degree"];
            var pop = nodes[v]["inhabitants"].length;
            // color is RED if there are too many people at one vertex, otherwise somewhere between blue and brown
            var red = (pop >= od) ? 255 : Math.round(150 * ((pop + 1) / (od + 1)));
            var green = (pop >= od) ? 0 : 100;
            var blue = (pop >= od) ? 0 : Math.round(255 - 255 * ((pop + 1) / (od + 1)));
        symbol.rect(10,10)
            .fill(`rgb(${red}, ${green}, ${blue})`);
        var coords = nodes[v].coordinates;
        var use = draw.use(symbol)
        .attr("netref", v)
        .move(coords[0], coords[1]);

        sandpile.network.vertices[v].svgjsID = symbol.attr("id");
        // console.log(`a graph node was created with value rgb(${red}, ${green}, ${blue})`)
    }

    //print svg
    var image = draw.svg();
    return [sandpile, image];
}

module.exports = drawSVG;

// rgb(0, 100, 255) is unpopulated
// rgb(150, 100, 0) is more populated
// rgb(255, 0, 0) is overpopulated

// If the capacity is c and the number of people is d, then
// color should by rgb(150, 200 - 100*d/(c-1), 255 - 255*d/(c-1)) if d < c and rgb(255, 0, 0) if d > c-1