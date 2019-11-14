var map = null;
var zoomLevel = 16;
var plazaCatalunya = new L.LatLng(41.3870154, 2.1700471);
var balmes16 = new L.LatLng(41.3868561, 2.1661102);


$(document).ready(function() {
    showMap();
});


function showMap() {
    initMap();
    addMarker();
}

function initMap() {
    var tileLayer = createTileLayer();
    var mapOptions = {
        center: plazaCatalunya,
        zoom: zoomLevel,
        layers: [tileLayer]
    };
    map = new L.Map('mapid', mapOptions);
}

function createTileLayer() {
    var tileSourceURL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    var tileSourceOptions = {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
    return new L.TileLayer(tileSourceURL, tileSourceOptions);
}

function addMarker() {
    L.marker(balmes16)
        .on('click', function() {
            centerLeafletMapOnMarker(map, this);
        })
        .addTo(map);
}

function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
}