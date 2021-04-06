let map;

// function getLocation(){
//           navigator.geolocation.getCurrentPosition(function (pos) {
//               lat = pos.coords.latitude;
//               lng = pos.coords.longitude;
//               if (lat == null) {
//                   alert("GPS not activated!");
//               } else {
//                   alert("Latitude: "+ lat + " , Longitude: " + lng );
//               }
//           });
// }

function initMap() {
	// The location of Uluru
	var lat;
	var lng;
	 navigator.geolocation.getCurrentPosition(function (pos) {
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
        if (lat == null) {
            alert("GPS not activated!");
        } else {
            alert("Latitude: "+ lat + " , Longitude: " + lng );
            const point = { lat: lat, lng: lng };
			// The map, centered at Uluru
			const map = new google.maps.Map(document.getElementById("map"), {
				zoom: 25,
				center: point,
			});
			// The marker, positioned at Uluru
			const marker = new google.maps.Marker({
				position: point,
				map: map,
			});
        }
    });
	console.log(typeof(lat))
	
}