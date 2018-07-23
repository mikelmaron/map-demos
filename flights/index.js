const fs = require("fs");
const request = require('request');
const turf = require('@turf/turf');

var pairs = JSON.parse( fs.readFileSync("pairs.json"));
var geocodes = JSON.parse( fs.readFileSync("airport-codes-hash.json"));
var flights = {'type':'FeatureCollection','features':[]};

pairs.forEach(function(pair) {
  var city_pair = pair['City pair'].split(':');
  if (geocodes[ city_pair[0] ] && geocodes[ city_pair[1]] ) {
    var start = turf.point( geocodes[city_pair[0]].coordinates.split(',') );
    var end = turf.point( geocodes[city_pair[1]].coordinates.split(',') );
    var greatCircle = turf.greatCircle(start, end, 
       {'properties': {'name': pair['City pair'], 
                       'flights':parseInt(pair["Flights (#)"]), 
                       'flights_sqrt':Math.sqrt(parseInt(pair["Flights (#)"])) }}
    );
    flights.features.push( greatCircle );
  } else {
    console.error( city_pair[0] + " " + city_pair[1] );
  }
  
});

console.log(JSON.stringify(flights));
