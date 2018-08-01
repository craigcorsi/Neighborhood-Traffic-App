const Graph = require("./graph.js");

const intersections = {
    "CM1": {"coordinates": [22, 22]},
    "CM2": {"coordinates": [22, 23]},
    "CM3": {"coordinates": [22, 24]},
    "M181_4": {"coordinates": [23, 23]}
};

const roads = {
    "Chudy1": {"source": "CM1", "sink": "CM2"},
    "Chudy2": {"source": "CM2", "sink": "CM3"},
    "Main1": {"source": "CM2", "sink": "M181_4"},
    "Main1_rev": {"source": "M181_4", "sink": "CM2"}
};

class StreetNetwork extends Graph {
    constructor (intersections, roads) {
        super();
        for (let i in intersections) {
            this.addVertex(i);
            this.vertices[i].coordinates = intersections[i]["coordinates"];
        }
        for (let j in roads) {
            var v = roads[j].source;
            var w = roads[j].sink;
            this.addEdge(v, w);
            this.edges[v][w].name = j;
        }
    }
}

module.exports = StreetNetwork;

console.log(new StreetNetwork(intersections, roads));