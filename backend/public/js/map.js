let map;
var lat = 26.0813094, lng = 91.5619965;
var socket = io.connect('http://localhost:3000');
alert(socket);
socket.on('rideInProgress',function(data){
	lat = data[0];
	lng = data[1];
	alert(lat + " " + lng);
})

function initMap() {
	var coord = { lat: lat, lng: lng };
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 18,
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
