const Graph = require("./graph.js");

const intersections = {
    "CM1": {"coordinates": [22, 22]},
    "CM2": {"coordinates": [22, 23]},
    "CM3": {"coordinates": [22, 24]},
    "CM4": {"coordinates": [22, 25]},
    "M181_2": {"coordinates": [21, 23]},
    "M181_4": {"coordinates": [23, 23]},
    "M90_2": {"coordinates": [21, 24]},
    "M90_4": {"coordinates": [23, 24]},
};

const roads = {
    "ChudyN1": {"source": "CM1", "sink": "CM2"},
    "ChudyN2": {"source": "CM2", "sink": "CM3"},
    "ChudyN3": {"source": "CM3", "sink": "CM4"},
    "MainE1": {"source": "CM2", "sink": "M181_2"},
    "MainW1": {"source": "M181_2", "sink": "CM2"},
    "MainW2": {"source": "CM2", "sink": "M181_4"},
    "MainE2": {"source": "M181_4", "sink": "CM2"},
    "StateE1": {"source": "CM3", "sink": "M90_2"},
    "StateW1": {"source": "M90_2", "sink": "CM3"},
    "StateW2": {"source": "CM3", "sink": "M90_4"},
    "StateE2": {"source": "M90_4", "sink": "CM3"},
    "ColbyNW1": {"source": "CM1", "sink": "M181_4"}
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