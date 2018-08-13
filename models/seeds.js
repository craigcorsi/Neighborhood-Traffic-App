const locations = [
    "bostonFinancialDistrict",
    "calhounSquare",
    "granvilleIsland",
    "landmarkCenterStPaul",
    "lombardStreet",
    "lunaParkConeyIsland",
    "lynlake",
    "nicolletIsland",
    "nottingHill",
    "timesSquare"
];

const SEEDS = [];

for (let i = 0; i < locations.length; i++) {
    SEEDS.push(
        {
            mapName: locations[i],
            applet_data: JSON.stringify(require(`../server_db/json/${locations[i]}.json`))
        }
    );
};

module.exports = SEEDS;