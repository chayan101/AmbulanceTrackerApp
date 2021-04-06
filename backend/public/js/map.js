let map;

function initMap() {
// The location of Uluru
const uluru = { lat: 25.605940, lng: 85.074600 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 25,
  center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: uluru,
  map: map,
});
}