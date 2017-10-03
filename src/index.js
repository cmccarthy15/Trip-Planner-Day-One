const mapboxgl = require('mapbox-gl');
const makeMarker = require('./marker.js')
mapboxgl.accessToken = 'pk.eyJ1IjoiY21jY2FydGh5MTUiLCJhIjoiY2o4YnFiN3RyMDBuNjJ3c2Y4dzhkMnIzNyJ9.ebxoBjxotfIr5-5EIsZ1hA';
const accordion = document.getElementsByClassName("accordion")

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/dark-v9' // other styles: light-v9, dark-v9, satellite-streets-v10, satellite-v9
});

makeMarker('activity',[-74.009151, 40.705086]).addTo(map)

