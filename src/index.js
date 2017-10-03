const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiY21jY2FydGh5MTUiLCJhIjoiY2o4YnFiN3RyMDBuNjJ3c2Y4dzhkMnIzNyJ9.ebxoBjxotfIr5-5EIsZ1hA';

const map = new mapboxgl.Map({
  container: "map1",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // other styles: light-v9, dark-v9, satellite-streets-v10, satellite-v9
});
