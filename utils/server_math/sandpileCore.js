const StreetNetwork = require("./streetNetwork.js");

class SandpileCore {
    constructor(network, population) {
        this.network = network;
        this.population = [];
        this.populate(this.network.numberOfVertices);
        this.assignNodesRandomly();
    }
}

// when initialized, place each person randomly at some point on the graph
SandpileCore.prototype.assignNodesRandomly = function () {
    for (let i = 0; i < this.population.length; i++) {
        this.assignNodeRandomlyTo(this.population[i]);
    }
}

SandpileCore.prototype.assignNodeRandomlyTo = function (person) {
    const vertexNames = Object.keys(this.network.vertices);
    let l = vertexNames.length;
    // assign position randomly
    person.position = vertexNames[Math.floor(Math.random() * l)];

    // give the node a reference to the person now standing there
    var vcs = this.network.vertices;
    var assignedNode = vcs[person.position];
    assignedNode.inhabitants.push(person.index);
}

SandpileCore.prototype.chooseNodeFor = function (person, v) {
    person.position = v;
    this.network.vertices[v].inhabitants.push(person.index);
}

SandpileCore.prototype.decideAllPeople = function () {
    var decisions = [];
    for (var i = 0; i < population.length; i++) {
        decisions.push(this.decidePerson(population[i]));
    }
    return decisions;
}

SandpileCore.prototype.decidePerson = function (person) {
    if (Math.random() < person.chanceOfMoving) {
        // console.log(`person ${person.index} would like to move.`);
        return true;
    } else {
        return false;
    }
}

SandpileCore.prototype.detachPerson = function (person) {
    const v = person.position.slice();
    person.position = null;
    let peopleWith = this.network.vertices[v].inhabitants;
    let ind = peopleWith.indexOf(person.index);
    // remove reference to the person who once stood there
    peopleWith.splice(ind, 1);
}

SandpileCore.prototype.populate = function (n) {
    this.population = [];
    var person = {
        index: 0,
        position: null,
        chanceOfMoving: .1,
    };
    for (let i = 0; i < n; i++) {
        this.population.push({ ...person, index: i });
    }
    return this.population;
};

SandpileCore.prototype.sendPersonAlongRandomWay = function (person) {
    // place person randomly if not assigned
    if (!(person.position)) {
        this.assignNodeTo(person);
        return person.position;
    }

    // If the person stands at an existing location, find all out-neighbors of the person's vertex
    var currentPos = person.position;
    var outNeighbors = this.network.edges[currentPos];
    var neighborList = Object.keys(outNeighbors);
    var l = neighborList.length;

    // If this intersection has no neighbors, do nothing
    if (l == 0) return;

    // Otherwise, pick one
    var v = neighborList[Math.floor(Math.random() * l)];

    // Remove old position
    this.detachPerson(person);

    // Assign new position
    this.chooseNodeFor(person, v);

    return person.position;
}

SandpileCore.prototype.sendPopulationAlongWays = function () {
    // decide if each person wants to wander
    var decisions = this.decideAllPeople();
    for (let i = 0; i < decisions.length; i++) {
        if (decisions[i]) this.sendPersonAlongRandomWay(this.population[i]);
    }
}

SandpileCore.prototype.takeOffOverflowAtNode = function (v, threshold) {
    if (!threshold) threshold = 0;
    var outNeighbors = Object.keys(this.network.edges[v]);
    var numberOfNeighbors = outNeighbors.length;
    var inhabs = this.network.vertices[v].inhabitants;
    if (inhabs.length >= numberOfNeighbors + threshold) {
        for (let i = 0; i < numberOfNeighbors; i++) {
            // send the person at index 0 to the ith neighbor
            var nextTraveler = this.population[inhabs[0]];
            this.detachPerson(nextTraveler);
            this.chooseNodeFor(nextTraveler, outNeighbors[i]);
        }
    }
}

SandpileCore.prototype.takeOffOverflowAtAllNodes = function (threshold) {
    for (let v in this.network.vertices) {
        this.takeOffOverflowAtNode(v, threshold);
    }
}

module.exports = SandpileCore;