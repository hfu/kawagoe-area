const tilebelt = require('@mapbox/tilebelt')
const geojsonArea = require('@mapbox/geojson-area')

let g = tilebelt.tileToGeoJSON([1807, 804, 11])
let area = geojsonArea.geometry(g) / 1000000

console.log(`${Math.round(area)} km2`)

