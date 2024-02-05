// This is all you.
"use strict";

function initMap() {
    const myLatLng = {
        lat: 45.8046875,
        lng: 15.13181209564209,
    };
    const map = new google.maps.Map(document.getElementById("gmp-map"), {
        zoom: 14,
        center: myLatLng,
        fullscreenControl: false,
        zoomControl: true,
        streetViewControl: false,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "My location",
    });
}
