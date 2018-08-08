const StreetNetwork = require("./streetNetwork.js");

const intersections = {
    "CM1": { "coordinates": [22, 22] },
    "CM2": { "coordinates": [22, 23] },
    "CM3": { "coordinates": [22, 24] },
    "CM4": { "coordinates": [22, 25] },
    "M181_2": { "coordinates": [21, 23] },
    "M181_4": { "coordinates": [23, 23] },
    "M90_2": { "coordinates": [21, 24] },
    "M90_4": { "coordinates": [23, 24] },
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

class SandpileCore {
    constructor(network, population) {
        this.network = network;
        this.population = population;
        this.assignNodes();
    }
}

// when initialized, place each person at some point on the graph
SandpileCore.prototype.assignNodes = function() {
    let l = Object.keys(this.network.vertices).length;
    for (let i=0; i < this.population.length; i++) {
        console.log(i);
        // give each person a reference to their nodes
        this.population[i].position = Math.floor(Math.random() * l);
        // give each node a reference to the people standing there
        var assignedNode = this.network.vertices[Object.keys(this.network.vertices)[this.population[i].position]];
        assignedNode.inhabitants.push(i);
    }
}

SandpileCore.prototype.decide = function(person) {
    if (Math.random() < person.chanceOfMoving) {
        console.log(`person ${person.index} would like to move.`);
        return true;
    } else {
        return false;
    }
}

SandpileCore.prototype.decideAll = function() {
    var decisions = [];
    for (var i = 0; i < population.length; i++) {
        decisions.push(this.decide(population[i]));
    }
    return decisions;
}

// generate population
var person = {
    index: 0,
    position: null,
    chanceOfMoving: .1,
};
var population = [];
for (let i = 0; i < 10; i++) {
    population.push({...person, index: i});
}

// create sandpile core
var net1 = new StreetNetwork(intersections, roads);
var sandpile1 = new SandpileCore(net1, population);


console.log(JSON.stringify(sandpile1, null, 2));
console.log(JSON.stringify(sandpile1.decideAll(), null, 2));