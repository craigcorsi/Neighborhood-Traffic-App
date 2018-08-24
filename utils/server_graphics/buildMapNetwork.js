var text, parser, xmlDoc;
const fs = require("fs");
const cheerio = require('cheerio');

const query_overpass = require("query-overpass");

const StreetNetwork = require("../server_math/streetNetwork.js");
const SandpileCore = require("../server_math/sandpileCore.js");

const rescaleCoordinates = function (bounds, coords) {
    // console.log(coords["x"], coords["y"], bounds["minlon"], bounds["maxlon"], bounds["minlat"], bounds["maxlat"]);
    let newx = 500 * ((coords["x"] - bounds["minlon"]) / (bounds["maxlon"] - bounds["minlon"]));
    newx = Math.max(0, Math.min(500, newx));
    let newy = 500 * ((coords["y"] - bounds["minlat"]) / (bounds["maxlat"] - bounds["minlat"]));
    newy = Math.max(0, Math.min(500, newy));
    newy = 500 - newy;
    return [newx, newy];
}

function formatGraphObject(mapJSON, bounds) {
    for (let i = 0; i < mapJSON.features.length; i++) {
        var item = mapJSON.features[i];
        if (item.properties.type == "way" && item.properties.tags.highway) {
        } else if (item.properties.type == "node") {
        } else {
            console.log("NOTHING");
        }

    }
}

function fetchMapByBoundingBox(minLat, minLong, maxLat, maxLong) {
    console.log(minLat, minLong, maxLat, maxLong);
    var queryString = `
    way(${minLat}, ${minLong}, ${maxLat}, ${maxLong})[highway];
    out geom;
    
    node(w);
    out;
    `;

    var map = query_overpass(queryString, function (error, data) {
        if (error) console.log(error);
        console.log(JSON.stringify(data, null, 2));
        formatGraphObject(data, [minLat, minLong, maxLat, maxLong]);
    });

}

function fetchMapbyPointAndRadius(lat, long, radius) {
    var minLat = lat - radius;
    var minLong = long - radius;
    var maxLat = lat + radius;
    var maxLong = long + radius;

    return fetchMapByBoundingBox(minLat, minLong, maxLat, maxLong);
}

// fetchMapByBoundingBox(48.5657094, 13.447, 48.568, 13.4501676);

fetchMapbyPointAndRadius(48.5668547, 13.4485838, 0.0015838);