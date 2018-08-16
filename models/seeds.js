const locations = [
    "bostonFinancialDistrict",
    "calhounSquare",
    "centralPark",
    "granvilleIsland",
    "landmarkCenterStPaul",
    "lombardStreet",
    "lunaParkConeyIsland",
    "lynlake",
    "nicolletIsland",
    "nottingHill",
    "timesSquare"
];

const descriptions = [
    "Financial District, Boston, Massachusetts",
    "Calhoun Square (Uptown), Minneapolis, Minnesota",
    "Central Park, New York, New York",
    "Granville Island, Vancouver, British Columbia, Canada",
    "near Landmark Center, St. Paul, Minnesota",
    "near Lombard Street, San Francisco, California",
    "Luna Park at Coney Island, Brooklyn, New York",
    "LynLake neighborhood, Minneapolis, Minnesota",
    "Nicollet Island, Minneapolis, Minnesota",
    "Notting Hill, London, United Kingdom",
    "Times Square, New York, New York"
]

const SEEDS = [];

for (let i = 0; i < locations.length; i++) {
    SEEDS.push(
        {
            mapName: locations[i],
            description: descriptions[i],
            applet_data: JSON.stringify(require(`../server_db/json/${locations[i]}.json`)),
        }
    );
};

module.exports = SEEDS;