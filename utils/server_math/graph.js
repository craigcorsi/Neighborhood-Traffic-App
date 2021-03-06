class Graph {
    constructor() {
        this.vertices = {};
        this.edges = {};
        this.numberOfVertices = 0;
        this.numberOfEdges = 0;
    }
}


Graph.prototype.addVertex = function(v) {
    // No duplicate vertices allowed
    if (v in this.vertices) {
        console.log(`The vertex ${v} has already been added.\n`)
        return this; 
    }

    // create new 
    this.vertices[v] = {
        "in-degree": 0,
        "inhabitants": [],
        "name": v,
        "out-degree": 0,
        "weight": 1
    };
    this.edges[v] = {};

    // Update counts
    this.numberOfVertices++;

    return this;
}

Graph.prototype.addEdge = function(v, w) {
    if (!(v in this.vertices) || !(w in this.vertices)) {
        console.log("An edge cannot be built since the endvertices are not defined.\n");
        return this;
    } else {
        this.edges[v][w] = {
            "id": Math.random().toString(),
            "name": "",
            "pair": [v, w],
            "source": v,
            "sink": w,
            "weight": 1
        };

        // Update counts
        this.numberOfEdges++;
        this.vertices[v]["out-degree"] += 1;
        this.vertices[w]["in-degree"] += 1;

        return this;
    }
}

module.exports = Graph;