
// function getLocation(){
//           navigator.geolocation.getCurrentPosition(function (pos) {
//               var lat = pos.coords.latitude;
//               var lng = pos.coords.longitude;
//               if (lat == null) {
//                   alert("GPS not activated!");
//               } else {
//                   alert("Latitude: "+ lat + " , Longitude: " + lng );
//               }
//           });
// }

function fetchdata(){
    $.ajax({
      type: "GET",
      url: "/driver/check",
      data: "hello",
      success: function (data) {
         // location.reload()
        // alert("done");
        if(data.message === true){
          location.reload();
        }
        console.log(data.message);
      },
      complete:function(data){
        setTimeout(fetchdata,1000);
      }

    });
  }


$(document).ready(function(){
 setTimeout(fetchdata,1000);
});


 // getLocation();
