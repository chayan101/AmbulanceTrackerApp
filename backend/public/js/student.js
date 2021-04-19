var book = document.getElementById("bookButton");
var socket;

book.addEventListener("click", ()=>{
   socket = io.connect('http://localhost:3000');

   socket.emit("book");
   //add JavaScript here for displaying msg and call button
});
