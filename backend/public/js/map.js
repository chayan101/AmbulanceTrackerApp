let map;
var latitude = 26.0813094, longitude = 91.5619965;
var socket = io.connect('http://localhost:3000');
alert(socket);
socket.on('rideInProgress',function(data){
	latitude = data[0];
	longitude = data[1];
	initMap();
	alert(latitude + " " + longitude);
})

function initMap() {
	var coord = { lat: latitude, lng: longitude };
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
