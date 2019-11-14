var map = null;
var zoomLevel = 16;
var plazaCatalunya = new L.LatLng(41.3870154, 2.1700471);

$(document).ready(function() {
    showMap();
});


function showMap() {
    initMap();
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