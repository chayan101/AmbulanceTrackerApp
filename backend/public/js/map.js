let map;
var lat = 26.1878, lng = 91.6916;
// var socket = io.connect('http://localhost:3000');
// socket.on("getLatLng",function(data){
// 	lat = data[0];
// 	lng = data[1];
// 	alert(lat + " " + lng);
// })

function initMap() {
	var coord = { lat: lat, lng: lng };
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 25,
	  center: coord,
	});

	const marker = new google.maps.Marker({
	  position: coord,
	  map: map,
	  icon: {
		path: google.maps.SymbolPath.CIRCLE,
		scale: 10,
		fillOpacity: 1,
		strokeWeight: 2,
		fillColor: '#5384ED',
		strokeColor: '#ffffff',
  		}
	});
}

var latitude1 = 39.46;
var longitude1 = -0.36;
var latitude2 = 40.40;
var longitude2 = -3.68;
	// alert(distance); 
function calcDistance(p1, p2) {
    var d = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    alert(d);           
}
calcDistance(new google.maps.LatLng(latitude1, longitude1),new google.maps.LatLng(latitude2, longitude2))