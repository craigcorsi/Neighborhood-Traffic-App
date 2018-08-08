svar text, parser, xmlDoc;
var fs = require("fs");
const cheerio = require('cheerio');

text = fs.readFileSync("./uptown.xml");
const $ = cheerio.load(text, {
    withDomLvl1: true,
    normalizeWhitespace: true,
    xmlMode: true,
    decodeEntities: true
});

$('node').each(function(i, element){
    console.log(`Intersection ${$(this).attr("id")} is located at latitude ${$(this).attr("lat")} and longitude ${$(this).attr("lon")}.`);
});