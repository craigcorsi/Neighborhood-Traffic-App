const Graph = require("./graph.js");

class StreetNetwork extends Graph {
    constructor (intersections, roads) {
        super();
        for (let i in intersections) {
            this.addVertex(i);
            this.vertices[i].coordinates = intersections[i]["coordinates"];
        }
        for (let j in roads) {
            var v = roads[j]["source"];
            var w = roads[j]["sink"];
            // console.log(`\n\n${JSON.stringify(roads[j], null, 2)}\n\n`);
            this.addEdge(v, w);
            this.edges[v][w].name = j;
        }
    }
}

module.exports = StreetNetwork;