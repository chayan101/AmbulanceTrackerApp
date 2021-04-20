var socket = io.connect('http://localhost:3000');

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

// function fetchdata(){
//     $.ajax({
//       type: "GET",
//       url: "/driver/check",
//       data: "hello",
//       success: function (data) {
//          // location.reload()
//         // alert("done");
//         if(data.message === true){
//           location.reload();
//         }
//         console.log(data.message);
//       },
//       complete:function(data){
//         setTimeout(fetchdata,1000);
//       }

//     });
//   }

function start(){
  document.getElementById("flag4").classList.add("d-none");

  document.getElementById("flag3").classList.add("d-none");
  document.getElementById("endride").classList.remove("d-none");
}

function check()
{
  location.reload();
}

function ride()
{ socket.emit('setflag',true);

  document.getElementById("startride").classList.add("d-none");
  document.getElementById("endride").classList.remove("d-none");
}

function call(){
  document.getElementById("flag2").classList.add("d-none");
  document.getElementById("flag3").classList.remove("d-none"); 
}

function changeFlag(){
  socket.emit('setflag',false);
}

//listening for "book" event
socket.on("book",()=>{
  //JavaScript to render the startride button
});



// $(document).ready(function(){
//  setTimeout(fetchdata,1000);
// });


 // getLocation();
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function onSuccess(position) {
  alert('Latitude: '+ position.coords.latitude +'Longitude: '+ position.coords.longitude);
}