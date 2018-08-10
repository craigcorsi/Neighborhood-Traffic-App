const StreetNetwork = require("./streetNetwork.js");

const intersections = {
    "CM1": { "coordinates": [150, 150] },
    "CM2": { "coordinates": [150, 200] },
    "CM3": { "coordinates": [150, 250] },
    "CM4": { "coordinates": [150, 300] },
    "M181_2": { "coordinates": [100, 200] },
    "M181_4": { "coordinates": [200, 200] },
    "M90_2": { "coordinates": [100, 250] },
    "M90_4": { "coordinates": [200, 250] },
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
        group.push({ ...person, index: i });
    }
    return group;
}
const population = generatePopulation(10);










class SandpileCore {
    constructor(network, population) {
        this.network = network;
        this.population = population;
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
        console.log(`person ${person.index} would like to move.`);
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

SandpileCore.prototype.takeOffOVerflowAtAllNodes = function (threshold) {
    for (v in this.network.vertices) {
        this.takeOffOverflowAtNode(v, threshold);
    }
}

// create sandpile core
var net1 = new StreetNetwork(intersections, roads);
var sandpile1 = new SandpileCore(net1, population);

// console.log(sandpile1.population[0]);
// console.log(sandpile1.population[1]);
// sandpile1.sendPersonAlongRandomWay(sandpile1.population[0]);
// sandpile1.sendPersonAlongRandomWay(sandpile1.population[1]);
// console.log(sandpile1.population[0]);
// console.log(sandpile1.population[1]);

// console.log(sandpile1.population);
// sandpile1.sendPopulationAlongWays();
// console.log(sandpile1.population);

// compare at all vertices where there are more inhabitants than out-neighboring nodes

function printPeople() {
    console.log(JSON.stringify(Object.keys(sandpile1.network.vertices).map(function (v) {
        return [
            sandpile1.network.vertices[v].inhabitants.length,
            Object.keys(sandpile1.network.edges[v]).length
        ];
    })));
}

printPeople();
sandpile1.takeOffOVerflowAtAllNodes();
printPeople();
sandpile1.takeOffOVerflowAtAllNodes();
printPeople();
sandpile1.takeOffOVerflowAtAllNodes();
printPeople();

// console.log(JSON.stringify(sandpile1.decideAllPeople(), null, 2));


module.exports = SandpileCore;