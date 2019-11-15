var zoomLevel = 16;
var maxZoom = 18;
var plazaCatalunya = new L.LatLng(41.3870154, 2.1700471);

var map = L.map('mapid').setView(plazaCatalunya, zoomLevel);

// Capas base
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors',
    minZoom: 10,
    maxZoom: maxZoom
}).addTo(map);

var popup = L.popup();
var marker = L.marker();

function onMapClick(e) {
    map.setView(e.latlng, maxZoom);
    marker.setLatLng(e.latlng).addTo(map);
    marker.bindPopup(`<h6 class="h6"><b>Mis coordenadas son:</b></h6><br> Lat:${e.latlng.lat}, Long:${e.latlng.lng}`).openPopup();
}

map.on('click', onMapClick);