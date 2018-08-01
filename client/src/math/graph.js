class Graph {
    constructor() {
        this.vertices = {};
        this.edges = {};
        this.numberOfVertices = 0;
        this.numberOfEdges = 0;
    }
}

Graph.prototype.addVertex = function(v) {
    if (v in this.vertices) {
        console.log(`The vertex ${v} has already been added.\n`)
        return this; 
    }
    this.vertices[v] = {
        "in-degree": 0,
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

// var t3 = new Graph();
// t3 = t3.addVertex(1).addVertex(2).addVertex(3)
// .addEdge(1,2).addEdge(2,3).addEdge(1,3);

// console.log(t3);


// var c3 = new Graph();
// c3 = c3.addVertex(1).addVertex(2).addVertex(3)
// .addEdge(1,2).addEdge(2,3).addEdge(3,1);

// console.log(c3);